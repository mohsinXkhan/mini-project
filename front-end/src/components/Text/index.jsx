import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[21px]",
  s: "text-base font-normal leading-6",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-500 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
