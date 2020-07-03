import React, {useState} from 'react';
import { connect } from "react-redux";
import { add_feature } from "../actions/actions.js";

const AdditionalFeature = props => {

    /* const [selectedFeature,setSelected] = useState({});

     * const handleChanges = (e,id) => setSelected (
     *     console.log(e),
     *     e.target.value,
     *     props.feature.find((i) => id === props.key) */
        /* (newState) => props.additionalFeatures:  */
        /* props.car.additionalFeatures.find((item) =>
         * item.id === e.target.value ? ) */
    /* const getSelected =(id) =>{
     *     id === props.key ? setSelected(
     *         props.feature.find((i) => i === props.key ): console.log("error")
     *     )
     * } */
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
        <button
            className="button"
            onClick={()=>props.add_feature(props.feature)}>
            Add
        </button>
      {props.feature.name} (+{props.feature.price})
      {console.log(props.car)}
    </li>
  );
};

const mapStateToProps = state => {
    return {
        car: state.carReducer.additionalFeatures
    }
}

const mapDispatch = { add_feature }

export default connect(mapStateToProps, mapDispatch)( AdditionalFeature );
