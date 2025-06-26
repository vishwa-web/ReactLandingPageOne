import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import Image1 from "../assets/RC1.png"
import Image2 from "../assets/RC2.png"
import Image3 from "../assets/RC3.png"
import Image4 from "../assets/RC4.png" 
import "../assets/style.css"

export const ResearchCapabilities = () => {
  // Research capabilities data

  return (
    <section className="w-full h-[993px] bg-[#ececec] relative">
      <div className="max-w-[891px] pt-6 AlignmentDiv">
        <h2 className="ResearchCapabalitiesText font-['Barlow',Helvetica] font-semibold text-black text-[32px] leading-normal">
          We're a full-service B2B market research thought partner
          committed to strengthening your strategies with deep, subject
          matter expertise.
        </h2>
 
        <div className="mt-[75px] grid grid-cols-2 gap-[32px] ResearchCapablitiesTotalDiv">
            <Card
              
              className={`bg-[#ebffd7] rounded-[5px] h-[379px] w-[500px] relative`}
            >
              <  CardContent className="p-10">
                <h3 className="font-['Barlow',Helvetica] font-semibold text-black text-base mb-4">
                 Branding and Advertising Communication
                </h3>
                <p className="font-['Barlow',Helvetica] font-normal text-black text-base max-w-[366px]">
                  We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.
                </p>

                {/* Arrow icon at bottom */}
                <div className="absolute bottom-8 left-[59px] w-4 h-9 overflow-hidden rotate-90">
                  <img
                    className="absolute w-9 h-4 top-2.5 -left-2.5 -rotate-90"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>

                  <img
                    className="absolute w-[343px] h-[335px] bottom-0 right-0"
                    alt="Rectangle"
                    src={Image1}
                  />
              </CardContent>
            </Card>

            <Card
              className={`bg-gradient-to-br from-[#f2edff] to-white rounded-[5px] h-[379px] w-[700px] left-[150px] relative`}
            >
              <  CardContent className="p-10">
                <h3 className="font-['Barlow',Helvetica] font-semibold text-black text-base mb-4">
                 Market Opportunity Research
                </h3>
                <p className="font-['Barlow',Helvetica] font-normal text-black text-base max-w-[366px]">
                  Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.
                </p>

                {/* Arrow icon at bottom */}
                <div className="absolute bottom-8 left-[59px] w-4 h-9 overflow-hidden rotate-90">
                  <img
                    className="absolute w-9 h-4 top-2.5 -left-2.5 -rotate-90"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>

                  <img
                    className="absolute w-[280px] h-[294px] bottom-0 right-0"
                    alt="Vector"
                    src={Image2}
                  />
              </CardContent>
            </Card>

            <Card
              className={`bg-gradient-to-br from-[#dddddd] to-white rounded-[5px] h-[379px] w-[700px] relative`}
            >
              <  CardContent className="p-10">
                <h3 className="font-['Barlow',Helvetica] font-semibold text-black text-base mb-4">
                  Customer Research and Segmentation
                </h3>
                <p className="font-['Barlow',Helvetica] font-normal text-black text-base max-w-[366px]">
                  Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.
                </p>

                {/* Arrow icon at bottom */}
                <div className="absolute bottom-8 left-[59px] w-4 h-9 overflow-hidden rotate-90">
                  <img
                    className="absolute w-9 h-4 top-2.5 -left-2.5 -rotate-90"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>

                  <img
                    className="absolute w-[174px] h-[349px] bottom-0 right-0"
                    alt="Vector"
                    src={Image3}
                  />
              </CardContent>
            </Card>

            <Card
              className={`bg-[#ffe9ea] rounded-[5px] h-[379px] w-[500px] left-[350px] relative`}
            >
              <  CardContent className="p-10">
                <h3 className="font-['Barlow',Helvetica] font-semibold text-black text-base mb-4">
                  Product Research
                </h3>
                <p className="font-['Barlow',Helvetica] font-normal text-black text-base max-w-[366px]">
                  Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.
                </p>

                {/* Arrow icon at bottom */}
                <div className="absolute bottom-8 left-[59px] w-4 h-9 overflow-hidden rotate-90">
                  <img
                    className="absolute w-9 h-4 top-2.5 -left-2.5 -rotate-90"
                    alt="Vector"
                    src="/vector-2.svg"
                  />
                </div>
 
                  <>
                    <img
                      className="absolute w-[110px] h-[75px] top-[31px] right-[30px]"
                      alt="Vector"
                      src={Image4}
                    />
                    <img
                      className="absolute w-[87px] h-[59px] bottom-[25px] right-[40px]"
                      alt="Vector"
                      src={Image4}
                    />
                  </>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};