import { Box } from "@chakra-ui/react"
type props = {
    text: string,
    placeholder: string
}
const FormInput: React.FC<props> = ({ text, placeholder }) => {
    return (
        <Box
            textAlign={{
                base: "center",
                md: "start"
            }}
            marginBottom={"10px"}
        >
            <p
                style={{ marginBottom: "10px", fontWeight: "bold" }}
            >{text}:</p>
            <input
                type="text"
                placeholder={placeholder}
                style={{
                    borderRadius: "10px",
                    border: "1px solid",
                    borderColor: "aca_primary.400",
                    padding: "10px",
                    outline: "0",
                    width: "100%"
                }} />
        </Box>
    )
}

export default FormInput
