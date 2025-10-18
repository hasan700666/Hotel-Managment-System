import React from "react";
import single from "../assets/single Room-Picsart-AiImageEnhancer.jpg";
import double from "../assets/family Room-Picsart-AiImageEnhancer.jpg";
import food_table from "../assets/food_menu.gif";
import food_morning from "../assets/morning food manu.gif";
import food_day from "../assets/day food manu.gif";
import food_night from "../assets/night food manu.gif";
import Review2 from "./Review2";
import { NavLink, useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      {/* hero */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background video */}
        <video
          src="https://www.freshie.farm/wp-content/uploads/2023/08/367492838_1498414510968164_1604475483158287395_n.mp4"
          className="absolute top-0 left-0 w-full object-cover"
          autoPlay
          muted
          loop
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <br />
            <br />{" "}
            <span className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold">
              KureGhar
            </span>
          </h1>
          <br />
          <p className="text-lg font-bold">
            Pure organic products straight from nature 🌿
          </p>
          <br />
          <br />
          <NavLink to='SingUp'>
          <button className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500 text-xl font-bold">
            Book Now
          </button>
          </NavLink>
        </div>
      </div>

      {/* Rooms */}
      <div>
        <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-10">
          Our Rooms
        </div>
        <div className="flex flex-col border border-amber-50">
          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100 rounded-t-full">
              k
            </div>
            <div className="my-10 flex gap-5">
              <img src={single} alt="" className="w-60 rounded-4xl" />
              <div className="flex justify-center flex-col">
                <p className="text-5xl font-extrabold mb-5">Single Room</p>
                <p className="my-2">
                  <span className="font-bold">People :</span> 2
                </p>
                <p className="my-2">
                  <span className="font-bold">About :</span> Our Single Room
                  offers a cozy space for one guest,
                  <br /> featuring a comfortable bed, private bathroom, <br />{" "}
                  free Wi-Fi, and air conditioning — perfect <br /> for solo
                  travelers seeking comfort and privacy.
                </p>
                <p className="my-2">
                  <span className="font-bold">Price : </span>350tk
                </p>
              </div>
            </div>
            <div className="bg-amber-100 px-20 text-amber-100 rounded-t-full">
              k
            </div>
          </div>
          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
            <div className="my-10 flex gap-5">
              <div className="flex justify-center flex-col">
                <p className="text-5xl font-extrabold mb-5 text-end">
                  Small Family
                </p>
                <p className="my-2 text-end">
                  <span className="font-bold ">People :</span> 4
                </p>
                <p className="my-2 text-end">
                  <span className="font-bold">About :</span>Our Small Family
                  Room is perfect for a small <br /> family, offering a spacious
                  setup with comfortable beds, a private <br /> bathroom, free
                  Wi-Fi, and modern amenities for <br /> a relaxing stay
                  together.
                </p>
                <p className="my-2 text-end">
                  <span className="font-bold">Price : </span>750tk
                </p>
              </div>
              <img src={double} alt="" className="w-60 rounded-4xl" />
            </div>
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
          </div>
          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
            <div className="my-10 flex gap-5">
              <NavLink to='Rooms'>
              <button className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">
                More Rooms
              </button>
              </NavLink>
            </div>
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
          </div>
        </div>
      </div>
      {/* Foods */}
      <div>
        <div className="flex justify-between">
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
          <div className="my-10 flex gap-5">
            <div>
              <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-10">
                Our Foods
              </div>
              <div className="bg-yellow-200 flex justify-center items-center flex-col rounded-4xl m-20">
                <img src={food_table} alt="" className="pt-10" />
                <img src={food_morning} alt="" />
                <img src={food_day} alt="" />
                <img src={food_night} alt="" className="pb-10" />
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
        </div>
      </div>
      {/* Gallery */}
      <div>
        <div>
          <div className="flex justify-between">
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
            <div className="my-10 flex gap-5">
              <div>
                <div className="text-8xl text-amber-400 bg-white rounded-4xl font-bold text-center my-10 px-130">
                  Our Gallery
                </div>
                <div className="">
                  <marquee behavior="" direction="">
                    <ul className="flex gap-2">
                      <img
                        src="../../public/unnamed (21).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (22).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (23).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed(24).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (25).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (26).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (27).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (28).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (29).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (30).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (31).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (32).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (33).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed (34).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />

                      <img
                        src="../../public/unnamed(35).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (36).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (37).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (38).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed(39).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (40).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (1).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (2).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (3).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (4).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (5).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (6).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (7).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (8).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (9).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (10).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (11).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (12).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (13).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (14).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (15).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed(16).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed(17).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed(18).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (19).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (20).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                    </ul>
                  </marquee>
                </div>
              </div>
            </div>
            <div className="bg-amber-100 px-20 text-amber-100">k</div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div>
        <div className="flex justify-between">
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
          <div className="my-10 flex gap-5 w-full">
            <div className="w-full">
              <div className="text-8xl text-amber-400 bg-white rounded-4xl px-7 font-bold text-center my-15">
                Our Services
              </div>
              <div className="grid ">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[url('/unnamed(39).jpg')] bg-no-repeat bg-cover rounded-xl ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      আম বাগান ও অন্যান্য
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      আশেপাশে প্রচুর আম বাগান, আমাদের ত আছেই । সারাদিন বাগানেই
                      থাকা যাবে, রান্নাও করা যাবে । চাইলে আম গাছের যত্ন, আম
                      বাগান নিয়ে ধারনা নিতে পারবেন। এছাড়া আমাদের কফি বাগান,
                      ড্রাগন বাগান আখের খেত রয়েছে ।{" "}
                    </p>
                  </div>

                  <div className="bg-[url('/unnamed(35).jpg')] bg-no-repeat bg-cover rounded-xl  ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      গরু, ৪০০/৫০০ গরু
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      এক সাথে সর্বোচ্চ কত গরু দেখেছেন ? এই এলাকার মাঠে এক সাথে
                      হাজার গরুও চড়ে বেড়ায় । গলায় দড়ি না থাকা এইসব গরু যখন লেজ
                      তুলে দৌড় দেয় সে এক দেখার মত দৃশ্য বটে ।
                    </p>
                  </div>

                  <div className="bg-[url('/unnamed(24).jpg')] bg-no-repeat bg-cover rounded-xl ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      শান্ত স্নিগ্ধ গ্রাম
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      এদিকের মাটির বাড়ির ঐতিহ্য, সাথে ৯০ দশকের শান্ত গ্রাম এই
                      এলাকাকে করেছে অদ্বিতীয় । বিল, পাহাড়ী টিলা মত ঢেউ খেলানো
                      ফসলের মাঠ আর ফল বাগানের সবুজ= চোখ জুড়িয়ে দেয়ার মত বিষয় ।
                    </p>
                  </div>
                  <div className="bg-[url('/unnamed(16).jpg')] bg-no-repeat bg-cover rounded-xl  ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      গ্রামের হাট
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      গ্রামের হাটে, গরম ভাতের সাথে হাসের মাংস দুর্দান্ত মজার ।
                      সাথে শনিবারের এই হাটে, মাটির পাতিলের দোকান, গরু, ছাগল, হাস
                      মুরগি সহ সবকিছুই পাওয়া যায় ।
                    </p>
                  </div>
                  <div className="bg-[url('/unnamed(18).jpg')] bg-no-repeat bg-cover rounded-xl ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      বিল, হাওরের মতই সুন্দর
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      এখানে কয়েক কিলোমিটার ব্যাপি বিস্তৃত বিল দারুন সুন্দর ।
                      সাথে আছে নৌকায় চড়ে বেড়ানর সুবিধা, হরেক রকম পাখি,
                      মাছরাঙ্গা, অতিথি পাখি সহ কালো আর সাদা বক আর অগুনতি ঘুঘু এই
                      এলাকাকে করেছে অনন্য ।
                    </p>
                  </div>
                  <div className="bg-[url('/unnamed(17).jpg')] bg-no-repeat bg-cover rounded-xl  ">
                    <p className="text-3xl font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      প্রজেক্ট বর্গা
                    </p>
                    <p className=" font-bold text-center m-5 bg-amber-400 rounded-4xl p-1 text-white">
                      আমাদের প্রজেক্ট বর্গার গরুর সাথে সময় কাটাতে চান ? অথবা
                      আমাদের বাগানের টুকটাক কাজ – সময় ত এভাবেই বই পড়তে আর ঘুমিয়ে
                      আর বেড়িয়ে চলে যাবে !{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-amber-100 px-20 text-amber-100">k</div>
        </div>
      </div>
      {/* comment */}
      <div className="flex justify-between">
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
        <div className="">
          <div className="text-8xl text-amber-400 bg-white rounded-4xl font-bold text-center my-10 ">
            Costomer Review
          </div>
          <div>
            <marquee behavior="" direction="">
              <div className="flex gap-5">
                {data.map((data) => (
                  <Review2 data={data}></Review2>
                ))}
              </div>
            </marquee>
          </div>
        </div>
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
      </div>
      <div className="flex justify-between">
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
        <div className="my-10 flex gap-5">
          <div>
            {/* about */}
            <div></div>
            {/* find */}
            <div></div>
            {/* contact */}
            <div></div>
            {/* book */}
            <div className="text-center my-10">
              <div className="text-4xl font-bold mb-4">
                So, What Are You Waiting For?
              </div>
              <NavLink to="SingUp">
              <div className="btn bg-amber-400 text-white px-6 py-2 rounded-xl hover:bg-amber-500">
                Book Now
              </div>
              </NavLink>
            </div> 
          </div>
        </div>
        <div className="bg-amber-100 px-20 text-amber-100">k</div>
      </div>
    </div>
  );
};

export default Home;
