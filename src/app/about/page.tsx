import { PageTransition } from "@/components/animation/page-transition";

export default function About() {
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
      "AWS",
      "WebSockets",
      "VS Code",
    ],
  };

  return (
    <PageTransition>
      {/* Now Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">About ~</h2>
        <p className="mb-4 text-sm sm:text-base">
          Crying over college assignments, trying to hit the gym consistently, and
          trying to get familiar with <mark className="text-[hsla(32,98%,83%,.9)] font-slim rounded">dsa</mark>, and{" "}
          <mark className="text-[hsla(32,98%,83%,.9)] font-slim rounded">java (oops)</mark>.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          I&apos;m confident enough with my web dev skills right now (still a noob
          though). Trying to learn swift/swiftUI to build a macos menubar app
          while completely ignoring my end semester exams.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Apart from all this, I&apos;m also trying to write more content and
          craft beatiful animated ui components.
        </p>
      </section>

      {/* Education Section */}
      <section className="w-full p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-6">Education ~</h2>
        
        {/* Education Card */}
        <div className="border border-stone-800/90 p-5 rounded-lg bg-stone-900/20 hover:bg-stone-900/30 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-zinc-800/50 rounded-md overflow-hidden flex items-center justify-center mr-4">
              <img
                src="https://gyaanarth.com/wp-content/uploads/2022/09/logo.jpg"
                alt="College logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">National Institute of Technology, Silchar</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm text-zinc-400 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  B.Tech in Electronics and Instrumentation
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-zinc-400 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  2022 - 2026
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Currently pursuing my bachelor&apos;s degree with a focus on full-stack development and 
            modern web technologies. Actively participating in hackathons and tech events.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="w-full p-[0.4rem] mb-8">
        <h2 className="text-xl sm:text-2xl font-medium mb-6">Work Experience ~</h2>
        
        {/* Work Experience Card */}
        <div className="border border-stone-800/90 p-5 rounded-lg bg-stone-900/20 hover:bg-stone-900/30 transition-colors duration-300">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-zinc-800/50 rounded-md overflow-hidden flex items-center justify-center mr-4">
              <img
                src="https://procurpal.in/wp-content/uploads/2024/05/Logo_White.jpg"
                alt="Company logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium">ProcUrPal</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm text-zinc-400 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Full Stack Developer Intern
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm text-zinc-400 inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Dec 2024 - Apr 2025
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Building modern web applications with React, TypeScript and Node.js. Working on both 
            frontend and backend systems, implementing database solutions and API integrations.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h2 className="text-xl sm:text-2xl font-medium mb-6">Skills ~</h2>
        
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-stone-800/70 text-white text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageTransition>
  );
}