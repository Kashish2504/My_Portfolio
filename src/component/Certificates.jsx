import {
  SiInfosys,
  SiGreatlearning,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si";

const services = [
  {
    title: "HTML",
    icon: <SiInfosys />,
    link: "https://drive.google.com/file/d/15SXMEy3RjcrovMJlV6KRmkBPQpC6VmKh/view?usp=sharing",
  },
  {
    title: "Artificial Intelligence",
    icon: <SiGreatlearning />,
    link: "https://drive.google.com/file/d/1RdK8r0yLLnJF701Xukc1mAIw-QrnLEx4/view?usp=sharing",
  },
  {
    title: "C Language",
    icon: <SiCodechef />,
    link: "https://drive.google.com/file/d/1OlUPnTE-4oL49vGU9NzHi2gM75PNR2Rj/view?usp=sharing",
  },
  {
    title: "Python",
    icon: <SiHackerrank />,
    link: "https://drive.google.com/file/d/1npRBNeeVzoyI8aYn-A72RdoHO-5oBCoU/view?usp=sharing",
  },
  {
    title: "CSS",
    icon: <SiHackerrank />,
    link: "https://drive.google.com/file/d/1uPFnJ0EFVcpTaRgmnv0vnOMI4_-DbM4i/view?usp=sharing",
  },
  {
    title: "Javascript",
    icon: <SiInfosys />,
    link: "https://drive.google.com/file/d/1PJ7djUw8SXr4F1ctXNGzuFctRWodbtP1/view?usp=sharing",
  },
  {
    title: "CSS",
    icon: <SiInfosys />,
    link: "https://drive.google.com/file/d/1i8PiaH9fY6NF71dPZxcYTGAD_wLXp1to/view?usp=sharing",
  },
  {
    title: "Python-Part1",
    icon: <SiInfosys />,
    link: "https://drive.google.com/file/d/1CfK_D_xX-u2KQdRqZXidi80LzcV65fsD/view?usp=sharing",
  },
  {
    title: "Python-Part2",
    icon: <SiInfosys />,
    link: "https://drive.google.com/file/d/1Z0a0092D-zmHMq_I59_9qEvTunyMj3oL/view?usp=sharing",
  },
  {
    title: "Problem Solving",
    icon: <SiHackerrank />,
    link: "https://drive.google.com/file/d/18URViahfQu1StEPsizqV3W7yDdndI3QJ/view?usp=sharing",
  },
];

const Certificate = () => {
  return (
    <>
      <div className="bg-white w-screen h-16"></div>
      <section className=" text-amber-400 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
        🎓 My Certifications
          </h2>
        <p className="text-[#6D4C41] mb-10">
        Showcasing my learning journey through certifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#5a3e2b] p-6 w-90 h-40 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-[#FFC107] text-5xl mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <button className="bg-amber-500 text-white rounded-xl w-50 h-9 hover:bg-amber-400 visited:visible">
                <a href={service.link} target="_blank">
                  🎓 View Credentials!
                </a>
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificate;
