import "./ChatSection.scss";
import useChatSection from "./useChatSection";
import primaryComponents from "../../primaryComponents";

const ChatSection = () => {

    const {
        user,
        messages,
        message,
        setMessage,
        sendMessage,
        messageBody,
        pageSize,
        loadMoreMessages
    } = useChatSection();

    return (
        <div className="chat-section">
            <div className="chat-section__header">
                <h5 className="white--text">{user}</h5>
            </div>

            <div className="message-body">
                {pageSize < messages.length &&
                    <div
                        onClick={loadMoreMessages}
                        className="load-more mb-3">
                        Load more
                    </div>}

                {messages.slice(-pageSize).map((item, index) => (
                    <div key={index} className={`message-box ${user === item.userName && "my-message"}`}>
                        <h6 className="mb-1">{item.userName === user ? "You" : item.userName}</h6>
                        <div className="message">
                            {item.message}
                        </div>
                    </div>
                ))}

                <div ref={messageBody}></div>
            </div>

            <div className="chat-section__bottom">
                <primaryComponents.InputField
                    classNames="chat-section__bottom__input"
                    placeholder="Message..."
                    hasValidation={false}
                    value={message}
                    onChange={(value) => setMessage(value)}
                    onKeyUp={(e) => { if (e.key === 'Enter' && message !== "") sendMessage() }}
                />

                <button
                    onClick={sendMessage}
                    disabled={message === ""}
                    className="chat-section__bottom__button ml-2">
                    Send
                </button>
            </div>
        </div>
    )
}
export default ChatSection;