import "animate.css";

const Banner = () => {
  return (
    <div className="carousel w-full min-h-[calc(100vh-68px)]">
      <div
        id="slide1"
        className="carousel-item relative w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/KyRMfLp/action.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate__animated animate__fadeInLeft">
            <h2 className="text-5xl font-bold mb-4 text-red-500">
              Action Movies
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Dive into the adrenaline-pumping world of action movies. From
              high-octane car chases to epic battle scenes, experience thrill
              like never before.
            </p>
          </div>
        </div>
        <a
          href="#slide2"
          className="absolute right-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Next
        </a>
        <a
          href="#slide3"
          className="absolute left-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Previous
        </a>
      </div>

      <div
        id="slide2"
        className="carousel-item relative w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/9yMcmvv/thriller.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate__animated animate__fadeInUp">
            <h2 className="text-5xl font-bold mb-4 text-red-500">
              Thriller Movies
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Keep your heart racing with our edge-of-the-seat thrillers.
              Discover stories full of mystery, suspense, and unexpected twists.
            </p>
          </div>
        </div>
        <a
          href="#slide3"
          className="absolute right-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Next
        </a>
        <a
          href="#slide1"
          className="absolute left-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Previous
        </a>
      </div>

      <div
        id="slide3"
        className="carousel-item relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/RgYnwH6/documentary.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white animate__animated animate__fadeInRight">
            <h2 className="text-5xl font-bold mb-4 text-red-500">
              Documentaries
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              Explore the real world with gripping documentaries. From
              historical events to awe-inspiring nature tales, uncover truths
              that captivate.
            </p>
          </div>
        </div>
        <a
          href="#slide1"
          className="absolute right-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Next
        </a>
        <a
          href="#slide2"
          className="absolute left-5 bottom-5 text-white text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-800"
        >
          Previous
        </a>
      </div>
    </div>
  );
};

export default Banner;
