import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f5f2] p-6">
        

        <h1 className="text-3xl font-bold text-[#3c2a21] mb-2">Let's Grab a Coffee & Chat! ☕</h1>
        
        <div className="flex w-55 h-15 pt-3 bg-amber-400 m-5 rounded-2xl">
        <MdEmail className="ml-5 w-10 h-10" />
        <a rel="stylesheet" href="mailto:kashishomar2509@gmail.com" className="pl-5 pt-2 font-bold">Send Mail</a>
        </div>

        <div className="flex w-55 h-15 pt-3 bg-amber-400 m-5 rounded-2xl">
        <MdEmail className="ml-5 w-10 h-10" />
        <a rel="stylesheet" href="mailto:kashishomar2509@gmail.com" className="pl-5 pt-2 font-bold">Linkedin</a>
        </div>
        
        <p className="text-gray-600 text-lg mb-6">Drop a message, and let's talk about ideas, projects, or just life. 😊</p>
  
        <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"/>
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"/>
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"></textarea>
          
          <button type="submit" className="w-full bg-[#3c2a21] text-white p-3 rounded-lg hover:bg-[#5a3e2b] transition duration-300">
            ☕ Send & Let's Chat
          </button>
        </form>
        
        
      </div>
    );
  };
  
  export default Contact;