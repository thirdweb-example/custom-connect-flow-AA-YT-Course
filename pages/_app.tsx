import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ACCOUNT_FACTORY_ADDRESS } from "../constants/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "<chain_id>";

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig = {
    factoryAddress: ACCOUNT_FACTORY_ADDRESS,
    gasless: true,
  }

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(embeddedWallet(), smartWalletConfig),
        smartWallet(metamaskWallet(), smartWalletConfig),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
