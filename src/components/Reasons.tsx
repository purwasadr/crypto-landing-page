import ReasonsList from './ReasonsList';

const Reasons = () => {
  return (
    <section className="flex w-full justify-center bg-gray-50">
      <div className="section-padding-x w-full max-w-7xl section-padding-y">
        <div className="">
          <h2 className="text-center">Your Most Reliable Crypto Exchange</h2>
          <p className="mt-3 text-secondary text-center">Here are some reasons why you should choose WeeWallet</p>
        </div>
        <div className="mt-16">
          <ReasonsList />
        </div>
      </div>
    </section>
  );
}

export default Reasons;