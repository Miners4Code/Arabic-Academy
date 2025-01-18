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
import { useRouter } from "next/navigation";
import ArrowRight from "@/icons/arrow-right";
import { useSignup } from "@/app/context/auth-context";

export const SignupForm = () => {
  const router = useRouter();
  const { setSignupData } = useSignup();
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    setError("");

    setSignupData({
      email: values.email,
      password: values.password,
    });

    router.push(`/auth/create?email=${values.email}`);
  };
  return (
    <Flex
      width="full"
      justify="center"
      px={{ base: "4", md: "6", lg: "8" }}
      py={{ base: "6", md: "8", lg: "10" }}
    >
      <CardWrapper
        headerLable="قم بإنشاء حسابك على الأكاديمية!"
        width={{ base: "100%", md: "90%", lg: "80%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            gap={{ base: "4", md: "5", lg: "6" }}
            direction="column"
            px={{ base: "4", md: "8", lg: "16" }}
            mt={{ base: "6", md: "8", lg: "10" }}
            width="full"
            align="center"
          >
            <Field
              label="اسم المستخدم أو البريد الإلكتروني*"
              error={errors.email?.message}
            >
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width={{ base: "full", md: "400px", lg: "500px" }}
                type="email"
                placeholder="لن نشارك بريدك الإلكتروني أبدًا مع أي شخص"
                _placeholder={{
                  fontSize: { base: "12px", md: "13px", lg: "14px" },
                }}
                {...register("email")}
                disabled={isPending}
              />
            </Field>

            <Field label="كلمة المرور*" error={errors.password?.message}>
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width={{ base: "full", md: "400px", lg: "500px" }}
                type="password"
                placeholder="قم بإنشاء كلمة مرور قوية"
                _placeholder={{
                  fontSize: { base: "12px", md: "13px", lg: "14px" },
                }}
                {...register("password")}
                disabled={isPending}
                onChange={onPasswordChange}
              />
            </Field>

            <Field
              label="تأكيد كلمة المرور*"
              error={errors.confirmPassword?.message}
            >
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width={{ base: "full", md: "400px", lg: "500px" }}
                type="password"
                placeholder="أعد إدخال كلمة المرور الخاصة بك للتأكد من مطابقتها"
                _placeholder={{
                  fontSize: { base: "12px", md: "13px", lg: "14px" },
                }}
                {...register("confirmPassword")}
                disabled={isPending}
                onChange={onConfirmPasswordChange}
              />
            </Field>

            {password !== confirmPassword && (
              <Flex justify="center" width="full">
                <Text
                  color="red.500"
                  fontSize={{ base: "14px", md: "16px" }}
                  textAlign="center"
                >
                  كلمة المرور وتأكيد كلمة المرور غير متطابقتين
                </Text>
              </Flex>
            )}

            {error && (
              <Flex justify="center" width="full">
                <Text
                  color="red.500"
                  fontSize={{ base: "14px", md: "16px" }}
                  textAlign="center"
                >
                  {error}
                </Text>
              </Flex>
            )}
          </Flex>

          <Flex
            gap={{ base: "4", md: "5", lg: "6" }}
            width="full"
            justify="center"
            align="center"
            mt={{ base: "8", md: "12", lg: "15" }}
            direction="column"
          >
            <ACAButton
              text="التالي"
              bg="cyan"
              type="submit"
              disabled={password !== confirmPassword || isPending}
            >
              <ArrowRight />
            </ACAButton>

            <Link
              variant="underline"
              color="#783BA2"
              href="/auth/login"
              borderBottom="1px solid #783BA2"
              paddingBottom={{ base: "3px", md: "4px", lg: "5px" }}
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              _focus={{
                boxShadow: "none",
                outline: "none",
              }}
              _hover={{
                opacity: 0.8,
              }}
            >
              لديك حساب مسبقاً
            </Link>

            {error && (
              <Text fontSize={{ base: "14px", md: "16px" }} textAlign="center">
                {error}
              </Text>
            )}
          </Flex>
        </form>
      </CardWrapper>
    </Flex>
  );
};
