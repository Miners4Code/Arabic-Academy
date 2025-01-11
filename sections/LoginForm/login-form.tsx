"use client";

import { CardWrapper } from "@/components/CardWrapper/card-wrapper";
import LogIn from "@/icons/LogIn"
import SignUp from "@/icons/SignUp"
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema";
import { useState } from "react";
import { Field } from "@/components/Field/field";
import ACAButton from "@/components/ACAButton/ACAButton";
import loginImage from "@/assets/login.png"
import Image from "next/image";


export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      setError(undefined);
      // Add your login logic here
      console.log(values);
    } catch (error) {
      setError("حدث خطأ أثناء تسجيل الدخول");
    }
  };
  return (
    <Flex 
    direction={{
      base: "column-reverse",
      md: "column-reverse",
      lg: "row",
    }}>
    <CardWrapper headerLable="تسجيل الدخول">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="3" direction="column" paddingX="90px">
          {/* Username or Email Field */}
          <Field
            label="اسم المستخدم أو البريد الإلكتروني*"
            error={errors.name?.message}
          >
            <Input fontSize="20px" paddingX="10px" borderColor="#783BA2" width="400px" type="text" {...register("name")} />
          </Field>
          {/* Password Field */}
          <Field label="كلمة المرور*" error={errors.password?.message}>
            <Input fontSize="20px" paddingX="10px" borderColor="#783BA2" width="400px" type="password" {...register("password")} />
          </Field>
          <Link  color="#783BA2" href="">نسيت كلمة المرور؟</Link>
          <Flex gap="2">
            <Checkbox variant="solid" colorPalette="purple" shadow="0px 4px 4px 0px #00000040"/>
            <Text color="#783BA2">البقاء متصلاً</Text>
          </Flex>
        </Flex>
        {/* Submit Button */}
        <Flex gap="4" width="100%" justify="center" marginTop="20px">
          <ACAButton text="تسجيل الدخول" bg="cyan" type="submit" icon={<LogIn />}/>
          <Link href="/signup">
          <ACAButton text="إنشاء حساب جديد" bg="tomato" type="button" icon={<SignUp />}/>
          </Link>
        </Flex>
      </form>
    </CardWrapper>

    <Box>
       <Image alt="" src={(loginImage).src} width={582} height={100}/>
    </Box>
    
    
    </Flex>
  );
};
