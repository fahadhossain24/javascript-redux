const { createStore } = require("redux");

const add_user = 'add_user';

// states
const initialUserState = {
    users: [],
    count: 0
}

//action - object - type, payload
const addUserAction = (value) =>{
    return {
        type: add_user,
        payload: value
    }
}

// reducer - a pure functionn
const userReducer = (state = initialUserState, action) =>{
    if(action.type === add_user){
        return {
            users : [...state.users, action.payload],
            count: state.count + 1
        }
    }
}

// create store
const store = createStore(userReducer);

// store has 3 method - getState(), dispatch(), subscribe()
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addUserAction({name: 'fahad'}))
store.dispatch(addUserAction({name: 'rakib'}))


// work flow
// 1. initialize state
// 2. dispatch action
// 3. reducer
// 4. store
// and finally use the update state from store anywhere
