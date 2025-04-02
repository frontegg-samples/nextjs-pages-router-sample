import { useLoginWithRedirect } from "@frontegg/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";

interface WelcomeProps {
  isHosted: boolean;
}

const Welcome = ({ isHosted }: WelcomeProps) => {
  const loginWithRedirect = useLoginWithRedirect();
  const router = useRouter();

  const login = () => {
    if (isHosted) {
      loginWithRedirect();
    } else {
      router.push("/account/login");
    }
  };

  return (
    <section className="section-screen">
      <div className="section-card welcome-card">
        <Image src="/assets/hug.png" alt="Welcome" width={56} height={56} />
        <div className="welcome-texts">
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-text">
            This is Frontegg&apos;s sample app that will let you experiment with
            our authentication flows.
          </p>
        </div>
        <button className="primary-button" onClick={() => login()}>
          Sign in
        </button>
      </div>
    </section>
  );
};

export default Welcome;
