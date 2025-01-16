"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import SignUp from "@/icons/SignUp";
import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema";
import { useTransition, useState } from "react";
import { Field } from "@/components/Field/field";
import ACAButton from "@/components/ACAButton/ACAButton";
import loginImage from "@/assets/login.png";
import Image from "next/image";
import { login } from "@/actions/login";
import { FormError } from "@/components/setError/form-error";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      try {
        setError("");
        setSuccess("");

        const result = await login(values);

        if (result?.error) {
          setError(result.error);
        } else {
          setSuccess("Login successful!");
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setError("An unexpected error occurred during login");
      }
    });
  };

  return (
    <Flex
      direction={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "row",
      }}
    >
      <CardWrapper headerLable="تسجيل الدخول">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Flex gap="3" direction="column" paddingX="90px">
            <Field
              label="اسم المستخدم أو البريد الإلكتروني*"
              error={form.formState.errors.email?.message}
            >
              <Input
                fontSize="20px"
                paddingX="10px"
                borderColor="#783BA2"
                width="400px"
                type="text"
                disabled={isPending}
                {...form.register("email")}
              />
            </Field>
            <Field
              label="كلمة المرور*"
              error={form.formState.errors.password?.message}
            >
              <Input
                fontSize="20px"
                paddingX="10px"
                borderColor="#783BA2"
                width="400px"
                type="password"
                disabled={isPending}
                {...form.register("password")}
              />
            </Field>
            <Link color="#783BA2" href="">
              نسيت كلمة المرور؟
            </Link>
            <Flex gap="2">
              <Checkbox
                variant="solid"
                colorPalette="purple"
                shadow="0px 4px 4px 0px #00000040"
              />
              <Text color="#783BA2">البقاء متصلاً</Text>
            </Flex>
          </Flex>

          <Flex gap="4" width="100%" justify="center" marginTop="20px">
            <ACAButton
              text="التالي"
              bg="cyan"
              type="submit"
            />
            <Link href="/auth/signup">
              <ACAButton
                text="إنشاء حساب جديد"
                bg="tomato"
                type="button"
                icon={<SignUp />}
              />
            </Link>
          </Flex>
          {error && <FormError message={error} />}
          {success && <div className="text-green-500">{success}</div>}
        </form>
      </CardWrapper>

      <Box>
        <Image alt="" src={(loginImage).src} width={582} height={100} />
      </Box>
    </Flex>
  );
};
