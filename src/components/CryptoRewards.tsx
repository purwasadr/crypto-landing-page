import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import CryptoRewardsList from "./CryptoRewardsList";

const CryptoRewards = () => {
  return (
    <section className="flex w-full justify-center bg-gray-100">
      <div className="section-padding-x section-padding-y flex w-full max-w-7xl flex-col justify-center">
        <div className="text-center">
          <p className="font-bold uppercase">Staking Crypto</p>
          <h2 className="mt-2 text-emerald-500">Earn Crypto Rewards</h2>
          <p className="mt-3 text-sm text-secondary">
            Earn up to 40% in my reward yearly by staking your assets
          </p>
        </div>
        <div className="mt-8">
          <CryptoRewardsList />
        </div>
        <div className="flex justify-center mt-8">
          <Button className="flex w-fit items-center">
            <p>Start Earning</p>
            <ChevronRightIcon className="ml-1.5 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CryptoRewards;
