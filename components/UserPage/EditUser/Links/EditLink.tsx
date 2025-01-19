import { Flex } from "@chakra-ui/react"
import Link from "../../User/Link"
import LinkControl from "./LinkControl"
import EditLinkIcon from "@/icons/UserPage/EditLinkIcon"
import DeleteLinkIcon from "@/icons/UserPage/DeleteLinkIcon"
import { ReactNode } from "react"
type props = {
    link: string,
    icon: ReactNode
}
const EditLink: React.FC<props> = ({ link, icon }) => {
    return (
        <Flex
            justifyContent={"space-between"}
            flexDir={{
                base: "column-reverse",
                md: "row"
            }}
            alignItems={"center"}
            margin={"15px 0"}
            gap={"15px"}
        >
            <Flex
                gap={"10px"}
            >
                <LinkControl icon={<EditLinkIcon />} />
                <LinkControl icon={<DeleteLinkIcon />} />
            </Flex>
            <Link link={link} icon={icon} />
        </Flex>
    )
}

export default EditLink
