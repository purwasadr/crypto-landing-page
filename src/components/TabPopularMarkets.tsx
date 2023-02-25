import { Coin, popularMarkets } from "@/constant";
import { cn } from '@/utils';
import * as Tabs from "@radix-ui/react-tabs";
import Button from './Button';

interface TablePopularMarketProp {
  coins: Coin[];
}

const TablePopularMarket = ({coins}: TablePopularMarketProp) => (
  <div className="relative overflow-x-auto pt-4">
      <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-tertiary">
              <tr>
                  <th scope="col" className="py-3">
                      Name
                  </th>
                  <th scope="col" className="pl-6 py-3">
                      Last Price
                  </th>
                  <th scope="col" className="pl-6 py-3">
                      24h Change
                  </th>
                  <th scope="col" className="pl-6 py-3">
                     
                  </th>
              </tr>
          </thead>
          <tbody>
              {
                coins.map((coin) => (
                  <tr key={coin.id} className="">
                    <th scope="row" className="flex items-center py-2.5 font-medium text-tertiary space-x-2">
                      <div className="w-6 h-6 flex-shrink-0">{coin.icon}</div>
                      <p className="font-bold text-primary">{coin.abbreviation}</p>
                      <p className="line-clamp-1">{coin.name}</p>
                    </th>
                    <td className="py-2.5 pl-6 text-primary font-semibold">
                        ${coin.lastPrice}
                    </td>
                    <td className={`font-semibold py-2.5 pl-6 ${coin.aDayChange.isPositive ? "text-green-500" : "text-red-500"}`}>
                        {coin.aDayChange.value}
                    </td>
                    <td className="py-2.5 pl-6">
                        <Button size='small'>Trade</Button>
                    </td>
                  </tr>
                ))
              }
              
          </tbody>
      </table>
  </div>
)

interface Props {
  className?: string;
}

const TabPopularMarkets = ({className}: Props) => {
  return (
    <Tabs.Root className={cn(className)} defaultValue="market_1" orientation="vertical">
      <Tabs.List className="flex flex-wrap -mb-px border-b-0" aria-label="tabs example">
        {popularMarkets.map((item) => (
          <Tabs.Trigger
            key={item.id}
            className="block py-2 px-3 border-emerald-500 text-base font-bold data-[state='active']:border-b-4 data-[state='active']:text-gray-900"
            value={item.id}
          >
            {item.categoryName}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {
        popularMarkets.map((market) => (
          <Tabs.Content key={market.id} value={market.id}>
            <TablePopularMarket coins={market.coins} />
          </Tabs.Content>
        ))
      }
    </Tabs.Root>
  );
};

export default TabPopularMarkets;
