import "./InputField.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputField = ({
  placeholder,
  type = "text",
  name = "",
  isRequired = false,
  label = null,
  isDisabled = false,
  errorMessage = undefined,
  onChange = () => { },
  value = "",
  register = () => { },
  onKeyUp = () => { },
  classNames = "",
  hasValidation = true,
  ...props
}) => {
  return (
    <div className="input-field" htmlFor={name}>
      {label !== null && (
        <label htmlFor={name}>
          {isRequired && <span className="text-danger">*</span>}
          <span>{label}</span>
        </label>
      )}

      <input
        className={`${classNames} ${errorMessage !== undefined && "error-border"
          }`}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        {...register(name, { required: isRequired })}
        onChange={(e) => { onChange(e.target.value); }}
        disabled={isDisabled}
        onKeyUp={onKeyUp}
        value={value}
        {...props}
      />
      {hasValidation && <p
        className={`error-message text-danger ${errorMessage !== undefined ? "show" : ""
          }`}
      >
        <FontAwesomeIcon
          icon={["fas", "exclamation-circle"]}
          className="mr-2"
          style={{ fontSize: "13px" }}
        />
        {errorMessage !== undefined && <span>{errorMessage.message}</span>}
      </p>}
    </div>
  );
};

export default InputField;
