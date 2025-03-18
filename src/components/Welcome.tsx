import { useLoginWithRedirect } from "@frontegg/nextjs";
import Image from "next/image";

const Welcome = () => {
  const loginWithRedirect = useLoginWithRedirect();

  return (
    <div className="section-card welcome-card">
      <Image src="/assets/hug.png" alt="Welcome" width={56} height={56} />
      <div className="welcome-texts">
        <h1 className="welcome-title">Welcome!</h1>
        <p className="welcome-text">
          This is Frontegg&apos;s sample app that will let you experiment with
          our authentication flows.
        </p>
      </div>
      <button className="primary-button" onClick={() => loginWithRedirect()}>
        Sign in
      </button>
    </div>
  );
};

export default Welcome;
