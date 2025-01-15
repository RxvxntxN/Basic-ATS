import Homepage from '@/app/hompage';
import SectionOne from '@/app/sectionOne';
import SectionTwo from '@/app/SectionTwo';
import SectionThree from '@/app/sectionthree';
import SectionFour from "@/app/sectionfour";
import Sectioncard from "@/app/sectioncard";
import FooterSection from "@/app/footersection";


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
