import React from "react";

const Button = (props: any) => {
  return (
    <button
      type={props.type || "button"}
      className="flex h-[60px] w-[250px] items-center justify-center rounded-lg bg-smButtonColor text-xl font-semibold shadow-lg drop-shadow-lg"
    >
      {props.children}
    </button>
  );
};

export default Button;
