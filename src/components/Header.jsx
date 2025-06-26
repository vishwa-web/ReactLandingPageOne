import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import "../assets/style.css"

import slider1 from "../assets/Screenshot 2025-06-01 140607.png"
import slider2 from "../assets/Screenshot 2025-06-01 140629.png"
import slider3 from "../assets/Screenshot 2025-06-01 140712.png"

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    {
      title: "Research Methods",
      content: {
        overview: "Understand our approach to B2B and B2C research.",
        sections: [
          {
            title: "Branding and Advertising Communication",
            items: [
              "Brand Perception Research",
              "Brand Awareness Research",
              "Brand Tracking Research",
              "Message Testing",
              "Advertising Effectiveness Research"
            ]
          },
          {
            title: "Market Opportunity Research",
            items: [
              "Go-to-market Research",
              "Market Feasibility Study",
              "Market Entry Research",
              "Competitive Research"
            ]
          },
          {
            title: "Product Research",
            items: [
              "Concept Testing Research",
              "Conjoint Analysis",
              "MaxDiff Analysis",
              "Product Validation Testing",
              "UI/UX Research"
            ]
          },
          {
            title: "Customer Research and Segmentation",
            items: [
              "Customer Journey Research",
              "Customer Loyalty Research",
              "Customer Satisfaction Research",
              "Persona Research",
              "Pricing Research"
            ]
          }
        ]
      }
    },
    {
      title: "Capabilities",
      content: {
        overview: "Explore our comprehensive research capabilities.",
        sections: [
          {
            title: "Research Design",
            items: ["Survey Design", "Sampling", "Data Collection", "Analysis"]
          },
          {
            title: "Methodologies",
            items: ["Qualitative", "Quantitative", "Mixed Methods", "Advanced Analytics"]
          }
        ]
      }
    },
    {
      title: "Industries",
      content: {
        overview: "Industry-specific research solutions.",
        sections: [
          {
            title: "Sectors",
            items: ["FMCG", "Technology", "Healthcare", "Finance", "Retail"]
          }
        ]
      }
    },
    {
      title: "Resources",
      content: {
        overview: "Access our knowledge base.",
        sections: [
          {
            title: "Insights",
            items: ["Case Studies", "White Papers", "Blog", "Webinars"]
          }
        ]
      }
    }
  ];
  
  const images = [slider1, slider2, slider3];

  return (
    <header className="relative w-full h-[671px]">
      {/* Fixed Navbar */}
      <nav className="fixed w-full h-[65px] bg-[#fbeeee] z-50">
        <div className="max-w-[1440px] mx-auto px-[159px] h-full flex items-center">
          <NavigationMenu className="max-w-none w-full">
            <NavigationMenuList className="gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-[#e8505e] data-[state=open]:text-white font-montserrat font-medium text-[#565656] tracking-[-0.80px] text-base hover:bg-transparent hover:text-[#565656]">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-screen bg-[#e8505e] text-white">
                      <div className="max-w-7xl mx-auto p-8">
                        <div className="grid grid-cols-4 gap-8">
                          <div className="col-span-1">
                            <h3 className="text-xl font-semibold mb-4">OVERVIEW</h3>
                            <p className="text-sm">{item.content.overview}</p>
                          </div>
                          {item.content.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-4">
                              <h4 className="font-semibold text-lg">{section.title}</h4>
                              <ul className="space-y-2">
                                {section.items.map((subItem, subIndex) => (
                                  <li key={subIndex} className="text-sm hover:underline cursor-pointer">
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport className="absolute top-full" />
          </NavigationMenu>

          <div className="flex gap-4 ml-auto">
            <Button
              variant="outline"
              className="w-[190px] h-8 border-[#3851a2] font-montserrat font-medium text-[#3851a2] text-base tracking-[-0.80px]"
            >
              Start Your Research
            </Button>
            <Button className="w-[190px] h-8 bg-[#e8505e] font-montserrat font-medium text-white text-base tracking-[-0.80px]">
              Join a Paid Focus Group
            </Button>
          </div>
        </div>
      </nav>

      <div className="absolute top-[65px] left-0 w-full h-[606px]">
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ease-in-out w-auto max-w-full h-full object-contain ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            />
          ))}

          {/* Slider Dots */}
          <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-[#e8505e]" : "bg-[#c1c1c1]"}`}
              ></span>
            ))}
          </div>
        </div>
      </div>

    </header>
  );
};
