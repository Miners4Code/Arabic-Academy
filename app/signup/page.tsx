import { SignupForm } from "@/sections/SignUp/signup-form";
import { Flex } from "@chakra-ui/react";

const SignupPage = () => {
    return(
        <Flex justify="center" align="center" width="full" height="full" marginTop="100px">
            <SignupForm />
        </Flex>
    )
}

export default SignupPage;