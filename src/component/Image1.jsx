import p1 from "../assets/p1.png"
const Image1=()=>{
    return(
        <div className="flex items-center justify-center h-screen ">
        <img id="HomeImage" src={p1} alt="Kashish" 
        className="brightness-110 rounded-full object-cover w-[500px] h-[340px] mr-8 mt-20 shadow-amber-400 shadow-xl"/>
        </div>
    )
}
export default Image1