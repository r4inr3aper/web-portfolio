import { PageTransition } from "@/components/animation/page-transition";

export default function Contact() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-4">
        <h2 className="text-xl sm:text-2xl font-medium mb-4">Contact ~</h2>
        <p className="text-sm sm:text-base text-zinc-300">
          Got a project, a question, or just wanna vibe? I’m always down to chat.
          Hit me up through the form or connect on any platform below.
        </p>
      </section>

      {/* Form */}
      <section className="w-full flex flex-col justify-start p-[0.4rem] mb-12">
        <form
          action="https://formspree.io/f/your_form_id" // ← replace with real Formspree ID
          method="POST"
          className="w-full max-w-2xl space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-zinc-400 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Jane Doe"
              className="bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-zinc-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-zinc-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What's on your mind?"
              className="bg-stone-900/40 border border-stone-800 rounded-lg px-4 py-2 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-stone-700 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-stone-800 hover:bg-stone-700 transition-colors rounded-lg px-4 py-2 text-white font-medium"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Socials */}
      <section className="w-full flex flex-col justify-start p-[0.4rem]">
        <h3 className="text-lg sm:text-xl font-medium mb-6">Find me here ~</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-6 gap-x-12">
          <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">Email</p>
            <a
              href="mailto:bedanta.074@gmail.com"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              bedanta.074@gmail.com
            </a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">GitHub</p>
            <a
              href="https://github.com/r4inr3aper"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              @r4inr3aper
            </a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">Leetcode</p>
            <a
              href="https://leetcode.com/u/xbedanta/"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              @r4inr3aper
            </a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/bedanta-kataki-0b5205257/"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              @bedanta
            </a>
          </div>
          <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">X (formerly Twitter)</p>
            <a
              href="https://x.com/bedantaxdev"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              @bedantaxdev
            </a>
          </div>
          {/* <div>
            <p className="mb-2 text-zinc-400 font-semibold text-sm">CV</p>
            <a
              href="https://read.cv/bedanta"
              className="text-white hover:opacity-80 transition-opacity underline"
              target="_blank"
            >
              read.cv/bedanta
            </a>
          </div> */}
        </div>
      </section>
    </PageTransition>
  );
}