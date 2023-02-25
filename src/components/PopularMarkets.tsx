import { TabPopularMarkets } from "@/components";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const PopularMarkets = () => {
  return (
    <section className="flex w-full justify-center bg-gray-50">
      <div className="section-padding-x w-full max-w-7xl section-padding-y">
        <h2>Popular Markets</h2>
        <TabPopularMarkets className="mt-4" />
        <div className="flex mt-6 cursor-pointer items-center justify-center space-x-2">
          <div className="text-sm font-semibold text-emerald-500">View More</div>
          <ChevronRightIcon className="h-4 w-4 fill-blue-500" />
        </div>
      </div>
    </section>
  );
};

export default PopularMarkets;
