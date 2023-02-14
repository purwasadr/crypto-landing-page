import { cryptoRewardsList } from '@/constant';

interface Props {
  className?: string;
}

const CryptoRewardsList = ({className}: Props) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(0,200px))] gap-8 place-content-center xl:place-content-between">
      {cryptoRewardsList.map((token) => (
        <li key={token.id} className="py-6 px-4 rounded-md shadow-xl bg-white">
          <article className="flex flex-col justify-center items-center">
            <div className="w-[40px] h-[40px]">
              {token.icon}
            </div>
            <h4 className="mt-2 font-bold text-lg">{token.name} <span className="text-tertiary">({token.abbreviation})</span></h4>
            <p className="text-xs mt-2">Annual rewards</p>
            <p className="text-emerald-500 mt-2">{token.annualRewards}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default CryptoRewardsList;