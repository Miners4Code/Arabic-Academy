import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    link: string,
    icon: ReactNode
}
const Link: React.FC<Props> = ({ link, icon }) => {
    return (
        <Flex
            cursor={"pointer"}
            alignItems={"center"}
            justifyContent={{
                base: "center",
                lg: "start"
            }}
            gap={"5px"}
            fontSize={{
                base: "12px",
                md: "15px",
                lg: "17px"
            }}
        >
            <p style={{ fontWeight: "bold" }}>{link}</p>
            {icon}
        </Flex>
    )
}

export default Link
