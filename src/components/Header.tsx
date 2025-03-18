import { useAuth } from "@frontegg/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const logout = useCallback(() => {
    router.replace("/account/logout");
  }, [router]);

  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo-wrapper">
          <a href="https://frontegg.com/" target="_blank" rel="noreferrer">
            <Image src="/logo.svg" width={170} height={32} alt="frontegg" />
          </a>
          <div className="rect-logo">
            <Image src="/next.png" width={25} height={25} alt="Next" />
          </div>
        </div>
        {isAuthenticated && (
          <button className="secondary-button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
