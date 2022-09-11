import "./ChatSection.scss";
import useChatSection from "./useChatSection";
import primaryComponents from "../../primaryComponents";

const ChatSection = () => {
    const { user } = useChatSection();
    return (
        <div className="chat-section">
            <div className="chat-section__header">
                <h5 className="white--text">{user}</h5>
            </div>

            <div className="message-body">
                <div className="message-box">
                    <h6 className="mb-1">Habib</h6>
                    <div className="message">
                        Hello, everyone
                    </div>
                </div>

                <div className="message-box my-message">
                    <h6 className="mb-1">You</h6>
                    <div className="message">
                        Hello, everyone
                    </div>
                </div>
            </div>

            <div className="chat-section__bottom">
                <primaryComponents.InputField
                    classNames="chat-section__bottom__input"
                    placeholder="Message..."
                    hasValidation={false}
                />

                <button className="chat-section__bottom__button ml-2">Send</button>
            </div>
        </div>
    )
}
export default ChatSection;