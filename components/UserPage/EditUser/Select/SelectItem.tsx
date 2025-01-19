import { Box } from "@chakra-ui/react"
type props = {
    country: string
    handleSelect: () => void
}
const SelectItem: React.FC<props> = ({ country, handleSelect }) => {
    return (
        <Box
            padding={"5px"}
            borderBottom={"1px solid"}
            borderColor={"aca_primary.400"}
            cursor={"pointer"}
            onClick={() => handleSelect()}
        >
            <p>{country}</p>
        </Box>
    )
}

export default SelectItem
