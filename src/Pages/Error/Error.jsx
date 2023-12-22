import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../assets/error.json";

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center mx-auto w-2/3">
        <Lottie className="w-full h-full" animationData={error} loop={true} />

      </div>
      <div className="mx-auto text-center">
        <Link to={"/"}>
          <button className="bg-[#4295e3] text-white px-7 py-3 rounded text-xl my-5 font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
