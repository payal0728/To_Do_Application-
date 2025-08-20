const initialState = {
    todos : []
}

function reducer(state, action){
    switch (action.type) {
        case 'ADD_TODO':
            const {name, description} = action.payload;
            if(!name?.trim()) 
                return state;
            const newToDo = {
            id: Date.now(),
            name: name.trim(),
            description: (description || "").trim(),
            isComplete: false,
            };
            return{...state, todos: [newToDo, ...state.todos]};
    
        default:
           return state 
    }
}
