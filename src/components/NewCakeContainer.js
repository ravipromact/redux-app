import React,{useState} from 'react';
import {buyCake} from '../redux/cake/cakeActions'
import {connect} from 'react-redux'
function NewCakeContainer(props){
    const [number,setNumber] = useState(1)
    return(
        <div>
            <h3>Total Cake {props.numOfCakes}</h3>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/> 
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake:(number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NewCakeContainer)