import { useState } from "react";
import context from "./CardContext";
import { TypeInfoData } from "../../../type";

type ProviderProps = {
  children: React.ReactNode,
};

const VALUE_INICIAL = {
  id: 0,
  titulo: '',
  introducao: '',
  data_publicacao: '',
  link: '',
}



function Provider({ children }: ProviderProps) {

  const [favorite, setFavorite] = useState<TypeInfoData[]>([]);
  const [infoData, setInfoData] = useState<TypeInfoData[]>([VALUE_INICIAL]);
  const [formattedDate, setFormattedDate] = useState<string[]>([]);
  const [noticeDate, setNoticeDate] = useState([{}]);
  const [src, setSrc] = useState<TypeInfoData[]>([]);


  const contex = {
    infoData,
    setInfoData,
    formattedDate,
    setFormattedDate,
    noticeDate,
    setNoticeDate,
    setSrc,
    src,
    favorite,
    setFavorite,
  }

  return (
    <context.Provider value={contex}>
      {children}
    </context.Provider>
  );
}

export default Provider;



