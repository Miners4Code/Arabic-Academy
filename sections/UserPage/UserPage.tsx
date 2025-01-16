import UserCourses from "@/components/UserPage/Courses/UserCourses"
import User from "@/components/UserPage/User/User"
import { Box } from "@chakra-ui/react"

const UserPage = () => {
    return (
        <Box
            paddingTop={{
                lg: "70px",
                md: "50x",
                base: "20px"
            }}
            paddingBottom={{
                lg: "70px",
                md: "50px",
                base: "20px"
            }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"30px"}
        >
            <User />
            <UserCourses />
        </Box>
    )
}

export default UserPage
