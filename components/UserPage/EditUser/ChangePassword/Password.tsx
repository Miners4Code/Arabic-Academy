import { Box, Flex } from "@chakra-ui/react"
import PassInput from "./PassInput"
import ACAButton from "@/components/ACAButton/ACAButton"
import BackIcon from "@/icons/UserPage/BackIcon"
import SaveIcon from "@/icons/UserPage/SaveIcon"
type props = {
    handleClick: () => void
}
const Password: React.FC<props> = ({ handleClick }) => {
    return (
        <Box
            bg={"white"}
            w={{
                base: "90%",
                md: "500px"
            }}
            padding={"20px"}
            pos={"fixed"}
            top={"50%"}
            left={"50%"}
            transform={"translateX(-50%) translateY(-50%)"}
            boxShadow={"aca_shadow.mb"}
            borderRadius={"10px"}
            zIndex={"10000000"}
        >
            <h3 style={{ textAlign: "center" }}>تغيير كلمة السر</h3>
            <Box
                mt={"20px"}
                display={"flex"}
                alignItems={"center"}
                flexDir={"column"}
            >
                <PassInput label="كلمة السر الحالية :" />
                <PassInput label="كلمة السر الجديدة :" />
                <PassInput label="تأكيد كلمة السر :" />
            </Box>
            <Flex
                justifyContent={"Center"}
                gap={"15px"}
            >
                <Box
                    onClick={() => handleClick()}
                >
                    <ACAButton text="حفظ" icon={<SaveIcon fill="white" />} bg="cyan" size="sm" />
                </Box>
                <Box
                    onClick={() => handleClick()}
                >
                    <ACAButton text="رجوع" icon={<BackIcon />} bg="tomato" size="sm" />
                </Box>
            </Flex>
        </Box>
    )
}

export default Password
