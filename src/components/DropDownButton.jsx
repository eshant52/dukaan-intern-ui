import dropDownImg from "@assets/dropdown.png";
import { useState } from "react";

export default function DropDownButton({ children }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setExpand(!expand)}
          className="text-secondary inline-flex w-full items-center justify-center space-x-2 rounded-md border bg-white px-3 py-2 font-light"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span>{children}</span>
          <span className="size-4 ">
            <img src={dropDownImg} alt="" />
          </span>
        </button>
      </div>
      {expand && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              License
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
