import { useState } from "react";

const useHome = () => {
    const [showChatView, setShowChatView] = useState(true)

    return { showChatView, setShowChatView }
}
export default useHome;