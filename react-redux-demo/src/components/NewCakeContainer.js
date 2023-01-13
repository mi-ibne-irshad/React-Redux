import React, { useState } from "react";
import { connect } from "react-redux";
// import { buyCake } from "../redux";
import { buyCake } from "../redux/cakes/cakeActions";

const CakeContainer = (props) => {
    const [number , setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={(e)=> setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

// ya function redux ki state of as a parameter lata ha or object return karta ha. ya hm tb use karty hyn jb hm ny redux ki state ko access karna hota ha.
const mapStateToProps = (state) => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

// ya function dispatch method ko as a parameter lata ha to allow us to map action creator to props our compoent
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: (number) => dispatch(buyCake(number))
    }
}


//connect function connect react component to redux store


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)