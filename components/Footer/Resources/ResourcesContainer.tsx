import { GridItem, Grid } from "@chakra-ui/react"
import Resource from "./Resource"

const ResourcesContainer = () => {
    const resources = ["المدونة", "المنتدى", "قاموس الكلمات", "دروس فيديو قصيرة", "دليل أدوات الذكاء الاصطناعي", "بنك الأسئلة التقنية", "دروس و أنماط الميدجورني", "لغة ضاد"]
    return (
        <GridItem
            colSpan={12}
            marginTop={"60px"}
            marginBottom={"20px"}
        >
            <Grid templateColumns="repeat(12, 1fr)">
                {
                    resources.map(resource => <Resource key={resource} text={resource} />)
                }
            </Grid>
        </GridItem>
    )
}

export default ResourcesContainer
