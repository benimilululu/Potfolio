"use client";
import { forwardRef, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { ShowingDiv } from "../functions/showingDiv";

import Restourant from "../images/ReastorantApp.png";
import sellTradeOnePic from "../images/3232-1.png";

import chatAppVideo from "../videos/chatAppVideo.mov";
import blockchainExplorer from "../videos/blockchainexplorer.mov";
import smartwalletVideo from "../videos/smartWalletDemoVideo.mp4";

const blockchainExplorerText = `Blockchain Wallet Insight Dashboard
This interactive tool lets you explore any Ethereum wallet's activity in one simple view. Just connect your Web3 wallet or paste an address to instantly see: your current ETH balance with live USD conversion, also some ERC-20 token holdings, and the last five transactions with network fee details. Our smart calculator helps you estimate gas savings when moving funds between networks, potentially saving you money on every transfer. As a fun visual reward, your wallet's balance unlocks special tier imagery - watch your status grow from Bronze to Platinum as your holdings increase. Everything updates in real-time, giving you the clearest picture of your on-chain activity.

`;

const chatAppText = `Multilingual Chat App
Chat in any language, receive in any language
Our web app lets you communicate seamlessly across languages.

Key Features:\n ✓ Send messages in any language \n✓ Receive messages automatically translated to your preferred language \n✓ Translate individual messages on-demand\n ✓ Real-time conversations powered by Supabase \n✓ Smart language detection (translates only when 55%+ confident)

How it works:
1. Type your message in any language
2. Recipients get it in their chosen language
3. Click any message to see original/alternative translations
4. Enjoy fluid conversations with automatic or manual translations
Built with React (frontend) connected with Supabase (backend) and Docker (backend) for reliable performance.`;

const topFindAppText = `A sleek web app for buying and selling, featuring real-time chat. Users can add listings and instantly connect with buyers or sellers. Powered by Firebase for seamless chat updates and secure data storage.`;

const smartWallerAppText =
  "This app is a smart crypto payment assistant built on top of basic wallet transfers. You can send normal one-off payments, save contacts for faster checkout, and see your recent on-chain history. On top of that, you can create semi-auto agents that prepare payments for things like rent, savings, or taxes so you just review and send. For fully hands-off workflows, full auto agents use a dedicated vault balance to trigger and execute payments automatically when conditions are met. And with the Splitter agent, the app can watch your incoming transactions on-chain and automatically split one payment by percentage across multiple addresses, based on the rules you set.";

const restaurantAppText =
  "Restaurant System for GTA 5 roleplay where you can get order and the orders are going in the kitchen where the chef is viewing and making the order. This if Full Stack based application with back-end MySQL.";

const handleClickBlockchain = () => {
  window.open(
    "https://blockchain-explorer-benimilululus-projects.vercel.app",
    "_blank"
  );
};

const handleClickSmartWallet = () => {
  window.open("https://github.com/benimilululu/SmartWallet", "_blank");
};

const handleClick = () => {
  window.open("https://www.youtube.com/watch?v=cQR3nHvMDRE", "_blank");
};

const handleClickApp = () => {
  window.open("https://sell-trade-web-app-4324.vercel.app", "_blank");
};

const handleClickAppReactCode = () => {
  window.open("https://github.com/benimilululu/Sell-TradeWebApp", "_blank");
};

const handleClickAppTSCode = () => {
  window.open("https://github.com/benimilululu/tsBuySell", "_blank");
};

const handleClickKonnecto = () => {
  window.open("https://github.com/benimilululu/konnecto11", "_blank");
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="text-sm font-semibold text-white/90">{title}</div>
          <button
            className="rounded-lg px-3 py-1 text-sm text-white/70 hover:bg-white/10 hover:text-white"
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
      className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white/20"
      aria-label={`Open preview for ${project.title}`}
    >
      {isVideo ? (
        <>
          <video
            className="h-full w-full object-cover opacity-95 transition group-hover:scale-[1.02]"
            src={project.media.src}
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
             Video
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            Click to play
          </div>
        </>
      ) : (
        <>
          <img
            src={project.media.src}
            alt={project.media.alt ?? project.title}
            className="h-full w-full object-cover opacity-95 transition group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
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
            "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80",
            "hover:bg-white/10 hover:text-white transition"
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

const projects = [
  {
    id: "smart-wallet",
    title: "Smart Wallet App",
    description: smartWallerAppText,
    tags: ["Web3", "Payments", "React"],
    links: [{ label: "GitHub Repository", onClick: handleClickSmartWallet }],
    media: { type: "video", src: smartwalletVideo },
  },
  {
    id: "blockchain-explorer",
    title: "Blockchain mini Explorer",
    description: blockchainExplorerText,
    tags: ["Web3", "Dashboard", "EVM"],
    links: [{ label: "Blockchain Explorer website", onClick: handleClickBlockchain }],
    media: { type: "video", src: blockchainExplorer },
  },
  {
    id: "konnecto",
    title: "Konnecto Chat App",
    description: chatAppText,
    tags: ["Realtime", "Supabase", "i18n"],
    links: [{ label: "Code on GitHub", onClick: handleClickKonnecto }],
    media: { type: "video", src: chatAppVideo },
  },
  {
    id: "buy-sell",
    title: "Buy / Sell & Chat-App",
    description: topFindAppText,
    tags: ["Firebase", "Chat", "Marketplace"],
    links: [
      { label: "Click here to preview the website", onClick: handleClickApp },
      { label: "Github React Code", onClick: handleClickAppReactCode },
      { label: "Github Refactored TypeScript Code", onClick: handleClickAppTSCode },
    ],
    media: { type: "image", src: sellTradeOnePic, alt: "Buy / Sell app preview" },
  },
  {
    id: "restaurant",
    title: "Restaurant System",
    description: restaurantAppText,
    tags: ["Full Stack", "MySQL", "Game RP"],
    links: [{ label: "Click to watch YouTube tutorial", onClick: handleClick }],
    media: { type: "image", src: Restourant, alt: "Restaurant system preview" },
  },
];

export default forwardRef(function Section3(props, ref) {
  const [isVisible, setIsVisible] = useState(false);
  ShowingDiv(ref, setIsVisible);

  const [openId, setOpenId] = useState(null);

  const openProject = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [openId]
  );

  return (
    <section
      className={cn(
        "section3 pb-20 m-auto text-white font-bold",
        "w-full max-w-6xl px-4 md:px-0 md:w-5/6",
        isVisible ? "visible" : ""
      )}
      ref={ref}
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mt-2 text-sm md:text-base text-white/60">
          A few things Ive built recently.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-sm backdrop-blur"
          >
            <MediaThumb project={p} onOpen={() => setOpenId(p.id)} />

            <div className="px-1 pt-4">
              <h3 className="text-base md:text-lg font-semibold text-white">
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
            className="w-full rounded-xl bg-black"
            src={openProject.media.src}
            controls
            autoPlay
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full rounded-xl"
            src={openProject?.media.src ?? ""}
            alt={openProject?.media.alt ?? openProject?.title ?? "Preview"}
          />
        )}

        {openProject?.description && (
          <p
            style={{ whiteSpace: "pre-line" }}
            className="mt-4 text-sm md:text-base text-white/70"
          >
            {openProject.description}
          </p>
        )}
      </Modal>
    </section>
  );
});
