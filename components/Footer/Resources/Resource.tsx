import { Box, GridItem } from "@chakra-ui/react"
import styles from "./resource.module.css"
interface Props {
    text: string
}
const Resource: React.FC<Props> = ({ text }) => {
    return (
        <GridItem
            colSpan={{
                lg: 3,
                md: 6,
                base: 12
            }}
            textAlign={"center"}
        >
            <Box
                m={"auto"}
                className={styles.resource}
                width={{
                    base: "250px",
                    md: '260px',
                    lg: "220px"
                }}
                maxWidth={{
                    lg: "100%"
                }}
                textAlign={"center"}
                lineHeight={"42px"}
                marginBottom={{
                    base: "10px",
                    md: "20px"
                }}
            >
                {text}
            </Box>
        </GridItem>
    )
}

export default Resource
