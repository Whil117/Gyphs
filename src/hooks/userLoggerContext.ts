import { createContext, Dispatch, SetStateAction } from "react";

export interface IData {
  authentication?: boolean;
  user?: {
    id: string | number;
    username: string;
  };
  type?: string;
  token?: string;
}

export interface IUser {
  userApp: {
    authentication?: boolean;
    user?: {
      id: string | number;
      username: string;
    };
    type?: string;
    token?: string;
  };
  setUserApp: Dispatch<SetStateAction<IData>>;
}

const UserLoggerContext = createContext<IUser>({} as IUser);

export default UserLoggerContext;