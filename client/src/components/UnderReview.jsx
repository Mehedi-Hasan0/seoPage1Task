import { underReviewData } from "../data/cardsList";
import Header from "./shared/Header";
import Card from "./shared/card";

const UnderReview = () => {
  return (
    <div className="bg-[#f2f4f7] min-w-[320px] min-h-screen my-8">
      <div className="pt-3 pb-4 px-3">
        <Header title={"Under Review"} />
      </div>

      {/* cards data */}
      <div className="px-2 custom__scrollbar h-screen flex flex-col gap-3 pb-4">
        {underReviewData.map((data, index) => (
          <Card key={index} cardData={data} />
        ))}
      </div>
    </div>
  );
};

export default UnderReview;
