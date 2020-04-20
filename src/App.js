import React from 'react';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import AsyncAction from './asyncactions'
import CakeContainer from './components/CakeContainer'
import ItemContainer from './components/ItemContainer'
import NewCakeContainer from './components/NewCakeContainer'
import IceCreamContainer from './components/iceCreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>      
      <AsyncAction/>
      <div>
        <h5 >Conditional rendering for ice cream</h5>
        <ItemContainer/>
      </div>
      <div>
      <h5>Conditional rendering for cake</h5>
        <ItemContainer cake/>
      </div>
      <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
    </Provider>
  );
}

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const initialCakeState = {
  numOfCake:10
}
const initialIceCreamState = {
  numOfIceCream:10
}

function buyCake(){
  return{
    type:BUY_CAKE,
    info:'First redux'
  }
}
function buyIceCream(){
  return{
    type:BUY_ICECREAM
  }
}
const cakeReducer = (state = initialCakeState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
      numOfCake:state.numOfCake - 1
    }
    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState,action)=>{
  switch(action.type){
    case BUY_ICECREAM:return{
      numOfIceCream:state.numOfIceCream - 1
    }
    default:
      return state
  }
}
const reducer = combineReducers({
  cake:cakeReducer,iceCream:iceCreamReducer
})
// const store = createStore(reducer)
// console.log('Initial State', store.getState())
// store.subscribe(()=>console.log('Updated State', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())

export default App;
