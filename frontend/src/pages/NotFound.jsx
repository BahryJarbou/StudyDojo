import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, []);
  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center">
      <h1 className="font-bold">404 Page Note Found</h1>
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>You will be redirected to the home page in 5 seconds.</span>
      </div>
    </div>
  );
};

export default NotFound;
