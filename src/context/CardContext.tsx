import { createContext } from "react"
import { TypeInfoData } from "../../../type";


type ContextType = {

  setInfoData: React.Dispatch<React.SetStateAction<TypeInfoData[]>>
  infoData: TypeInfoData[],
  defaultData: TypeInfoData[],
  setDefaultData: React.Dispatch<React.SetStateAction<TypeInfoData[]>>
  setFavorite: React.Dispatch<React.SetStateAction<TypeInfoData[]>>
  favorite: TypeInfoData[],
  formattedDate: string[],
  setFormattedDate: React.Dispatch<React.SetStateAction<string[]>>
  setNoticeDate: React.Dispatch<React.SetStateAction<never[]>>
  noticeDate: never[],
  src: string[],
  setSrc: React.Dispatch<React.SetStateAction<string[]>>
};

const context = createContext({} as ContextType);

export default context;
