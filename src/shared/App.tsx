import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {HomePage, ShopPage} from '../pages';
import ShopItemDetail from '../components/ShopItemDetail';

const App:React.FC = () =>{
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/shops" component={ShopPage} />
            <Route path={`/shopPage/:id`} component={ShopItemDetail} />
        </div>
    );
}

export default App;