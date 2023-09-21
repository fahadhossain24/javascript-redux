const { createStore, combineReducers } = require("redux");


// initialize state
// action
// reducer
// store

const add_product = 'add_product';
const get_services = 'get_services';
const add_services = 'add_services';


// initialize state
const initialProductState = {
    products: [],
    totalProduct: 0
}

const initialServiceState = {
    services: [],
    totalService: 0
}

// action define. action is an object - which have 2 properties - type, payload
const addProductAction = (product) => {
    return {
        type: add_product,
        payload: product
    }
}

// services action
const getServicesAction = () => {
    return {
        type: get_services,
    }
}
const addServicesAction = (value) => {
    return {
        type: add_services,
        payload: value
    }
}

// reducer - reducer is a pure function 

const productReducer = (state = initialProductState, action) => {
    switch(action.type){
        case add_product:
            return {
                products: [...state.products, action.payload],
                totalProduct: state.totalProduct + 1
            }
        default:
            return state;
    }
}

// services reducer
const servicesReducer = (state = initialServiceState, action) => {
    switch (action.type) {
        case get_services:
            return {
                ...state
            }
        case add_services:
            return {
                services: [...state.services, action.payload],
                totalService: state.totalService + 1
            }
    
        default:
            return state;
    }
}

// combine reducer.....
const rootReducer = combineReducers({
    reducerR: productReducer,
    reducerS: servicesReducer
})

// create store
const store = createStore(rootReducer)

// store have 3 methods which are getState(), dispatch(), subscribe()

// view
store.subscribe(() => {
    console.log(store.getState())
})

const product1 = {
    name: 'iphone',
    price: 1000
}
const product2 = {
    name: 'vivo',
    price: 1000
}
const service1 = {
    name: 'learning',
    price: 1000
}
const service2 = {
    name: 'earning',
    price: 1000
}

// action dispatch
// store.dispatch(getServicesAction());
store.dispatch(addServicesAction(service1));
store.dispatch(addServicesAction(service2));
// store.dispatch(getServicesAction());
store.dispatch(addProductAction(product1))
store.dispatch(addProductAction(product2))




