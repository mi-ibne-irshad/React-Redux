// import redux from 'redux';
const redux = require('redux')
const reduxLogger = require('redux-logger'); //middleware

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()

// ✋action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// this is an action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

// (preiousState, action) => new state

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}




// ✋ Reducer
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return{
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return{
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}


//Combine multiple reducers.
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})






//createStore accept the parameter which is the reducer function
// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger)) //middleware hamyn bohat c functionality apni trf sy khud he kr k da data ha. pre state pa kya tha action kya hoa or next state kya i ya sb bta data ha.
//getState() to give us the initial state of the application.
console.log("Initial State:", store.getState());
const unsubscribe = store.subscribe(()=> {})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe()