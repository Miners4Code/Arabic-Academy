import { Flex, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    text: string,
    icon: ReactNode
}
const ContactItem: React.FC<Props> = ({ text, icon }) => {
    return (
        <Flex alignItems={"center"} gap={"7px"} marginTop={"20px"} fontWeight={{
            base: "400",
            md: "500",
        }}>
            {icon}
            <Text width={"95%"}>{text}</Text>
        </Flex>
    )
}

export default ContactItem
