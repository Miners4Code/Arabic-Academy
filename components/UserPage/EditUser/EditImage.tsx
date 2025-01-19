"use client"
import { Box } from "@chakra-ui/react"
import UserImg from "../User/UserImg"
import EditOption from "./EditOption"
import { useState } from "react"
import Password from "./ChangePassword/Password"

const EditImage = () => {
    const [changePass, setChangePass] = useState(false)
    return (
        <Box>
            <UserImg />
            <Box>
                <EditOption text="تغيير صورة الملف الشخصي" />
                <Box
                    onClick={() => setChangePass(true)}
                >
                    <EditOption text="تغيير كلمة السر" />
                </Box>
            </Box>
            {
                changePass &&
                <Password handleClick={() => setChangePass(false)} />
            }
        </Box>
    )
}

export default EditImage
