import primaryComponents from "../../primaryComponents";
import userNameValidation from "./Validations";
import useUserPrompt from "./useUserPrompt";
import { Controller } from "react-hook-form";
import "./UserPrompt.scss";

const UserPrompt = ({ setShowChatView }) => {
    const { regiseterUser, userName, setUserName, } = useUserPrompt({ setShowChatView });
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        trigger,
    } = userNameValidation(userName);

    return (
        <form onSubmit={handleSubmit(regiseterUser)} className="user-prompt">
            <h4 className="text-center mb-4">Please fill the form before proceeding</h4>
            <Controller
                name="userName"
                control={control}
                defaultValue={userName}
                render={({ field: { onChange } }) => (
                    <primaryComponents.InputField
                        label="Enter your username"
                        isRequired={true}
                        placeholder="username"
                        type="text"
                        name="userName"
                        errorMessage={errors.userName}
                        value={userName}
                        onKeyUp={() =>
                            errors.userName !== undefined && trigger("userName")
                        }
                        onChange={(value) => {
                            onChange(value);
                            setUserName(value);
                        }}
                        register={register}
                    />
                )}
            />

            <primaryComponents.Button classNames="mt-1 btn btn--primary cover">
                Continue
            </primaryComponents.Button>
        </form>
    );
}
export default UserPrompt;