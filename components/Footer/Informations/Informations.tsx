import { Flex, GridItem } from "@chakra-ui/react"
import InformationColumn from "./InformationColumn"
import ACAButton from "@/components/ACAButton/ACAButton"
import PathButtonIcon from "@/icons/Footer/PathButtonIcon"

const Informations: React.FC = () => {
    const informationsCol1 = ["المساعدة و الدعم", "حول الأكاديمية", "رسالة الأكاديمية"]
    const informationsCol2 = ["سياسة الاستخدام", "سياسة الخصوصية", "اخلاء مسؤولية"]
    return (
        <GridItem
            colSpan={{
                lg: 4,
                md: 12,
                base: 12
            }}
            marginBottom={{
                base: "50px",
                lg: "0"
            }}
        >
            <Flex
                alignItems={{
                    lg: "start",
                    base: "center"
                }}
                direction={"column"}
                paddingTop={{
                    lg: "20px"
                }}
            >
                <Flex gap={"30px"} marginBottom={{
                    base: "30px",
                    md: "50px",
                    lg: "60px"
                }}>
                    <InformationColumn title="معلومات" text={informationsCol1} />
                    <InformationColumn title="السياسات" text={informationsCol2} />
                </Flex>
                <ACAButton size="md" text="المسارات التعليمية" bg="cyan" icon={<PathButtonIcon />} />
            </Flex>
        </GridItem>
    )
}

export default Informations
