import React from 'react';
import { Card, CardContent } from "../components/ui/card";
import blogImageOne from "../assets/Screenshot 2025-06-01 163107.png"
import blogImageTwo from "../assets/Screenshot 2025-06-01 163119.png"
import blogImageThree from "../assets/Screenshot 2025-06-01 163235.png"
import blogImageFour from "../assets/Screenshot 2025-06-01 163206.png"
import ArrowImage from "../assets/Screenshot 2025-06-01 164310.png"

export const BlogSection = () => {
  // Blog posts data
  const blogPosts = [
    {
      image: blogImageOne,
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: blogImageTwo,
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: blogImageThree,
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
    {
      image: blogImageFour,
      description:
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing.",
    },
  ];

  return (
    <section className="w-full h-[534px] bg-[#eaffd5] mt-[100px]">
      <div className="px-[159px] pt-[50px]">
        <h2 className="font-['Barlow',Helvetica] font-semibold text-black text-[32px] mb-[30px]">
          Fresh Ideas to Help You Reach New Heights.
        </h2>

        <div className="flex gap-8 mt-[50px]">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="w-64 h-[329px] rounded-[5px] border border-solid border-black relative"
            >
              <img
                className="w-full h-[171px] object-cover"
                alt="Blog image"
                src={post.image}
              />

              <CardContent className="p-4">

                <p className="font-['Barlow',Helvetica] font-normal text-black text-base mt-4">
                  {post.description}
                </p>

                <div className="absolute w-[70px] h-[39px] bottom-0 right-0 bg-[url(/rectangle-9061.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-9 h-4 top-[11px] left-[17px]"
                    alt="Vector"
                    src= {ArrowImage}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};