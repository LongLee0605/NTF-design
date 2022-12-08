import PropTypes from "prop-types";
import { classNames } from "common/functions";

/**
 *
 * @param {{
 * as: "a" | "button";
 * variant: "primary" | "outline" | "ghost";
 * btnTextStyle: "font-bold leading-5 text-sm";
 * status: "danger" | "light";
 * btnColor: "bg-gleads-buttonBlue-500 hover:bg-gleads-buttonBlue-600" | "bg-transparent hover:bg-gleads-buttonBlue-500" | "bg-transparent";
 * btnPadding: "px-6 py-3";
 * btnBorder: "border border-gleads-buttonBlue-500" | "border-0";
 * btnRounded: "rounded-md";
 * btnTextColor:"text-white hover:text-black";
 * onClick: function(){};
 * othersClass: "";
 * className: "";
 * }} props Props for the component
 *
 */

function Button({
  as,
  btnDisplay,
  useRouter,
  children,
  variant,
  btnColor,
  status,
  btnPadding,
  btnTextColor,
  btnTextStyle,
  btnBorder,
  btnRounded,
  othersClass,
  className,
  ...props
}) {
  const CustomTag = as;
  const commonStyles =
    "transition-colors duration-200 disabled:select-none disabled:bg-gray-400 ";
  let btnStyle;
  switch (variant) {
    case "primary":
      btnStyle = [
        btnDisplay || "inline-block ",
        btnTextStyle || "font-bold leading-5 text-sm",
        btnColor ||
          (status === "danger" &&
            "bg-gleads-pink-600 hover:bg-gleads-pink-500") ||
          (status === "light" && "bg-white hover:bg-gleads-buttonBlue-500") ||
          "bg-gleads-buttonBlue-600 hover:bg-gleads-buttonBlue-500",
        btnRounded || "rounded-md",
        btnPadding || "px-6 py-3",
        btnTextColor ||
          (status === "light" && "text-gleads-basic hover:text-white") ||
          "text-white",
        othersClass,
      ].join(" ");
      break;
    case "outline":
      btnStyle = [
        btnDisplay || "inline-block ",
        btnTextStyle || "font-bold leading-5 text-sm",
        btnColor || "bg-transparent hover:bg-gleads-buttonBlue-500",
        btnRounded || "rounded-md",
        btnBorder || "border border-gleads-buttonBlue-500",
        btnPadding || "px-6 py-3",
        btnTextColor || "text-gleads-basic hover:text-white",
        othersClass,
      ].join(" ");
      break;
    case "ghost":
      btnStyle = [
        btnDisplay || "inline-block ",
        btnTextStyle || "font-bold leading-5 text-sm",
        btnColor || "bg-transparent ",
        btnRounded || "rounded-md",
        btnBorder || "border-0",
        btnPadding || "px-6 py-3",
        btnTextColor ||
          "text-gleads-buttonBlue-500 hover:text-gleads-buttonBlue-600",
        othersClass,
      ].join(" ");
    default:
      break;
  }
  if (useRouter)
    return (
      <a
        className={className ? className : classNames(commonStyles, btnStyle)}
        {...props}
      >
        {children}
      </a>
    );
  return (
    <CustomTag
      className={className ? className : classNames(commonStyles, btnStyle)}
      {...props}
    >
      {children}
    </CustomTag>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(["primary", "outline", "ghost"]),
  as: PropTypes.oneOf(["a", "button", "div", "span"]),
  useRouter: PropTypes.bool,
};
Button.defaultProps = {
  variant: "primary",
  as: "button",
  useRouter: false,
};

export default Button;
