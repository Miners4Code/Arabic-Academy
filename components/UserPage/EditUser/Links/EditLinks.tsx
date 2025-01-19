"use client"
import { Box, Flex } from "@chakra-ui/react"
import EditLink from "./EditLink"
import LinkedinIcon from "@/icons/UserPage/LinkedinIcon"
import FacebookIcon from "@/icons/UserPage/FacebookIcon"
import GitIcon from "@/icons/UserPage/GitIcon"
import AddLinkIcon from "@/icons/UserPage/AddLinkIcon"
import NewLink from "./NewLink"
import { useState } from "react"

const EditLinks = () => {
    const [addLink, setAddLink] = useState(false)
    return (
        <Box
            mt={"20px"}
        >
            <Box
                fontWeight="bold"
                textAlign={{
                    base: "center",
                    md: "start"
                }}
                fontSize={"18px"}
            >الروابط :</Box>
            <Box>
                <EditLink link={"Linked In"} icon={<LinkedinIcon />} />
                <EditLink link="FaceBook" icon={<FacebookIcon />} />
                <EditLink link="GitHub" icon={<GitIcon />} />
            </Box>
            {
                !addLink ? <Flex
                    alignItems={"center"}
                    mx={{
                        base: "auto",
                        md: "auto 0"
                    }}
                    gap={"10px"}
                    fontWeight={"bold"}
                    cursor={"pointer"}
                    w={"fit-content"}
                    onClick={() => setAddLink(!addLink)}
                >
                    <p>اضافة رابط</p>
                    <AddLinkIcon />
                </Flex> : <NewLink handleClick={() => setAddLink(!addLink)} />
            }
        </Box >
    )
}

export default EditLinks
