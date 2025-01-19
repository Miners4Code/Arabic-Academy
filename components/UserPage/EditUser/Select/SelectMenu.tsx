import { Box } from "@chakra-ui/react"
import SelectItem from "./SelectItem"
type props = {
    handleSelect: () => void
    countries: string[]
}
const SelectMenu: React.FC<props> = ({ handleSelect, countries }) => {
    return (
        <Box
            border={"1px solid"}
            borderColor={"aca_primary.400"}
            maxHeight={"200px"}
            overflow={"auto"}
            pos={"absolute"}
            w={"100%"}
            bg={"white"}
        >
            {
                countries.map(country => <SelectItem key={country} country={country} handleSelect={handleSelect} />)
            }
        </Box>
    )
}

export default SelectMenu
