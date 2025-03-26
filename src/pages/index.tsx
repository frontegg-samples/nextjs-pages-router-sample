import Welcome from "@/components/Welcome";
import { getSession } from "@frontegg/nextjs/pages";
import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <>
      <main>
        <Welcome />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req);
  if (session) {
    return { redirect: { destination: "/account", permanent: true } };
  }

  return { props: {} };
};
