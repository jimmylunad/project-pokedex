/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = ({
  initialUrl = '',
  initialForm = {},
  initialMethod = 'get',
  contentType = 'application/json',
  loading = false,
}) => {
  const [url, setUrl] = useState(initialUrl);
  const [form, setForm] = useState(initialForm);
  const [method, setMethod] = useState(initialMethod);
  const [isLoading, setIsLoading] = useState(loading);
  const { CancelToken } = axios;
  const { token, cancel } = CancelToken.source();

  useEffect(() => () => cancel('xxxx'), []);

  const fetch = async () => {
    setIsLoading(true);
    const response = await axios({
      url,
      method,
      // config: {}
    });
    // validar estados o code
    setIsLoading(false);
    return response;
  };

  return {
    fetch,
    isLoading,
  };
};

export default useFetch;
