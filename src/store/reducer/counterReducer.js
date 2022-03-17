const counterReducer = (counter = 0, action) => {
    debugger
    if (action.type === "COUNTER_PLUS") {
        return (counter = ++counter);
    }
    else if (action.type === "COUNTER_MINUS") {
        return (counter = --counter);
    }
    return counter;
}

export { counterReducer };