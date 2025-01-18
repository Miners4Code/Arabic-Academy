import { Box } from "@chakra-ui/react"
type Props = {
    text: string
    progress: number
}
const CourseDetails: React.FC<Props> = ({ text, progress }) => {
    return (
        <Box
            fontWeight={"bold"}
            marginBottom={{
                base: "15px"
            }}
        >
            <p>{text}</p>
            <Box>
                steps 0/0 Complete {progress}%
            </Box>
        </Box>
    )
}

export default CourseDetails
