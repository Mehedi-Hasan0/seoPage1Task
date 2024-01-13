import Completed from "../../components/Completed";
import Doing from "../../components/Doing";
import Incomplete from "../../components/Incomplete";
import Overdone from "../../components/Overdone";
import Todo from "../../components/Todo";
import UnderReview from "../../components/UnderReview";

const Home = () => {
  return (
    <section className="flex flex-row items-center gap-6 custom__scrollbar px-8">
      <Incomplete />
      <Todo />
      <Doing />
      <UnderReview />
      <Completed />
      <Overdone />
    </section>
  );
};

export default Home;
