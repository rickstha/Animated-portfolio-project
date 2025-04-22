import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { title } from "process";



const toolboxItems=[
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,

  },
  {
    title: "REACT", 
    iconType: ReactIcon,
  },
  {
    title: "CHROME",
    iconType: ChromeIcon,
  },
  {
    title: "GITHUB",
    iconType: GithubIcon,
  },
 
]

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Traveling",
    emoji: "✈️",
  },
  {
    title: "Cooking",
    emoji: "🍳",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Music",
    emoji: "🎶",
  }
]

export const AboutSection = () => {
  

  return <div className="pb-96">
    <SectionHeader eyebrow="About Us" title="A Glimpse Into Our world" desc="Learn more about who we are, what we do and what inspires me!"/>
    <div>
      <Card>
        <div>
          <StarIcon/>
          <h3>Books</h3>
          <p>Explore the books shaping our perspectives.</p>
        </div>
      <Image src={bookImage} alt="Book Cover"/>
      </Card>
      <Card>
        <div>
          <StarIcon/>
          <h3>Our Toolbox</h3>
          <p>Explore the technologies and tools to craft exceptional digital experiences.</p>
        </div>
      <div>
      {
        toolboxItems.map((item)=>(
          <div key={item.title}>
            <TechIcon component={item.iconType}/>
            <span>{item.title}</span>
          </div>
        ))
      }
      </div>
      </Card>

      <Card>
        <div>
          <StarIcon/>
          <h3>Beyond the Code</h3>
          <p>Explore my interests and hobbies beyond the digital experiences.</p>
        </div>
    
      </Card>

      <Card>
        <Image src={mapImage} alt="map"/>
        <Image src={smileEmoji} alt="smile"/>
      </Card>
    </div>

  </div>;
};
