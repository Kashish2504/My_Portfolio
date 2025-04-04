const Front = (props) => {
  return (
    <>
      <div className="shadow-2xl shadow-[#3c2a21]/70 absolute inset-0 flex items-center justify-center bg-[#3c2a21] rounded-full [backface-visibility:hidden]">
        {props.children}
      </div>
    </>
  );
};

export default Front;
