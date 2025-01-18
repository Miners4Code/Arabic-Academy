"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import LogIn from "@/icons/Login";
import SignUp from "@/icons/SignUp";
import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
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
import { Register } from "@/actions/register";
import { useSignup } from "@/app/context/auth-context";
import { FormError } from "@/components/setError/form-error";

export const CreateProfileForm = () => {
  const router = useRouter();
  const { signupData, setSignupData } = useSignup();
  const [email, setEmail] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
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
    formState: { errors },
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

    if (!signupData) {
      setError("Signup data not found. Please start from the beginning.");
      router.push("/auth/signup");
      return;
    }

    startTransition(() => {
      Register({
        email: signupData.email,
        password: signupData.password,
        confirmPassword: signupData.password,
      }).then((response) => {
        if (response.error) {
          setError(response.error);
        } else {
          Create(values, signupData.email).then((profileResponse) => {
            if (profileResponse.error) {
              setError(profileResponse.error);
            } else if (profileResponse.success) {
              setSuccess(profileResponse.success);
              setSignupData(null);
              router.push("/auth/login");
            }
          });
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
    <Flex 
  width="full"
  justify="center"
  px={{ base: "4", md: "6", lg: "8" }}
>
  <CardWrapper
    headerLable="أنت على بعد خطوة واحدة فقط من الانضمام إلينا!"
    addText="أنشئ ملف التعريف الخاص بك"
    width={{ base: "100%", md: "90%", lg: "80%" }}
  >
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex 
        gap={{ base: "4", md: "5", lg: "6" }}
        direction="column" 
        px={{ base: "4", md: "8", lg: "20" }}
        my={{ base: "6", md: "8", lg: "15" }}
        align="center"
      >
        {/* Container for all form fields to ensure consistent width */}
        <Flex
          direction="column"
          gap={{ base: "4", md: "5", lg: "6" }}
          width={{ base: "full", md: "400px", lg: "500px" }}
        >
          {/* Name Fields Container */}
          <Flex 
            gap={{ base: "3", md: "4" }}
            direction={{ base: "column", md: "row" }}
            width="full"
          >
            <Field 
              label="الاسم الأول" 
              error={errors.firstname?.message}
            >
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width="full"
                type="text"
                {...register("firstname")}
                disabled={isPending}
              />
            </Field>
            
            <Field 
              label="الاسم الثاني" 
              error={errors.secondname?.message}
            >
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width="full"
                type="text"
                {...register("secondname")}
                disabled={isPending}
              />
            </Field>
          </Flex>

          <Field 
            label="اسم المستخدم" 
            error={errors.username?.message}
          >
            <Input
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              px="4"
              borderColor="#783BA2"
              width="full"
              type="text"
              {...register("username")}
              disabled={isPending}
            />
          </Field>

          <Field 
            label="بلد الإقامة" 
            error={errors.country?.message}
          >
            <Box width="full">
              <select
                {...register("country")}
                disabled={isPending}
                onChange={handleChange}
                defaultValue=""
                style={{
                  width: '100%',
                  padding: '8px',
                  textAlign: 'right',
                  color: '#783BA2',
                  borderRadius: '4px',
                  border: '1px solid #783BA2',
                  fontSize: window.innerWidth < 768 ? '16px' : 
                           window.innerWidth < 992 ? '18px' : '20px'
                }}
              >
                <option value="">اختر الدولة</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name} dir="rtl">
                    {country.name}
                  </option>
                ))}
              </select>
            </Box>
          </Field>

          <Field 
            label="" 
            error={errors.privacyPolicy?.message}
          >
            <Flex 
              gap="2" 
              width="full"
              justify="center"
              align="center"
              flexWrap={{ base: "wrap", md: "nowrap" }}
            >
              <Checkbox
                onChange={(e) => {
                  setValue(
                    "privacyPolicy",
                    (e.target as HTMLInputElement).checked
                  );
                }}
                checked={watch("privacyPolicy")}
                variant="solid"
                colorPalette="purple"
                shadow="lg"
              />
              <Text 
                color="#783BA2" 
                borderBottom="1px solid #783BA2"
                fontSize={{ base: "14px", md: "16px" }}
                textAlign="center"
              >
                يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا
              </Text>
            </Flex>
          </Field>
        </Flex>
      </Flex>

      <Flex 
        gap={{ base: "3", md: "4" }}
        width="full" 
        justify="center"
        mt={{ base: "4", md: "5", lg: "6" }}
        mb={{ base: "6", md: "8" }}
        direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Link href="/auth/signup">
          <ACAButton 
            text="رجوع" 
            bg="tomato" 
            icon={<LogIn />}
            
          />
        </Link>
        <ACAButton
          text="إنشاء حسابي"
          bg="cyan"
          type="submit"
          icon={<SignUp />}
          
        />
      </Flex>
    </form>
    {error && <FormError message={error} />}
  </CardWrapper>
</Flex>
  );
};
