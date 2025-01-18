import profilePic from "@/assets/UserPage/profilepic.png"
import { Box } from "@chakra-ui/react"
import Image from "next/image"
const UserImg = () => {
    return (
        <Box>
            <Image src={profilePic} alt="user-img" width={200} height={200} style={{ margin: "auto" }}></Image>
        </Box>
    )
}

export default UserImg
