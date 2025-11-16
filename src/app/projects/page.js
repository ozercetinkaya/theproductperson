"use client";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import url from "../../../constants";
import { useEffect, useState } from "react";

const STRAPI_URL = url;
const CT = "/projects";
export default function ProjectsPage() {
  // const projects = Array.isArray(projectsData?.data) ? projectsData.data : [];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchProjects = async () => {
      try {
        const res = await fetch(STRAPI_URL + CT + "?populate=thumbnail");
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        console.log(json);
        if (mounted) setProjects(json?.data || []);
      } catch (err) {
        console.error("Fetch failed for projects:", err);
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProjects();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-[80vh] bg-[#F8F5F2] py-16">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0095AF]">
            Selected Work
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-[#332E2E] sm:text-5xl">
            Projects that blend product thinking and crafted execution
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[#555]">
            A snapshot of initiatives where I shaped the vision, coordinated the
            roadmap, and partnered with cross-functional teams to launch
            measurable outcomes.
          </p>
        </header>

        {projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((item, idx) => {
              const key =
                item?.id ?? item?.attributes?.slug ?? `project-${idx}`;
              return <ProjectCard key={key} item={item} />;
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#d1c5b6] bg-white/40 p-12 text-center">
            <h2 className="text-2xl font-semibold text-[#332E2E]">
              Projects data not found
            </h2>
          </div>
        )}
      </section>
    </main>
  );
}
