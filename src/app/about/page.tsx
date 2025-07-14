'use client'
import { useState } from "react";
import { PageTransition } from "@/components/animation/page-transition";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
  const [expandedExperiences, setExpandedExperiences] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const skills = {
    Languages: ["C/C++", "JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    Databases: [
      "MongoDB",
      "DynamoDB",
      "SQL",
      "QdrantDB",
      "Neo4j",
      "Pinecone",
      "PGVector",
      "PostgreSQL",
      "Redis",
    ],
    Frameworks: ["Express.js", "React.js", "Langchain.js", "Node.js"],
    "Tools & Technologies": [
      "Git",
      "REST API",
      "GraphQL",
      "Serverless",
      "Docker",
      "AWS",
      "WebSockets",
      "Vercel",
      "VS Code",
    ],
  };

  const experiences = [
    {
      id: "procurpal",
      company: "ProcUrPal",
      role: "Full Stack Developer Intern",
      period: "Dec 2024 - Apr 2025",
      logo: "/procurpal.png",
      description: "Worked on building an E-Auction Platform with Next.js, TypeScript and Node.js. Working on both frontend and backend systems, implementing database solutions and API integrations.",
      achievements: [
        "Developed dynamic dashboards for the eAuction module and integrated it into the existing RFX flow, enabling seamless multi-step auction workflows.",
        "Integrated QSign Digital Signature API to provide legally binding e-signatures with robust audit trails and automated approval workflows.",
        "Resolved bugs in the legacy RFX module and implemented WebSocket based real-time chat, improving responsiveness and overall user experience."
      ],
      link: "https://procurpal.in/"
    },
    {
      id: "gdsc",
      company: "Google Developers Students Clubs, NIT Silchar",
      role: "Core Member",
      period: "May 2023 - May 2025",
      logo: "https://students.engineering.asu.edu/wp-content/uploads/2023/06/GDSC-Crop.png",
      description: "Contributed to various projects and events organized by the club. Engaged in community building and knowledge sharing sessions. Actively participated in workshops and hackathons.",
      achievements: [
        "Organized and led technical workshops like Web Blitz 4.0 with 200+ attendees.",
        "Led a development team, conducted code reviews and resolved front-end and back-end issues to ensure smooth project execution.",
        "Mentored junior members in web development and project management best practices.",
      ],
      link: "https://gdscnits.in/"
    }
  ];

  return (
    <PageTransition>
      {/* About Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">About ~</h2>
        <p className="mb-4 text-sm sm:text-base">
          Crying over college assignments, trying to hit the gym consistently and
          trying to get familiar with{" "}
          <mark className="text-[hsla(32,98%,83%,.9)] font-thin rounded">
            dsa
          </mark>{" "}
          and{" "}
          <mark className="text-[hsla(32,98%,83%,.9)] font-thin rounded">
            cpp (oops)
          </mark>.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          I&apos;m confident enough with my web dev skills right now (still a noob
          though). Lately, I’ve been fascinated by GenAI and experimenting with it to bring fresh ideas to life.
        </p>
        <p className="mb-0 text-sm sm:text-base">
          Also exploring system design to build scalable apps and focusing on writing clean, production-level code.
        </p>
      </section>

      {/* Education Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Education ~</h2>
        
        {/* Education Card */}
        <div 
          className="border border-stone-800/90 p-6 rounded-lg bg-stone-900/30 hover:bg-stone-900/40 transition-all duration-300 shadow-md hover:shadow-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white p-[4px] rounded-md overflow-hidden flex items-center justify-center shrink-0">
              <img
                src="https://gyaanarth.com/wp-content/uploads/2022/09/logo.jpg"
                alt="College logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
                <h3 className="text-xl font-medium">
                <a
                  href="https://www.nits.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Institute of Technology, Silchar
                </a>
                </h3>
              <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                <span className="text-sm text-zinc-300 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  <span className="flex-shrink">B.Tech in Electronics and Instrumentation</span>
                </span>
                <span className="text-sm text-zinc-300 inline-flex items-center mt-1 sm:mt-0">
                  <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  2022 - 2026
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm text-zinc-200 mt-2 leading-relaxed">
            Currently pursuing my bachelor&apos;s degree with a focus on full-stack development and 
            modern web technologies. Actively participating in hackathons and tech events.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Experience ~</h2>
        
        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="border border-stone-800/90 p-6 rounded-lg bg-stone-900/30 hover:bg-stone-900/40 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row w-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="w-16 h-16 bg-zinc-800/50 rounded-md overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full p-[5px] object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                        <h3
                        className="text-xl font-medium cursor-pointer"
                        onClick={() => window.open(exp.link, "_blank", "noopener,noreferrer")}
                        tabIndex={0}
                        role="button"
                        aria-label={`Open ${exp.company} website`}
                        onKeyDown={e => {
                          if (e.key === "Enter" || e.key === " ") {
                          window.open(exp.link, "_blank", "noopener,noreferrer");
                          }
                        }}
                        >
                        {exp.company}
                        </h3>
                      <button 
                        onClick={() => toggleExpand(exp.id)} 
                        className="ml-2 p-2 rounded-full hover:bg-stone-800/50 transition-colors shrink-0 sm:hidden"
                        aria-label={expandedExperiences[exp.id] ? "Collapse details" : "Expand details"}
                      >
                        {expandedExperiences[exp.id] ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                      <span className="text-sm text-zinc-300 inline-flex items-center">
                        <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        {exp.role}
                      </span>
                      <span className="text-sm text-zinc-300 inline-flex items-center mt-1 sm:mt-0">
                        <svg className="w-4 h-4 mr-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => toggleExpand(exp.id)} 
                  className="hidden sm:block p-2 rounded-full transition-colors shrink-0"
                  aria-label={expandedExperiences[exp.id] ? "Collapse details" : "Expand details"}
                >
                  {expandedExperiences[exp.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-sm text-zinc-200 mt-2 leading-relaxed">
                {exp.description}
              </p>
              
              {/* Collapsible Content */}
              {expandedExperiences[exp.id] && (
                <div className="mt-4 pt-4 border-t border-stone-800/60 animate-slideDown">
                  <h4 className="font-medium text-sm mb-2 text-zinc-300">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="pl-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Skills ~</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6">
              <h3 className="text-lg font-medium mb-4 text-zinc-200">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 bg-stone-800/80 text-zinc-200 text-sm rounded-full hover:bg-stone-700/90 transition-all duration-200 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}