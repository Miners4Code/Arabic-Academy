import { Flex, Text } from "@chakra-ui/react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message: string|undefined;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <Flex width="full" align="center" justify="center" color="red">
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <Text paddingRight="3px">{message}</Text>
        </Flex>
        
    )
}