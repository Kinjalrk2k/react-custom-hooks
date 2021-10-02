import React, { useState } from 'react';
import axios from 'axios';

const useRequest = (props) => {
  const { url, method, body, onSuccess } = props;
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const res = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(res.data);
      }

      return res.data;
    } catch (error) {
      setErrors(error);
    }
  };

  return { doRequest, errors };
};

export default useRequest;
