import { Flex } from "@chakra-ui/react";
import { CheckCircledIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message: string|undefined;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <Flex width="full" align="center" justify="center" color="green">
            <CheckCircledIcon className="h-4 w-4"/>
            <p>{message}</p>
        </Flex>
        
    )
}