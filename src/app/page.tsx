import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";

const testimonials = [
  {
    quote:
      "Jeff not only emerged as a talented BI developer and analyst, but a strong design oriented product owner. Jeff became my go-to collaborator when it came to delivering a product quickly and with the highest quality. He is a creative problem solver and always works with others to find common ground and compromise. He is a trusted collaborator and peer and I'm so glad to have had a chance to work with him!",
    name: "Tom Seiple",
    initials: "TS",
    title: "UX / Information Designer · Data Junkie",
    company: "CCC Intelligent Solutions",
  },
  {
    quote: "You operate as the Chief Operating Officer of our team.",
    name: "Gabe Anguiano",
    initials: "GA",
    title: "Product Owner",
    company: "CCC Intelligent Solutions",
  },
];

const skills = [
  "Python",
  "SQL",
  "Tableau",
  "LangChain",
  "LLMs & Generative AI",
  "Product Strategy",
  "Process Automation",
  "Machine Learning",
  "Data Pipelines",
  "Prompt Engineering",
  "Product Management",
  "Agile / Scrum",
  "Stakeholder Management",
  "Jira",
  "REST APIs",
  "Figma",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-accent font-medium mb-4 animate-fade-in-up">
              Data Analytics &middot; Product Management &middot; AI &middot; Process Automation
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-200">
              Building AI-powered products that turn data into{" "}
              <span className="text-accent">decisions</span>.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
              I&apos;m a data analytics professional and product manager who specializes in
              designing, building, and shipping AI & Data-driven products. I bridge the gap between
              engineering and business strategy to create measurable impact.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/projects"
                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
              >
                About Me <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Photo + details */}
          <div className="flex flex-col items-center gap-6 animate-fade-in-up animation-delay-400">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-border">
              <Image
                src="/images/Jeffs_MSBAphoto.jpg"
                alt="Jeff Luczak"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold mb-1">Jeff Luczak</h2>
              <p className="text-muted text-sm mb-3">Associate Manager, Product Owner · CCC Intelligent Solutions</p>
              <div className="flex items-center justify-center gap-1 text-sm text-muted">
                <MapPin size={14} />
                <span>Chicago, IL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-content mx-auto px-6 pb-24">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted mb-6">
          Tools &amp; Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* Testimonials — hidden until quotes confirmed */}
      {/* <section className="bg-accent">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-8">
            What People Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-8">
                <Quote size={20} className="text-accent/40 mb-3" />
                <p className="text-foreground text-lg leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{t.name}</p>
                    <p className="text-muted text-sm">{t.title} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured metrics */}
      <section className="border-t border-border">
        <div className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-4xl font-bold text-accent mb-2">5+</h3>
            <p className="text-muted">Years of experience in data analytics &amp; product management</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-accent mb-2">2+</h3>
            <p className="text-muted">Years of management & strategic planning experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-accent mb-2">20+</h3>
            <p className="text-muted">Products shipped from concept to launch</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-accent mb-2">2+</h3>
            <p className="text-muted">AI solutions ideated and delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-accent mb-2">$2M+</h3>
            <p className="text-muted">Revenue impact driven through data-informed decisions</p>
          </div>
        </div>
      </section>
    </>
  );
}
