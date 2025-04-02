const Back = (props) => {
  return (
    <>
      <div className={ `${props.color} ${props.text} font-bold absolute inset-0 flex items-center justify-center bg-white rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
        {props.title}
      </div>
    </>
  );
};

export default Back;
