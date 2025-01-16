import Location from "@/icons/UserPage/Location"
import Person from "@/icons/UserPage/Person"
import { Box, Flex } from "@chakra-ui/react"
import UserDetail from "./UserDetail"
import LinkIcon from "@/icons/UserPage/LinkIcon"
import Link from "./Link"
import LinkedinIcon from "@/icons/UserPage/LinkedinIcon"
import GitIcon from "@/icons/UserPage/GitIcon"
import FacebookIcon from "@/icons/UserPage/FacebookIcon"

const UserDetails = () => {
    return (
        <Box
            className="user-details"
            textAlign={{
                base: "center",
                lg: "start"
            }}
            color={"aca_primary.400"}
        >
            <Box
                marginBottom={"10px"}
            >
                <h3>KamelMaher</h3>
                <UserDetail text="Kamel Maher" icon={<Person />} />
                <UserDetail text="Palestine" icon={<Location />} />
            </Box>
            <Box
                className="user-links"
            >
                <Flex
                    gap={"5px"}
                    alignItems={"center"}
                    justifyContent={{
                        base: "center",
                        lg: "start"
                    }}
                >
                    <LinkIcon></LinkIcon>
                    <h4>الروابط :</h4>
                </Flex>
                <Link link="https://www.linkedin.com/in/kamelmaher/" icon={<LinkedinIcon />}></Link>
                <Link link="kamel Maher" icon={<FacebookIcon />}></Link>
                <Link link="kamel Maher" icon={<GitIcon />}></Link>
            </Box>
        </Box>
    )
}

export default UserDetails
