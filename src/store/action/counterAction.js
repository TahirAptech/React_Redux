const counterPlusAction = (value) => {
    return ((dispatch) => {
        dispatch({ type: "COUNTER_PLUS", payload: value }); // PAYLOAD = APP RELATED DATA
    });
}

const minusCounterAction = (data) => {

    return ((dispatch2) => {
        dispatch2({ type: "COUNTER_MINUS", payload: data });
    });

}



export { counterPlusAction, minusCounterAction }