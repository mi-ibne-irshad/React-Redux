import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';

const HooksCakeContainer = () => {
  //this hook accept a function as a parameter it's working same as mapStateToProps function.
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  // usedispatch hook return a referance to a dispatch function from a redux store.

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake)}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
