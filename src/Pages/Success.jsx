import { PropagateLoader } from "react-spinners";
import { useState } from "react";

const Success = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <div className="flex flex-col h-screen gap-3 justify-center items-center">
          <PropagateLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="flex flex-col h-screen gap-3 justify-center items-center">
          <h1 className="text-3xl font-medium">Order Successful!</h1>
          <h6>Your order has been successfully placed.</h6>
        </div>
      )}
    </>
  );
};

export default Success;
