import UserPage from "@/sections/UserPage/UserPage";
import { Flex } from "@chakra-ui/react";

const ProfilePage = async () =>{
    return(
        <Flex align="center" justify="center">
            <UserPage />
        </Flex>
    );
}

export default ProfilePage;
