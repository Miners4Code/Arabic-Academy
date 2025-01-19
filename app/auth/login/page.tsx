import { LoginForm } from "@/sections/LoginForm/login-form";
import { Flex } from "@chakra-ui/react";

const LoginPage = () => {
    return(
        <Flex justify="center" align="center" width="full" height="full" marginTop="100px">
            <LoginForm />
        </Flex>
    )
}

export default LoginPage;