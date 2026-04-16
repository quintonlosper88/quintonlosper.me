"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Award, ShieldCheck, FileText, Download, Terminal } from "lucide-react";

interface CertificationProps {
  certificate: string;
  institution: string;
  issueDate: string;
  url: string;
}

export const Certification = ({
  certificate,
  institution,
  issueDate,
  url,
}: CertificationProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative z-10 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1">
          <Card className="h-full border-zinc-800 bg-[#0c0c0c] transition-colors duration-300 group-hover:border-amber-500/50">
            <CardHeader className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <Award className="text-amber-500 w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-tighter">
                  [{issueDate}]
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-sm leading-tight uppercase text-zinc-100 group-hover:text-amber-500 transition-colors">
                  {certificate}
                </h3>
                <p className="text-[11px] text-zinc-500 font-mono uppercase tracking-widest flex items-center gap-1">
                  <span className="text-amber-500/50">❯</span> {institution}
                </p>
              </div>
            </CardHeader>

            <CardContent className="p-4 pt-0">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase text-zinc-400 group-hover:text-amber-400 transition-colors">
                <FileText className="w-3 h-3" />
                View Document
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>

      {/* FIXED DIALOG CONTENT:
          1. !max-w-[95vw] overrides the default Shadcn max-width.
          2. flex flex-col allows the iframe container to grow.
      */}
      <DialogContent className="!max-w-[95vw] h-[90vh] bg-[#080808] border-zinc-800 p-0 overflow-hidden gap-0 flex flex-col">
        <DialogHeader className="p-4 border-b border-zinc-800 flex flex-row items-center justify-between space-y-0 shrink-0">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-amber-500" />
            <DialogTitle className="text-zinc-100 text-sm font-mono truncate max-w-[200px] md:max-w-md">
              cat {certificate.toLowerCase().replace(/\s+/g, "_")}.pdf
            </DialogTitle>
          </div>

          <div className="flex items-center gap-2 mr-8">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 text-zinc-400 hover:text-amber-500 border border-zinc-800 transition-all text-[10px] font-mono"
              >
                <Download className="w-3 h-3" />
                OPEN_EXTERNAL
              </a>
            ) : (
              <span className="text-[10px] font-mono text-zinc-600 italic">
                NO_LOCAL_SOURCE
              </span>
            )}
          </div>
        </DialogHeader>

        {/* FIXED IFRAME CONTAINER:
            1. flex-1 makes this div take up all remaining height.
            2. absolute positioning on the iframe ensures it fills the div perfectly.
        */}
        <div className="flex-1 w-full bg-zinc-950 relative">
          {url ? (
            <iframe
              src={`${url}#view=FitH&toolbar=0&navpanes=0`}
              className="absolute inset-0 w-full h-full border-none"
              title={certificate}
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 font-mono text-xs gap-4">
              <ShieldCheck className="w-12 h-12 text-zinc-800" />
              <p>ERROR: DOCUMENT_NOT_FOUND_IN_LOCAL_SYSTEM</p>
              <p className="text-[10px] text-zinc-700 text-center px-4">
                Verification required via external provider.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
