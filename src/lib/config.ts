'use client';

import { http, createStorage, cookieStorage, useReadContract } from 'wagmi'
import { sepolia, bscTestnet, blastSepolia } from 'wagmi/chains'
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit'




const projectId = '6cd6799eb0faf3996dc29a45a642250f';

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];






export const config = getDefaultConfig({
   appName: 'WalletConnection',
   projectId,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http("https://rpc.testnet.rss3.io") }), {})
 });


 