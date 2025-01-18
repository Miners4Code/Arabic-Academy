import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"
type Props = {
    text: string,
    icon: ReactNode
}
const UserDetail: React.FC<Props> = ({ text, icon }) => {
    return (
        <Flex
            alignItems={"center"}
            justifyContent={{
                base: "center",
                lg: "start"
            }}
            gap={"5px"}
        >
            {icon}
            <p>{text}</p>
        </Flex>
    )
}

export default UserDetail
