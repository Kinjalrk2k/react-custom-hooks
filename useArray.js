import { useState } from 'react';

const useArray = (initialValue) => {
	const [array, setArray] = useState(initialValue);

	const pushIntoArray = (newElement) => {
		setArray((theArray) => [...theArray, newElement]);
	};

	const updateArray = (index, newElement) => {
		setArray((theArray) => [
			...theArray.slice(0, index),
			newElement,
			...theArray.slice(index + 1, theArray.length),
		]);
	};

	const removeFromArray = (index) => {
		setArray((theArray) => [
			...theArray.slice(0, index),
			...theArray.slice(index + 1, theArray.length),
		]);
	};

	const clearArray = () => setArray([]);

	return [array, setArray, pushIntoArray, updateArray, removeFromArray, clearArray];
};

export { useArray };
