import { AdminPortal, useAuth, useAuthActions, useTeamActions, useTeamState } from "@frontegg/nextjs";
import { ITenantsResponse } from "@frontegg/rest-api";

import getInitials from "@/../utils/getInitials";
import TenantsDropdown from "./TenantsDropdown";
import { useEffect } from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";

const TenantInfo = () => {
  const { switchTenant } = useAuthActions();
  const { tenantsState } = useAuth();
  const {
    users,
    loaders: { USERS: isLoadingUsers },
  } = useTeamState();
  const { loadUsers } = useTeamActions();

  const openAccountSettings = () => {
    window.location.href = "#/admin-box/account";
    AdminPortal.show();
  };

  const handleSwitchTenant = (tenant: ITenantsResponse) => {
    switchTenant({ tenantId: tenant.tenantId });
  };

  useEffect(() => {
    loadUsers({ pageOffset: 0, pageSize: 100 });
  }, [loadUsers]);

  return tenantsState && tenantsState.activeTenant ? (
    <div className="tenant-card">
      <div className="tenant-title-wrapper">
        <div className="tenant-title">
          <div className="tenant-logo">
            <div className="initials">
              {getInitials(tenantsState.activeTenant.name)}
            </div>
          </div>
          <p className="tenant-name">{tenantsState.activeTenant.name}</p>
        </div>
        <TenantsDropdown
          items={tenantsState.tenants}
          selected={tenantsState.activeTenant}
          setSelected={handleSwitchTenant}
        />
      </div>
      <div className="tenant-info">
        <div className="tenant-info-item">
          <p className="tenant-info-item-title">ID</p>
          <div className="tenant-info-copy-wrapper">
            <p className="tenant-info-item-value ellipsis">
              {tenantsState.activeTenant.id}
            </p>
            <CopyToClipboardButton text={tenantsState.activeTenant.id} />
          </div>
        </div>

        <div className="tenant-info-item">
          <p className="tenant-info-item-title">Members</p>
          <p className="tenant-info-item-value">
            {isLoadingUsers ? "Loading..." : `${users?.length || 0}`}
          </p>
        </div>

        <div className="tenant-info-item">
          <p className="tenant-info-item-title">Creator</p>
          <p className="tenant-info-item-value">
            {(tenantsState.activeTenant as unknown as { creatorEmail: string })
              .creatorEmail || "system"}
          </p>
        </div>
      </div>
      <button
        className="secondary-button edit-button"
        onClick={openAccountSettings}
      >
        Edit account
      </button>
    </div>
  ) : null;
};

export default TenantInfo;
