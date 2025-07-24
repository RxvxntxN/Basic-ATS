import Homepage from '@/app/Hompage';
import SectionOne from '@/app/SectionOne';
import SectionTwo from '@/app/SectionTwo';
import SectionThree from '@/app/Sectionthree';
import SectionFour from "@/app/Sectionfour";
import Sectioncard from "@/app/Sectioncard";
import SectionBoard from '@/app/SectionBoard';
import FooterSection from "@/app/Footersection";
import GetStarted from '@/featuresStuffs/GetStarted'
import AOSInitializer from '@/app/components/AOSInitializer';
import SectionExperience from './SectionExperience';


export default function Home() {
  return (
    <div>
        {/* <div className="block md:hidden">small 😁</div>
        <div className="hidden md:block">big 😭</div> */}
        <Homepage/>
        <SectionOne/>
        <AOSInitializer />
        <div className="relative z-50 " data-aos="fade-up" data-aos-duration="1000">
        <Sectioncard />
        </div>
        <SectionTwo/>
        <SectionThree/>
        <SectionExperience/>
        <SectionBoard/>
        <GetStarted/>
        <SectionFour/>
        <FooterSection/>
    </div>
  );
}
