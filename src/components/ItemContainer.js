import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux/icecream/iceCreamActions'
import {buyCake} from '../redux/cake/cakeActions'
function ItemContainer(props){
    return(
        <div>
            <h2 className="mt-0">Items {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}
const mapStateToProps = (state,ownProps)=>{
    const itemstate = ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item:itemstate
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCream())
    return{
        buyItem:dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)