const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const ORDER_PIZZA = 'ORDER_PIZZA'
const ORDER_BURGER = 'ORDER_BURGER'

function orderPizza() {
    return {
        type: ORDER_PIZZA,
    }
}

function orderBurger() {
    return {
        type: ORDER_BURGER,
    }
}

const initialStatePizza = {
    pizzaBase: 100,
}
const initialStateBurger = {
    burgerBuns: 200
}

const reducerPizza = (prevState = initialStatePizza, action) => {
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
const reducerBurger = (prevState = initialStateBurger, action) => {
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...prevState,
                burgerBuns: prevState.burgerBuns - 1
            }
        default:
            return prevState
    }
}

const rootReducer = combineReducers({
    pizza: reducerPizza,
    burger: reducerBurger
})
const store = createStore(rootReducer)
console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderBurger())
store.dispatch(orderBurger())
unsubscribe()
