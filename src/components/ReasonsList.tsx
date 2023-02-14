import { reasonsList } from "@/constant";

const ReasonsList = () => {
  return (
    <ul className="flex justify-center gap-9 md:justify-between flex-wrap">
      {reasonsList.map((reason) => (
        <li className="w-full max-w-[210px]" key={reason.id}>
          <article className="flex flex-col items-center">
            <div className="flex h-[120px] w-[120px] items-end justify-center">
              <div className="w-full">{reason.image}</div>
            </div>
            <h4 className="mt-6 text-center text-lg font-bold">
              {reason.title}
            </h4>
            <p className="mt-3 text-center text-sm text-secondary">
              {reason.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ReasonsList;
