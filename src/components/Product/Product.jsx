'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

export default function Product({ inCategory = false }) {
  async function getProducts() {
    const options = {
      url: 'https://flower.elevateegy.com/api/v1/products',
      method: 'GET',
    };
    return axios.request(options);
  }
  let { data, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
    staleTime: 6 * 6 * 60 * 1000,
    refetchOnMount: false,
  });
  if (isLoading) return <Loading />;

  return (
    <section className={`${inCategory ? 'pb-10 pt-0' : 'py-10'}`}>
      <div className="container">
        <div
          className={`title-section mt-4 mb-8 ${inCategory ? 'hidden' : ''}`}
        >
          <h2 className="text-2xl font-semibold ">
            <span className=" relative before:absolute before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
              <span className="relative before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:bottom-0">
                Pop
              </span>
              ular
            </span>
            Items
          </h2>
        </div>
        <div
          className={`product-box grid grid-cols-1   ${
            inCategory
              ? 'md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'
              : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          }`}
        >
          {data.data.products.map(product => (
            <Card
              key={product.id}
              id={product._id}
              title={product.title}
              rate={product.rateAvg}
              price={product.priceAfterDiscount}
              sellPrice={product.price}
              image={product.imgCover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
