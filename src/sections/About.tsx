"use client"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/naval.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import AzureDevopsIcon from "@/assets/icons/azure-devops.svg";
import dotnetIcon from "@/assets/icons/dotnet.svg";
import postmanIcon from "@/assets/icons/postman.svg";
import splunkIcon from "@/assets/icons/splunk.svg";
import jiraIcon from "@/assets/icons/jira.svg";
import awsIcon from "@/assets/icons/aws.svg";
import cppIcon from "@/assets/icons/cpp.svg";
import csharpIcon from "@/assets/icons/csharp.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import pythonIcon from "@/assets/icons/python.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji_custom_smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from "react";

const toolboxItems2 = [
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
  {
    title: 'MySQL',
    iconType: mysqlIcon,
  },
  {
    title: 'AWS',
    iconType: awsIcon,
  },
  {
    title: 'Azure Devops',
    iconType: AzureDevopsIcon,
  },
  {
    title: 'Postman',
    iconType: postmanIcon,
  },
  {
    title: 'Splunk',
    iconType: splunkIcon,
  },
  {
    title: 'Figma',
    iconType: figmaIcon,
  },
  {
    title: 'Jira',
    iconType: jiraIcon,
  },
];

const toolboxItems = [
  {
    title: 'C++',
    iconType: cppIcon,
  },
  {
    title: 'C#',
    iconType: csharpIcon,
  },
  {
    title: '.NET',
    iconType: dotnetIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'Tailwind',
    iconType: tailwindIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Python',
    iconType: pythonIcon,
  },
];

export const hobbies = [
  {
    title: 'Reading',
    emoji: '📖',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '47%',
    top: '10%',
  },
  {
    title: 'Painting',
    emoji: '🎨',
    left: '35%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '7%',
    top: '30%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '60%',
    top: '50%',
  },
  {
    title: 'Blogging',
    emoji: '👨🏻‍💻',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Cycling',
    emoji: '🚴🏻‍♂️',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="About">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my World"
          description="Learn about who I am, what i do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Atomic Habits Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and the tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
              <ToolboxItems
                items={toolboxItems2}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
