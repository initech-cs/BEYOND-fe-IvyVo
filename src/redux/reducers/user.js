const init = {
    isAuthenticated: false
}


export default function(state=init, {type,payload}){
    switch (type){
        case "LOGIN":
            console.log("hahahhahaha")
            return { ...state, isAuthenticated:true, user:payload}
        case "LOGOUT":
            return {...init}
        default :
            return state
    }
}

