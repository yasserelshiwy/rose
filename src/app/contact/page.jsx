export const metadata = {
  title: "Rose-Contact",
  description: "Contact page for rose e-commerce",
};
export default function contact() {
  return (
    <>
      <section className="min-h-[58vh]">
        <div className="container">
          <h2 className="text-[#F82BA9] uppercase font-bold tracking-widest my-12 ml-4">
            Contact Us
          </h2>
          <div className="inner grid grid-cols-12 gap-6 py-10">
            <section className=" col-span-12 2xl:col-span-3 shadow-[0_0_30px_0_#F82BA91A] p-6 py-10 rounded-xl space-y-14">
              <div className="flex items-center gap-4 ">
                <div className="border rounded-xl p-4 text-3xl text-[#F82BA9]">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <h2 className="text-[#F82BA9] text-xl font-semibold">
                    Call Anytime
                  </h2>
                  <p className="font-medium">241-373-2123</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="border rounded-xl p-4 text-3xl text-[#F82BA9]">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h2 className="text-[#F82BA9] text-xl font-semibold">
                    Send Email
                  </h2>
                  <p className="font-medium">Dwight63@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="border rounded-xl p-5 text-3xl text-[#F82BA9]">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h2 className="text-[#F82BA9] text-xl font-semibold">
                    Visit Us
                  </h2>
                  <p className="font-medium">
                    20 Island Park Road, New Jearsy, New York, USA
                  </p>
                </div>
              </div>
            </section>
            <div className="col-span-12 2xl:col-span-1 "></div>
            <section className="col-span-12 2xl:col-span-8 shadow-[0_0_30px_0_#F82BA91A] p-8 py-10 ">
              <form action="" className="w-full grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-ful outline-none border-2 border-[#F82BA9] p-3 rounded-lg placeholder:text-[#F82BA9] placeholder:font-semibold"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-ful outline-none border-2 border-[#F82BA9] p-3 rounded-lg placeholder:text-[#F82BA9] placeholder:font-semibold"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-ful outline-none border-2 border-[#F82BA9] p-3 rounded-lg placeholder:text-[#F82BA9] placeholder:font-semibold"
                />
                <textarea
                  name="massage"
                  id="massage"
                  placeholder="Your Message"
                  className="w-ful min-h-[110px] outline-none border-2 border-[#F82BA9] p-3 rounded-lg placeholder:text-[#F82BA9] placeholder:font-semibold"
                ></textarea>
              </form>
            </section>
          </div>
          <div className="my-4 w-full flex justify-end">
            <button
              type="button"
              className=" cursor-pointer text-white font-semibold px-4 py-3 rounded-3xl  bg-[#F82BA9]"
            >
              Send <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
