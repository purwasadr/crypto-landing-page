import { CryptoPortfolioSvg } from '@/assets';
import { Button } from '@/components';
import ListStartBuilding from './ListStartBuilding';

const StartBuilding = () => {
  return (
    <section className="flex w-full justify-center bg-gray-50">
      <div className="section-padding-x w-full max-w-7xl section-padding-y">
        <h2>Start Building Your Crypto Portfolio</h2>
        <p className="mt-2 font-medium text-secondary">Follow these steps to start your first trade</p>
        <div className="flex md:space-x-4 items-center flex-col md:flex-row">
          <div className="flex-1 mt-9">
            <ListStartBuilding />
          </div>
          <div className="flex-1 w-full max-md:mt-9 max-md:max-w-[500px] md:min-w-[350px] flex justify-center items-center">
            <CryptoPortfolioSvg className="w-full" />
          </div>
        </div>
        <Button className="mt-8">Start Your Journey</Button>
      </div>
    </section>
  );
}

export default StartBuilding;