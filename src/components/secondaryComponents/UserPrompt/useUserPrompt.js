import { useState } from "react";

const useUserPrompt = () => {
    const [userName, setUserName] = useState("")
    const regiseterUser = ()=> {

    }
    return {
        userName, 
        setUserName,
        regiseterUser
    }
}
export default useUserPrompt