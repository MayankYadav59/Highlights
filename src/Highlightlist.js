import { Link } from "react-router-dom";
const HighlightList = (props) => {
    const Highlights = props.Highlights;
    const onDragStart = ( ev, id) =>{
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    }
        return ( 
            <div className="Highlight_list">
                    {Highlights.map((Highlight) => (
                        <div key = {Highlight.id}
                        onDragStart = {(e) => onDragStart(e, Highlight.id)}
                        draggable className= "draggable " >
                        <div className = 'Highlight-preview inline-block ml-20 bg-slate-400 text-white rounded-md p-2 text-lg  w-60 my-2' key ={Highlight.id} >
                        <Link to= {`/Highlights/${Highlight.id}`}>
                        <h2 className = 'bg-stone-800 rounded-md p-1 text-center inline-block' >{Highlight.title}  </h2>      
                        <p> {Highlight.body} </p>
                        </Link>
                        <span> {Highlight.author} </span>
                        </div> 
                    </div>
                    )) }                   
                    </div>
            );
        }
    export default HighlightList;