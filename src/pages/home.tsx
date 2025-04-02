import AccountInfo from "@/components/AccountInfo";
import { getSession } from "@frontegg/nextjs/pages";
import { GetServerSideProps } from "next";

export default function HomePage() {
  return (
    <main>
      <AccountInfo />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context.req);
  if (!session) {
    return { redirect: { destination: "/", permanent: true } };
  }

  return { props: {} };
};
