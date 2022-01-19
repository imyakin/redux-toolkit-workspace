import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { INew } from '../../../redux/models/INew';
import NewSingle from './NewSingle';
import Error from '../../Error/Error';

function News() {
    const [datanews, setDataNews] = useState([] as INew[])
    const [error, setError] = useState(false)

    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-01-18&to=2022-01-18&sortBy=popularity&apiKey=4d0211344ea24cacaf4c9767a39beb6b'
        axios.get(url)
        .then((data) => {setDataNews(data.data.articles)})
        .catch((error) => {setError(true); console.log(error)})
    }, [])
   
    return (
        !error ? <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
            {datanews && datanews.map((newsItem) => {
              return <NewSingle key={newsItem.url} item={newsItem}/>
          })}
        </div>
        : <Error text={'There are no news, check your sources'}/>
    )
}

export default News
