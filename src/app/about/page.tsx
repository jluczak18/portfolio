import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "About | JLuczak",
  description: "Learn about my background in data analytics, product management, and AI product development.",
};

export default function AboutPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      {/* Profile header */}
      <div className="flex items-center gap-6 mb-10">
        <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-border shrink-0">
          <Image
            src="/images/Jeffs_MSBAphoto.jpg"
            alt="Jeff Luczak"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <div className="flex items-center gap-1 text-muted mt-2">
            <MapPin size={14} />
            <span className="text-sm">Chicago, IL</span>
          </div>
        </div>
      </div>

      {/* Bio + Quick Facts */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Bio */}
        <div>
          <p className="text-lg text-muted leading-relaxed mb-4">
            I&apos;m a data analytics professional turned product manager with a passion for
            building AI-powered products that solve real business problems. My unique
            combination of technical depth and strategic thinking allows me to bridge
            the gap between what&apos;s technically possible and what delivers business value.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Over the past several years, I&apos;ve shipped multiple AI products from
            zero-to-one — from defining the vision and building the business case, to
            working hands-on with engineering teams to bring ideas to life. I&apos;m
            equally comfortable writing SQL queries, building ML prototypes, and
            presenting strategy to C-suite stakeholders.
          </p>
        </div>

        {/* Quick facts */}
        <dl className="flex flex-col gap-5">
          <div className="flex gap-3">
            <Briefcase size={20} className="text-accent mt-1 shrink-0" />
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted">Focus Areas</dt>
              <dd className="mt-1">AI/ML Products, Data Strategy, Product Analytics</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <GraduationCap size={20} className="text-accent mt-1 shrink-0" />
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted">Education</dt>
              <dd className="mt-1">M.S. Business Analytics — Arizona State University</dd>
              <dd>B.S. Sports Management — Millikin University</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Award size={20} className="text-accent mt-1 shrink-0" />
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</dt>
              <dd className="mt-1">Google Product Management</dd>
              <dd>Tableau Desktop Specialist</dd>
            </div>
          </div>
        </dl>
      </div>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <Timeline />
      </section>
    </div>
  );
}
