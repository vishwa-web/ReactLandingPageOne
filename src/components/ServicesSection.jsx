import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Users, LineChart, ClipboardCheck } from "lucide-react";
import GirlImage from "../assets/image.png"

export const ServicesSection = () => {
  // Service cards data
  const serviceCards = [
    {
      title: "Audience",
      description:
        "Tap into a wide panel of respondents for any of your market research needs.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Qualitative Research",
      description:
        "Tap into a wide panel of respondents for any of your market research needs.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      title: "Quantitative Research",
      description:
        "Tap into a wide panel of respondents for any of your market research needs.",
      icon: <LineChart className="w-6 h-6" />,
    },
    {
      title: "Quality Checks",
      description:
        "Tap into a wide panel of respondents for any of your market research needs.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
  ];

  return (
    <section className="ResearchCapablities-Div">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Left side - Image and Text */}
          <div className="md:col-span-5">
            <div className="relative">
              <div className="border border-black rounded-lg overflow-hidden mb-8">
                <img
                  src={GirlImage}
                  alt="Woman with phone"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-[#d5fdad] p-4 rounded-md mb-6 inline-block">
              <p className="font-barlow font-medium text-xl text-black">
                Unlock in-depth market insights
              </p>
            </div>

            <h2 className="font-barlow font-semibold text-4xl text-black mb-6">
              Everything You Need,<br />All in One Place
            </h2>

            <p className="font-barlow text-base text-black max-w-md">
              Harness our comprehensive solutions to unearth valuable insights
              that drive innovation, improve customer connections, and boost
              efficiency
            </p>
          </div>

          {/* Right side - Service Cards */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-white border border-black rounded-md relative overflow-hidden hover:shadow-lg transition-shadow h-[250px]"
                >
                  <CardContent className="p-6">
                    <div className="mb-6">
                      {card.icon}
                    </div>

                    <h3 className="font-barlow font-semibold text-black text-lg mb-4">
                      {card.title}
                    </h3>

                    <p className="font-barlow text-black text-base">
                      {card.description}
                    </p>

                    <div className="absolute bottom-0 right-0 bg-[#e8505e] p-3 rounded-tl-md">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};