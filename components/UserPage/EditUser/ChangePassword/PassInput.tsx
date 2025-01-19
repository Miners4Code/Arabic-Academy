import { Box, Flex } from "@chakra-ui/react"
import styles from "../edituser.module.css"
import ShowPassIcon from "@/icons/UserPage/ShowPassIcon"
type props = {
    label: string,
}
const PassInput: React.FC<props> = ({ label }) => {
    return (
        <Flex
            mb={"30px"}
            flexDir={{
                base: "column",
                md: "row"
            }}
            alignItems={"center"}
        >
            <p
                style={{ fontWeight: "bold", fontSize: "18px", width: "130px" }}
            >{label}</p>
            <Flex
                w={"300px"}
                className={styles.input}
                paddingY={"8px"}
                justifyContent={"space-between"}
            >
                <input type="password" style={{ outline: "0" }} />
                <Box
                    cursor={"pointer"}
                >
                    <ShowPassIcon />
                </Box>
            </Flex>
        </Flex>
    )
}

export default PassInput
