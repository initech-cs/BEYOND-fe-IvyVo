const init = {
    loading : true,
    logged: false,

}


export default function(state=init, {type,payload}){
    switch (type){
        case "LOADED":
            console.log("hahahhahaha")
            return { ...state, loading: false}
        case "LOADING":
            return { ...state, loading: true}

        default :
            return state
    }
}

