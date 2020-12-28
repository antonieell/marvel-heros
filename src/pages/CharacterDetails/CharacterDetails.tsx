import { Layout } from "../../layout";

export const CharacterDetails = () => {
  return (
    <Layout>
      <Container>
        <HeroDetails />
        <SliderHeroContent />
      </Container>
    </Layout>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <main className="flex flex-col justify-center w-full px-12 py-6 mx-auto">
      {children}
    </main>
  );
};
const HeroDetails = () => {
  return (
    <section className="flex flex-col items-center justify-center md:flex-row gap-12 md:gap-16">
      <div className="w-full h-64 max-w-lg bg-gray-300 rounded-lg ">
        {/*<img src="" alt"/">*/}
      </div>
      <article>
        <h3 className="font-extrabold text-red-600">Name</h3>
        <p>""""""Name""""""</p>
        <h3 className="font-extrabold text-red-600">Description</h3>
        <p>""""""Description""""""</p>
      </article>
    </section>
  );
};
const SliderHeroContent = () => {
  return <section>SliderHeroContent</section>;
};
