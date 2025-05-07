import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'
const RowList = () => {
  return (
    <>
       
       <Row title="Trendig" fetchUrl={requests.fetchTrending}
       isLargeRow={false}/>
       <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} isLargeRow={false} />
<Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={false} />
<Row title="Popular TV Shows" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={false} />
      
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies " fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies}/>
      
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries}/>
      
    </>
  )
}

export default RowList
