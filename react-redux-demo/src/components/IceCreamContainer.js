import React from "react";
import { connect } from "react-redux";

import { buyIceCream } from "../redux";
// import { buyIceCream } from "../redux/iceCream/iceCreamAction";

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of IceCream - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

// ya function redux ki state of as a parameter lata ha or object return karta ha. ya hm tb use karty hyn jb hm ny redux ki state ko access karna hota ha.
const mapStateToProps = (state) => {
    return{
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

// ya function dispatch method ko as a parameter lata ha to allow us to map action creator to props our compoent
const mapDispatchToProps = (dispatch) => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}


//connect function connect react component to redux store


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)