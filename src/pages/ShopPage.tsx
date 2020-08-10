import React from 'react';
import {Route,RouteComponentProps} from 'react-router-dom';
import ShopItemListContainer from '../containers/ShopItemListContainer';

function ShopPage({match} : RouteComponentProps){
    return(
        <>
        <h1>Header</h1>
        <ShopItemListContainer/>
        <h1>Footer</h1>
        </>
    );
}

export default ShopPage;