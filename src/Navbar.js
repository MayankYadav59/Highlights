import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div className="navbar p-5 flex justify-between bg-gray-500 rounded-md" >
            <span className="text-3xl font-bold text-lg ml-20  ">
                        Messaging / 
                <button>
                         Affinity Map <i class="bi bi-caret-down-fill"></i> 
                </button> 
            </span>
            <span className = "text-3xl font-bold right-100">
                <Link to = '/buckets'><button className = "bg-stone-900 text-white rounded-md p-2 text-sm hover:bg-gray-600">Group Highlights </button> </Link>
                <button className = "bg-stone-900 text-white rounded-md p-2 ml-2 text-sm hover:bg-gray-600"> Dot Voting </button>   
            </span>    
        </div>
   );
}


export default Navbar;