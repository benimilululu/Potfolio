import { forwardRef, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub, FaRegEnvelope } from "react-icons/fa6";

import { ShowingDiv } from "../functions/showingDiv";
import SectionShell from "./SectionShell";

export default forwardRef(function Contact({ id }, ref) {
  const [isVisible, setIsVisible] = useState(false);

  const fullName = "Martin Jovanovic";
  const email = "jovanovik.martin2@gmail.com";

  ShowingDiv(ref, setIsVisible);

  const handleClickGithubProfile = () => {
    window.open("https://github.com/benimilululu", "_blank", "noopener,noreferrer");
  };

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    "Inquiry"
  )}&body=${encodeURIComponent("Hello, I'm contacting you regarding...")}`;

  return (
    <SectionShell
      className={`contact pb-10 text-white ${isVisible ? "visible" : ""}`}
      id={id}
      ref={ref}
      title="Get In Touch"
      subtitle="Available for freelance work, collaborations, and front-end product roles."
    >
      <div className="glass mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.28),rgba(124,58,237,0.16)_42%,rgba(255,255,255,0.04)_100%)] px-5 py-8 shadow-glass md:px-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent/85">
              Contact Info
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              {fullName}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted">
              If you want to discuss a product, a redesign, or a JavaScript-heavy front-end build, send me a message and I will get back to you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/12 px-5 py-3 text-sm font-semibold text-white shadow-neon transition hover:bg-accent/20 hover:shadow-neon-lg"
              >
                <FaRegEnvelope className="text-sm" />
                Send Email
              </a>

              <button
                type="button"
                className="glass inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/30 hover:bg-white/10"
                onClick={handleClickGithubProfile}
              >
                <FaGithub className="text-base" />
                Github Profile
              </button>
            </div>
          </div>

          <div className="glass rounded-[28px] border border-white/10 p-5 text-left">
            <div className="flex items-center gap-3 text-white">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <TfiEmail className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
                  Email
                </p>
                <EmailLink email={email} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
});

function EmailLink({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="mt-1 inline-flex border-b border-white/20 text-sm text-white/90 transition hover:border-accent/40 hover:text-white"
    >
      {email}
    </a>
  );
}
