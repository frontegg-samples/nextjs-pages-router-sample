import AppLoader from "@/components/AppLoader";
import Header from "@/components/Header";
import SignupBanner from "@/components/SignupBanner";
import "@/styles/globals.css";
import { withFronteggApp } from "@frontegg/nextjs/pages";
import type { AppProps } from "next/app";
import Head from "next/head";

const DEFAULT_SANDBOX_CONTEXT = {
  baseUrl: "https://sandbox.frontegg.com",
  hostedAppId: "da398ff8-c069-428e-974a-afcded8c0c04",
  embeddedAppId: "ad6012f5-905f-430e-ad0d-64e85f0ba6c7",
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
          (process.env.FRONTEGG_APP_ID ===
            DEFAULT_SANDBOX_CONTEXT.embeddedAppId ||
            process.env.FRONTEGG_APP_ID === DEFAULT_SANDBOX_CONTEXT.hostedAppId)
        }
      />
      <AppLoader />
    </>
  );
}

export default withFronteggApp(App, {
  authOptions: {
    keepSessionAlive: true, // Uncomment this in order to maintain the session alive
  },
  customLoader: true,
});
