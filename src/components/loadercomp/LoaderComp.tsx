import { Circles } from "react-loader-spinner";

const LoaderComp = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="rgba(239, 129, 46)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoaderComp;
