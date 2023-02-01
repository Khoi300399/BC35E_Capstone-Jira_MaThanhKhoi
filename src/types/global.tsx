export type Coords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type propsInput = {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: JSX.Element | React.ReactNode;
};
