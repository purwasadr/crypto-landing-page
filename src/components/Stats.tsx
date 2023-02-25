import { statsCompany } from "@/constant";

const Stats = () => {
  return (
    <section className="flex w-full justify-center bg-green-50">
      <div className="w-full max-w-7xl md:flex section-padding-x section-padding-y">
        <ul className="flex w-full list-none flex-col flex-wrap gap-x-10 gap-y-10 sm:flex-row sm:justify-between">
          {statsCompany.map((stat) => (
            <li className="flex flex-col" key={stat.id}>
              <span className="text-4xl text-center sm:text-left font-semibold text-emerald-500">
                {stat.value}
              </span>
              <h3 className="mt-2 text-center sm:text-left text-secondary">{stat.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
