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
  children?: React.ReactNode;
};

export type portalType = {
  containerClassName?: string;
  bodyClassName?: string;
  containerStyle?: any;
  bodyStyle?: any;
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

/*------------------- Types Reducer -------------------*/

// userReducer

export interface userType {
  email?: string;
  passWord?: string;
  id?: number;
  avatar?: string;
  phoneNumber?: string;
  name?: string;
  accessToken?: string;
}

export interface userState {
  userLogin: userType | null;
}
