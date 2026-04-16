import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import { Linkedin } from "@/components/Linkedin";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profilepic from "@/public/profilepic.jpg";
import Image from "next/image";
import { profile } from "console";
export const HeaderPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Text Content */}
        <div className="col-span-2">
          <p className="text-sm uppercase tracking-[0.3em]  mb-2">Hi, I am</p>
          <h1 className="text-2xl font-sans uppercase tracking-tighter text-gray-400 mb-2">
            Quinton Losper
          </h1>
          <h2 className="text-4xl font-bold md:text-3xl text-amber-600 uppercase   mb-6">
            The Digital Metallurgist
          </h2>

          {/* Action Buttons */}
          <div className=" flex flex-row items-center gap-4 mb-5">
            <Button className="font-bold border rounded-lg bg-amber-600 hover:bg-amber-700 text-black px-8 py-6  uppercase tracking-widest text-xs transition-all">
              Hire Me
            </Button>
            <Button
              variant="outline"
              className="font-bold border-white/20 px-8 py-6  uppercase tracking-widest text-xs hover:bg-white/10 transition-all hover:border-white"
            >
              Download CV <FileText className="text-amber-500" />
            </Button>
          </div>
          <div className="flex flex-row items-center gap-4"></div>
          <div className="flex gap-4 mb-12">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all cursor-pointer group shadow-xl">
              <a href="https://www.linkedin.com/in/quinton-losper/">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            {/* <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all cursor-pointer group shadow-xl"> */}
            {/*   <Github className="w-5 h-5 group-hover:scale-110 transition-transform" /> */}
            {/* </div> */}
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all cursor-pointer group shadow-xl">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          {/* Projects experience highlights */}
          <div className="">
            <Card className="bg-zinc-900 rounded-md w-auto">
              <CardDescription className="p-5">
                <div className="flex h-5 items-center gap-4 p-5">
                  <div className="px-8">
                    <span className="text-amber-500 font-bold text-2xl mb-5">
                      15+
                    </span>
                    <p className="uppercase">Years Experience</p>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="text-white bg-white"
                  />
                  <div className="px-8">
                    <span className="text-amber-500 font-bold text-2xl mb-5">
                      20+
                    </span>
                    <p className="uppercase">Projects</p>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="text-white bg-white"
                  />
                  <div className="px-8">
                    <span className="text-amber-500 font-bold text-2xl mb-5">
                      5+
                    </span>
                    <p className="uppercase">Apps Developed</p>
                  </div>
                </div>
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* Profile Image Placeholder - Styled to match the dark theme */}
        <div className="aspect-square bg-zinc-900 border border-white/5 rounded-full hidden md:block overflow-hidden">
          <Image
            src={profilepic}
            alt="Quinton"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
