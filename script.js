const redux = require('redux')
const createStore = redux.createStore
const ORDER_PIZZA = 'ORDER_PIZZA'

// Action
// const action = {
//     type: ORDER_PIZZA,
//     shop_name: 'Pizza Shop'
// }

// Action Creator
function orderPizza() {
    return {
        type: ORDER_PIZZA,
    }
}

// Reducer
const initialState = {
    pizzaBase: 100,
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...prevState,
                pizzaBase: prevState.pizzaBase - 1
            }
        default:
            return prevState
    }
}
// console.log(reducer(initialState, orderPizza()))

// STORE
// 1 - Store needs to hold application state.
const store = createStore(reducer)

// 2 - It exposes a method called getState which gives your
// application access to the current state in the store.
console.log('Initial State', store.getState())

// 3 - Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()))

// 4 - Allows state to be updated via dispatch(action)
// store.dispatch({
//     type: ORDER_PIZZA,
// })
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
unsubscribe()
store.dispatch(orderPizza())