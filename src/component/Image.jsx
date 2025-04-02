import PROFES from "../assets/PROFES.jpg"
const Image=()=>{
    return(
        <div className="flex items-center justify-center h-screen ">
        <img src={PROFES} alt="Kashish" 
        className="rounded-full object-cover w-[500px] h-[340px] mr-8 mt-20"/>
        </div>
    )
}
export default Image