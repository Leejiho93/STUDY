import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../components/Menu';
import Summary from '../components/Summary';
import AddColorForm from '../components/AddColorForm';
import Star from '../components/Star';
import StarRating from '../components/StarRating';
import StarRatingClass from '../components/StarRatingClass';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'


const middlewares =  (store) => (next) => (action) => {
    next(action);
};
const storeFactory = ( initialState ) => 
applyMiddleware(middlewares)(createStore)(
    rootReducer,
    (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) :
    initialState
)

const store = storeFactory();



// const data = [
//     {
//         "name": "구운 연어",
//         "ingredients": [
//             {"name": "연어", "amount": 500, "measurement": "그램"},
//             {"name": "잣", "amount": 1, "measurement": "컵"},
//             {"name": "버터 상추", "amount": 2, "measurement": "컵"},
//             {"name": "옐로 스쿼시", "amount": 1, "measurement": "개"},
//             {"name": "올리브 오일", "amount": 0.5, "measurement": "컵"},
//             {"name": "마늘", "amount": 3, "measurement": "쪽"},
//         ],
//         "steps": [
//             "오븐을 350도로 예열한다",
//             "유리 베이킹 그릇에 올리브 오일을 두른다",
//             "연어, 마늘, 잣을 그릇에 담는다",
//             "오븐에서 15분간 익힌다",
//             "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.",
//             "오븐에서 그릇을 꺼내서 15분간 식힌 다음 상추를 곁들여서 내놓는다."
//         ]
//     },
//     {
//         "name": "생선 타코",
//         "ingredients": [
//             {"name": "흰살 생선", "amount": 500, "measurement": "그램"},
//             {"name": "치즈", "amount": 1, "measurement": "컵"},
//             {"name": "아이스버그 상추", "amount": 2, "measurement": "컵"},
//             {"name": "토마토", "amount": 2, "measurement": "개(큰 것)"},
//             {"name": "또띠아", "amount": 3, "measurement": "개"},
//         ],
//         "steps": [
//             "생선을 그릴에 익힌다",
//             "또띠야 3장 위에 생선을 얹는다",
//             "또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다",
//         ]
//     },
// ]

const logColor = (title, color) => {
    console.log(`TODO 새로운 색: ${title} | ${color}를 리스트에 넣는다`);
    console.log('TODO 새로운 색을 가지고 UI를 표현한다.')
}

const render = () =>
ReactDOM.render(
    <>  
        <App store={store}/>
        {/* <StarRating /> */}
        {/* <StarRatingClass /> */}
        {/* <AddColorForm onNewColor={logColor}/> */}
        {/* <Summary title="땅콩버터와 젤리" 
        ingredients="땅콩버터, 젤리, 식빵"
        steps="땅콩버터와 젤리를 넓게 바른 식빵 두 장을 바른 면이 안으로 가도록 접는다" />
        <Menu recipes={data} title="맛있는 조리법" /> */}
    </>,
    document.getElementById('root')
);

store.subscribe(render);
render();