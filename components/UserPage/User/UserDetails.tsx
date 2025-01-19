import Location from "@/icons/UserPage/Location"
import Person from "@/icons/UserPage/Person"
import { Box, Flex } from "@chakra-ui/react"
import UserDetail from "./UserDetail"
import LinkIcon from "@/icons/UserPage/LinkIcon"
import Link from "./Link"
import LinkedinIcon from "@/icons/UserPage/LinkedinIcon"
import GitIcon from "@/icons/UserPage/GitIcon"
import FacebookIcon from "@/icons/UserPage/FacebookIcon"
import { useCurrentUser } from "@/hooks/use-current-user"
import { auth } from "@/auth"




const UserDetails = async() => {
    
    const user = await auth();
    console.log(user)
    const fullName = `${user?.user.firstName} ${user?.user.secondName}`;
    const link = `${user?.user.firstName}${user?.user.secondName}`;
    
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
                <h2>{user?.user.name}</h2>
                <UserDetail text={fullName} icon={<Person />} />
                <UserDetail text={user?.user.country} icon={<Location />} />
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
                <Link link={`https://www.linkedin.com/in/${link}/`} icon={<LinkedinIcon />}></Link>
                <Link link={fullName} icon={<FacebookIcon />}></Link>
                <Link link={fullName} icon={<GitIcon />}></Link>
            </Box>
        </Box>
    )
}

export default UserDetails
