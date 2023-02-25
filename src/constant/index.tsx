import {
  AndroidSvg,
  AppleSvg,
  AtomSvg,
  BinanceSvg,
  BitcoinSvg,
  DashSvg,
  DigiByteSvg,
  EthereumSvg,
  LinuxSvg,
  LitecoinSvg,
  MemoryStorageSvg,
  NeoSvg,
  OntologySvg,
  PersonalSettingsSvg,
  PortfolioSvg,
  ProgressDataSvg,
  SecureLoginSvg,
  SecureServerSvg,
  SolanaSvg,
  TetherSvg,
  VaultSvg,
  ViacoinSvg,
  WanchainSvg,
  WindowsSvg,
} from "@/assets";

interface NavItem1 {
  id: string;
  name: string;
  hasDropdown: boolean;
}

const navItems1: NavItem1[] = [
  {
    id: "nav-item-1",
    name: "Buy Crypto",
    hasDropdown: true,
  },
  {
    id: "nav-item-2",
    name: "Markets",
    hasDropdown: false,
  },
  {
    id: "nav-item-3",
    name: "Trades",
    hasDropdown: true,
  },
  {
    id: "nav-item-4",
    name: "Earn",
    hasDropdown: true,
  },
];

interface StatCompany {
  id: string;
  title: string;
  value: string;
}

const statsCompany: StatCompany[] = [
  {
    id: "stat_1",
    title: "24h Trading Volume",
    value: "$2.05 billion",
  },
  {
    id: "stat_2",
    title: "Cryptocurrencies Listed",
    value: "1200+",
  },
  {
    id: "stat_3",
    title: "Registered Users",
    value: "5+ million",
  },
  {
    id: "stat_4",
    title: "Lowest Trading Fees",
    value: "0%",
  },
];

interface PopularMarkets {
  id: string;
  categoryName: string;
  coins: Coin[];
}

export interface Coin {
  id: string;
  name: string;
  abbreviation: string;
  lastPrice: number;
  aDayChange: {
    value: string;
    isPositive: boolean;
  };
  icon: JSX.Element;
}

const popularMarkets: PopularMarkets[] = [
  {
    id: "market_1",
    categoryName: "Hot",
    coins: [
      {
        id: "coin_1",
        name: "Bitcoin",
        abbreviation: "BTC",
        aDayChange: {
          value: "-3.23%",
          isPositive: false,
        },
        lastPrice: 16834.56,
        icon: <BitcoinSvg />,
      },
      {
        id: "coin_2",
        name: "Ethereum",
        abbreviation: "ETC",
        aDayChange: {
          value: "+4.26%",
          isPositive: true,
        },
        lastPrice: 1267.23,
        icon: <EthereumSvg />,
      },
      {
        id: "coin_3",
        name: "Solana",
        abbreviation: "SOL",
        aDayChange: {
          value: "-2.45%",
          isPositive: false,
        },
        lastPrice: 204.67,
        icon: <SolanaSvg />,
      },
      {
        id: "coin_4",
        name: "Binance Coin",
        abbreviation: "BNB",
        aDayChange: {
          value: "+1.56%",
          isPositive: true,
        },
        lastPrice: 305.12,
        icon: <BinanceSvg />,
      },
      {
        id: "coin_5",
        name: "Litecoin",
        abbreviation: "LTC",
        aDayChange: {
          value: "-4.33%",
          isPositive: false,
        },
        lastPrice: 769.45,
        icon: <LitecoinSvg />,
      },
    ],
  },
  {
    id: "market_2",
    categoryName: "New Coin",
    coins: [
      
      {
        id: "coin_1",
        name: "Binance Coin",
        abbreviation: "BNB",
        aDayChange: {
          value: "+1.56%",
          isPositive: true,
        },
        lastPrice: 305.12,
        icon: <BinanceSvg />,
      },
      {
        id: "coin_2",
        name: "Solana",
        abbreviation: "SOL",
        aDayChange: {
          value: "-2.45%",
          isPositive: false,
        },
        lastPrice: 204.67,
        icon: <SolanaSvg />,
      },
      {
        id: "coin_3",
        name: "Litecoin",
        abbreviation: "LTC",
        aDayChange: {
          value: "-4.33%",
          isPositive: false,
        },
        lastPrice: 769.45,
        icon: <LitecoinSvg />,
      },
    ],
  },
  {
    id: "market_3",
    categoryName: "Top Gainers",
    coins: [
      {
        id: "coin_1",
        name: "Solana",
        abbreviation: "SOL",
        aDayChange: {
          value: "-2.45%",
          isPositive: false,
        },
        lastPrice: 204.67,
        icon: <SolanaSvg />,
      },
      {
        id: "coin_2",
        name: "Bitcoin",
        abbreviation: "BTC",
        aDayChange: {
          value: "-3.23%",
          isPositive: false,
        },
        lastPrice: 16834.56,
        icon: <BitcoinSvg />,
      },
      {
        id: "coin_3",
        name: "Ethereum",
        abbreviation: "ETC",
        aDayChange: {
          value: "+4.26%",
          isPositive: true,
        },
        lastPrice: 1267.23,
        icon: <EthereumSvg />,
      },
      
    ],
  },
];

