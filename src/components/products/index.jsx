import ProductCard from "./PrincipalCard";
import Card from "./cards";

// eslint-disable-next-line react/prop-types
const Products = ({ fotos = [] }) => {
  return (
    <section className=" flex flex-col items-center bg-white">
      <ProductCard />
      <h1 className="text-center text-3xl uppercase font-bold pt-20 pb-2 border-b-4 border-bg-green">
        Veja outros Produtos em Promoção!
      </h1>
      <section className="px-8 pt-8 flex flex-grow flex-wrap gap-8 justify-around items-center">
        {fotos.map((foto) => (
          <Card foto={foto} key={foto.id} />
        ))}
      </section>
    </section>
  );
};
export default Products;