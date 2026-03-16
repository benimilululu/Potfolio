"use client";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ShowingDiv } from "../functions/showingDiv";
import { projects } from "../data/projects";
import SectionShell from "./SectionShell";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Modal({ open, onClose, title, children }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <div
        className="glass w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 shadow-glass"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="text-sm font-semibold text-white/90">{title}</div>
          <button
            ref={closeButtonRef}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 hover:bg-white/10 hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}

function MediaThumb({ project, onOpen }) {
  const isVideo = project.media.type === "video";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/30"
      aria-label={`Open preview for ${project.title}`}
    >
      {isVideo ? (
        <>
          <video
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
            src={project.media.src}
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs text-white backdrop-blur">
            Video
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            Click to play
          </div>
        </>
      ) : (
        <>
          <img
            src={project.media.src}
            alt={project.media.alt ?? project.title}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        </>
      )}
    </button>
  );
}

function ProjectLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {links.map((l) => (
        <button
          key={l.label}
          type="button"
          onClick={l.onClick}
          className={cn(
            "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80",
            "hover:border-accent/30 hover:bg-accent/10 hover:text-white transition"
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default forwardRef(function Section3({ id }, ref) {
  const [isVisible, setIsVisible] = useState(false);
  ShowingDiv(ref, setIsVisible);

  const [openId, setOpenId] = useState(null);

  const openProject = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [openId]
  );

  return (
    <SectionShell
      className={cn("section3 -mt-8 pb-20 m-auto text-white font-bold md:-mt-12", isVisible ? "visible" : "")}
      id={id}
      ref={ref}
      title="Projects"
      subtitle="A few things I've built recently."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="glass rounded-[28px] border border-white/10 p-3 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-neon"
          >
            <MediaThumb project={p} onOpen={() => setOpenId(p.id)} />

            <div className="px-1 pt-4">
              <h3 className="text-base font-semibold text-white md:text-lg">
                {p.title}
              </h3>

              <p
                style={{ whiteSpace: "pre-line" }}
                className="mt-2 line-clamp-4 text-sm text-white/65"
              >
                {p.description}
              </p>

              {!!p.tags?.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <ProjectLinks links={p.links} />
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={!!openProject}
        onClose={() => setOpenId(null)}
        title={openProject?.title ?? "Preview"}
      >
        {openProject?.media.type === "video" ? (
          <video
            className="w-full rounded-xl border border-white/10 bg-black"
            src={openProject.media.src}
            controls
            autoPlay
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full rounded-xl border border-white/10"
            src={openProject?.media.src ?? ""}
            alt={openProject?.media.alt ?? openProject?.title ?? "Preview"}
          />
        )}

        {openProject?.description && (
          <p
            style={{ whiteSpace: "pre-line" }}
            className="mt-4 text-sm text-white/70 md:text-base"
          >
            {openProject.description}
          </p>
        )}
      </Modal>
    </SectionShell>
  );
});
