// useUserStatus: A custom react hook to detect if a user is Online or Offline.
import { useState, useEffect } from 'react';

const useUserStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  const onlineHandler = () => {
    setOnline(true);
  };

  const offlineHandler = () => {
    setOnline(false);
  };

  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);
  }, []);

  return online;
};

export default useUserStatus;