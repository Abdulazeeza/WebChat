import "./Home.scss";
import useHome from "./useHome";
import secondaryComponents from "../../components/secondaryComponents";

const Home = () => {
    const { showChatView, setShowChatView } = useHome();

    return (
        <div className="home">
            {showChatView ? (
                <secondaryComponents.ChatSection />
            ) : (
                <secondaryComponents.UserPrompt setShowChatView={setShowChatView} />
            )}
        </div>
    );
}

export default Home;