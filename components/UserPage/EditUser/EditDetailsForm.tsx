import { Box, Flex } from "@chakra-ui/react"
import FormInput from "./FormInput"
import FormSelect from "./Select/FormSelect"
const EditDetailsForm = () => {
    return (
        <Box>
            <Flex
                justifyContent={"space-between"}
                flexDirection={{
                    base: "column",
                    md: "row"
                }}
            >
                <FormInput text="الاسم الأول" placeholder="كامل" />
                <FormInput text="الاسم الأخير" placeholder="ماهر" />
            </Flex>
            <FormSelect />
            <Box
                marginTop={"10px"}
            >
                <FormInput text="البريد الالكتروني" placeholder="kamel@gmail.com" />
            </Box>

        </Box>
    )
}

export default EditDetailsForm
