import React from 'react';
import ShopItem from './ShopItem';
import { RootState } from '../modules';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const ShopItemList: React.FC = () => {
    const items = useSelector((state: RootState) => state.items);
    return (
        <Container>
            <Row>
                {items.map((item) => (
                    (<ShopItem
                        item={item}
                        key={item.id}
                    />)
                ))}

            </Row>
        </Container>
    );
}

export default ShopItemList;