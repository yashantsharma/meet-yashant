import { PageHero } from "@/components/ui/page-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Selected work across industries"
        description="Each project represents a distinct context — but the same approach: understand people, design systems, drive execution."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl space-y-4 px-6 lg:px-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
