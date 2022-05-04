const vari = (state = 34,action )=>{
    if(action.type==='vari'){
        return state = action.payload
    }else {
        return state
    }
};

export default vari;