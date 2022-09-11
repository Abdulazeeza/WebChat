import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/modules/user";

const useUserPrompt = ({ setShowChatView }) => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const regiseterUser = () => {
        if (localStorage.getItem("userNames")) {
            let userNames = JSON.parse(localStorage.userNames);
            if (!userNames.includes(userName)) {
                userNames.push(userName)
                localStorage.userNames = JSON.stringify(userNames)
            }
        } else {
            localStorage.userNames = JSON.stringify([userName]);
        }
        dispatch(setUser(userName));
        setShowChatView(true)
    }

    return {
        userName,
        setUserName,
        regiseterUser
    }
}
export default useUserPrompt