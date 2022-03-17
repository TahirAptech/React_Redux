import axios from "axios";

// const getApiData = async (url) => {
//     let product = Object;
//     await axios.get(url).then((response) => {
//         //product = response.data;
//         for(let aa in response.data)
//         {
//             product= aa;
//         }

//     });
//     console.log(product);

//     return product;
// }

async function fetchApiDataAction(url) {
    debugger
    let productData = {};
    await fetch(url).then(res => res.json()).then(data => {
        productData = data
    });
    console.log("outside", productData)
    return {
        type: "SAVE_API_DATA",
        payload: productData
    };
}

export { fetchApiDataAction };