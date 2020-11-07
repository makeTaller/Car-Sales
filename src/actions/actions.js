export const ADD_FEATURE = "ADD_FEATURE" 
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADDITIONAL_PRICE = "ADDITIONAL_PRICE";
export const TOTAL = "TOTAL";


export const add_feature = (featureId) => {
    console.log("Adding... ");
    return { type: ADD_FEATURE, payload: featureId}
}

export const remove_feature = (feature) => {
    console.log("Removing... " + feature);
    return { type: REMOVE_FEATURE, payload: feature}
}

export const tallyUp = ( total ) => {
    console.log("Tallying Total... ");
    return { type: TOTAL, payload: total }
}
