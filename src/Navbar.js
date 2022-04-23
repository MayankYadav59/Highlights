import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <div className="navbar p-5 flex justify-between" >
            <span className="text-3xl font-bold text-xl ">
                        Messaging / 
                <button>
                         Affinity Map <i class="bi bi-caret-down-fill"></i> 
                </button> 
            </span>
            <span className = "text-3xl font-bold right-100">
                <Link to = '/buckets'><button className = "bg-stone-900 text-white rounded-md p-2 text-lg">Group Highlights </button> </Link>
                <button className = "bg-stone-900 text-white rounded-md p-2 ml-2 text-lg"> Dot Voting </button>   
            </span>    
        </div>
   );
}


export default Navbar;