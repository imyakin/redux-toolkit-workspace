import React from 'react'
import { INew } from '../../../redux/models/INew'

interface NewSingleProps{
    item: INew;
}

const NewSingle: React.FC<NewSingleProps> = ({item}) => {
    return (
            <div className="col s4">
                <div className="card" style={{boxShadow:'4px 4px 7px rgba(0,0,0, 0.25)'}}>
                    <div className="card-image">
                        <img src={item.urlToImage} alt={item.title}/>
                    <span className="card-title">{item.source?.name}</span>
                    </div>
                    <div className="card-content teal lighten-4">
                        <p>{item.title}</p>
                    </div>
                    <div className="card-action teal lighten-3">
                        <a href={item.url} target={'_blank'} style={{color: '#000'}}>Full Article</a>
                    </div>
                </div>
            </div>
    )
}

export default NewSingle