interface StartBuildingList {
  id: string;
  title: string;
  description: string;
  picture: JSX.Element;
}

const startBuildingList: StartBuildingList[] = [
  {
    id: "item_1",
    title: "Identity Verification",
    description:
      "Secure your account and transaction by completing the identity verification process.",
    picture: <SecureLoginSvg />,
  },
  {
    id: "item_2",
    title: "Make a Deposit",
    description:
      "Fund your crypto account to begin trading. A variety of payment methods are available for adding funds",
    picture: <VaultSvg />,
  },
  {
    id: "item_3",
    title: "Start Trading",
    description:
      "Fund your crypto account to begin trading. A variety of payment methods are available for adding funds",
    picture: <ProgressDataSvg />,
  },
  {
    id: "item_4",
    title: "Keep Track of Your Portfolio",
    description:
      "Buy and sell popular digital currencies, keep track of them in one place",
    picture: <PortfolioSvg />,
  },
];

interface CryptoRewardsListItem {
  id: string;
  name: string;
  abbreviation: string;
  annualRewards: string;
  icon: JSX.Element;
}

const cryptoRewardsList: CryptoRewardsListItem[] = [
  {
    id: "token_1",
    name: "Solana",
    abbreviation: "SOL",
    annualRewards: "9-12%",
    icon: <SolanaSvg />,
  },
  {
    id: "token_2",
    name: "Binance",
    abbreviation: "BNB",
    annualRewards: "12-30%",
    icon: <BinanceSvg />,
  },
  {
    id: "token_3",
    name: "Cosmos",
    abbreviation: "ATOM",
    annualRewards: "8-14%",
    icon: <AtomSvg />,
  },
  {
    id: "token_4",
    name: "Wanchain",
    abbreviation: "WAN",
    annualRewards: "6-10%",
    icon: <WanchainSvg />,
  },
  {
    id: "token_5",
    name: "DASH",
    abbreviation: "DASH",
    annualRewards: "5-12%",
    icon: <DashSvg />,
  },
  {
    id: "token_6",
    name: "DigiByte",
    abbreviation: "DBG",
    annualRewards: "15-25%",
    icon: <DigiByteSvg />,
  },
  {
    id: "token_7",
    name: "Ontology",
    abbreviation: "ONT",
    annualRewards: "20-30%",
    icon: <OntologySvg />,
  },
  {
    id: "token_8",
    name: "Viacoin",
    abbreviation: "VIA",
    annualRewards: "9-14%",
    icon: <ViacoinSvg />,
  },
  {
    id: "token_9",
    name: "Tether",
    abbreviation: "USDT",
    annualRewards: "10-20%",
    icon: <TetherSvg />,
  },
  {
    id: "token_10",
    name: "Neo",
    abbreviation: "NEO",
    annualRewards: "8-12%",
    icon: <NeoSvg />,
  },
];

interface ReasonsListItem {
  id: string;
  title: string;
  description: string;
  image: JSX.Element;
}

const reasonsList: ReasonsListItem[] = [
  {
    id: "reason_1",
    title: "Secure Storage",
    description:
      "We ensure your funds are protected with both centralized and decentralized methods.",
    image: <MemoryStorageSvg />,
  },
  {
    id: "reason_2",
    title: "Insurance Protection",
    description:
      "All crypto cash and balances are maintained and insured by NIDC up to a maximum of $400,000.",
    image: <SecureServerSvg />,
  },
  {
    id: "reason_3",
    title: "Personalized Access Control",
    description:
      "Personalized access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.",
    image: <PersonalSettingsSvg />,
  },
];

