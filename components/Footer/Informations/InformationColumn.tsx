import { Box } from "@chakra-ui/react"
import CardHeader from "../CardHeader"
interface Props {
    title: string
    text: string[]
}
const InformationColumn: React.FC<Props> = ({ text, title }) => {
    return (
        <Box>
            <CardHeader title={title} color="#FFFEFE" />
            <Box>
                <ul>
                    {
                        text.map(text => <li key={text} style={{ paddingTop: "30px" }}>{text}</li>)
                    }
                </ul>
            </Box>
        </Box >
    )
}

export default InformationColumn
