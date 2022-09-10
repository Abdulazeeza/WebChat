import primaryComponents from "../../primaryComponents";
import userNameValidation from "./Validations";
import useUserPrompt from "./useUserPrompt";
import { Controller } from "react-hook-form";

const UserPrompt = ({ setShowChatView }) => {
    const { regiseterUser, userName, setUserName, } = useUserPrompt(setShowChatView);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        trigger,
    } = userNameValidation();

    return (
        <form onSubmit={handleSubmit(regiseterUser)}>
            <h4 className="text-center mb-4">Please fill the form before proceeding</h4>
            <Controller
                name="email"
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
                        onKeyUp={() =>
                            errors.email !== undefined && trigger("userName")
                        }
                        onChange={({ target: { value } }) => {
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