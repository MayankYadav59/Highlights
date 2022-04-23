import { Link } from "react-router-dom";
const HighlightList = (props) => {
    const Highlights = props.Highlights;

    
        return (  
            <div className="Highlight_list">
                    {Highlights.map((Highlight) => (
                        <div className = 'Highlight-preview inline-block ml-20 bg-slate-400 text-white rounded-md p-2 text-lg  w-60 my-2' key ={Highlight.id} >
                        <Link to= {`/Highlights/${Highlight.id}`}>
                        <h2 className = 'bg-stone-800 rounded-md p-1 text-center inline-block' >{Highlight.title}  </h2>      
                        <p> {Highlight.body} </p>
                        </Link>
                        <span> {Highlight.author} </span>
                        </div>
                    ))}
            </div>
    );
    }
    export default HighlightList;