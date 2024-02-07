import { useEffect, useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
} from "../../Backgrounds/Backgrounds";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [loader, setLoader] = useState(false);
  const [bgImage, setBgImage] = useState("");

  const bgImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const loadAdvice = async () => {
    try {
      setLoader(true);
      const randomIdx = Math.floor(Math.random() * bgImages.length);
      setBgImage(bgImages[randomIdx]);
      const response = await axios.get(url);
      setAdvice(response.data.slip.advice);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center w-full relative">
      <div className="absolute top-0 left-0 bottom-0 right-0 -z-10">
        {bgImage}
      </div>
      {loader ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#fff"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="w-4/5 md:w-3/5 text-center text-white text-3xl md:text-5xl bg-[rgba(0,0,0,0.3)] p-6 md:p-10 rounded-xl">
          <h2 className="mb-4 md:mb-6 leading-normal">{advice}</h2>
          <button
            onClick={() => loadAdvice()}
            className="uppercase font-semibold text-base md:text-xl bg-[#2264AB] py-2 px-5 rounded-lg"
          >
            give me advice
          </button>
        </div>
      )}
    </div>
  );
};

export default Advice;
