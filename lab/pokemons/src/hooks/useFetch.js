import { useState , useEffect} from 'react';

const useFetch = ({url, resolvedPath}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      .then(response => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
        console.log(response);
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
        console.log(response);
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
<<<<<<< HEAD
=======
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
      .then((response) => {
        console.log(response);
=======
      .then(response => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
        console.log(response);
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
        console.log(response);
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
>>>>>>> 8478e5d8 (feat: add useFetch custom hook for code reuse)
<<<<<<< HEAD
>>>>>>> 52d7fb6a (feat: add useFetch custom hook for code reuse)
=======
      .then(response => {
        console.log(response);
>>>>>>> 30487c98 (feat: add useFetch custom hook for code reuse)
=======
>>>>>>> 4bc1f888 (feat: add useFetch custom hook for code reuse)
        return response.json();
      })
      .then(data => {
        setData(resolvedPath ? data[resolvedPath] : data);
      })
      .catch(error=> setError(error))
      .finally(()=> setLoading(false))
  }, [resolvedPath, url])

  return {
    loading, 
    error,
    data
  }
}

export default useFetch;