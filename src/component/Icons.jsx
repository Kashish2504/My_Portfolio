import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const Icons=()=>{
    return(
        <div className="flex">
        <a href="https://www.linkedin.com/in/kashish-omar-0603702a2/">
            <div className="rounded-full w-10 h-10 p-1.5 text-[#3c2a21] m-3 bg-amber-400 border-[#3c2a21] hover:bg-[#3c2a21] hover:text-amber-400 mt-5 border-2 overflow-auto">
              <FaLinkedinIn />
            </div>
          </a>
        
          <a href="https://github.com/Kashish2504">
          <div className="rounded-full w-10 h-10 p-1.5 text-[#3c2a21] bg-amber-400 border-[#3c2a21] hover:bg-[#3c2a21] hover:text-amber-400 mt-5 border-2 overflow-auto">
            <FaGithubAlt />
          </div>
        </a>
        
        </div>
    )
}
export default Icons