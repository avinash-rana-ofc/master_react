import { useEffect } from "react";

const useFetchProductDetails = (id, callbackFn) => {

  useEffect(() => {
    if (id) {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`)
        .then((response) => {
          const data = response.json();
          if (response.ok) {
            return data;
          } else {
            throw new Error(data);
          }
        })
        .then((data) => {
          callbackFn(data);
        })
        .catch((err) => console.log(err));
    }
  }, [id, callbackFn]);

}

export default useFetchProductDetails