interface OSTradeAnywhereList {
  id: string;
  icon: JSX.Element;
  caption: string;
}

const osTradeAnywhereList: OSTradeAnywhereList[] = [
  {
    id: "os_1",
    icon: <AppleSvg />,
    caption: "IOS",
  },
  {
    id: "os_2",
    icon: <AndroidSvg />,
    caption: "Android",
  },
  {
    id: "os_3",
    icon: <LinuxSvg />,
    caption: "Linux",
  },
  {
    id: "os_4",
    icon: <WindowsSvg />,
    caption: "Windows",
  },
];

interface FooterLink {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

interface FooterLinkItem {
  id: number;
  name: string;
}

const footerLinks: FooterLink[] = [
  {
    id: "footerLink_1",
    title: "About Us",
    links: [
      {
        id: 1,
        name: "About",
      },
      {
        id: 2,
        name: "Careers",
      },
      {
        id: 3,
        name: "Community",
      },
      {
        id: 4,
        name: "Blog",
      },
      {
        id: 5,
        name: "Terms",
      },
      {
        id: 6,
        name: "Privacy",
      },
      {
        id: 7,
        name: "Announcements",
      },
      {
        id: 8,
        name: "News",
      },
      {
        id: 9,
        name: "Sitemap",
      },
      {
        id: 10,
        name: "Cookie Preferences",
      },
    ],
  },
  {
    id: 'footerLink_2',
    title: 'Products',
    links: [
      {
        id: 1,
        name: 'Exchange',
      },
      {
        id: 2,
        name: 'Academy'
      },
      {
        id: 3,
        name: 'NFT'
      },
      {
        id: 4,
        name: 'Spot Trading'
      },
      {
        id: 5,
        name: 'Margin Trading'
      },
      {
        id: 6,
        name: 'Crypto Lending'
      },
      {
        id: 7,
        name: 'Trading Bot'
      },
      {
        id: 8,
        name: 'Launch Pad'
      },
      {
        id: 9,
        name: 'Trust Wallet'
      },
      {
        id: 10,
        name: 'Gift Card'
      }
    ]
  },
  {
    id: 'footerLink_3',
    title: 'Services',
    links: [
      {
        id: 1,
        name: 'Downloads'
      },
      {
        id: 2,
        name: 'Referral'
      },
      {
        id: 3,
        name: 'P2P'
      },
      {
        id: 4,
        name: 'Identity Identification'
      },
      {
        id: 5,
        name: 'Technical Support'
      },
      {
        id: 6,
        name: 'VIP'
      },
      {
        id: 7,
        name: 'Affiliate Program'
      },
      {
        id: 8,
        name: 'Submit a request'
      },
      {
        id: 9,
        name: 'Verification Search'
      }
    ]
  },
  {
    id: 'footerLink_4',
    title: 'Support',
    links: [
      {
        id: 1,
        name: 'Technical Support'
      },
      {
        id: 2,
        name: 'User Feedback'
      },
      {
        id: 3,
        name: 'Trading Rules'
      },
      {
        id: 4,
        name: 'APIs'
      },
      {
        id: 5,
        name: 'Fees'
      },
      {
        id: 6,
        name: 'Account Access'
      },
      {
        id: 7,
        name: 'Payment Methods'
      }
    ]
  },
  {
    id: 'footerLink_5',
    title: 'Learn',
    links: [
      {
        id: 1,
        name: 'Crypto Guide'
      },
      {
        id: 2,
        name: 'Videos'
      },
      {
        id: 3,
        name: 'Podcast'
      },
      {
        id: 4,
        name: 'How to Buy Bitcoin'
      },
      {
        id: 5,
        name: 'How to Buy Cardano'
      },
      {
        id: 6,
        name: 'How to Buy Ripple'
      },
      {
        id: 7,
        name: 'How to Buy Ethereum'
      },
      {
        id: 8,
        name: 'How to Buy Tradable Altcoins'
      }
    ]
  }
];

export {
  navItems1,
  statsCompany,
  popularMarkets,
  startBuildingList,
  cryptoRewardsList,
  reasonsList,
  osTradeAnywhereList,
  footerLinks
};
