import React from 'react'
import {buyIceCream} from '../redux/icecream/iceCreamActions'
import {connect} from 'react-redux'

function iceCreamContainer(props){
    return(
        <div>
            <h2>Number of ice cream {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (iceCreamContainer)