import { useEffect, useState } from "react";

/**
 *
 * @returns {{position:{lat:null|number,lon:null|number},posError:null|string,clearPosError:Function}}
 */
export default function usePosition() {
  const [position, setPosition] = useState({
    lat: null,
    lon: null
  });
  const [posError, setPosError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lon: coords.longitude,
    });
  };

  const OnError = (error) => {
    setPosError(error.message);
  };

  const clearPosError = () => {
    setPosError(null);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setPosError("Geolocation not Supported.");
      return;
    }

    const watcher = geo.watchPosition(onChange, OnError);

    return () => geo.clearWatch(watcher);
  }, []);

  return { position, posError, clearPosError };
};
