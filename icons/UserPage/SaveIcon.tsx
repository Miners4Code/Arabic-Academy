import { Icon } from "@chakra-ui/react"
type props = {
    fill: string
}
const SaveIcon: React.FC<props> = ({ fill }) => {
    return (
        <Icon>
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.49111 18.9544L0.366101 10.8294C-0.122034 10.3413 -0.122034 9.5498 0.366101 9.06162L2.13383 7.29384C2.62196 6.80566 3.41347 6.80566 3.9016 7.29384L9.375 12.7672L21.0984 1.04384C21.5865 0.555701 22.378 0.555701 22.8662 1.04384L24.6339 2.81161C25.122 3.29975 25.122 4.0912 24.6339 4.57939L10.2589 18.9544C9.7707 19.4426 8.97925 19.4426 8.49111 18.9544Z" fill={fill} />
            </svg>
        </Icon>
    )
}

export default SaveIcon
