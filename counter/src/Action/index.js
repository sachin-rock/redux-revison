
const inNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    };
    };

    const deNumber = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    };
    }


export { inNumber, deNumber };