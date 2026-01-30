"use client";
import { forwardRef, useState } from "react";

import { Timeline } from "../ui/timeline";

import Restourant from "../images/ReastorantApp.png";

import sellTradeOnePic from "../images/3232-1.png";

import { ShowingDiv } from "../functions/showingDiv";

import chatAppVideo from "../videos/chatAppVideo.mov";

import blockchainExplorer from "../videos/blockchainexplorer.mov";

import smartwalletVideo from "../videos/smartWalletDemoVideo.mp4";

const blockchainExplorerText = `Blockchain Wallet Insight Dashboard
This interactive tool lets you explore any Ethereum wallet's activity in one simple view. Just connect your Web3 wallet or paste an address to instantly see: your current ETH balance with live USD conversion, also some ERC-20 token holdings, and the last five transactions with network fee details. Our smart calculator helps you estimate gas savings when moving funds between networks, potentially saving you money on every transfer. As a fun visual reward, your wallet's balance unlocks special tier imagery - watch your status grow from Bronze to Platinum as your holdings increase. Everything updates in real-time, giving you the clearest picture of your on-chain activity.

`;

const chatAppText = `Multilingual Chat App
Chat in any language, receive in any language
Our web app lets you communicate seamlessly across languages.

Key Features:\n ✓ Send messages in any language \n✓ Receive messages automatically translated to your preferred language \n✓ Translate individual messages on-demand\n ✓ Real-time conversations powered by Supabase \n✓ Smart language detection (translates only when 55%+ confident)

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

const btnStyle =
  "h-full mt-3 backdrop-blur-xl bg-transparent md:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto border-2 border-white";

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

const data = [
  {
    title: "Smart Wallet App",
    content: (
      <div>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-neutral-200 text-md md:text-xl font-semibold mb-8 text-left"
        >
          {smartWallerAppText}
        </p>
        <div className="pb-10">
          <button className={btnStyle} onClick={handleClickSmartWallet}>
            Github Repository
          </button>
        </div>
        <div className="grid">
          <video
            className="rounded-lg object-cover h-50 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            muted
            src={smartwalletVideo}
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Blockchain mini Explorer",
    content: (
      <div>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-neutral-200 text-md md:text-xl font-semibold mb-8 text-left"
        >
          {blockchainExplorerText}
        </p>
        <div className="pb-10">
          <button className={btnStyle} onClick={handleClickBlockchain}>
            Blockchain Explorer website
          </button>
        </div>
        <div className="grid">
          <video
            className="rounded-lg object-cover h-50 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            muted
            src={blockchainExplorer}
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Konnecto Chat App",
    content: (
      <div>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-neutral-200 text-md md:text-xl font-semibold mb-8 text-left"
        >
          {chatAppText}
        </p>
        <div className="pb-10">
          <button className={btnStyle} onClick={handleClickKonnecto}>
            Code on GitHub
          </button>
        </div>
        <div className="grid">
          <video
            className="rounded-lg object-cover h-50 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            controls
            muted
            src={chatAppVideo}
            width={300}
            height={300}
          />
        </div>
      </div>
    ),
  },

  {
    title: "Buy / Sell & Chat-App",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-xl font-semibold mb-8">
          {topFindAppText}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <button className={btnStyle} onClick={handleClickApp}>
              Click here to preview the website
            </button>
          </div>

          <div className="">
            <button className={btnStyle} onClick={handleClickAppReactCode}>
              Github React Code
            </button>
          </div>
          <div>
            <button className={btnStyle} onClick={handleClickAppTSCode}>
              Github Refactored TypeScript Code
            </button>
          </div>
        </div>

        <div className="grid">
          <img
            src={sellTradeOnePic}
            alt="startup template"
            width={500}
            height={500}
            className="object-cover h-50 md:h-44 lg:h-full w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Restaurant System",
    content: (
      <div>
        <p className="text-neutral-200 text-md md:text-xl font-semibold mb-8">
          {restaurantAppText}
        </p>
        <div className="pb-10">
          <button className={btnStyle} onClick={handleClick}>
            Click to watch YouTube tutorial
          </button>
        </div>
        <div className="grid">
          <img
            src={Restourant}
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-50 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

export default forwardRef(function Section3(props, ref) {
  const [isVisible, setIsVisible] = useState(false);

  ShowingDiv(ref, setIsVisible);

  return (
    <div
      className={`section3 pb-20 m-auto md:grid md:grid-cols-1 md:w-5/6  text-white font-bold ${
        isVisible ? "visible" : ""
      }`}
      ref={ref}
    >
      <div className=""></div>
      <Timeline data={data} />
    </div>
  );
});
