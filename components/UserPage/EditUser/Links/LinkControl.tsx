import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
type props = {
    icon: ReactNode
}
const LinkControl: React.FC<props> = ({ icon }) => {
    return (
        <Box
            width={"30px"}
            height={"30px"}
            borderRadius={"50%"}
            bg={"aca_tomato.400"}
            display={"flex"}
            justifyContent={"Center"}
            alignItems={"center"}
            cursor={"pointer"}
        >
            {icon}
        </Box>
    )
}

export default LinkControl
