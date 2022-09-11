import "./Button.scss";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  children,
  isLoading,
  loadingText,
  classNames,
  onClick,
  isDisabled,
  ...rest
}) => {
  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? (
        <span className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={["fas", "spinner"]}
            className="fa-spin white--text mr-2"
            style={{ fontSize: "20px" }}
          />
          {loadingText}
        </span>
      ) : (
        <span className="d-flex align-items-center">{children}</span>
      )}
    </button>
  );
};

export default Button;
