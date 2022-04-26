import { Link } from "react-router-dom";
const Navbar2 = () => {
      return (  
        
        <div className="Navbar2 p-5 flex justify-between bg-gray-300 rounded-md" >
            <span className="text-3xl font-bold text-xl ml-20  ">
                        Filter by :
                <button>
                        <select className="bg-black text-white ml-4 hover:bg-gray-600">
                        <option className="bg-black text-white" selected value = " Select " > Select</option>
                        <option className="bg-black text-white" value = " Services " > Services</option>
                        <option className="bg-black text-white" value = " Risks " > Risks</option>
                        </select>                 
                </button> 
            </span>
            <span className = "text-3xl font-bold right-100">
            <button className = "bg-stone-900 text-white rounded-md p-2 text-sm mr-2 hover:bg-gray-600" ><Link to = "/Highlights">Home</Link></button>
                <button className = "bg-stone-900 text-white rounded-md p-2 text-sm mr-20 hover:bg-gray-600" ><Link to = "/Add"><i class="bi bi-file-earmark-fill"></i></Link></button>    
            </span>    
        </div>
   );
}


export default Navbar2;