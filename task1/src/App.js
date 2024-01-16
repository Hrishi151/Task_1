import React, { useState } from "react";
import Logo from "./imgs/logo1.png";
import Roundimg from "./imgs/round_img.png";
import AdLogo from "./imgs/ad.png";
import "./App.css";
import ReactCardFlip from "react-card-flip";

function App() {
  const [show, setShow] = useState(false);
  const [showX, setShowX] = useState(false);
  const [showY, setShowY] = useState(false);

  const showDataFunction = () => {
    setShow(true);
  };
  const hideDataFunction = () => {
    setShow(false);
  };

  const showDataFunctionX = () => {
    setShowX(true);
  };
  const hideDataFunctionX = () => {
    setShowX(false);
  };

  const showDataFunctionY = () => {
    setShowY(true);
  };
  const hideDataFunctionY = () => {
    setShowY(false);
  };

  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="max-w-screen-xl items-center mx-auto p-4">
      <nav class="bg-white border-gray-200 ">
        <div class="flex flex-wrap items-center justify-between p-6">
          <img src={Logo} alt="Logo" className="w-1/6" />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-normal text-lg text-neutral-700 flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  class="block py-3 px-6 rounded-full bg-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="block py-3 px-6 rounded-full bg-white">
                  Flashcard
                </a>
              </li>
              <li>
                <a href="#" class="block py-3 px-6 rounded-full bg-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#FAQ" class="block py-3 px-6 rounded-full bg-white">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-3 px-10 rounded-full bg-gradient-to-b from-blue-950 to-blue-800 text-white"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-row items-center p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <div className="font-medium text-lg text-zinc-500">Flashcard</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <div className="font-medium text-lg text-zinc-500">Mathematics</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <div className="font-medium text-lg text-blue-950">
          Relation and Function
        </div>
      </div>

      <div className="flex p-6">
        <div className="font-bold text-3xl bg-gradient-to-b from-blue-950 to-blue-800 bg-clip-text text-transparent">
          Relations and Functions ( Mathematics )
        </div>
      </div>

      <div className="flex flex-col items-center">
        <ul class="font-normal text-lg text-neutral-700 flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
          <li>
            <a
              href="#"
              className="font-medium text-lg text-blue-950 underline block py-3 px-6 rounded-full bg-white"
              aria-current="page"
            >
              Study
            </a>
          </li>
          <li>
            <a href="#" class="block py-3 px-6 rounded-full bg-white">
              Quiz
            </a>
          </li>
          <li>
            <a href="#" class="block py-3 px-6 rounded-full bg-white">
              Test
            </a>
          </li>
          <li>
            <a href="#" class="block py-3 px-6 rounded-full bg-white">
              Game
            </a>
          </li>
          <li>
            <a href="#" class="block py-3 px-6 rounded-full bg-white">
              Others
            </a>
          </li>
        </ul>
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          {/* card start */}
          <div
            className="flex flex-col bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 w-100px h-full rounded-3xl "
            onClick={flipCard}
          >
            <div className="flex flex-row justify-between text-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            </div>
            <div className="flex flex-row justify-center text-white font-bold text-4xl p-14">
              9 + 6 + 7x - 2x - 3
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div
            className="flex flex-col bg-gradient-to-r from-sky-500 via-sky-600 to-sky-900 w-100px h-full rounded-3xl"
            onClick={flipCard}
          >
            <div className="flex flex-row justify-between text-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
              </svg>
            </div>
            <div className="flex flex-row justify-center text-white font-bold text-4xl p-14">
              5x + 12
            </div>
          </div>
        </ReactCardFlip>
        {/* card end */}

        <div className="flex p-6 w-6/12 justify-between">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="flex flex-row gap-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-950 rounded-full text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-2xl font-bold text-gray-800">01/10</div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-950 rounded-full text-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between pt-6">
        <div className="flex flex-row gap-2">
          <img src={Roundimg} alt="RoundImg" className="w-40 -mt-8" />
          <img src={AdLogo} alt="AdLogo" className="w-40 h-20" />
        </div>

        <div className="flex flex-row gap-2 p-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-950 rounded-full text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="font-semibold text-2xl bg-gradient-to-b from-blue-950 to-blue-800 bg-clip-text text-transparent">
            Create Flashcard
          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 gap-4">
        <div
          id="FAQ"
          className="font-bold text-5xl bg-gradient-to-b from-blue-950 to-blue-800 bg-clip-text text-transparent"
        >
          FAQ
        </div>
        <div className="flex flex-col w-4/6 gap-4">
          <div className="flex flex-row border-blue-900 rounded-xl border-2 p-4 justify-between">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">
                Can education flashcards be used for all age groups?
              </div>
              {show && (
                <div className="font-normal text-lg">
                  Yes, education flashcards can be tailored to different age
                  groups and learning levels. There are flashcards designed for
                  preschoolers, elementary school students, high school
                  students, and even for college-level and adult learners.{" "}
                </div>
              )}
            </div>

            <div
              className={show ? "text-blue-900" : "hidden"}
              onClick={hideDataFunction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={show ? "hidden" : "text-blue-900"}
              onClick={showDataFunction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row border-blue-900 rounded-xl border-2 p-4 justify-between">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">
                How do education flashcards work?
              </div>
              {showX && (
                <div className="font-normal text-lg">
                  Education flashcards work by presenting a question or prompt
                  on one side and the corresponding answer or information on the
                  other. Users can review the cards repeatedly, reinforcing
                  their memory and enhancing learning through repetition.{" "}
                </div>
              )}
            </div>

            <div
              className={showX ? "text-blue-900" : "hidden"}
              onClick={hideDataFunctionX}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={showX ? "hidden" : "text-blue-900"}
              onClick={showDataFunctionX}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row border-blue-900 rounded-xl border-2 p-4 justify-between">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">
                Can education flashcards be used for test preparation?
              </div>
              {showY && (
                <div className="font-normal text-lg">
                  Absolutely. Flashcards are an excellent tool for test
                  preparation, allowing students to review key concepts, terms,
                  and facts. They provide a quick and focused way to reinforce
                  knowledge before exams.{" "}
                </div>
              )}
            </div>

            <div
              className={showY ? "text-blue-900" : "hidden"}
              onClick={hideDataFunctionY}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={showY ? "hidden" : "text-blue-900"}
              onClick={showDataFunctionY}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
