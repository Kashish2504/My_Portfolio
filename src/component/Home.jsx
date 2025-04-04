import Image from "./Image";
import Icons from "./Icons";

const Home = () => {
  return (
    <>
      <div className="flex items-center h-screen">
        <h2 className="text-amber-950 text-2xl ml-4 mt-20">
          Hello, I'm

          <h1 className="text-6xl font-bold pt-2 ">Kashish Omar 👩🏻‍💻</h1>

          <h1 className="text-2xl font-normal pt-2">
            React Developer | Frontend Developer | Python Developer | AI Enthusiast 
          </h1>

          <h3 className="text-xl pt-4 font-serif w-[85%] ">
            A simple, happy soul who finds joy in little things—coding, cute
            stationery, and the love of animals. Spreading positivity, one line
            of code at a time!
          </h3>
          
          <Icons/>

          <button className="mt-5 border-amber-950 border-2 bg-amber-400 font-bold text-[#3c2a21] w-2/12 h-10 rounded-full hover:bg-amber-300">
            <a href="#Contact">Hire me</a>
          </button>
        </h2>

        
        <Image />
      </div>
    </>
  );
};
export default Home;
