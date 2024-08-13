const redux = require ('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buy_cake(){
    return{
        type:BUY_CAKE,
        info:'First redux Action'
    }
}

const initialState1 = {
    numOfCake:10
}

const reducer1 = (state = initialState1 , action) => {
        switch(action.type){
            case BUY_CAKE:return{
                numOfCake:state.numOfCake - 1
            }
            default:return state
        }
}

const store1 = createStore(reducer1)

console.log('InitialState' , store1.getState())

const unsubscribe1 = store1.subscribe(() => console.log('Updated State' , store1.getState())
)

store1.dispatch(buy_cake())
store1.dispatch(buy_cake())
store1.dispatch(buy_cake())

unsubscribe1();

// #####################################################################

const BUY_COFFEE = 'BUY_COFFEE';

function buy_coffee() {
    return {
        type: BUY_COFFEE,
        info: 'First redux Action'
    }
}

const initialState2 = {
    numOfCoffee: 10
}

const reducer2 = (state = initialState2, action) => {
    switch(action.type) {
        case BUY_COFFEE: return {
            numOfCoffee: state.numOfCoffee - 1
        }
        default: return state
    }
}

const store2 = createStore(reducer2);

console.log('InitialState', store2.getState());

const unsubscribe2 = store2.subscribe(() => console.log('Updated State', store2.getState()));

store2.dispatch(buy_coffee());
store2.dispatch(buy_coffee());
store2.dispatch(buy_coffee());

unsubscribe2();

// ############################################################################################

const BUY_TEA = 'BUY_TEA';

function buy_tea() {
    return {
        type: BUY_TEA,
        info: 'First redux Action'
    }
}

const initialState3 = {
    numOfTea: 10
}

const reducer3 = (state = initialState3, action) => {
    switch(action.type) {
        case BUY_TEA: return {
            numOfTea: state.numOfTea - 1
        }
        default: return state
    }
}

const store3 = createStore(reducer3);

console.log('InitialState', store3.getState());

const unsubscribe3 = store3.subscribe(() => console.log('Updated State', store3.getState()));

store3.dispatch(buy_tea());
store3.dispatch(buy_tea());
store3.dispatch(buy_tea());

unsubscribe3();

// ##########################################################################################

const BUY_CHOCOLATE = 'BUY_CHOCOLATE';

function buy_chocolate() {
    return {
        type: BUY_CHOCOLATE,
        info: 'First redux Action'
    }
}

const initialState4 = {
    numOfChocolate: 10
}

const reducer4 = (state = initialState4, action) => {
    switch(action.type) {
        case BUY_CHOCOLATE: return {
            numOfChocolate: state.numOfChocolate - 1
        }
        default: return state
    }
}

const store4 = createStore(reducer4);

console.log('InitialState', store4.getState());

const unsubscribe4 = store4.subscribe(() => console.log('Updated State', store4.getState()));

store4.dispatch(buy_chocolate());
store4.dispatch(buy_chocolate());
store4.dispatch(buy_chocolate());

unsubscribe4();