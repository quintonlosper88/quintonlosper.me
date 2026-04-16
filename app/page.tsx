"use client";
import { HeaderPage } from "./components/header";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "./components/timeline";
import { experiences } from "@/lib/data/experience";
import { SectionTitle } from "./components/section";
import { education } from "@/lib/data/education";
import { EducationCard } from "./components/education";
import { Footer } from "./components/footer";
import QuoteCarousel from "./components/quotes";
import { Certification } from "./components/certification";
import { certification } from "@/lib/data/certification";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/project";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [showExp, setShowExp] = useState(false);

  // How many cards to show before clicking "View More"
  const VISIBLE_COUNT = 3;

  const displayedCerts = showAll
    ? certification
    : certification.slice(0, VISIBLE_COUNT);

  // Logic for Experience Timeline
  const displayedExperiences = showExp ? experiences : experiences.slice(0, 1);

  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
        <main className="container mx-auto flex flex-col py-20 px-6 md:px-16">
          <HeaderPage />
          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          <QuoteCarousel />
          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          <section id="global_projects" className=" bg-[#080808] ">
            <SectionTitle title="projects" subtitle="Global Projects" />
            <Projects />{" "}
          </section>

          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          {/* Experience */}
          <section id="experience" className=" bg-[#080808] ">
            <div className="max-w-7xl mx-auto">
              <SectionTitle
                title="Career Journey"
                subtitle="Strategic Timeline"
              />
              <div className="mt-20 space-y-4">
                {displayedExperiences.map((exp, i) => (
                  <Timeline key={i} {...exp} />
                ))}
              </div>

              {/* Career Path Toggle Button */}
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowExp(!showExp)}
                  className="group flex items-center gap-2 font-mono text-sm text-zinc-500 hover:text-amber-500 transition-colors"
                >
                  <span className="text-amber-500/50 ">❯</span>
                  {showExp ? (
                    <p className="text-2xl">
                      ./collapse_career.sh <ChevronUp className="w-4 h-4" />
                    </p>
                  ) : (
                    <p className="text-2xl flex flex-row items-center">
                      ./list_full_career_path.sh ({experiences.length} roles){" "}
                      <ChevronDown className="w-5 h-5 animate-bounce" />
                    </p>
                  )}
                </button>
              </div>
            </div>
          </section>

          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          {/* Academic Path */}
          <section id="academic" className="bg-[#080808] py-20">
            <div className="max-w-7xl mx-auto px-5">
              <SectionTitle
                title="Academic Path"
                subtitle="Foundation & Mastery"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {education.map((ed, i) => (
                  <EducationCard key={i} {...ed} />
                ))}
              </div>
            </div>
          </section>
          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          {/* Certifications */}
          <section id="Certification" className="bg-[#080808] py-20 ">
            <div className="max-w-7xl mx-auto px-5">
              <SectionTitle
                title="Certifications"
                subtitle="Validated Knowledge"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {displayedCerts.map((cert, i) => (
                  <Certification key={i} {...cert} />
                ))}
              </div>

              {/* View More / View Less Button */}
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group flex items-center gap-2 font-mono text-sm text-zinc-500 hover:text-amber-500 transition-colors"
                >
                  <span className="text-amber-500/50 ">❯</span>
                  {showAll ? (
                    <p className="text-2xl">
                      ./collapse_records.sh <ChevronUp className="w-4 h-4" />
                    </p>
                  ) : (
                    <p className="text-2xl flex flex-row items-center">
                      ./list_all_credentials.sh ({certification.length} items){" "}
                      <ChevronDown className="w-5 h-5 animate-bounce" />
                    </p>
                  )}
                </button>
              </div>
            </div>
          </section>
          <div className="my-12">
            <Separator className="bg-white/10" />
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>{" "}
    </>
  );
}
