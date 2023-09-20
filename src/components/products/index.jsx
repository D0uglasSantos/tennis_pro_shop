import Card from "./cards";

// eslint-disable-next-line react/prop-types
const Products = ({ fotos = [] }) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold pt-20 pb-20">
        Veja os Produtos em Promoção!
      </h1>
      <section className="pr-8 pl-8 flex flex-grow flex-wrap gap-12 justify-between items-center">
        {fotos.map((foto) => (
          <Card foto={foto} key={foto.id} />
        ))}
      </section>
    </>
  );
};
export default Products;