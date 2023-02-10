export type Coords = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type propsInput = {
  disabled?: boolean;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};

export type portalType = {
  containerClassName?: string;
  bodyClassName?: string;
  containerStyle?: Object;
  bodyStyle?: Object;
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export interface DropResult {
  allowedDropEffect: string;
  dropEffect: string;
  name: string;
}

export const type = {
  CARD: "card",
};
export const COLUMN_NAMES = {
  BACKLOG: "BACKLOG",
  SELECTED_FOR_DEVELOPMENT: "SELECTED FOR DEVELOPMENT",
  IN_PROGRESS: "IN PROGRESS",
  DONE: "DONE",
};
export interface TaskModel {
  id: number;
  name: string;
  statusName: string;
  priority: string;
  taskType: string;
}
export const ITEM_TYPE = "ITEM";

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

export const ItemType = {
  BOX: "Box",
};

// statusReducer

export interface statusState {
  statuses: statusType[];
}
export interface statusType {
  statusId: string;
  statusName: string;
  alias: string;
  deleted: string;
}

export enum ColumnType {
  BACKLOG,
  DONE,
  SELECTED_FOR_DEVELOPMENT = "SELECTED FOR DEVELOPMENT",
  IN_PROGRESS = "IN PROGRESS",
}
