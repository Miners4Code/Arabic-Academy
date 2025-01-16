import { Box } from '@chakra-ui/react'
import UserSection from './UserSection'
import PC from '@/icons/UserPage/PC'
import CheckIcon from '@/icons/UserPage/CheckIcon'

const SectionsMenu = () => {
    return (
        <Box
            pos={"absolute"}
            left={"50%"}
            transform={"translateX(-50%) translateY(-8px)"}
            bg={"white"}
            width={"180px"}
            boxShadow={"aca_shadow.tb"}
        >
            <UserSection text='المساقات' number={10} icon={<PC />} display='flex' isActive={true} />
            <UserSection text='مكتملة' number={5} icon={<CheckIcon />} display='flex' isActive={false} />
        </Box>
    )
}

export default SectionsMenu
