import { Button, Input } from "@/components";
import { HeroSvg } from "@/assets";

const Hero = () => {
  return (
    <section className="flex w-full justify-center bg-gray-100">
      {/* Container two hero items */}
      <div className="section-padding-x w-full max-w-7xl py-10 md:flex md:space-x-8 md:py-16">
        {/* Container first hero content */}
        <div className="flex flex-1 flex-col">
          <h1 className="w-full text-3xl max-sm:truncate font-semibold text-primary max-sm:whitespace-pre-wrap md:text-4xl xl:text-5xl !leading-[1.2]">
            Buy, Trade and <p className="inline text-emerald-500">Hodl</p>{" "}
            <br className="hidden md:block" />
            your Favorite <br className="hidden md:block" />
            Cryptocurrencies
          </h1>
          <p className="mt-4 text-primary">
            Trade Over 1200 Cryptocurrencies Safely, Quickly and Easily
          </p>
          <div className="mt-5 flex space-x-3">
            <Input
              className="max-w-[400px] md:max-w-[300px] flex-1"
              placeholder="Email Address"
            />
            <Button variant="fill">Get Started</Button>
          </div>
          <p className="mt-2.5 font-medium text-gray-400">
            Sign Up Now and Get 0 fees on Trading
          </p>
        </div>
        {/* Container second hero content */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-[500px] md:max-w-[400px]">
            <HeroSvg className=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
