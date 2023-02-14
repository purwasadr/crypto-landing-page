import { startBuildingList } from "@/constant";

const ListStartBuilding = () => {
  return (
    <div>
      <ul className='space-y-8'>
        {startBuildingList.map((item) => (
          <li key={item.id} className="flex space-x-6">
            <div className="w-[70px] h-[70px] flex justify-center item-center aspect-square p-2.5 rounded-full bg-white shadow-xl">
              {item.picture}
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-secondary text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStartBuilding;
