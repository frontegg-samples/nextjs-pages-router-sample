import { useEffect, useRef, useState } from "react";
import getInitials from "@/../utils/getInitials";
import Image from "next/image";
import { ITenantsResponse } from "@frontegg/rest-api";

interface TenantsDropdownProps {
  items: ITenantsResponse[];
  selected: ITenantsResponse | null;
  setSelected: (tenant: ITenantsResponse) => void;
}

const TenantsDropdown: React.FC<TenantsDropdownProps> = ({ items, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        <Image src="/icons/unfold-more.svg" alt="Other tenants" width={16} height={24} />
      </button>
      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`dropdown-item ${
              selected?.id === item.id ? "active" : ""
            }`}
            onClick={() => {
              setSelected(item);
              setIsOpen(false);
            }}
          >
            <div className="dropdown-item-content">
              <div className="initials">{getInitials(item.name)}</div>
              {item.name}
            </div>

            {selected?.id === item.id && (
              <Image src="/icons/checkmark.svg" alt="Selected tenant" width={12} height={9} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TenantsDropdown;
