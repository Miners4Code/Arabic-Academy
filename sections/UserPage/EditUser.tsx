import { Box } from "@chakra-ui/react";
import EditUserPage from "../../components/UserPage/EditUser/EditUser";
const EditUser = () => {
  return (
    <Box
      paddingTop={{
        lg: "70px",
        md: "50x",
        base: "20px",
      }}
      paddingBottom={{
        lg: "70px",
        md: "50px",
        base: "20px",
      }}
      height={"100vh"}
      color={"aca_primary.400"}
    >
      <h3 style={{ textAlign: "center" }}>تعديل الملف الشخصي</h3>
      <EditUserPage />
    </Box>
  );
};

export default EditUser;
