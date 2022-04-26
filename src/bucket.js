import useFetch from "./useFetch";
import Highlightlist from "./Highlightlist";


   const onDrop = (ev, cat ) => {
    let id = ev.dataTransfer.getData("id") ;
    let tasks = this.state.tasks.filter((task) => {
        if (task.name === id)
        {
            task.categpry = cat;
        }
        return task;
    });
    this.setState ({
        ...this.state, tasks
    })
}
const Buckets = () => {
ondragover = (ev) => {
    ev.preventDefault();
}
    
    const {Highlights, error} =  useFetch('http://localhost:5000/Highlights');
    console.log(Highlights);
    return ( 
        <div className="groups flex flex-wrap place-content-center my-20">
            <div className= "drppable" onDragOver={(e) => this.ondragover(e)}
                onDrop = {(e) => onDrop(e, "complete")} >
            <div className= "bg-slate-200 basis-[55%] p-5 m-5 rounded-md mt-20">
                <h1 className="text-2xl font-bold mb-2">Goals/Needs</h1>
                {error && <div>{error}</div>}
                {Highlights && <Highlightlist Highlights={Highlights.filter((Highlight) =>Highlight.group === 'Goals/Needs')} title="All Highlights"></Highlightlist>}
            </div>
            <div className="bg-slate-200 basis-[35%] p-5 m-5 rounded-md">

                <h1 className="text-2xl font-bold mb-2">Pain Points</h1>
                {error && <div>{error}</div>}
                {Highlights && <Highlightlist Highlights={Highlights.filter((Highlight) =>Highlight.group === 'Pain Points')} title="All Highlights"></Highlightlist>}
                </div>
        </div>
            )
</div>
     );
}
 
export default Buckets;