import React from 'react';
import './Item.scss';
import { Item } from '../modules/items';
import Card from 'react-bootstrap/Card';

interface ItemProps {
    item: Item;

};

const ShopItem: React.FC<ItemProps> = ({
    item
}: ItemProps) => {
    const handleClick = () => {
        console.log(item.id);
    }
    return (
            <Card onClick={handleClick} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={require('./test.png')} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text >
                        {item.price}

                    </Card.Text>
                    <Card.Text>
                        {item.score}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
    );
}

export default ShopItem;