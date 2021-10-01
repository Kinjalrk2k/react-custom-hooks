/**
 * Similar to useState but stores the value in local storage paired with a key
 * @param {string} key The key for the local storage
 * @param {any} initialValue Initial value to put in local storage if it's empty
 * @example const [name, setName] = useLocalStorage("name", "Bihan");
 * @returns {[any, Function]} [value, setValue] - value will hold the current state and setValue function should be used to update the state
 * @author Bihan Chakraborty
 */

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) return JSON.parse(value);
      return initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
