import Homepage from '@/app/Hompage';
import SectionOne from '@/app/SectionOne';
import SectionTwo from '@/app/SectionTwo';
import SectionThree from '@/app/Sectionthree';
import SectionFour from "@/app/Sectionfour";
import Sectioncard from "@/app/Sectioncard";
import FooterSection from "@/app/Footersection";


export default function Home() {
  return (
    <div>
        {/* <div className="block md:hidden">small 😁</div>
        <div className="hidden md:block">big 😭</div> */}
        <Homepage/>
        <SectionOne/>
        <div className="relative">
        <Sectioncard />
        </div>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <FooterSection/>
      <footer>
      </footer>
    </div>
  );
}
