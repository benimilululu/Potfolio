import Restourant from '../images/ReastorantApp.png';
import sellTradeOnePic from '../images/3232-1.png';

import chatAppVideo from '../videos/chatAppVideo.mov';
import blockchainExplorer from '../videos/blockchainexplorer.mov';
import smartwalletVideo from '../videos/smartWalletDemoVideo.mp4';

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
  'This app is a smart crypto payment assistant built on top of basic wallet transfers. You can send normal one-off payments, save contacts for faster checkout, and see your recent on-chain history. On top of that, you can create semi-auto agents that prepare payments for things like rent, savings, or taxes so you just review and send. For fully hands-off workflows, full auto agents use a dedicated vault balance to trigger and execute payments automatically when conditions are met. And with the Splitter agent, the app can watch your incoming transactions on-chain and automatically split one payment by percentage across multiple addresses, based on the rules you set.';

const restaurantAppText =
  'Restaurant System for GTA 5 roleplay where you can get order and the orders are going in the kitchen where the chef is viewing and making the order. This if Full Stack based application with back-end MySQL.';

const handleClickBlockchain = () => {
  window.open(
    'https://blockchain-explorer-benimilululus-projects.vercel.app',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClickSmartWallet = () => {
  window.open(
    'https://github.com/benimilululu/SmartWallet',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClick = () => {
  window.open(
    'https://www.youtube.com/watch?v=cQR3nHvMDRE',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClickApp = () => {
  window.open(
    'https://sell-trade-web-app-4324.vercel.app',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClickAppReactCode = () => {
  window.open(
    'https://github.com/benimilululu/Sell-TradeWebApp',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClickAppTSCode = () => {
  window.open(
    'https://github.com/benimilululu/tsBuySell',
    '_blank',
    'noopener,noreferrer'
  );
};

const handleClickKonnecto = () => {
  window.open(
    'https://github.com/benimilululu/konnecto11',
    '_blank',
    'noopener,noreferrer'
  );
};

export const projects = [
  {
    id: 'smart-wallet',
    title: 'Smart Wallet App',
    description: smartWallerAppText,
    tags: ['Web3', 'Payments', 'React'],
    links: [{ label: 'GitHub Repository', onClick: handleClickSmartWallet }],
    media: { type: 'video', src: smartwalletVideo },
  },
  {
    id: 'blockchain-explorer',
    title: 'Blockchain mini Explorer',
    description: blockchainExplorerText,
    tags: ['Web3', 'Dashboard', 'EVM'],
    links: [{ label: 'Blockchain Explorer website', onClick: handleClickBlockchain }],
    media: { type: 'video', src: blockchainExplorer },
  },
  {
    id: 'konnecto',
    title: 'Konnecto Chat App',
    description: chatAppText,
    tags: ['Realtime', 'Supabase', 'i18n'],
    links: [{ label: 'Code on GitHub', onClick: handleClickKonnecto }],
    media: { type: 'video', src: chatAppVideo },
  },
  {
    id: 'buy-sell',
    title: 'Buy / Sell & Chat-App',
    description: topFindAppText,
    tags: ['Firebase', 'Chat', 'Marketplace'],
    links: [
      { label: 'Click here to preview the website', onClick: handleClickApp },
      { label: 'Github React Code', onClick: handleClickAppReactCode },
      { label: 'Github Refactored TypeScript Code', onClick: handleClickAppTSCode },
    ],
    media: { type: 'image', src: sellTradeOnePic, alt: 'Buy / Sell app preview' },
  },
  {
    id: 'restaurant',
    title: 'Restaurant System',
    description: restaurantAppText,
    tags: ['Full Stack', 'MySQL', 'Game RP'],
    links: [{ label: 'Click to watch YouTube tutorial', onClick: handleClick }],
    media: { type: 'image', src: Restourant, alt: 'Restaurant system preview' },
  },
];
