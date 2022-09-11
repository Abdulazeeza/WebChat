import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, setMessages } from "../../../store/modules/user";

const useChatSection = () => {
    const { user, messages } = useSelector((state) => state.userDetailsReducer);
    const [pageSize, setPageSize] = useState(25);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const messageBody = useRef(null);

    useEffect(() => {
        getNewMessages();
        window.addEventListener('storage', getNewMessages);
        return () => {
            window.removeEventListener('storage', getNewMessages);
        };
    }, [])

    useEffect(()=> {
        scrollToBottom();
    }, [messages])

    const sendMessage = () => {
        let newMessage = {
            userName: user,
            message: message
        }
        dispatch(addMessage(newMessage))
        if (localStorage.getItem("messages")) {
            let oldMessages = JSON.parse(localStorage.messages)
            oldMessages.push(newMessage)
            localStorage.messages = JSON.stringify(oldMessages)
        } else {
            localStorage.messages = JSON.stringify([newMessage])
        }
        setMessage("");
    }

    const getNewMessages = () => {
        let historyMessages = (localStorage.getItem("messages")) ? JSON.parse(localStorage.messages) : [];
        dispatch(setMessages(historyMessages))
    }

    const scrollToBottom = () => {
        messageBody.current.scrollIntoView();
    }

    const loadMoreMessages = () => {
        setPageSize(prev => prev + 25);
    }

    return {
        user,
        messages,
        message,
        setMessage,
        sendMessage,
        messageBody,
        pageSize,
        loadMoreMessages
    }
}
export default useChatSection;