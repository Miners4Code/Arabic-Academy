import { Flex, GridItem, Text } from "@chakra-ui/react"
import ContactCard from "./ContactCard"
import ContactItem from "./ContactItem"
import Location from "@/icons/Footer/Location"
import Phone from "@/icons/Footer/Phone"
import Email from "@/icons/Footer/Email"
import facebook from "@/assets/Footer/SocialMedia/Facebook.png"
import Instgram from "@/assets/Footer/SocialMedia/Instgram.png"
import Linkedin from "@/assets/Footer/SocialMedia/Linkedin.png"
import youtube from "@/assets/Footer/SocialMedia/youtube.png"
import X from "@/assets/Footer/SocialMedia/X.png"
import Reddit from "@/assets/Footer/SocialMedia/Reddit.png"
import TikTok from "@/assets/Footer/SocialMedia/TikTok.png"
import Threads from "@/assets/Footer/SocialMedia/Threads.png"
import SocialImg from "./SocialImg"
const ContactContainer: React.FC = () => {

    const images = [facebook.src, Instgram.src, Linkedin.src, Reddit.src, X.src, youtube.src, TikTok.src, Threads.src]

    return (
        <GridItem
            colSpan={{
                lg: 8,
                md: 12,
                base: 12
            }}
            color="aca_primary.400"
        >
            <Flex
                wrap={{
                    base: "wrap",
                    lg: "nowrap"
                }}
                height={"100%"}
                justifyContent={"center"}
                gap={{
                    base: "15px",
                    lg: "20px"
                }}
            >
                <ContactCard title="التواصل">
                    <ContactItem text="المقر الرئيسي - بريطانيا - لندن" icon={<Location />} />
                    <ContactItem text="+447918713367" icon={<Phone />} />
                    <ContactItem text="info@arabcodeacademy.com" icon={<Email />} />
                </ContactCard>
                <ContactCard title="مواقع التواصل">
                    <Flex gap={2} alignItems={"center"} >
                        {
                            images.slice(0, 4).map(img => <SocialImg key={img} img={img} alt="social-icon" />)
                        }
                    </Flex>
                    <Flex gap={2} marginTop={"15px"} alignItems={"center"} >
                        {
                            images.slice(4).map(img => <SocialImg key={img} img={img} alt="social-icon" />)
                        }
                    </Flex>
                    <Text
                        marginTop={{
                            base: "20px",
                            md: "25px",
                            lg: "30px"
                        }}
                        fontWeight={"500"}
                    >انضم الآن إلى مجتمع المبرمجين في الأكاديمية
                        وابدأ رحلتك نحو احتراف البرمجة!</Text>
                </ContactCard>
            </Flex>
        </GridItem>
    )
}

export default ContactContainer
