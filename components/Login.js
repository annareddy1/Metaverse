import Image from "next/image";
import { useMoralis } from "react-moralis";
import Tilt from "react-tilt";

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div className="bg-black text-[#e36493]">
      <div className="flex flex-col absolute z-50 h-full w-full items-center justify-center space-y-10 bg-[rgba(0,0,0,0.5)] ">
        <Tilt
          options={{ max: 35, perspective: 1500 }}
          className="flex flex-col space-y-5 bg-white bg-opacity-10 backdrop-blur-sm py-[5rem] px-10 rounded-lg shadow-lg shadow-yellow-500/10 card"
        >
          <Image
            className="object-cover rounded-full"
            src="https://i.imgur.com/mEWrdvi.png"
            height={270}
            width={250}
          />
          <button
            className="bg-black rounded-lg h-[60px] w-[275px] font-bold text-lg transition-all duration-250 hover:shadow-pink-500 hover:shadow-md hover:-translate-y-2 active:-translate-y-1 active:shadow-smr flex space-x-3 items-center justify-center"
            onClick={authenticate}
          >
            {isAuthenticating ? (
              <span>Loading</span>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <p>Login To The Metaverse</p>
              </>
            )}
          </button>
        </Tilt>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://bithub.pl/wp-content/uploads/2021/09/metaverse-min-scaled.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="bg-black/20 z-25 w-full h-screen absolute top-0 left-0" />
    </div>
  );
};

export default Login;