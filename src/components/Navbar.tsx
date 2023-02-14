import { navItems1 } from "@/constant";
import Button from "@/components/Button";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center bg-white px-4 py-3">
      {/* Brand name */}
      <h1 className="text-xl font-bold text-emerald-500">WeeWallet</h1>
      {/* Container nav items */}
      <section className="ml-6 hidden w-full justify-between md:flex">
        <ul className="flex flex-row items-center justify-start space-x-4">
          {navItems1.map((navItem) => (
            <li
              key={navItem.id}
              className="flex flex-nowrap items-center"
            >
              <a href="https://rroll.to/iHgSMg" className="whitespace-nowrap text-sm">{navItem.name}</a>
              {/* {navItem.hasDropdown ? (
                <ChevronDownIcon className="h-[16px] w-[16px]" />
              ) : null} */}
            </li>
          ))}
        </ul>
        <div className="flex space-x-3">
          <div className="flex space-x-4">
            <Button variant="text">Sign In</Button>
            <Button variant="fill">Get Started</Button>
          </div>
          <div className="flex items-center space-x-3">
            <div className="cursor-pointer rounded-md bg-gray-100 p-1.5">
              <GlobeAltIcon className="h-[25px] w-[25px]" />
            </div>
            <div className="cursor-pointer rounded-md bg-gray-100 p-1.5">
              <MoonIcon className="h-[25px] w-[25px]" />
            </div>
          </div>
        </div>
      </section>
      <div className="item-center ml-auto flex md:hidden">
        <Sidebar />
      </div>
    </nav>
  );
}
