import ACAButton from "@/components/ACAButton/ACAButton"
import DisMissIcon from "@/icons/UserPage/DisMissIcon"
import NewLinkIcon from "@/icons/UserPage/NewLinkIcon"
import { Box, Flex } from "@chakra-ui/react"
type props = {
    handleClick: () => void
}
const NewLink: React.FC<props> = ({ handleClick }) => {
    return (
        <Box>
            <Flex
                flexDirection={{
                    base: "column",
                    md: "row"
                }}
                gap={{
                    base: "0",
                    md: "15px"
                }}
                alignItems={"center"}
            >
                <p style={{ flex: "0 0 1", fontWeight: "bold" }}>الرابط</p>
                <Box
                    flex={"1"}
                    w={"100%"}
                >
                    <input
                        type="text"
                        style={{
                            display: "block",
                            width: "100%",
                            outline: "0",
                            borderBottom: "1px solid",
                            borderColor: "aca_primary.400"
                        }}
                    />
                </Box>
            </Flex>
            <Flex
                mt={"20px"}
                justifyContent={"center"}
                gap={"20px"}
            >
                <Box
                    onClick={() => handleClick()}
                >
                    <ACAButton text="حفظ" icon={<NewLinkIcon />} bg="cyan" size="sm" weight="600" />
                </Box>
                <Box
                    onClick={() => handleClick()}
                >
                    <ACAButton text="الغاء" icon={<DisMissIcon />} bg="tomato" size="sm" weight="600" />
                </Box>
            </Flex >
        </Box >
    )
}

export default NewLink
