import { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Athena - An AI Assistant",
    developedBy: "Kashish Omar",
    year: "2023-2024",
    description:
      "An AI personal assistant designed to perform tasks and provide information using AI and NLP. It can set reminders, answer questions, manage schedules, and more—similar to Siri and Google Assistant.",
    techStack: [
      "Python",
      "Natural Language Processing (NLP)",
      "Machine Learning",
      "Speech Recognition",
      "Multi-Modal Capabilities",
      "APIs and Integrations",
      "Text-to-Speech (TTS)",
      "Knowledge Bases",
      "User Interface",
    ],
    features: [
      "Voice and text-based interactions",
      "Wikipedia search and information retrieval",
      "Opening websites (Google, YouTube, Stack Overflow, etc.)",
      "Time and date announcement",
      "Launching applications (Chrome, VS Code, etc.)",
      "Playing songs via Spotify search",
      "Smart personal assistant responses",
    ],
    // liveLink: "", // Add if deployed
    // githubRepo: "", // Add your GitHub repo link
  },
  {
    title: "SMS Spam Detection App",
    developedBy: "Kashish Omar",
    year: "2024-2025",
    description:
      "A Streamlit-based web application that detects whether an SMS message is spam or not using a trained machine learning model. It preprocesses the text, extracts features, and classifies the message in real time.",
    techStack: [
      "Python",
      "Natural Language Processing (NLP)",
      "NLTK (Stopwords, Tokenization)",
      "Joblib (Model Serialization)",
      "Streamlit (UI Framework)",
      "Pre-trained ML Model (Loaded via joblib)",
    ],
    features: [
      "Real-time SMS spam detection",
      "Text preprocessing (lowercasing, punctuation removal, stopword filtering)",
      "Machine learning-based classification using a pre-trained model",
      "Interactive UI with Streamlit",
      "Handles edge cases and errors gracefully",
      "User-friendly results display with emojis",
    ],
    // liveLink: "", // Add if deployed
    // githubRepo: "", // Add your GitHub repo link
  },
  {
    title: "Language Detection Model",
    developedBy: "Kashish Omar",
    year: "2024-2025",
    description:
      "A web-based application that detects the language of a given text using a Naïve Bayes algorithm. The project utilizes a trained machine learning model and a user-friendly web interface powered by Flask.",
    techStack: [
      "Python",
      "Flask (Web Framework)",
      "Scikit-Learn (Machine Learning Models)",
      "Naïve Bayes Algorithm",
      "NLTK (Stopwords, Tokenization)",
      "HTML, CSS, JavaScript",
      "Bootstrap (For UI Styling)",
      "CSV (Dataset Storage)",
      "Virtual Environment (Dependency Management)",
    ],
    features: [
      "Detects the language of input text from a pre-defined dataset",
      "Trained using the Naïve Bayes algorithm",
      "Web-based UI for real-time language detection",
      "Easily extendable to support additional languages",
    ],
    // liveLink: "", // Add if deployed
    // githubRepo: "", // Add your GitHub repo link
  },

  // {
  //   title: "React JS Essentials",
  //   issuedBy: "Meta",
  //   year: "2022",
  //   description:
  //     "Mastering the React framework to build modern UI applications.",
  // },
];

const Project = () => {
  const [selectedProj, setSelectedProj] = useState(null);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="bg-white w-screen h-16"></div>
      <section className="bg-[#f8f5f2] text-[#4B3621] py-16 text-center relative">
        <h2 className="text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-[#6D4C41] mb-10">
          Showcasing my learning journey through certifications.
        </p>

        {/* Vertical Timeline Line */}
        <div className="h-90 mt-18 absolute left-1/2 top-28 bottom-8 w-1 bg-[#E0C3A5] transform -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto relative">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`flex items-center mb-10 w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Connector Dot */}

              <div
                className={
                  active
                    ? "invisible"
                    : " relative flex-shrink-0 bg-[#FFC107] text-white p-4 rounded-full shadow-lg z-10"
                }
              >
                <FaCheckCircle size={24} />
              </div>

              {/* Certificate Info */}
              <div
                className="mr-4 bg-white p-6 w-[45%] rounded-lg shadow-lg border border-[#E0C3A5] hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProj(proj);
                  setActive(true);
                }}
              >
                <h3 className="text-2xl font-bold">{proj.title}</h3>
                <p className="text-[#6D4C41] font-bold pt-2">
                  Developed by:{" "}
                  <span className="text-rose-500"> {proj.developedBy}</span>
                  <span className="font-medium">{proj.issuedBy}</span>
                </p>
                <span className="text-sm text-[#8B5E3C] font-bold pt-2">
                  {proj.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pop-Up Modal */}
        {selectedProj && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-xl w-200 h-fit text-center relative">
              <button
                onClick={() => {
                  setSelectedProj(null);
                  setActive(false);
                }}
                className="absolute top-2 right-2 text-gray-600"
              >
                <FaTimes size={20} />
              </button>
              <h3 className="text-2xl font-bold text-[#4B3621]">
                {selectedProj.title}
              </h3>
              <p className="text-[#6D4C41] font-bold pt-2">
                Developed by:{" "}
                <span className="text-rose-500">
                  {selectedProj.developedBy}
                </span>
              </p>
              <p className="text-sm text-[#8B5E3C] font-bold mb-4 pt-2">
                {selectedProj.year}
              </p>
              <p className="text-sm text-[#8B5E3C] font-bold mb-4">
                {selectedProj.description}
              </p>
              <p className="text-sm text-[#8B5E3C] font-bold mb-4">
                <ul className="list-disc ml-10">
                  {selectedProj.techStack.map((e, i) => {
                    console.log(e);
                    return <li className="text-left w-fit">{e}</li>
                  })}
                </ul>
              </p>

              {/* <button className="bg-amber-500 rounded-xl w-50 h-9"> <a href={selectedProj.link}>🎓 View Credentials!</a></button> */}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Project;
