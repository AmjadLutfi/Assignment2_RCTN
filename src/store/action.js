export const changeNameStateGlobal = (dataUserParam) =>{
    return{
        type: "CHANGE_NAME",
        payload: dataUserParam
    }
}

export const getAllDataUser = () => {
    return async (dispatch) => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const result = await data.json()
            console.log(result);
            
            dispatch({
                type: "GET_ALL_DATA",
                payload: result
            })
        } catch (error) {
            console.log(error);
        }
    }
}