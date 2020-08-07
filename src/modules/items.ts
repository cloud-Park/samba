const ADD_ITEM = 'item/ADD_ITEM' as const;
const DELETE_ITEM = 'item/DELETE_ITEM' as const;

//action 생성함수
export const addItem = (item: Item) => ({ 
    type: ADD_ITEM , 
    payload: item
});
export const deleteItem = (id: number) => ({ 
    type: DELETE_ITEM,
    payload: id
});

//action들의 타입스크립트 type 준비
type ItemsAction =
    | ReturnType<typeof addItem>
    | ReturnType<typeof deleteItem>;

//상태를 위한 타입
export type Item = {
    id: number;
    img: string;
    name: string;
    price: number;
    score: number;
}

type ItemsState = Item[];

//초기값
const initialState: ItemsState = [
    {id: 1, img: 'scr/img1', name:'상품1', price: 1000, score:4},
    {id: 2, img: 'scr/img2', name:'상품2', price: 2000, score:4},
    {id: 3, img: 'scr/img3', name:'상품3', price: 3000, score:4},
];


function items(state: ItemsState = initialState, action: ItemsAction) :  ItemsState{
    switch (action.type) {
        case ADD_ITEM:
            const nextId = Math.max(...state.map(item=>item.id)) + 1;
            return state.concat({
                id: nextId,
                img: action.payload.img,
                name: action.payload.name,
                price: action.payload.price,
                score: action.payload.score
            });
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export default items;