"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import LogIn from "@/icons/LogIn";
import SignUp from "@/icons/SignUp";
import { Flex, Input, Link, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import countries from "@/json/countries.json";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProfileSchema } from "@/schema";
import { useEffect, useState, useTransition } from "react";
import { Field } from "@/components/Field/field";
import ACAButton from "@/components/ACAButton/ACAButton";
import { Create } from "@/actions/create";
import { useRouter } from "next/navigation";


export const CreateProfileForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Get email from search params or another source
    const queryParams = new URLSearchParams(window.location.search);
    const emailFromQuery = queryParams.get("email");
    if (!emailFromQuery) {
      setError("Email not provided in query");
    } else {
      setEmail(emailFromQuery);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof CreateProfileSchema>>({
    resolver: zodResolver(CreateProfileSchema),
    defaultValues: {
      firstname: "",
      secondname: "",
      username: "",
      country: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateProfileSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      if (!email) {
        setError("Email is missing");
        return;
      }
      Create(values, email).then((response) => {
        if (response.error) {
          setError(response.error);
        } else if (response.success) {
          setSuccess(response.success);
          router.push("/auth/login");
        }
      });
    });
  };

  const handleChange = (e: { target: { value: string } }) => {
    const selectedCountry = countries.find(
      (country) => country.code === e.target.value
    );
    console.log("Selected country:", selectedCountry);
  };

  if (!email) {
    return <p>Loading...</p>;
  }

  return (
    <CardWrapper
      headerLable="أنت على بعد خطوة واحدة فقط من الانضمام إلينا!"
      addText="أنشئ ملف التعريف الخاص بك"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="3" direction="column" paddingX="90px" marginY="60px">
          <Flex gap="4" direction="row" width="500px">
            <Field label="الاسم الأول" error={errors.firstname?.message}>
              <Input
                fontSize="20px"
                paddingX="10px"
                borderColor="#783BA2"
                width="full"
                type="text"
                {...register("firstname")}
                disabled={isPending}
              />
            </Field>
            <Field label="الاسم الثاني" error={errors.secondname?.message}>
              <Input
                fontSize="20px"
                paddingX="10px"
                borderColor="#783BA2"
                width="full"
                type="text"
                {...register("secondname")}
                disabled={isPending}
              />
            </Field>
          </Flex>

          <Field label="اسم المستخدم" error={errors.username?.message}>
            <Input
              fontSize="20px"
              paddingX="10px"
              borderColor="#783BA2"
              width="500px"
              type="text"
              {...register("username")}
              disabled={isPending}
            />
          </Field>

          <Field label="بلد الإقامة" error={errors.country?.message}>
            <select
              {...register("country")}
              disabled={isPending}
              onChange={handleChange}
              defaultValue=""
              style={{
                width: "500px",
                padding: "8px",
                textAlign: "right",
                color: "#783BA2",
                borderRadius: "4px",
                border: "1px solid #783BA2",
              }}
            >
              <option value="">اختر الدولة</option>
              {countries.map((country) => (
                <option key={country.code} value={country.code} dir="rtl">
                  {country.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="" error={errors.privacyPolicy?.message}>
            <Flex gap="2" width="500px" justify="center">
              <Checkbox
                onChange={(e) => {
                  setValue(
                    "privacyPolicy",
                    (e.target as HTMLInputElement).checked
                  );
                  console.log((e.target as HTMLInputElement).checked);
                }}
                checked={watch("privacyPolicy")}
                variant="solid"
                colorPalette="purple"
                shadow="0px 4px 4px 0px #00000040"
              />
              <Text color="#783BA2" borderBottom="1px solid #783BA2">
                يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا
              </Text>
            </Flex>
          </Field>
        </Flex>
        <Flex gap="4" width="100%" justify="center" marginTop="20px">
          <Link href="/auth/signup">
            <ACAButton text="رجوع" bg="tomato" icon={<LogIn />} />
          </Link>
          <ACAButton
            text="إنشاء حسابي"
            bg="cyan"
            type="submit"
            icon={<SignUp />}
          />
        </Flex>
      </form>
    </CardWrapper>
  );
};
