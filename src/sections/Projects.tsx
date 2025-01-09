import manageUILandingPage from "@/assets/images/manage-ui-landing-page.png";
import memoryGameUI from "@/assets/images/memory-game-ui.png";
import aiImagegenerator from "@/assets/images/ai-image-generator.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Ima-Gen.AI",
    year: "2024",
    title: "AI Image Generator App",
    results: [
      { title: "Achieved 85% user satisfaction with images" },
      { title: "Generated images in under 5 seconds" },
      { title: "Can generate of upto 4 images at once" },
    ],
    link: "https://v15h4nk-g03l.github.io/AI-Image-Generator/",
    image: aiImagegenerator,
  },
  {
    company: "Gamers Co",
    year: "2023",
    title: "Memory Game : 4x4 Tiles",
    results: [
      { title: "90% player success rate on first attempt" },
      { title: "Average completion time of 30 seconds" },
      { title: "5-star rating by 80% of players" },
    ],
    link: "https://v15h4nk-g03l.github.io/Memory-Game/",
    image: memoryGameUI,
  },
  {
    company: "Manage Inc",
    year: "2022",
    title: "Modern UI Landing Page",
    results: [
      { title: "Experienced 75% user satisfaction" },
      { title: "Achieved 98% browser compatibility" },
      { title: "Mobile load time averaged 0.8 seconds" },
    ],
    link: "https://v15h4nk-g03l.github.io/Responsive-Webpage-UI/",
    image: manageUILandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <SectionHeader 
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
              top: `calc(70px + ${projectIndex * 35}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      //Added a Key Here
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
};