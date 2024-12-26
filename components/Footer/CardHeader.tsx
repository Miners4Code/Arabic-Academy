import { Box, Text } from "@chakra-ui/react"
import styles from "./card-header.module.css"
interface Props {
    title: string
    color?: string
}
const CardHeader: React.FC<Props> = ({ title, color }) => {
    return (
        <Box
            className={styles.heading}
            color={color}
            borderColor={color}
        >
            <Text fontWeight={"600"}>{title}</Text>
        </Box>
    )
}

export default CardHeader
