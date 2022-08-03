import  { useEffect, useState } from 'react'
import axios from 'axios'
import { BottomPagination } from '../bottomPagination/bottomPagination'

export const HitsList = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(10)

  useEffect(() => {
    const resp = axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=` +
          page,
      )
      .then((response) => {
        setData(response.data.hits)
        setnumberOfPages(response.data.nbPages)
        setLoading(false)
      })
      .catch((error) => console.log('error', error))
  }, [page])

  return (
    <div>
      <div className="container">
        {data.map((hit) => (
          <div className="Rectangle" key={hit.id}>
            <h4> {hit.author} </h4>
          </div>
        ))}
      </div>
      <footer className="footer">
        <BottomPagination
          setPage={setPage}
          pageNumber={numberOfPages}
        ></BottomPagination>
      </footer>
    </div>
  )
}
