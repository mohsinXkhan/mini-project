import React from "react";

const sizes = {
  "2xl": "text-5xl font-black leading-[60px]",
  xl: "text-4xl font-black leading-[45px]",
  s: "text-base font-bold leading-5",
  md: "text-lg font-bold leading-[23px]",
  xs: "text-sm font-bold leading-[21px]",
  lg: "text-[22px] font-bold leading-7",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
