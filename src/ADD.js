import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Add = () => {
    const [title, settitle] = useState("Select");
    const [body, setbody] = useState("");
    const [author, setauthor] = useState("");
    const [group, setgroup] = useState("Select");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const Highlight = {title, body, author, group};
        fetch('http://localhost:5000/Highlights', {
            method : 'POST',
            headers : { 'Content-type' : 'application/json' },
            body : JSON.stringify(Highlight)
        }).then (() => {
            console.log('New Highlight added');
            navigate('/');
        });
    }
    return (  
        <div className="Add ml-20 p-4 bg-slate-100 inline-block p-4 w-9/12 ">
            <span className = "text-black text-lg text-opacity-100 bg-white p-2 ">Add new Highlights:</span><br /><br />
            <form onSubmit={handleSubmit}>
               <select value = {title}
               onChange = {(e) => settitle(e.target.value)}
               >
                <option >Select</option>
                <option >Services</option>
                <option >Risks</option>
                </select><br /><br />
                <label className = "text-black text-lg text-opacity-100 bg-white p-2"> Highlight body: </label><br /><br />
                <textarea 
                value = {body}
                onChange = {(e) => setbody(e.target.value)}
                >     
                </textarea><br /><br />
                <label className = "text-black text-lg text-opacity-100 bg-white p-2" > Author: </label><br /><br />
                <input 
                value = {author}
                onChange = {(e) => setauthor(e.target.value)}                
                /><br /><br />
                 <label className = "text-black text-lg text-opacity-100 bg-white p-2" > Group: </label><br /><br />
                <select name="" id="" className="mb-2 rounded-sm" value={group} onChange = {(e) => setgroup(e.target.value)}>                   
                <option >Select</option>
                <option>Pain Points</option>
                <option>Goals/Needs</option>
                </select><br />
               <button className="bg-black text-white rounded-md p-1 m-2">Add Highlight</button>
            </form>
        </div>
    );
}
 
export default Add;