✋Redux:
    Redux is a predictable state container for JavaScript Apps. (Redux is a library for managing state in a predictable way in JavaScript.)
    1. It is for JavaScript apps.: (Redux is not tied to React. Can be used with React, Angular, Vue or even vanilla JavaScript. Redux is a library for JavaScript applications.)
    2. It is a state container.: (Redux stores the sate of Your application, Consider a React App - state of a component, State of an app is the state represented by all the individual components of that app, Redux will sotre and manage the application state.)
    3. It is predictable.: (Redux is a state container, The state of the application can change, In redux all state transitions are explicit and it is possible to keep track of them, The changes to your application's state become predictable.)
    If You Manage the state of Your application in a predictable way, redux can help you.

✋React + Redux:?
    Why would we want to use redux in a React application? (simple React main hm just apny siblings component ko he apni state bhajh sakty hyn or ksi ko ni redux main hm state alag store main save karwa daty hyn. store k through hm apny ksi b component main state ko save karwa sakty hyn.)
    Components in React have their own state.
    Why do we need another tool to help manage that state?
    ==> React-Redux is the Official Redux UI binding library for React.
    (React<-------------->React-Redux<----------------->Redux)

✋Few Points before we Proceed.
    1. The most basic mistake you can do is learning redux and react in parallel.
    2. Is react with redux still relevant? (Like when we use context apis then should be use redux.)
    3. Should You really learn react with redux if it is going to stay relevant for only a short duration?
    4. Should redux be added to all your react application?
    5. When should I use redux in my react application? :(Jb hmary kafi zyadh routs ya component hon or hm un k drmyan main state ko share karna chahty hyn.)

✋Course Structure:
    1. First learn Just Redux.
    2. Then combine it with React.

✋Three Core Concepts to understand the redux.
    Cake Shop:

    Entities:  (
        Shop -- Store cakes on a shelf
        Shopkeeper -- At the front of the store
        Customer -- At the store entrance
    )

    Activities: (
        Customer -- Buy a cake
        Shopkeeper -- remove a cake from the shelf
                    -- receipt to keep track
    )


    In Redux: 
        Shop ----> Store -------> Holds the state of Your application
        Intention to Buy_Cake || Customer -----> Action -----> Describes What happened
        Shopkeeper ----------> Reducer ----------> Ties the store and actions together.



    1. A store that holds the state of your application.
    2. An action that describes the changes in the state of the application.
    3. A reducer which actually carries out the state transition depending on the action.

✋Three Principles
    1. First Principle: The state of your whole application is stored in an object tree within a single store, (Maintain our application state in a single object which would be managed by the Redux store.)
    {
        numberOfCakes: 10
    }
    2. Second Principle: The only way to change the state is to emit an action, an object describing what happened, (If you want to update the state of your app, you need to let Redux know about that with an aciton, Not allowed to directly update the state object.)
    {
        type: Buy_Cake
    }
    3. Third Principle: To specify how the state tree is transformed by actions, you write pure reducers, (Reducer are the pure function that take the previous state and action as input and return the next state.) ==> 
    Reducer - (previousState, action) => new state
    Reducer is the shopkeeper: 
    const reducer = (state, action) => {
        switch (action.type) {
            case Buy_Cake: return {
                numOfCakes: state.numOfCakes - 1
            }
        }
    }

        JavaScript application -----------> Action -------------> Reducer -----------> Redux Store (State) ---------> JavaScript application
        JavaScript application never be update the state directly, It's comes from a proper path.


✋Action : The Actions are the only way your application can interact with the store, Action Carry some information from your app to the redux store.
            Action are Plain JavaScript objects. They must have a 'type' property that indicates the type of action being performed.
            The 'type' property is typically defined as string constants

✋Reducers: Specify how the app's state changes in response to action sent to the store( Action only describe what happen but not to describe how to happen. Recuder is the function that accepts state and action as arguments, and returns the next state of the appliction)

    (previousState, action) => newState

✋Store: One Store for the entire application
    Responsibitlities:
        1. Holds application state.
        2. Allows access to state via getState().
        3. Allows state to be updated via dispatch(action).
        4. Registers listeners via subscribe(listener).
        5. Handles unregistering of listeners via the function returned by subscribe(listener).


✋Middleware: Is the suggested way to extend Redux with custom functionality. (Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer, Use Middleware for logging, crash reporting, performing asynchronous tasks etc)

Redux Thunk will allow us to define asynchronous action creator in our application



✋Action: 
    (Synchronous Action):
    As soon as an action was dispatched, the state was immediately updated. If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1. Same with BUY_ICECREAM action as well.
   
    (Asynchronous Action):
    You can use Asynchronous API calls to fetch data from an end point and use that data in your application.

    Our application fetch a list of users from an API end point and stores it in the redux store.
    State?
        state = {
            loading: true,
            data: [],
            error: ''
        }

        loading - Display a loading spinner in your component.
        Data - List of users.
        Error - Display error to the user
    Action?
        There are three action:

        FETCH_USERS_REQUEST - Fetch list of user (Second & third action dependent on first action.)
        FETCH_USERS_SUCCESS - Fetched successfully.
        FETCH_USERS_FAILURE - Error fetching the data.

    Reducer?
        case: FETCH_USERS_REQUEST
            loading: true
        case: FETCH_USERS_SUCCESS
            loading: false
            users: data (from API)
        case: FETCH_USERS_FAILURE
            loading: false
            error: error (from API)

✋Async action creators
    Axios: Requests to an API end point.
    Redux-Thunk: Define Async action creators. Basically it's a Middleware


✋React Redux Library. (is use to connect react with redux)

✋React Redux + Hooks:
    1. React Redux Pattern
    2. Action creators, reducers, provide the store and connect the components.
    3. Components can access state and dispatch acitons.
    4. React Hooks: Hooks basically use function component the ability to use local component state execute side effects & more. 
