const hori = (state = 34,action )=>{
    if(action.type==='hori'){
        return state = action.payload
    }else {
        return state
    }
};

export default hori;