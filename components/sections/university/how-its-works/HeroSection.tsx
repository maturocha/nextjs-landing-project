import Image from "next/image";
import Ilustration from "public/img/ilus/university-how-it-works.svg";
import HeroTitleImage from "@/components/elements/HeroTitleImage";

const HeroSection = () => {
	return (
		<HeroTitleImage
			background="bg-pattern-1"
			title="El gaming como experiencia digital y su impacto"
			className="py-14"
			ilustration={Ilustration}
	  />
	);
};

export default HeroSection;
