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
            navigate('/Highlights');
        });
    }
    return (  
    <><h2 className="text-black text-3xl underline from-gray-100 text-opacity-100 font-black bg-white justify-center flex my-6"> ADD HIGHLIGHT </h2>
          <div className="Add ml-32 p-4 bg-gray-400 inline-block  w-10/12 ">
            <form onSubmit={handleSubmit}>
                <select className="text-white bg-stone-900 text-md text-opacity-100  rounded-md p-2 hover:bg-gray-600"> value={title}
                    onChange={(e) => settitle(e.target.value)}
                >
                    <option>Select</option>
                    <option>Services</option>
                    <option>Risks</option>
                </select><br /><br />
                <label className="text-white bg-stone-900 text-md text-opacity-100  rounded-md p-2 hover:bg-gray-600"> Highlight body: </label><br /><br />
                <textarea className= ' h-5/6 cursor:pointer'
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                >
                </textarea><br /><br />
                <label className="text-white bg-stone-900 text-md text-opacity-100 rounded-md p-2 hover:bg-gray-600"> Author: </label><br /><br />
                <input className='cursor:pointer'
                    value={author}
                    onChange={(e) => setauthor(e.target.value)} /><br /><br />
                <label className="text-white bg-stone-900 text-md text-opacity-100 p-2 rounded-md hover:bg-gray-600 "> Group: </label><br /><br />
                <select name="" id="" className="mb-2 rounded-sm" value={group} onChange={(e) => setgroup(e.target.value)}>
                    <option>Select</option>
                    <option>Pain Points</option>
                    <option>Goals/Needs</option>
                </select><br /> <br />
                <button className="bg-stone-900 hover:bg-gray-600 text-white rounded-md p-2 right-0.5 flex ">Add Highlight</button>
            </form>
        </div></>
    );
}
 
export default Add;