import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from "../components/ui/card";

export const IndustrySection = () => {
  // Industry tabs data
  const industryTabs = [
    "FMCG",
    "Retail and Merchandising",
    "Financial Services",
    "Insurance",
    "Investors",
    "Media",
    "Technology",
    "Automotive",
    "Advertising and Marketing",
    "Human Resources",
    "Education",
    "Healthcare and Life Sciences",
  ];

  return (
    <section className="mt-[80px] px-[165px]">
      <h2 className="font-['Barlow',Helvetica] font-semibold text-black text-[32px] mb-[60px]">
        Designed to meet your unique needs.
      </h2>

      <div className="flex">
        {/* Main content card */}
        <Card className="w-[832px] h-[626px] bg-white rounded-[5px] border border-solid border-black relative">
          <CardContent className="p-[53px]">

            <div className="mt-[60px] flex">
              <div className="w-[347px] mr-[38px]">
                <h3 className="font-['Barlow',Helvetica] font-semibold text-black text-base mb-2">
                  Meet Your Customers' Needs Every Time
                </h3>

                <p className="font-['Barlow',Helvetica] font-normal text-black text-base mt-2 mb-4">
                  In the ever-evolving world of consumer packaged goods,
                  staying ahead of the curve is not just an option—it's a
                  necessity. Here's how Thought Metrics can guide you to
                  success:
                </p>

                <ul className="space-y-4">
                  <li className="font-['Barlow',Helvetica] font-normal text-black text-base">
                    Connect with the right people to make the right
                    decisions even when you need to move quickly.
                  </li>
                  <li className="font-['Barlow',Helvetica] font-normal text-black text-base">
                    Better understand not just what customers want and
                    need, but why and how they make their decisions.
                  </li>
                  <li className="font-['Barlow',Helvetica] font-normal text-black text-base">
                    Gain feedback at every phase of product and ad
                    development, from concept to execution with agile
                    testing.
                  </li>
                </ul>
              </div>

              <img
                className="w-[314px] h-[297px]"
                alt="Image"
                src="/image-113.png"
              />
            </div>

            <div className="flex w-[39px] h-[39px] items-center justify-center absolute bottom-[35px] left-[53px] bg-[#e8505e] rounded-[25px]">
              <span className="font-['Barlow',Helvetica] font-bold text-black text-base">
                01
              </span>
            </div>

            <Button className="absolute bottom-[35px] right-[79px] w-[126px] h-[39px] bg-[#e8505e] rounded-[5px] font-['Barlow',Helvetica] font-bold text-black text-base">
              See More
            </Button>
          </CardContent>
        </Card>

        {/* Industry tabs */}
        <div className="ml-[40px]">
         
        </div>
      </div>
    </section>
  );
};