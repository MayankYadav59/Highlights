import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const HighlightDetails = () => {
    const { id } = useParams();
    const { Highlights } = useFetch('http://localhost:5000/Highlights/' + id);
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:5000/Highlights/' + Highlights.id, {
            method : 'DELETE'
        }).then(() => {
            navigate('/');
        }) 
    }
    return ( 
        <div className="Details p-4 bg-slate-100 inline-block ml-40 mr-40">
            {Highlights &&
                <article>
                    <span className = "text-black text-lg text-opacity-100 bg-white p-2 ">
                        {Highlights.title}
                    </span><br /><br />
                    <div  className = "text-black text-lg text-opacity-100  p-2">
                        {Highlights.body}
                    </div>
                    <span>
                        <div className="Author ml-10">- {Highlights.author}</div><br />
                        <button className = "text-white text-lg text-opacity-100 bg-black  p-2 rounded-md" onClick={handleClick}>DELETE</button>
                    </span>
                </article>
            }
        </div>
     );
}
 
export default HighlightDetails;
