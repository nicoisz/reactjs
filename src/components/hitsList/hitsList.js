import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BottomPagination from '../bottomPagination/bottomPagination';

const HitsList = () => {
   
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [numberOfPages, setnumberOfPages] = useState(10);

    useEffect(() => {
        const resp = axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=`+page).then(
            response => {setData(response.data.hits);setnumberOfPages(response.data.nbPages);
                setLoading(false);}
            //({data : {hits }}) => setData(hits)        
        ).catch(error => console.log("error", error));
       // setData(resp?.data.hits);
        
    }, [page]);


    return (<div><div className='container'>
            { data.map( hit => (
                    <div className="Rectangle" key={hit.id}>
                        <h4> {hit.author} </h4>
                    </div>
                ))
            }
        </div>
        <BottomPagination setPage={setPage} pageNumber={numberOfPages}></BottomPagination>
            <button onClick={()=> setPage(page - 1)}>anterior</button><p>Page: {page}</p>
            <button onClick={()=> setPage(page + 1)}>siguiente</button>
        </div>);
      
}


export default HitsList;