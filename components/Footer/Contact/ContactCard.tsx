import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
import CardHeader from "../CardHeader"
interface Props {
    children: ReactNode
    title: string
}

const ContactCard: React.FC<Props> = ({ children, title }) => {
    return (
        <Box
            background={"white"}
            borderRadius={"5px"}
            fontSize={{
                base: "primary.mb",
                md: "primary.tb",
                lg: "primary.dt"
            }}
            width={{
                base: "300px",
                md: "320px",
                lg: "290px"
            }}
            height={"350px"}
        >
            <Box
                paddingX={{
                    lg: "20px",
                    md: "25px",
                    base: "10px"
                }}
                paddingY={{
                    lg: "30px",
                    md: "35px",
                    base: "20px"
                }}
            >
                <CardHeader title={title} color="aca_primary.400"></CardHeader>
                <Box marginTop={"30px"}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default ContactCard