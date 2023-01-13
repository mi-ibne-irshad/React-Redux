import React from "react";
import { connect } from "react-redux";
// import { buyCake } from "../redux";
import { buyCake } from "../redux/cakes/cakeActions";

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// ya function redux ki state of as a parameter lata ha or object return karta ha. jis jo hm as a props apny container mian use karty hyn. ya hm tb use karty hyn jb hm ny redux ki state ko access karna hota ha.
const mapStateToProps = (state) => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

// ya function dispatch method ko as a parameter lata ha to allow us to map action creator to props our compoent
const mapDispatchToProps = (dispatch) => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}


//connect function connect react component to redux store


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)