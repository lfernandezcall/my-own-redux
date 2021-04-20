// Library code

function createStore(reducer) {
    let state;
    let listeners = [];
  
    const getState = () => state;
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    };
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    return {
      getState,
      subscribe,
      dispatch
    };
  }
  
  // App code
  
  function addTodoAction(todo) {
    return {
      type: 'ADD_TODO',
      todo
    };
  }
  
  function removeTodoAction(id) {
    return {
      type: 'REMOVE_TODO',
      id
    };
  }
  
  function toggleTodoAction(id) {
    return {
      type: 'TOGGLE_TODO',
      id
    };
  }
  
  function addGoalAction(goal) {
    return {
      type: 'ADD_GOAL',
      goal
    };
  }
  
  function removeGoalAction(id) {
    return {
      type: 'REMOVE_GOAL',
      id
    };
  }
  
  function todos(state = [], action) {
    const todoActions = {
      ADD_TODO: state.concat([action.todo]),
      REMOVE_TODO: state.filter((f) => f.id !== action.id),
      TOGLE_TODO: state.map((f) => (f.id === action.id ? { ...f, complete: !f.complete } : f))
    };
  
    return todoActions[action.type] || state;
  }
  
  function goals(state = [], action) {
    const goalsActions = {
      ADD_GOAL: state.concat([action.goal]),
      REMOVE_GOAL: state.filter((f) => f.id !== action.id)
    };
  
    return goalsActions[action.type] || state;
  }
  
  function app(state = [], action) {
    return {
      todos: todos(state.todos, action),
      goals: goals(state.goals, action)
    };
  }
  
  const store = createStore(app);
  
  store.subscribe(() => {
    console.log('The new state is ', store.getState());
  });
  
  store.dispatch(
    addTodoAction({
      id: 0,
      name: 'Learn React',
      complete: false
    })
  );
  