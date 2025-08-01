import NotFound from "@/app/not-found";
import { PROJECTS } from "@/app/projects";
import CustomTextLink from "@/components/CustomLink";
import Link from "next/link";

export async function generateStaticParams() {
  return PROJECTS.map(f => { return { id: f.id.toString() } })
}


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = PROJECTS.find(f => f.id.toString() == id);
  if (!project) {
    return <NotFound />;
  }
  return (
    <main className="flex flex-col items-center p-8">
      <div className="w-8/10">
        <div className="text-center text-3xl font-bold text-(--third)">
          {project.title}
        </div>
        <div className="flex flex-col place-items-start pt-4 items-center text-center">
          {project.briefDescription}
        </div>
        <div>
          <div>
            <h2>Link</h2>
            <CustomTextLink href={project.link} name={project.link} />
          </div>
          {project.description &&
            <div>
              <h2>Description</h2>
              {project.description}
            </div>
          }
          <div>
            <h2>Tools used</h2>
            <div className="gap-y-3">
              {
                project.tools.map(tool =>
                  <div key={tool.id} className="mb-4">
                    <CustomTextLink href={tool.link}>
                      <div className="inline-flex items-center gap-3 underline">
                        {tool.icon} {tool.name}
                      </div>
                    </CustomTextLink>
                    <div className="opacity-70">{tool.description}</div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
