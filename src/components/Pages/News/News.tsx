import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { INew } from '../../../redux/models/INew';
import NewSingle from './NewSingle';
import Error from '../../Error/Error';
import NewsNavBar from './NewsNavBar';

interface NewsProps{
    urlLink: string;
    newsTitle: string
}

const News: React.FC<NewsProps> = ({urlLink, newsTitle}) => {
    const [datanews, setDataNews] = useState([] as INew[])
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try{
            const url = urlLink
            const response = await axios.get(url)
            setDataNews(response.data.articles)
        } catch(error){
            setError(true);
            console.log(error)
        };
    }

    useEffect(() => {
        fetchData()
    }, [])
   
    return (

        !error ? 
        <>
            <NewsNavBar title={newsTitle}/>
            <div className='row' style={{display: 'flex', flexWrap: 'wrap'}}>
                {datanews && datanews.map((newsItem) => {
                return <NewSingle key={newsItem.url} item={newsItem}/>
            })}
            </div>
        </>
        : <Error text={'There are no news, check your sources'}/>
    )
}

export default News
