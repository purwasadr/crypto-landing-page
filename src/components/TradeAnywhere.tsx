import { RealTimeSyncSvg } from '@/assets';
import { osTradeAnywhereList } from '@/constant';

const TradeAnywhere = () => {
  return (
    <section className="flex w-full justify-center bg-gray-100">
      <div className="flex md:space-x-16 flex-col-reverse md:flex-row section-padding-x section-padding-y w-full max-w-7xl">
        <div className="flex-1 flex justify-center max-md:mt-8">
          <div className="max-md:max-w-[500px] w-full">
            <RealTimeSyncSvg />
          </div>
        </div>
        <div className="flex-1">
          <h2>Trade Anywhere, Anytime</h2>
          <p className="text-secondary mt-2">Stay in touch across multiple device and never miss out on opportunities.</p>
          <div className="mt-8">
            <ul className="flex flex-wrap gap-6">
              {osTradeAnywhereList.map((os) => (
                <li className="flex flex-col items-center" key={os.id}>
                  <div className="w-5">
                    {os.icon}
                  </div>
                  <p className="mt-2.5">{os.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnywhere;
