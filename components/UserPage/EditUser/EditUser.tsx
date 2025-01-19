import { Box } from "@chakra-ui/react"
import EditDetails from "./EditDetails"
import EditImage from "./EditImage"

const EditUser = () => {
    return (
        <Box
            marginTop={"20px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={{
                base: "center",
                md: "start"
            }}
            gap={"30px"}
            flexDirection={{
                base: "column",
                md: "row"
            }}
        >
            <EditImage />
            <EditDetails />
        </Box>
    )
}

export default EditUser
