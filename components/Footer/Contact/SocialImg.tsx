import Image from "next/image"

interface Props {
    img: string
    alt: string
}
const SocialImg: React.FC<Props> = ({ img, alt }) => {
    return (
        <Image src={img} alt={alt} width={"32"} height={"32"} style={{ objectFit: "cover" }} />
    )
}

export default SocialImg
