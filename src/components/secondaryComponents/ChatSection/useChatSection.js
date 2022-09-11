import { useSelector } from "react-redux";

const useChatSection = ()=> {
    const { user} = useSelector((state) => state.userDetailsReducer);

    return {
        user
    }
}
export default useChatSection;