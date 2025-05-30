import { useState, useEffect } from "react";

import { loadJSON } from '@jsonUtilities'


export interface CategoryFetcherProps<T> {
  fetchPath: string;
  renderData: (data: T | null) => React.ReactNode;
}

export default function CategoryFetcher<T>({ fetchPath, renderData }: CategoryFetcherProps<T>) {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const newData = await loadJSON(fetchPath);
      setData(newData as unknown as T);
    } catch(err) {
      setData(null);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  if (isLoading)
    return <>Загрузка...</>

  if (!!error)
    return <>{error}</>


  return  (
    <>
      {renderData(data)}
    </>
  )
}

