import { Link } from "react-router-dom";
import caractersDataMock from "../data/caracters";
import { Layout } from "../layout";

export const CharactersList = () => {
  const { data } = caractersDataMock;
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl wrapper gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
        {data.results.map((value, idx) => (
          <HeroCard idx={idx} value={value} />
        ))}
      </div>
    </Layout>
  );
};

interface HeroCardProps {
  value: any;
  idx: number;
}
const HeroCard: React.FC<HeroCardProps> = ({ value, idx }) => {
  return (
    <Link
      to={`/character/${value.id}`}
      className="relative h-64 bg-gray-900"
      style={{
        backgroundImage: `url(${value.thumbnail.path}?apikey=4e8a935f1660c523f9c08e87acf0d188)`,
      }}
      key={idx}
    >
      <span
        style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}
        className="absolute w-56 px-2 py-1 text-center text-black left-4 bg-gray-50 bottom-8"
      >
        {value.name}
      </span>
    </Link>
  );
};
