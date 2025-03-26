import Image from "./Image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="flex items-center h-screen ">
        <h2 className="text-black text-2xl ml-4 mt-12">
          Hello, I'm

          <h1 className="text-6xl font-bold pt-2 ">Kashish Omar👩🏻‍💻</h1>

          <h1 className="text-2xl font-normal pt-2">
            React Developer | Web Developer | Python Developer | AI Enthusiast
          </h1>

          <h3 className="text-xl pt-4 font-serif w-[85%] ">
            A simple, happy soul who finds joy in little things—coding, cute
            stationery, and the love of animals. Spreading positivity, one line
            of code at a time!
          </h3>
          
          <a href="https://www.linkedin.com/in/kashish-omar-0603702a2/">
            <div className="rounded-full w-10 h-10 p-1.5 text-[#0A66C2] border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white mt-5 border-2 overflow-auto">
              <FaLinkedinIn />
            </div>
          </a>
          <button className="mt-5 bg-rose-400 text-white w-2/12 h-10 rounded-full hover:bg-rose-500">
            Hire me
          </button>
        </h2>

        <a href="https://github.com/Kashish2504">
          <div className="rounded-full w-10 h-10 p-1.5 text-[#0A66C2] border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white mt-5 border-2 overflow-auto">
            <FaGithubAlt />
          </div>
        </a>
        <Image />
      </div>
    </>
  );
};
export default Home;
