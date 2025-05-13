import Product from "../../components/Product/Product";
export const metadata = {
  title: "Rose-All-category",
  description: "all-category page for rose e-commerce",
};
export default function category() {
  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-12 gap-5 ">
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="search border-2 border-gray-100 rounded-lg p-5 mb-5">
              <h2 className="font-bold mb-5">Search</h2>
              <input
                type="text"
                placeholder="Search By The Name"
                className="rounded-full w-full outline-0 border-2 border-gray-100 p-2"
              />
            </div>
            <div className="category border-2 border-gray-100 rounded-lg p-5 mb-5 text-[#757F95]">
              <h2 className="font-bold border-b-2 border-gray-600 pb-5 mb-5 text-black">
                Categories
              </h2>
              <ul className="list-none">
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="home" />
                  <label htmlFor="home">Home & Living</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="garment" />
                  <label htmlFor="garment">Garment Care</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="jewelry" />
                  <label htmlFor="jewelry">Jewelry & Accessories</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="occasion-gifts" />
                  <label htmlFor="occasion-gifts">Occasion Gifts</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="office-stationery" />
                  <label htmlFor="office-stationery">Office & Stationery</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="personalised-gifts" />
                  <label htmlFor="personalised-gifts">Personalised Gifts</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="gifts-box" />
                  <label htmlFor="gifts-box">Gifts Box</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="other" />
                  <label htmlFor="other">Other</label>
                </li>
              </ul>
            </div>
            <div className="brands border-2 border-gray-100 rounded-lg p-5 mb-5 text-[#757F95]">
              <h2 className="font-bold border-b-2 border-gray-600 pb-5 mb-5 text-black">
                Brands
              </h2>
              <ul className="list-none">
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Tovola" />
                  <label htmlFor="Tovola">Tovola</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Sundoy" />
                  <label htmlFor="Sundoy">Sundoy</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Sahoo Gifts" />
                  <label htmlFor="Sahoo Gifts">Sahoo Gifts</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Casterly" />
                  <label htmlFor="Casterly">Casterly</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Mainden Gifts" />
                  <label htmlFor="Mainden Gifts">Mainden Gifts</label>
                </li>
              </ul>
            </div>
            <div className="Price Rating border-2 border-gray-100 rounded-lg p-5 mb-5 text-[#757F95]">
              <h2 className="font-bold border-b-2 border-gray-600 pb-5 mb-5 text-black">
                Price Rating
              </h2>
              <input type="range" className="w-full slider-range" />
            </div>
            <div className="sales border-2 border-gray-100 rounded-lg p-5 mb-5 text-[#757F95]">
              <h2 className="font-bold border-b-2 border-gray-600 pb-5 mb-5 text-black">
                Sales
              </h2>
              <ul className="list-none">
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="On Sale" />
                  <label htmlFor="On Sale">On Sale</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="In Stock" />
                  <label htmlFor="In Stock">In Stock</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Out Of Stock" />
                  <label htmlFor="Out Of Stock">Out Of Stock</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Discount" />
                  <label htmlFor="Discount">Discount</label>
                </li>
              </ul>
            </div>
            <div className="sizes border-2 border-gray-100 rounded-lg p-5 mb-5 text-[#757F95]">
              <h2 className="font-bold border-b-2 border-gray-600 pb-5 mb-5 text-black">
                Sizes
              </h2>
              <ul className="list-none">
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Extra Small" />
                  <label htmlFor="Extra Small">Extra Small</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Small" />
                  <label htmlFor="Small">Small</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Medium" />
                  <label htmlFor="Medium">Medium</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Large" />
                  <label htmlFor="Large">Large</label>
                </li>
                <li className="flex items-center gap-2 mb-3">
                  <input type="checkbox" id="Extra Large" />
                  <label htmlFor="Extra Large">Extra Large</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <Product inCategory={true} />
          </div>
        </div>
      </div>
    </>
  );
}
