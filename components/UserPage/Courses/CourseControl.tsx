import ACAButton from "@/components/ACAButton/ACAButton"
import ArrowIcon from "@/icons/UserPage/ArrowIcon"
import ContinueIcon from "@/icons/UserPage/ContinueIcon"
import { Box, Flex } from "@chakra-ui/react"

const CourseControl = () => {
    return (
        <Flex
            alignItems={"center"}
            gap={"15px"}
        >
            <ACAButton text={"استئناف"} icon={<ContinueIcon />} size="sm" bg="tomato" />
            <Box
                width={"30px"}
                height={"30px"}
                borderRadius={"50%"}
                bg={"aca_cyan.400"}
                textAlign={"center"}
            >
                <ArrowIcon />
            </Box>
        </Flex>
    )
}

export default CourseControl
