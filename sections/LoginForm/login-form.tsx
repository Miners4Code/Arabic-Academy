"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import SignUp from "@/icons/SignUp";
import { Box, Flex, Icon, Input, Link, Text } from "@chakra-ui/react";
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
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useRouter } from "next/navigation";
import { FormSuccess } from "@/components/setSuccess/form-Success";
import Signin from "@/icons/signin";
import { useSession } from "next-auth/react";

export const LoginForm = () => {
  const user = useSession();
  const router = useRouter();
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
          setSuccess(" !تم تسجيل الدخول بنجاح");
          router.refresh();
          window.location.href = "/"
          console.log(user)
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setError("حدث خطأ اثناء تسجيل الدخول !");
      }
    });
  };

  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      gap={{ base: "4", md: "6", lg: "8" }}
      align={{ base: "center", lg: "flex-start" }}
      justify="center"
      max-w={{lg:"1285px", md:"660px", base:"300px"}}
      px={{ base: "4", md: "6", lg: "8" }}
      py={{ base: "6", md: "8" }}
    >
      <CardWrapper 
        headerLable="تسجيل الدخول"
        width={{ base: "100%", md: "90%", lg: "50%" }}
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Flex 
            gap="4" 
            direction="column" 
            px={{ base: "4", md: "6", lg: "12" }}
            align={{ base: "center", lg: "flex-start" }}
            w="full"
          >
            <Field
              label="اسم المستخدم أو البريد الإلكتروني*"
              error={form.formState.errors.email?.message}
            >
              <Input
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width={{ base: "full", md: "full" }}
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
                fontSize={{ base: "16px", md: "18px", lg: "20px" }}
                px="4"
                borderColor="#783BA2"
                width={{ base: "full", md: "full" }}
                type="password"
                disabled={isPending}
                {...form.register("password")}
              />
            </Field>

            <Link 
              color="#783BA2" 
              href=""
              alignSelf={{ base: "center", lg: "flex-start" }}
            >
              نسيت كلمة المرور؟
            </Link>

            <Flex 
              gap="2" 
              alignSelf={{ base: "center", lg: "flex-start" }}
            >
              <Checkbox
                variant="solid"
                colorPalette="purple"
                shadow="lg"
              />
              <Text color="#783BA2">البقاء متصلاً</Text>
            </Flex>
          </Flex>

          <Flex 
            gap={{ base: "4", md: "6" }}
            w="full" 
            justify="center"
            align="center"
            mt="6"
            mb="2"
            direction={{ base: "column", lg: "row" }}
          >
            <ACAButton
              text="تسجيل الدخول"
              bg="cyan"
              type="submit"
              icon={<Signin/>}
            ></ACAButton>
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
          {success && <FormSuccess message={success} />}
        </form>
      </CardWrapper>

      <Box 
        w={{ base: "100%", lg: "50%" }}
        maxW={{ base: "400px", md: "500px", lg: "600px" }}
        mx="auto"
      >
        <Image 
          alt="" 
          src={(loginImage).src} 
          width={582} 
          height={100}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Flex>
  );
};