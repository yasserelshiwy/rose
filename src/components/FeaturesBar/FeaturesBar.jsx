import { BrainIcon } from 'lucide-react';

export default function FeaturesBar() {
  return (
    <div className="container bg-[#FEEDF7] p-10 my-10 rounded-2xl gap-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
      <div className="item flex gap-2">
        <div className="icon p-3 bg-[#F82BA9] rounded-full text-white">
          <BrainIcon />
        </div>
        <div className="text">
          <h4 className="text-[#160E4B] font-medium">Free Delivery</h4>
          <span className="text-[#757F95] text-[15px]">Orders Over $120</span>
        </div>
      </div>
      <div className="item flex gap-2">
        <div className="icon p-3 bg-[#F82BA9] rounded-full text-white">
          <BrainIcon />
        </div>
        <div className="text">
          <h4 className="text-[#160E4B] font-medium">Free Delivery</h4>
          <span className="text-[#757F95] text-[15px]">Orders Over $120</span>
        </div>
      </div>
      <div className="item flex gap-2">
        <div className="icon p-3 bg-[#F82BA9] rounded-full text-white">
          <BrainIcon />
        </div>
        <div className="text">
          <h4 className="text-[#160E4B] font-medium">Free Delivery</h4>
          <span className="text-[#757F95] text-[15px]">Orders Over $120</span>
        </div>
      </div>
      <div className="item flex gap-2">
        <div className="icon p-3 bg-[#F82BA9] rounded-full text-white">
          <BrainIcon />
        </div>
        <div className="text">
          <h4 className="text-[#160E4B] font-medium">Free Delivery</h4>
          <span className="text-[#757F95] text-[15px]">Orders Over $120</span>
        </div>
      </div>
    </div>
  );
}
