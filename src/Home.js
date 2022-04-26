import HighlightList from './Highlightlist';
import useFetch from './useFetch';

const Home = () => {
        const {Highlights} = useFetch('http://localhost:5000/Highlights');
            return (
        <div className="Home flex flex-wrap p-20  ">
          { Highlights && <HighlightList Highlights = {Highlights} />}     
          
               </div>
    );
}
export default Home;