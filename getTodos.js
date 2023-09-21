const { createStore, applyMiddleware } = require("redux");  
const thunk = require('redux-thunk').default;
const axios = require('axios');


const todos_request = 'todos_request';
const todos_success = 'todos_success';
const todos_failed = 'todos_failed';

// initial state
const initialTodoState = {
    todos: [],
    loading: false,
    error: null
}

// actions
const todosRequestAction = () => {
    return {
        type: todos_request,
    }
}

const todosSuccessAction = (todos) => {
    return {
        type: todos_success,
        payload: todos
    }
}

const todosFailedAction = (error) => {
    return {
        type: todos_failed,
        payload: error
    }
}

// reducer
const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case todos_request:
            return {
                ...state,
                loading: true
            }
        case todos_success:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }    
        case todos_failed:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
            
        default:
            return state;
    }
}

// function for fetching data
const fetchData = () => {
    return (dispatch) => {
        dispatch(todosRequestAction());
        axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                todos = res.data;
                const todoTitle = todos.map(todo => todo.title);
                // console.log(todoTitle)
                dispatch(todosSuccessAction(todoTitle));
            })
            .catch(err => {
                dispatch(todosFailedAction(err.message))
            })
    }
}

// store
const store = createStore(todosReducer, applyMiddleware(thunk))

// view state value from store
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())

