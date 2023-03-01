import { ParticleNetwork, WalletEntryPosition } from "@particle-network/auth";

const particle = new ParticleNetwork({
    projectId: "xx",
    clientKey: "xx",
    appId: "xx",
    chainName: "Ethereum", //optional: current chain name, default Ethereum.
    chainId: 1, //optional: current chain id, default 1.
    wallet: {   //optional: by default, the wallet entry is displayed in the bottom right corner of the webpage.
    displayWalletEntry: true,  //show wallet entry when connect particle.
    defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet entry position
    supportChains: [{ id: 1, name: "Ethereum"}, { id: 5, name: "Ethereum"}], // optional: web wallet support chains.
    customStyle: {}, //optional: custom wallet style
    }
  });

export default particle;