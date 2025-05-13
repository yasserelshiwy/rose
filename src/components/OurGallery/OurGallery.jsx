import Image from 'next/image';
import img1 from '../../../public/images/14ca18b25fc92abfeaf962e9be886ea3.png';
import img2 from '../../../public/images/c0b7e1eb7ba369429059a83d53b78664.png';
import img3 from '../../../public/images/d946c2fa712231d4dfb318a33e0aaaa5.jpeg';
import img4 from '../../../public/images/9a5b959951914f42aa1563d12a302551.png';
import img5 from '../../../public/images/3593f850ddbb00a76c2bf4c23192ffce.png';
export default function OurGallery() {
  return (
    <section>
      <div className="container">
        <div className="title-section w-full flex justify-center items-center flex-col gap-1">
          <h2 className="tracking-widest uppercase text-[16px] text-[#F82BA9]  font-semibold">
            Our Gallery
          </h2>
          <p className="text-2xl font-semibold ">
            <span className=" relative before:absolute before:w-[101%] before:h-3 before:bg-[#FEEDF7] before:rounded-2xl before:bottom-0 before:-z-10 ">
              <span className="relative before:absolute before:w-[98%] before:h-[2px] before:bg-[#F82BA9] before:rounded-2xl before:bottom-0">
                Let's Check
              </span>{' '}
              Our Photo{' '}
            </span>
            Gallery
          </p>
        </div>
        <div className="gallery grid grid-cols-9 gap-4 py-10">
          <div className="img-1 col-span-9 md:col-span-3 rounded-2xl overflow-hidden order-3 md:order-1">
            <Image
              src={img1}
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="img-1 col-span-9 md:col-span-3 rounded-2xl overflow-hidden order-2 md:order-2 ">
            <Image
              src={img2}
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="img-1 col-span-9 md:col-span-3 rounded-2xl overflow-hidden order-1  md:order-3">
            <Image
              src={img3}
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="img-1 col-span-9 md:col-span-6 rounded-2xl overflow-hidden order-5 md:order-4">
            <Image
              src={img4}
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>
          <div className="img-1 col-span-9 md:col-span-3 rounded-2xl overflow-hidden order-4 md:order-5">
            <Image
              src={img5}
              alt=""
              className="w-full h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
