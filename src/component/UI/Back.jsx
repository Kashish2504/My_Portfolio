const Back = (props) => {
  return (
    <>
      <div className={ `${props.color} ${props.text} shadow-2xl shadow-[#3c2a21]/70 font-bold absolute inset-0 flex items-center justify-center bg-[#3c2a21] rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
        {props.title}
      </div>
    </>
  );
};

export default Back;
