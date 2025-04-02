const Back = (props) => {
  return (
    <>
      <div className={ `${props.color} ${props.text} shadow-2xl shadow-emerald-600 font-bold absolute inset-0 flex items-center justify-center bg-white rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
        {props.title}
      </div>
    </>
  );
};

export default Back;
