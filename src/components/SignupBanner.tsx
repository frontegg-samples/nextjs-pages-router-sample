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
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="#373739"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6667 10.6667H1.33333V1.33333H6V0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z" />
            </svg>
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
