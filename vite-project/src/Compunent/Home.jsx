import React from "react";
import single from "../assets/single Room-Picsart-AiImageEnhancer.jpg";
import double from "../assets/family Room-Picsart-AiImageEnhancer.jpg";
import food_table from "../assets/food_menu.gif";
import food_morning from "../assets/morning food manu.gif";
import food_day from "../assets/day food manu.gif";
import food_night from "../assets/night food manu.gif";
import "./Home.css";

const Home = () => {
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
          <button className="btn bg-amber-400 text-2xl rounded-4xl p-6 font-bold text-amber-50 border border-4">
            Book Now
          </button>
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
              <button className="btn bg-amber-400 text-2xl rounded-4xl p-6 font-bold text-amber-50 border-4">
                More Rooms
              </button>
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
                    <ul className="flex gap-2 scroller__inner">
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
                        src="../../public/unnamed (24).jpg"
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
                        src="../../public/unnamed (35).jpg"
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
                        src="../../public/unnamed (39).jpg"
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
                        src="../../public/unnamed (16).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (17).jpg"
                        alt=""
                        className="h-60 w-80 object-cover rounded-xl flex-shrink-0"
                      />
                      <img
                        src="../../public/unnamed (18).jpg"
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
    </div>
  );
};

export default Home;
