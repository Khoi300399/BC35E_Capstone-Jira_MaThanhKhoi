import React, { useState } from "react";

type Props = {
  placeholder: string;
};

const Textarea = ({ ...props }: Props) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <textarea
        className="w-full border border-gray-400 resize-none rounded-lg px-2 pt-1 placeholder:text-sm focus:outline-none focus:border-blue-400"
        {...props}
      ></textarea>
    </>
  );
};

export default Textarea;
