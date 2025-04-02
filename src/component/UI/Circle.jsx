import Front from "./Front";
import Back from "./Back";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";


const Circle = (props) => {
  return (
    <>
      <div className="relative w-[100px] h-[100px] group [perspective:1000px] ml-5">
        <div className="absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <Front>
            {props.children}
          </Front>

          {/* Back Side */}
          <Back title={props.title} color={`${props.color}`} text={`${props.text}`}></Back>
        </div>
      </div>
    </>
  );
};

export default Circle;
