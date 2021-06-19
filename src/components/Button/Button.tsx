import React from "react";
import cc from "classnames";

type ButtonProps = {
  primary?: boolean;
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const getButtonClassNames = (
  primary: ButtonProps["primary"],
  disabled: ButtonProps["disabled"]
) => {
  if (primary) {
    return cc(
      { "hover:bg-blue-900 bg-blue-700": !disabled },
      { "bg-blue-100 cursor-not-allowed": disabled },
      "text-white"
    );
  }

  return cc(
    { "hover:bg-gray-100": !disabled },
    { "bg-gray-300 cursor-not-allowed": disabled },
    "text-black"
  );
};

function Button({
  className,
  disabled,
  primary = false,
  fullWidth = false,
  ...otherProps
}: ButtonProps) {
  const cx = cc(
    "border rounded-lg px-4 py-2 min-w-btn min-h-btn",
    {
      "w-full": fullWidth,
    },
    getButtonClassNames(primary, disabled),
    className
  );
  return <button {...otherProps} disabled={disabled} className={cx} />;
}

export default Button;
