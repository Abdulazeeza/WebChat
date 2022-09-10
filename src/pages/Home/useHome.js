import { useState } from "react";

const useHome = () => {
    const [showChatView, setShowChatView] = useState(false)

    return {showChatView, setShowChatView}
}
export default useHome;