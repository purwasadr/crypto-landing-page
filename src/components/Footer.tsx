import { FacebookSvg, InstagramSvg, TwitterSvg } from '@/assets';
import { footerLinks } from '@/constant';

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center bg-gray-50">
      <div className="section-padding-x w-full max-w-7xl">
        <div className="grid place-content-between max-sm:grid-cols-[repeat(auto-fit,minmax(0,120px))] grid-cols-[repeat(auto-fit,minmax(0,150px))] gap-x-5 gap-y-6 section-padding-y">
          <div className="">
            <h1 className="text-2xl font-bold text-emerald-500 text-center">WeeWallet</h1>
            <div className="mt-4 flex justify-around  w-full">
              <a href="https://rroll.to/iHgSMg"><FacebookSvg className="fill-gray-500 w-6 h-6" /></a>
              <a href="https://rroll.to/iHgSMg"><InstagramSvg className="fill-gray-500 w-6 h-6" /></a>
              <a href="https://rroll.to/iHgSMg"><TwitterSvg className="fill-gray-500 w-6 h-6" /></a>
            </div>
          </div>
          {footerLinks.map((item) => (
            <div className="" key={item.id}>
              <h4 className="text-lg font-bold">{item.title}</h4>
              <div className="mt-3 flex flex-col space-y-3">
                {item.links.map((subItem) => (
                  <a href='https://rroll.to/iHgSMg' className="text-sm text-tertiary" key={subItem.id}>{subItem.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      <hr className="w-full"/>
      <div className="py-6">
        <p className="text-center text-xs font-medium">Copyright © 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;