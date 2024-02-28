export const SET_ACTIVE_WINDOW = "SET_ACTIVE_WINDOW";
export const CREATE_NEW_WINDOW = "CREATE_NEW_WINDOW";
export const DESTROY_ACTIVE_WINDOW = "DESTROY_ACTIVE_WINDOW";
export const MINIMIZE_ACTIVE_WINDOW = "MINIMIZE_ACTIVE_WINDOW ";
export const POP_WINDOW = "POP_WINDOW";

export interface IWindowPropsState {
  children: React.ReactNode;
}

export interface IWindowObject {
  id: string;
  label: string;
  pageName: string;
  windowType: string;
  isProject: boolean;
}

export interface IInitialWindowState {
  currentWindowID: string | null;
  windows: Array<IWindowObject>;
  topZIndex: number;
  children: React.ReactNode;
}
