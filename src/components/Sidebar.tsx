import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { navItems1 } from "@/constant";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "./Button";

const Sidebar = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Bars3Icon className="h-[24px] w-[24px]" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>VeeWallet</DialogTitle>
        </DialogHeader>
        <div className="mt-1">
          <ul className="w-40">
            {navItems1.map((item) => (
              <li key={item.id}>
                <a href="https://rroll.to/iHgSMg">
                  <div className="cursor-pointer rounded-lg py-2 px-2 font-sans text-sm">
                    {item.name}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <Button className="w-full">Get Started</Button>
          <Button className="w-full" variant="text">
            Sign In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Sidebar;
