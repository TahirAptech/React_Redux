
let INITIAL_STATE = {
    PersonelInfo: { name: "Tahir Mahmood Hashmi", designation: "Software Developer", speciality: "Javascript & C#" },
    Salary: 125000,
    Address: "Shadman town"
}

function PersonnelReducer(state = INITIAL_STATE, action) {
    debugger
    switch (action.type) {
        case "SAVE_INFO":
            return { 
                ...state,
                PersonelInfo: action.payload
            };
        default:
            return state;
    }
}

export { PersonnelReducer };