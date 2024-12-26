import CardHeader from "@/components/Footer/CardHeader"
import ContactContainer from "@/components/Footer/Contact/ContactContainer"
import Informations from "@/components/Footer/Informations/Informations"
import ResourcesContainer from "@/components/Footer/Resources/ResourcesContainer"
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import Image from "next/image"
import footerimg from "../../assets/Footer/Arab academy-03 1.png"
import CopyRightIcon from "@/icons/Footer/CopyRightIcon"
const Footer: React.FC = () => {
    return (
        <Box
            color={"white"}
            bg={"aca_primary.500"}
            paddingX={{
                lg: "80px",
                md: "60px",
                base: "45px"
            }}
            paddingTop={{
                lg: "100px",
                md: "60px",
                base: "40px"
            }}
            paddingBottom={{
                lg: "36px",
                md: "42px",
                base: "20px"
            }}
            fontSize={{
                lg: "primary.dt",
                md: "primary.tb",
                base: "promary.mb"
            }}
        >
            <Grid templateColumns="repeat(12, 1fr)">
                <Informations />
                <ContactContainer />
                <GridItem
                    marginTop={{
                        base: "40px",
                        md: "50px",
                        lg: "100px"
                    }}
                    colSpan={12}
                    display={"flex"}
                    justifyContent={{
                        base: "center",
                        lg: "start"
                    }}
                >
                    <CardHeader title={"المصادر"} />
                </GridItem>
                <ResourcesContainer />
            </Grid>
            <hr />
            <Flex
                justify={{
                    base: "center",
                    md: "space-between"
                }}
                alignItems={"center"}
                marginTop={"10px"}
                wrap={"wrap-reverse"}
            >
                <Box>
                    <Image alt="Logo" objectFit="cover" src={footerimg} />
                </Box>
                <Box>
                    <Text
                        fontSize={{
                            base: "12px",
                            md: "secondary.tb",
                            lg: "secondary.dt"
                        }}
                    >
                        جميع الحقوق محفوظة
                        <CopyRightIcon />
                        2023 الأكاديمية العربية للبرمجة
                    </Text>
                </Box>
            </Flex>
        </Box >
    )
}

export default Footer
