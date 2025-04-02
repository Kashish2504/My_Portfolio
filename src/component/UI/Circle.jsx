import Front from "./Front";
import Back from "./Back";


const Circle = (props) => {
  return (
    <div className="relative w-[100px] h-[100px] group [perspective:1000px] ml-5">
      <div className="absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-180">
        {/* Front Side */}
        <Front>
          {props.children}
        </Front>

        {/* Back Side */}
        <Back title={props.title} color={props.color} text={props.text} />
      </div>
    </div>
  );
};

export default Circle;
