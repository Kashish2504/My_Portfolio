const Front = (props) => {
  return (
    <>
      <div className="shadow-2xl shadow-emerald-600 absolute inset-0 flex items-center justify-center bg-white rounded-full [backface-visibility:hidden]">
        {props.children}
      </div>
    </>
  );
};

export default Front;
