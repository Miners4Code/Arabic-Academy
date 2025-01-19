import { Box, Flex } from "@chakra-ui/react"
import CourseDetails from "./CourseDetails"
import CourseControl from "./CourseControl"
import CourseProgress from "./CourseProgress"
type Props = {
    text: string,
    progress: number
}
const Course: React.FC<Props> = ({ text, progress }) => {
    return (
        <Box
            margin={"auto"}
            marginBottom={"20px"}
            paddingX={{
                lg: "25px",
                md: "30px",
                base: "15px"
            }}
            paddingY={{
                lg: "15px",
                md: "20px",
                base: "10px"
            }}
            borderRadius={"10px"}
            boxShadow={"aca_shadow.mb"}
            width={{
                base: "300px",
                md: "600px"
            }}
        >
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                marginBottom={"15px"}
                flexDirection={{
                    base: "column",
                    md: "row"
                }}
            >
                <CourseDetails text={text} progress={progress} />
                <CourseControl />
            </Flex>
            <CourseProgress progress={progress} />
        </Box>
    )
}

export default Course
