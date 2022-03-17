
const INITIAL_STATE = {
    // id: "0",
    // title: "",
    // price: "",
    // description: "",
    // category: "",
    // image: "",
    // rating: {},
    flag: false,
    products: []
};
const ApisReducer = (state = INITIAL_STATE, { type, payload }) => {
    debugger
    switch (type) {
        case "SAVE_API_DATA":
            return { products: payload.myProducts, flag: payload.flag };
        default:
            return state;
    }
}

export { ApisReducer };