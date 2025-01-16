import { Box, Flex } from "@chakra-ui/react"
import UserDetails from "./UserDetails"
import UserImg from "./UserImg"
import ACAButton from "@/components/ACAButton/ACAButton"
import UserEditIcon from "@/icons/UserPage/UserEditIcon"
import UserSection from "./UserSection"
import PC from "@/icons/UserPage/PC"
import CheckIcon from "@/icons/UserPage/CheckIcon"
const User = () => {
    return (
        <Box
            border={"1px solid"}
            borderColor={"aca_primary.400"}
            borderRadius={"10px"}
            boxShadow={"aca_shadow.mb"}
        >
            <Flex
                flexDirection={{
                    lg: "row",
                    base: "column"
                }}
                gap={"25px"}
                paddingY={{
                    lg: "25px",
                    base: "10px"
                }}
                paddingX={{
                    lg: "30px",
                    base: "10px"
                }}
            >
                <UserImg />
                <UserDetails />
                <Box
                    className="edit-btn"
                    alignSelf={{
                        base: "center",
                        lg: "end"
                    }}
                >
                    <ACAButton icon={<UserEditIcon />} bg="cyan" size="sm" text={"تعديل"} />
                </Box>
            </Flex>
            <Flex
                display={{
                    base: "none",
                    md: "flex"
                }}
                justifyContent={"center"}
                borderTop={"1px solid"}
                borderColor={"aca_primary.400"}
            >
                <UserSection text="المساقات" number={12} icon={<PC />} isActive={true} />
                <UserSection text="مكتملة" number={5} icon={<CheckIcon />} isActive={false} />
            </Flex>
        </Box>
    )
}

export default User
