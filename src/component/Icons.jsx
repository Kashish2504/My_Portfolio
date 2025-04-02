import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const Icons=()=>{
    return(
        <div className="flex">
        <a href="https://www.linkedin.com/in/kashish-omar-0603702a2/">
            <div className="rounded-full w-10 h-10 p-1.5 text-[#0A66C2] m-3 border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white mt-5 border-2 overflow-auto">
              <FaLinkedinIn />
            </div>
          </a>
        
          <a href="https://github.com/Kashish2504">
          <div className="rounded-full w-10 h-10 p-1.5 text-[#0A66C2] border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white mt-5 border-2 overflow-auto">
            <FaGithubAlt />
          </div>
        </a>
        
        </div>
    )
}
export default Icons