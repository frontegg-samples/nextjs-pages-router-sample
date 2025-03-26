import Welcome from "@/components/Welcome";
import { getSession } from "@frontegg/nextjs/pages";
import { GetServerSideProps } from "next";

interface HomeProps {
  isHosted: boolean;
}

export default function Home({ isHosted }: HomeProps) {
  return (
    <>
      <main>
        <Welcome isHosted={isHosted} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req);
  const isHosted = process.env.FRONTEGG_HOSTED_LOGIN === "true";
  if (session) {
    return { redirect: { destination: "/account", permanent: true } };
  }

  return { props: { isHosted } };
};
