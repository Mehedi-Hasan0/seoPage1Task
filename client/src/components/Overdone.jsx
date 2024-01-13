import { overDoneData } from "../data/cardsList";
import Header from "./shared/Header";
import Card from "./shared/card";

const Overdone = () => {
  return (
    <div className="bg-[#f2f4f7] min-w-[320px] min-h-screen my-8">
      <div className="pt-3 pb-4 px-3">
        <Header title={"Overdone"} />
      </div>

      {/* cards data */}
      <div className="px-2 custom__scrollbar h-screen flex flex-col gap-3 pb-4">
        {overDoneData.map((data, index) => (
          <Card key={index} cardData={data} />
        ))}
      </div>
    </div>
  );
};

export default Overdone;
