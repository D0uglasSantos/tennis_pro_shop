import { useState } from 'react';
import './styles.css'; // Você precisará criar um arquivo CSS para estilizar o componente.

const ProductCard = () => {
  const [activeColor, setActiveColor] = useState('#000');
  const [bgColor, setBgColor] = useState('#212121');
  const [imgSrc, setImgSrc] = useState('https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true');

  const handleColorChange = (colorPrimary, colorSec, pic) => {
    setActiveColor(colorPrimary);
    setBgColor(colorSec);
    setImgSrc(pic);
  };

  return (
    <div className="container rounded-xl shadow-xl">
      <div className="imgBx rounded-l-xl" style={{ background: bgColor }}>
        <img src={imgSrc} alt="Nike Jordan Proto-Lyte Image" />
      </div>
      <div className="details">
        <div className="content">
          <h2 style={{ color: bgColor }}>
            Jordan Proto-Lyte <br />
            <span>Running Collection</span>
          </h2>
          <p>
            Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
            made for all-day, bouncy comfort.
            Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
            breathable support.
            Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
            Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
          </p>
          <p className="product-colors">Available Colors:
            <span
              className={`black ${activeColor === '#000' ? 'active' : ''}`}
              data-color-primary="#000"
              data-color-sec="#212121"
              data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
              onClick={() => handleColorChange('#000', '#212121', 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true')}
            ></span>
            <span
              className={`red ${activeColor === '#7E021C' ? 'active' : ''}`}
              data-color-primary="#7E021C"
              data-color-sec="#bd072d"
              data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
              onClick={() => handleColorChange('#7E021C', '#bd072d', 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true')}
            ></span>
            <span
              className={`orange ${activeColor === '#CE5B39' ? 'active' : ''}`}
              data-color-primary="#CE5B39"
              data-color-sec="#F18557"
              data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
              onClick={() => handleColorChange('#CE5B39', '#F18557', 'https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true')}
            ></span>
          </p>
          <h3 style={{ color: bgColor }}>U$: 745,00</h3>
          <button className='rounded-xl' style={{ background: bgColor }}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
