import { Box } from "@chakra-ui/react"
import Course from "./Course"

const UserCourses = () => {
    return (
        <Box
            border={"1px solid"}
            borderColor={"aca_primary.400"}
            borderRadius={"10px"}
            boxShadow={"aca_shadow.mb"}
            color={"aca_primary.400"}
            paddingY={{
                base: "15px",
                md: "25px",
                lg: "20px"
            }}
            paddingX={{
                base: "20px",
                md: "20px",
                lg: "60px"
            }}
            width={{
                base: "90%",
                md: "750px"
            }}
        >
            <p style={{ fontWeight: "bold", textAlign: "center" }}>المساقات الخاصة بك</p>
            <Box
                marginTop={"20px"}
            >
                <Course text={"مقدمة لمحرك الألعاب اليونيتي unity"} progress={10} />
                <Course text={"مقدمة لمحرك الألعاب اليونيتي unity"} progress={30} />
                <Course text={"مقدمة لمحرك الألعاب اليونيتي unity"} progress={20} />
                <Course text={"مقدمة لمحرك الألعاب اليونيتي unity"} progress={10} />
                <Course text={"مقدمة لمحرك الألعاب اليونيتي unity"} progress={90} />
            </Box>
        </Box>
    )
}

export default UserCourses
