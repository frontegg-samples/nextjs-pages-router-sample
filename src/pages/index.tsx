import WelcomeSection from "@/components/Welcome";
import { getSession } from "@frontegg/nextjs/pages";
import { GetServerSideProps } from "next";

interface WelcomeProps {
  isHosted: boolean;
}

export default function Welcome({ isHosted }: WelcomeProps) {
  return (
    <>
      <main>
        <WelcomeSection isHosted={isHosted} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req);
  const isHosted = process.env.FRONTEGG_HOSTED_LOGIN === "true";
  if (session) {
    return { redirect: { destination: "/home", permanent: true } };
  }

  return { props: { isHosted } };
};
