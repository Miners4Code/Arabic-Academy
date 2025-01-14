"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import { Flex, Input, Link, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "@/schema";
import { useState, useTransition } from "react";
import { Field } from "@/components/Field/field";
import ACAButton from "@/components/ACAButton/ACAButton";
import { Register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      Register(values).then((response) => {
        if (response.error) {
          setError(response.error);
        } else if (response.success) {
          setSuccess(response.success);
          router.push(`/auth/create?email=${response.email}`); // Pass email via query
        }
      });
    });
  };
  return (
    <CardWrapper headerLable="قم بإنشاء حسابك على الأكاديمية! ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="3" direction="column" paddingX="65px" marginTop="40px">
          <Field label="اسم المستخدم أو البريد الإلكتروني*" error={errors.email?.message}>
            <Input
              fontSize="20px"
              paddingX="10px"
              borderColor="#783BA2"
              width="500px"
              type="email"
              placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
              _placeholder={{ fontSize: "14px" }}
              {...register("email")}
              disabled={isPending}
            />
          </Field>

          <Field label="كلمة المرور*" error={errors.password?.message}>
            <Input
              fontSize="20px"
              paddingX="10px"
              borderColor="#783BA2"
              width="500px"
              type="password"
              placeholder="قم بإنشاء كلمة مرور قوية"
              _placeholder={{ fontSize: "14px" }}
              {...register("password")}
              disabled={isPending}
            />
          </Field>

          <Field label="تأكيد كلمة المرور*" error={errors.confirmPassword?.message}>
            <Input
              fontSize="20px"
              paddingX="10px"
              borderColor="#783BA2"
              width="500px"
              type="password"
              placeholder="أعد إدخال كلمة المرور الخاصة بك للتأكد من مطابقتها"
              _placeholder={{ fontSize: "14px" }}
              {...register("confirmPassword")}
              disabled={isPending}
            />
          </Field>

          {error && (
            <Flex justify="center">
              <Text color="red.500">{error}</Text>
            </Flex>
          )}
        </Flex>

        <Flex
          gap="4"
          width="100%"
          justify="center"
          align="center"
          marginTop="60px"
          direction="column"
        >
          <ACAButton 
            text="التالي" 
            bg="cyan" 
            type="submit"
          />

          <Link
            variant="underline"
            color="#783BA2"
            href="/auth/login"
            borderBottom="1px solid #783BA2"
            paddingBottom="5px"
            _focus={{
              boxShadow: "none",
              outline: "none",
            }}
          >
            لديك حساب مسبقاً
          </Link>
          <Text>{error || ""}</Text>
          <Text>{success || ""}</Text>
        </Flex>
      </form>
      
    </CardWrapper>
  );
};