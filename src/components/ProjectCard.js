import Image from "next/image";
import Link from "next/link";
import getMediaUrl from "@/utils";

export default function ProjectCard({ item }) {
  const attrs = item?.attributes ?? item ?? {};
  const tags = Array.isArray(attrs.tags) ? attrs.tags : [];
  const highlights = Array.isArray(attrs.highlights) ? attrs.highlights : [];
  const links = Array.isArray(attrs.links) ? attrs.links : [];

  const thumbAttributes = attrs.thumbnail?.data?.attributes;
  const thumbnailUrl = thumbAttributes?.url
    ? getMediaUrl(thumbAttributes.url)
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#e5ded6] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 bg-[#F8F5F2]">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={thumbAttributes?.alternativeText || attrs.title || "Project"}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-[#777]">
            Image coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <header className="flex flex-col gap-1">
          <p className="text-sm font-medium text-[#0095AF]">
            {attrs.period || "TBD"}
          </p>
          <h3 className="text-xl font-semibold text-[#332E2E] leading-tight">
            {attrs.title || "Unnamed project"}
          </h3>
          {attrs.role && (
            <span className="text-sm text-[#6c645b]">{attrs.role}</span>
          )}
        </header>

        {attrs.description && (
          <p className="mt-3 text-sm leading-relaxed text-[#49413b]">
            {attrs.description}
          </p>
        )}

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <li
                key={typeof tag === "string" ? tag : `${idx}-${tag}`}
                className="rounded-full bg-[#F1EAE3] px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#6c645b]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-[#3e362f]">
            {highlights.map((highlight) => {
              const text =
                typeof highlight === "string"
                  ? highlight
                  : highlight?.bullet || "";
              if (!text) return null;
              const highlightId =
                typeof highlight === "object" && highlight?.id
                  ? highlight.id
                  : text;
              return (
                <li key={highlightId} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#0095AF]" />
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        )}

        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3 pt-4">
            {links.map((link) => {
              const label =
                typeof link === "string" ? link : link?.label || "View";
              const href =
                typeof link === "string" ? link : link?.url || "#";
              const linkId =
                typeof link === "object" && link?.id ? link.id : href;
              return (
                <Link
                  key={linkId}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0095AF] px-4 py-2 text-sm font-medium text-[#0095AF] transition-colors hover:bg-[#0095AF] hover:text-white"
                >
                  {label}
                  <span aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
