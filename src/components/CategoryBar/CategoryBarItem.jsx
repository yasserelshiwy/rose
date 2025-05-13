import Image from 'next/image';

export default function CategoryBarItem({ imgSrc, title, quantity, style }) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-3 items-center bg-[#FEEDF7] rounded-2xl p-3 ${style}`}
    >
      <div className="icon bg-[#F82BA9] size-[80px] rounded-full p-5">
        <Image alt="icon" src={imgSrc} width={80} height={80} />
      </div>
      <div className="text">
        <span className="block font-medium max-w-[100px]">{title}</span>
        <span className="text-gray-400 text-[12px] font-medium">
          {quantity} Items
        </span>
      </div>
    </div>
  );
}
