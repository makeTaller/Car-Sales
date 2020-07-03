import React from 'react';
import { connect } from "react-redux";
import { remove_feature } from "../actions/actions.js";

const AddedFeature = props => {

    const remove = (e) => {
        e.preventDefault(),
        props.remove_feature(props.key)
    }
  return (
    <li>
      {/* Add an onClick to run a function to remove a features */}
        <button
            className="button"
            onClick={remove}>
            X
        </button>
      {props.feature.name} 
    </li>
  );
};

const mapStateToProps = state => {
    return{
        features: state.carReducer.car.features
    }
}

const mapDispatch = {remove_feature}

export default connect( mapStateToProps, mapDispatch )( AddedFeature );
