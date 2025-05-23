'use client';
import { PageTransition } from "@/components/animation/page-transition";
import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "Personal portfolio website built with modern web technologies featuring smooth animations and responsive design.",
      image: "https://assets-global.website-files.com/640f99c52b298c7753381c38/64227fdf55b3ddef95c18e5c_63eea96ea535cc41b88083ef_KkLQmdi5g7hcjsceNvVeC0XZ4B78p1wJWwRf2kHmgQE8vcYNhQeswTYpe06Pq_r3vRFMi6RDoslKP3r2XQXUtr6wq-O_W4ROZQF0mCtKlJ183XcHxcVKBfOHU9I8k9BFgrGnSgU5jJE2QrvZVus6BUI.png",
      imageAlt: "Screenshot of portfolio website homepage with dark theme",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "AWS"],
      link: "https://example.com",
      github: "https://github.com/username/portfolio",
      featured: true,
    },
    {
      id: 2,
      name: "E-commerce Platform",
      description: "Fully functional e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "https://assets-global.website-files.com/640f99c52b298c7753381c38/64227fdf55b3ddef95c18e5c_63eea96ea535cc41b88083ef_KkLQmdi5g7hcjsceNvVeC0XZ4B78p1wJWwRf2kHmgQE8vcYNhQeswTYpe06Pq_r3vRFMi6RDoslKP3r2XQXUtr6wq-O_W4ROZQF0mCtKlJ183XcHxcVKBfOHU9I8k9BFgrGnSgU5jJE2QrvZVus6BUI.png",
      imageAlt: "E-commerce platform product listing page",
      techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce",
      featured: true,
    },
    {
      id: 3,
      name: "AI Chat Application",
      description: "Real-time chat application with AI integration for smart responses and sentiment analysis.",
      image: "https://assets-global.website-files.com/640f99c52b298c7753381c38/64227fdf55b3ddef95c18e5c_63eea96ea535cc41b88083ef_KkLQmdi5g7hcjsceNvVeC0XZ4B78p1wJWwRf2kHmgQE8vcYNhQeswTYpe06Pq_r3vRFMi6RDoslKP3r2XQXUtr6wq-O_W4ROZQF0mCtKlJ183XcHxcVKBfOHU9I8k9BFgrGnSgU5jJE2QrvZVus6BUI.png",
      imageAlt: "AI chat application interface showing conversation",
      techStack: ["React", "Node.js", "Socket.io", "TensorFlow.js", "MongoDB"],
      link: "https://example.com/chat",
      github: "https://github.com/username/chat-app",
      featured: false,
    },
    {
      id: 4,
      name: "Task Management Tool",
      description: "Collaborative task management tool for teams with real-time updates and advanced filtering.",
      image: "https://assets-global.website-files.com/640f99c52b298c7753381c38/64227fdf55b3ddef95c18e5c_63eea96ea535cc41b88083ef_KkLQmdi5g7hcjsceNvVeC0XZ4B78p1wJWwRf2kHmgQE8vcYNhQeswTYpe06Pq_r3vRFMi6RDoslKP3r2XQXUtr6wq-O_W4ROZQF0mCtKlJ183XcHxcVKBfOHU9I8k9BFgrGnSgU5jJE2QrvZVus6BUI.png",
      imageAlt: "Task management dashboard showing kanban board",
      techStack: ["React", "Redux", "Express", "MongoDB", "JWT"],
      link: "https://example.com/tasks",
      github: "https://github.com/username/task-manager",
      featured: false,
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="w-full flex flex-col justify-start px-1 mb-6">
        <h2 className="text-xl sm:text-2xl font-medium">Projects ~</h2>
      </section>
      
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`border border-stone-800/90 rounded-lg overflow-hidden flex flex-col bg-stone-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-stone-900/50 ${project.featured ? 'ring-1 ring-stone-600/50' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative w-full h-40 overflow-hidden">
              <div className="absolute top-0 right-0 z-10 m-2">
                {project.featured && (
                  <span className="px-2 py-0.5 bg-stone-800/80 text-xs rounded-md text-amber-400 border border-amber-500/30">
                    Featured
                  </span>
                )}
              </div>
              <img 
                src={project.image} 
                alt={project.imageAlt} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-70"></div>
            </div>
            
            <div className="p-4 flex flex-col gap-2 flex-grow">
              <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
              <p className="text-xs text-zinc-300 line-clamp-2">{project.description}</p>
              
              <div className="mt-2">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-1 px-2 py-0.5 bg-stone-800/70 text-xs rounded-md text-zinc-300 border border-stone-700/50"
                    >
                      <Code size={10} className="text-zinc-400" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-auto pt-2 border-t border-stone-800/50">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-700/80 text-xs font-medium text-zinc-100 relative no-underline duration-300 ease-in hover:bg-stone-600/60 border border-stone-600/30 mt-2"
                >
                  <ExternalLink size={12} />
                  View Live
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-transparent text-xs font-medium text-zinc-300 relative no-underline duration-300 ease-in hover:bg-stone-800/80 border border-stone-700/30 mt-2"
                >
                  <Github size={12} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageTransition>
  );
}