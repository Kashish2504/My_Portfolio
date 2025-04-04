const Nav=()=>{
    return(
        <>
        <div className=" fixed bg-white flex h-15    w-screen z-40">
            <h1 className="font-bold text-amber-400 text-2xl mt-5 ml-8 ">Kashish_Dev</h1>
            
            <a href="#Home" className="font-bold  text-amber-400 text-2xl mt-5 ml-100 hover:scale-110 transition-transform duration-300">
                Home
            </a>
            <a href="#About" className="font-bold  text-amber-400 text-2xl mt-5 ml-8 hover:scale-110 transition-transform duration-300">About</a> 
            <a href="#Skills" className="font-bold  text-amber-400 text-2xl mt-5 ml-8 hover:scale-110 transition-transform duration-300">Skills</a>
            <a href="#Project" className="font-bold  text-amber-400 text-2xl mt-5 ml-8 hover:scale-110 transition-transform duration-300">Projects</a>
            <a href="#Certificate" className="font-bold  text-amber-400 text-2xl mt-5 ml-8 hover:scale-110 transition-transform duration-300">Certificates</a>
            <a href="#Contact" className="font-bold  text-amber-400 text-2xl mt-5 ml-8 hover:scale-110 transition-transform duration-300">Contact</a>
            
        
        </div>
        </>
    )
}
export default Nav