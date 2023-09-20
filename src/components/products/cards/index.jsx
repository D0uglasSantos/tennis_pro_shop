/* eslint-disable react/prop-types */
const Card = ({ foto }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg flex flex-col">
        <img 
            className="w-48 h-52 rounded-lg"
            src={foto.path} 
            alt={foto.titulo} />
        <div className="bg-[#8f8b61] rounded-b-md p-2">
          <h5 className="text-white text-base font-medium">{foto.titulo}</h5>
          <h6 className="text-black font-medium">{foto.preco}</h6>
        </div>
      </div>
    </>
  );
};
export default Card;
