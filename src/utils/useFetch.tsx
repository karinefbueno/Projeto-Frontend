import { useEffect, useContext } from "react";
import context from "../context/CardContext";
import { fetchData } from "./fetch";
import { TypeInfoData } from "../type";


export function useFetch() {
  const { setInfoData, setSrc } = useContext(context);

  useEffect(() => {
    const functionFetch = async () => {
      const data = await fetchData();
      const dataItens = data.items
      return setInfoData(dataItens);
    }

    functionFetch();

  }, []);

  useEffect(() => {

    const functionFetch2 = async () => {
      const data = await fetchData();
      const dataItens = data.items
      const dataSrc = dataItens.map((image: TypeInfoData) => {
        const src = JSON.parse(image.imagens)
        const srcString = src.image_fulltext
        const src2 = `https://agenciadenoticias.ibge.gov.br/${srcString}`
        return src2;
      })
      return setSrc(dataSrc)
    }
    functionFetch2()

  }, [])
}