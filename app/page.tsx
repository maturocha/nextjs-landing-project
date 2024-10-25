import ContactSection from "@/components/sections/ContactSection";
import OurBenefits from "@/components/sections/OurBenefits";
import OurProposal from "@/components/sections/OurProposal";
import CountryPlayed from "@/components/sections/university/home/CountryPlayed";
import HeroSection from "@/components/sections/university/home/HeroSection";
import WhoAreWe from "@/components/sections/WhoAreWe";

const IndexPage = () => {

	return (<>
			<HeroSection />
			<WhoAreWe />
			<OurProposal />
			<OurBenefits />
			<CountryPlayed />
			<ContactSection />
	</>
		
	);
};

export default IndexPage;
