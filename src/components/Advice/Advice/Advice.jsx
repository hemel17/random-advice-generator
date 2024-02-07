import { useEffect, useState } from "react";
import axios from "axios";

const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const backgroundImages = [
    "/bg-image (1).svg",
    "/bg-image (2).svg",
    "/bg-image (3).svg",
    "/bg-image (4).svg",
    "/bg-image (5).svg",
    "/bg-image (6).svg",
    "/bg-image (7).svg",
    "/bg-image (8).svg",
    "/bg-image (8).svg",
    "/bg-image (10).svg",
  ];

  const loadAdvice = async () => {
    try {

      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBackgroundImage(backgroundImages[randomIndex]);
      
      const response = await axios.get(url);
      setAdvice(response.data.slip.advice);

      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAdvice()
  }, []);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-4/5 md:w-3/5 text-center text-white text-3xl md:text-5xl bg-[rgba(0,0,0, 0.3)]">
        <h2 className="mb-4 md:mb-6">{advice}</h2>
        <button
          onClick={() => loadAdvice()}
          className="uppercase font-semibold text-base md:text-xl bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600 py-2 px-5 rounded-lg"
        >
          give me advice
        </button>
      </div>
    </div>
  );
};

export default Advice;
