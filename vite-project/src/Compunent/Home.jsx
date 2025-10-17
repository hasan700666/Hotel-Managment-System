import React from "react";

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
            <span className="text-8xl text-amber-400 bg-amber-50 rounded-4xl px-7 font-bold">
              KureGhar
            </span>
          </h1>
          <br />
          <p className="text-lg font-bold">
            Pure organic products straight from nature 🌿
          </p>
          <br />
          <br />
          <button className="btn bg-amber-400 text-2xl rounded-4xl p-6 font-bold text-amber-50">
            Book Now
          </button>
        </div>
      </div>

      {/* Rooms */}
      <div>
        <div className="text-8xl text-amber-400 bg-amber-50 rounded-4xl px-7 font-bold text-center my-10">
          Our Rooms 
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
