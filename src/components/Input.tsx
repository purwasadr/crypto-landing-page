import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils";

interface Props {
  className?: string;
  placeholder?: string;
}

const Input = ({ className, placeholder }: Props) => {
  return (
    <div className={cn("relative", className)}>
      <EnvelopeIcon className="absolute top-0 bottom-0 right-3 my-auto h-[24px] w-[24px] fill-gray-100" />
      <input
        className="w-full rounded-lg border-none py-2.5 pr-11 font-medium transition-all placeholder:text-gray-400 hover:ring-2 hover:ring-emerald-500 focus:ring-emerald-500"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
