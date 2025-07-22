import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  //const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    //setIsClicked(true);
  }

  // if(isClicked){
  //   //return <Navigate to={"/"} />
  //   //navigate("/");
  //   //navigate(-1);//back to previous page
  // }
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-20">
      <h1 className="font-semibold text-3xl">404 Page Not Found.</h1>
      <button onClick={handleClick}className="bg-blue-500 mt-5 px-3 py-1 rounded-md text-white">Go Back</button>
    </div>
  );
};

export default NotFound;
