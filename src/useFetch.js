import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const  [Highlights, setHighlight] = useState(null);
    useEffect(() => {
    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(data => {
            setHighlight(data);
    });
}, [url]);
    return {Highlights};
}

export default useFetch;