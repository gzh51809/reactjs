export default function list(state={
    loading:true,
    data:{}
},action){
    switch(action.type){
        case "LIST_UPDATA":
        return {
            loading:true,
            data:state.data
        };

        case "LIST_SUCC":
        return {
            loading:false,
            data:action.data.data
        };
        case "LIST_ERROR":
        return {
            loading: false,
            data:{
                data:[]
            }
        }

        default:
        return state;
    
    
    }
}