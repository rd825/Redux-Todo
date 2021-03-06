const initialState = {
    todos: [
        {
            text: 'Do laundry',
            completed: false,
            id: 0,
        },
        {
            text: 'Eat breakfast',
            completed: false,
            id: 1,
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            })

        case 'COMPLETE': 
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    return todo;
                }
                else {return todo}
            })
            return Object.assign({}, state, {
                todos: todos
            })

        case 'DELETE': 
            return Object.assign({}, state, {
                todos: [...state.todos.filter(todo => todo.id !== action.payload)]
            })

        default:
            return state;
    }
  };