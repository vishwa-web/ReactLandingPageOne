import React from 'react';
import { Separator } from "../components/ui/separator";
import LinkedIn from "../assets/LinkedIn.png"
import XLogo from "../assets/x.png"
import VWebsite from "../assets/vwebsite.png"
import Metrics from "../assets/MetricsLogo.png"

export const Footer = () => {
  // Footer links data
  const footerLinks = [
    {
      title: "Research Methods",
      links: [
        "Qualitative Research",
        "Quantitative Research",
        "Fieldwork",
        "Surveys",
        "Focus Group Discussions",
        "Quality checks",
      ],
    },
    {
      title: "Capabilites",
      links: [
        "Branding and Advertising Communication",
        "Market Opportunity Research",
        "Product Research",
        "Consumer Research and Segmentation",
      ],
    },
    {
      title: "Legal",
      links: [
        "Privacy",
        "AI Policy",
        "Business Conduct and Ethics",
        "Site Disclaimer",
      ],
    },
    {
      title: "Connect",
      links: ["Join Our Panel", "Request a Bid", "Careers", "Contact Us"],
    },
  ];

  return (
    <footer className="w-full h-[264px] bg-[#e8505e] mt-[10px]">
      <div className="px-[158px] pt-[38px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="ml-[11px]">
            <img
              className="w-[134px] h-[19px]"
              alt="Logo text"
              src={Metrics}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-[15px] mt-[24px]">
          <div className="w-10 h-10 bg-[#e8505e] rounded-[20px] border border-solid border-white flex items-center justify-center">
            <img
              className="w-[19px] h-[19px]"
              alt="Social icon"
              src={LinkedIn}
            />
          </div>
          <div className="w-10 h-10 bg-[#e8505e] rounded-[20px] border border-solid border-white flex items-center justify-center">
            <img
              className="w-[19px] h-[18px]"
              alt="X logo"
              src={XLogo}
            />
          </div>
          <div className="w-10 h-10 bg-[#e8505e] rounded-[20px] border border-solid border-white flex items-center justify-center">
            <img
              className="w-[21px] h-[18px]"
              alt="Social icon"
              src={VWebsite}
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex mt-[20px]">
          {footerLinks.map((section, index) => (
            <div key={index} className="mr-[13px]">
              <h3 className="font-['Barlow',Helvetica] font-semibold text-white text-base mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="font-['Barlow',Helvetica] font-normal text-white text-base"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Separator */}
        <Separator className="bg-white mt-[50px]" />

        {/* Copyright */}
        <div className="flex items-center mt-[14px]">
          <span className="font-['Barlow',Helvetica] font-normal text-white text-base mr-1">
            ©
          </span>
          <span className="font-['Barlow',Helvetica] font-normal text-white text-xs">
            Copyright 2025. All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};