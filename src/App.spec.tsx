import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import Home from "./components/Pages/Home/Home";
import News from "./components/Pages/News/News";
import {store} from './redux/store/store'

describe('App', ()=>{

    it('should render Home successfully', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <Home/>
                </MemoryRouter>  
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div)
    })

    it('should render Apple News successfully', ()=>{
        const div = document.createElement('div')
        ReactDOM.render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/apple']}>
                    <News 
                        newsTitle='Apple News' 
                        urlLink={'https://newsapi.org/v2/everything?q=apple&from=2022-01-18&to=2022-01-18&sortBy=popularity&apiKey=4d0211344ea24cacaf4c9767a39beb6b'}
                    />
                </MemoryRouter>  
            </Provider>
            , div);
        ReactDOM.unmountComponentAtNode(div)
    })
})
