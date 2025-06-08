import { useState, useEffect } from "react";
import axios from 'axios'

import { CategoryDto } from '@dto/categoryDto'
import { loadJSON } from '@jsonUtilities'

import styles from './CategoryFetcher.module.css'


export interface CategoryFetcherProps<T> {
  fetchPath: string;
  renderData: (data: T | null) => React.ReactNode;
  isMockData?: boolean;
}

export default function CategoryFetcher<T>({ fetchPath, renderData, isMockData = false }: CategoryFetcherProps<T>) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  const fetchData = async (abortController: AbortController) => {
    setIsLoading(true);
    try {
      let newData;
      if (isMockData)
        newData = await loadJSON(fetchPath);
      else {
        const response = await axios.get(fetchPath, 
          {
            params: {page: 1},
            signal: abortController.signal,
          }
        );
        // console.log('response.data: ', response.data);
        newData = (response.data as CategoryDto<T>).results;
      }

      setData(newData as unknown as T);
    } catch(err) {
      setData(null);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);

    // Прерываем вып-е запроса при размонтировании, если запрос еще не выполнен
    return () => isLoading ? abortController.abort() : undefined;
  }, []);
  

  if (isLoading)
    return <>Загрузка...</>

  if (!!error)
    return <div className={styles.error}>Ошибка загрузки данных: {error}</div>


  return  (
    <>
      {renderData(data)}
    </>
  )
}

