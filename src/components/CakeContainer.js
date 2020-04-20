import React from 'react';
import {buyCake} from '../redux/cake/cakeActions'
import {connect} from 'react-redux'
function CakeContainer(props){
    return(
        <div>
            <h3>Total Cake {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:() => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)