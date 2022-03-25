import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import { useEffect, useState } from 'react';

const useAxios = ( url: string): [any, boolean, boolean] => {
    const [responses, setResponses] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        axios({url: `http://localhost:8080/${url}`, method: "get"})
            .then((resp) => {
                setResponses(resp.data);
            })
            .catch((err) => {
                setIsLoading(false);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return [responses, isLoading, isError];
};

export default useAxios;