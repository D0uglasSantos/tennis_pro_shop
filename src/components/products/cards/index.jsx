import "./styles.css";

/* eslint-disable react/prop-types */
const Card = ({ foto }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg container-card relative m-auto overflow-hidden shadow-xl">
        <div className="images">
          <img className="img-product" src={foto.path} alt="" />
        </div>
        <p className="pick text-xs text-bg-green tracking-wider mt-3 ml-5">
          Chose Size
        </p>
        <div className="sizes text-bg-green">
          <div className="size">5</div>
          <div className="size">6</div>
          <div className="size">7</div>
          <div className="size">8</div>
          <div className="size">9</div>
          <div className="size">10</div>
          <div className="size">11</div>
          <div className="size">12</div>
        </div>
        <div className="product">
          <p className="uppercase font-thin mb-3 description">{foto.description}</p>
          <h1 className="uppercase font-medium mb-4 title" >{foto.titulo}</h1>
          <h2 className="mb-4 price">U${foto.preco}</h2>
          <p className="desc">
            The Nike Epic React Flyknit foam cushioning is responsive yet
            light-weight, durable yet soft. This creates a sensation that not
            only enhances the feeling of moving forward, but makes running feel
            fun, too.
          </p>
          <div className="buttons">
            <button className="add rounded-xl">Add to Cart</button>
            <button className="like rounded-xl">
              <span className="text-2xl hover:text-red-600">♥</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
