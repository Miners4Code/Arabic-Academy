import ACAButton from "@/components/ACAButton/ACAButton"
import BackIcon from "@/icons/UserPage/BackIcon"
import SaveIcon from "@/icons/UserPage/SaveIcon"
import { Flex } from "@chakra-ui/react"

const Controls = () => {
    return (
        <Flex
            mt={"40px"}
            justifyContent={"center"}
            gap={"20px"}
        >
            <ACAButton text={"حفظ التعديلات"} bg="cyan" size="md" icon={<SaveIcon fill="aca.primary.400" />} weight="600" />
            <ACAButton text={"رجوع للخلف"} bg="tomato" size="md" icon={<BackIcon />} weight="600" />
        </Flex>
    )
}

export default Controls
