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
import { useState } from "react";
import { Field } from "@/components/Field/field";
import ACAButton from "@/components/ACAButton/ACAButton";

export const CreateProfileForm = () => {
  const [error, setError] = useState<string | undefined>("");

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
    try {
      setError(undefined);
      // Add your login logic here
      console.log(values);
    } catch (error) {
      setError("حدث خطأ أثناء تسجيل الدخول");
    }
  };

  const countriesJson = countries;
  const handleChange = (e: { target: { value: string } }) => {
    const selectedCountry = countriesJson.find(
      (country) => country.code === e.target.value
    );
    console.log("Selected country:", selectedCountry);
  };

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
              />
            </Field>
          </Flex>

          <Field label=" اسم المستخدم" error={errors.username?.message}>
            <Input
              fontSize="20px"
              paddingX="10px"
              borderColor="#783BA2"
              width="500px"
              type="text"
              {...register("username")}
            />
          </Field>

          <Field label=" بلد الإقامة" error={errors.country?.message}>
            <select
              {...register("country")}
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
          <Link href="/signup">
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
