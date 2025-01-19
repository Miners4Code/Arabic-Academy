import { Box } from "@chakra-ui/react"
import EditDetailsForm from "./EditDetailsForm"
import EditLinks from "./Links/EditLinks"
import Controls from "./Controls"

const EditDetails = () => {
    return (
        <Box
            w={{
                base: "80%",
                md: "500px",
            }}
            padding={"10px"}
        >
            <EditDetailsForm />
            <EditLinks />
            <Controls />
        </Box>
    )
}

export default EditDetails
