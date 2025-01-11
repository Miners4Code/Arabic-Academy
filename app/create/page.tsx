import { CreateProfileForm } from "@/sections/CreateProfileForm/create-profile-form";
import { Flex } from "@chakra-ui/react";

const CreatePage = () => {
    return(
        <Flex justify="center" align="center" width="full" height="full" marginTop="100px">
            <CreateProfileForm />
        </Flex>
    )
}

export default CreatePage;