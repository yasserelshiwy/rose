'use client';
import CategoryBarItem from '../CategoryBar/CategoryBarItem.jsx';
import itemImg1 from '../../../public/images/gift-box.svg.png';
import itemImg2 from '../../../public/images/home.svg.png';
import itemImg3 from '../../../public/images/jewelry.svg.png';
import itemImg4 from '../../../public/images/garment.svg.png';
import itemImg5 from '../../../public/images/office.svg.png';
import { useState } from 'react';

export default function CategoryBar() {
  const [data, setData] = useState([
    { imgSrc: itemImg1, title: 'Gifts Box', quantity: 30 },
    { imgSrc: itemImg2, title: 'Home & Living Gifts', quantity: 25 },
    { imgSrc: itemImg3, title: 'Jewelry & Accessories', quantity: 15 },
    { imgSrc: itemImg4, title: 'Garment Care', quantity: '05' },
    { imgSrc: itemImg5, title: 'Office & Stationery', quantity: 30 },
  ]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-6 container">
      {data.map((item, index) => (
        <CategoryBarItem
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          quantity={item.quantity}
          style={index > 1 ? 'hidden md:flex' : ''}
        />
      ))}
    </div>
  );
}
