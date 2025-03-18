import Header from "@/components/Header";
import SignupBanner from "@/components/SignupBanner";
import "@/styles/globals.css";
import { withFronteggApp } from "@frontegg/nextjs/pages";
import type { AppProps } from "next/app";
import Head from "next/head";

const DEFAULT_SANDBOX_CONTEXT = {
  baseUrl: "https://sandbox.frontegg.com",
  clientId: "9af126b9-c35f-4e2d-a3f1-c261e22aaf4a",
  appId: "xxxx",
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontegg - Next hosted login</title>
        <meta
          name="description"
          content="Frontegg - Sample app for Next hosted login"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <SignupBanner
        isDefaultCredentials={
          process.env.FRONTEGG_BASE_URL === DEFAULT_SANDBOX_CONTEXT.baseUrl &&
          process.env.FRONTEGG_CLIENT_ID === DEFAULT_SANDBOX_CONTEXT.clientId
        }
      />
    </>
  );
}

export default withFronteggApp(App, {
  authOptions: {
    // keepSessionAlive: true, // Uncomment this in order to maintain the session alive
  },
});

