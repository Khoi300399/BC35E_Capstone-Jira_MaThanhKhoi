import { useField } from "formik";
import React from "react";
import { propsInput } from "../../types/global";

const Textarea = ({ ...props }: propsInput) => {
  const [field] = useField(props);

  return (
    <textarea
      className="w-full px-6 py-4 border  rounded-xl text-sm font-medium bg-transparent placeholder:text-text4 dark:placeholder:text-text-2"
      {...props}
      {...field}
    >
      Textarea
    </textarea>
  );
};

export default Textarea;
