import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg"
import Image from "next/image";
import Card from "@/components/Card";

const testimonials = [
  {
    name: "Techlooper Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Techlooper are instrumental in transforming our website into a powerful marketing tool. Their attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Techlooper was a pleasure. Their expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Techlooper's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Techlooper are the true frontend wizard. They took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Techlooper's work on our website has been nothing short of exceptional. They are talented developers team. We highly recommend them.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className=" py-16 lg:py-20">
    <div className="container">
    <SectionHeader eyebrow="Happy Clients" title="What Client Say About Us" desc="See what our clients have to say about our work."/>
 
    <div className=" mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className=" flex flex-none gap-8 py-3 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
      {
        testimonials.map((testimonial)=>(
          <Card key={testimonial.name} className=" max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
           <div className="flex gap-4 items-center">
            <div className=" size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className=" max-h-full"
            />
            </div>
            <div>
            <div className=" font-semibold">{testimonial.name}</div>
            <div className=" text-sm text-white/40">{testimonial.position}</div>
            </div>
            </div>
            <p className=" mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
            
          </Card>
        ))
      }
       {
        testimonials.map((testimonial)=>(
          <Card key={testimonial.name} className=" max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
           <div className="flex gap-4 items-center">
            <div className=" size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className=" max-h-full"
            />
            </div>
            <div>
            <div className=" font-semibold">{testimonial.name}</div>
            <div className=" text-sm text-white/40">{testimonial.position}</div>
            </div>
            </div>
            <p className=" mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
            
          </Card>
        ))
      }
      </div>
    </div>
    </div>
    </div>

};
