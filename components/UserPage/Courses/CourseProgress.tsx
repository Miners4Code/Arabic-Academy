import { Box } from "@chakra-ui/react"
type Props = {
    progress: number
}
const CourseProgress: React.FC<Props> = ({ progress }) => {
    return (
        <Box
            w={"100%"}
            border={"1px solid"}
            borderColor={"aca_primary.400"}
            height={"8px"}
            borderRadius={"10px"}
        >
            <Box
                width={`${progress}%`}
                height={"100%"}
                bg={"aca_primary.400"}
                ms={"auto"}
            ></Box>
        </Box>
    )
}

export default CourseProgress
