import Image2 from "./Image2";
const About = () => {
  return (
    <div >
      <div className="bg-white w-screen h-22"></div>
    <div className="flex justify-center items-center gap-5 bg-emerald-300 text-3xl h-[80vh]">
      <Image2 />
      <div className="w-[60%] mr-5">
        <h1 className="font-bold pl-70 pt-2 text-black">About me</h1>
        <p className="text-justify font-semibold text-xl mt-5 mr-5 text-gray-800">
          I'm a passionate developer who thrives on solving problems, creating
          seamless digital experiences, and pushing the boundaries of
          innovation. 🚀 My journey started with a deep curiosity for
          technology, leading me to explore web development, full-stack
          engineering, and AI-driven solutions. Whether it's crafting
          interactive user interfaces, designing intelligent algorithms, or
          optimizing performance, I love building tech that truly makes a
          difference.Beyond the screen, I find joy in simple things—cute
          stationery, new ideas, and moments of inspiration. I believe in
          continuous learning, embracing challenges, and turning creativity into
          reality. Let's collaborate and create something extraordinary! ✨💡
        </p>
      </div>
    </div>
    </div>
  );
};
export default About;
