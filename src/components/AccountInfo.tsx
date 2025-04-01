import getInitials from "@/../utils/getInitials";
import { AdminPortal, useAuth } from "@frontegg/nextjs";
import Image from "next/image";
import TenantInfo from "./TenantInfo";

const AccountInfo = () => {
  const { user } = useAuth();

  const openAdminBox = () => {
    window.location.href = "#admin-box";
    AdminPortal.show();
  };

  const profileIcon =
    user && user.profilePictureUrl ? (
      <Image
        src={user.profilePictureUrl}
        alt={user.name}
        width={24}
        height={24}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          if (target.parentNode) {
            (
              target.parentNode as HTMLImageElement
            ).innerHTML = `<div class="initials">${getInitials(
              user.name
            )}</div>`;
          }
        }}
      />
    ) : (
      <div className="initials">{getInitials(user?.name || "")}</div>
    );

  return user ? (
    <section className="section-screen">
      <div className="section-card account-card">
        <div className="title-wrapper">
          <h1 className="title">Hello, {user.name}!</h1>
          <button className="primary-button fit-content" onClick={openAdminBox}>
            Self-service portal
          </button>
        </div>
        <div className="tenants-wrapper">
          <div className="tenant-card">
            <div className="tenant-title">
              <div className="tenant-logo">{profileIcon}</div>
              <p className="tenant-name">{user.name}</p>
            </div>
            <div className="tenant-info">
              <div className="tenant-info-item">
                <p className="tenant-info-item-title">Name</p>
                <p className="tenant-info-item-value">{user.name}</p>
              </div>
              <div className="tenant-info-item">
                <p className="tenant-info-item-title">Email</p>
                <p className="tenant-info-item-value">{user.email}</p>
              </div>
              <div className="tenant-info-item">
                <p className="tenant-info-item-title">Roles</p>
                <p className="tenant-info-item-value">
                  {user.roles.map((x) => x.name).join(", ")}
                </p>
              </div>
            </div>
            <button
              className="secondary-button edit-button"
              onClick={openAdminBox}
            >
              Edit user
            </button>
          </div>
          <TenantInfo />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default AccountInfo;
