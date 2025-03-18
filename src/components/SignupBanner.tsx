import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SignupBannerProps {
  isDefaultCredentials: boolean;
}

const SignupBanner: React.FC<SignupBannerProps> = ({
  isDefaultCredentials,
}) => {
  return (
    <div className={`signup-banner ${isDefaultCredentials ? "show" : ""}`}>
      <div className="container signup-banner-wrapper">
        <p className="signup-banner-text">
          This sample uses Frontegg&apos;s default credentials. Sign up to use
          your own configurations.
          <Link
            href="https://portal.frontegg.com/signup"
            target="_blank"
            rel="noreferrer"
          >
            Sign up
          </Link>
        </p>
        <div className="reference-links">
          <Link
            href="https://developers.frontegg.com/"
            target="_blank"
            rel="noreferrer"
            className="visit-doc"
          >
            <Image
              src="/icons/open-in-new.svg"
              alt="open-in-new"
              width={12}
              height={12}
            />
            Visit Docs
          </Link>
          <div className="third-party-links">
            <Link
              href="https://github.com/frontegg"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width={16}
                height={16}
              />
            </Link>
            <Link
              href="https://join.slack.com/t/frontegg-community/shared_invite/zt-e1oxi1vn-SZErBZcwHcbgj4vrwRIp5A"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <Image
                src="/icons/slack.svg"
                alt="slack"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupBanner;
