import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userSchema = yup.object({
    userName: yup
        .string()
        .required("Username is required"),

}).required();

const userNameValidation = (userName) => {
    return useForm({
        resolver: yupResolver(userSchema),
        shouldFocusError: true,
        mode: "onBlur",
        defaultValues:{
            userName
        }
    });
}

export default userNameValidation;