import React from "react";
import { useField } from "formik";
export type RangeType = {
  id?: string;
  name: string;
  type?: string;
  min: number;
  max: number;
  defaultValue: number;
};

const Slider = ({ min, max, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex-col items-center justify-center h-full">
      <input className="w-full" type="range" {...props} {...field} />
      <div className="flex items-center justify-between">
        <span className="font-medium text-text5">{min}h logged</span>
        <span className="font-medium text-text5">{max}h remaining</span>
      </div>
    </div>
  );
};

export default Slider;
