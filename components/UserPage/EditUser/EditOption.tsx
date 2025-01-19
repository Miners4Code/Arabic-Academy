import { Box } from "@chakra-ui/react"
type Props = {
    text: string
}
const EditOption: React.FC<Props> = ({ text }) => {
    return (
        <Box
            borderBottom={"1px solid"}
            borderColor={"aca_primary.400"}
            fontWeight={"bold"}
            textAlign={"center"}
            padding={"5px 0"}
            marginBottom={"10px"}
            cursor={"pointer"}
        >
            {text}
        </Box>
    )
}

export default EditOption
