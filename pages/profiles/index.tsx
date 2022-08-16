import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import Layout from "@components/layout";
import { motion } from "framer-motion";

const Profile: NextPage = () => {
  const [showingPopUp, setShowingPopUp] = useState(false);

  const onClickEditProfile = () => {
    Router.push(`/profiles/edit/`);
  };
  const onClickSellListButton = () => {
    Router.push(`/profiles/sell`);
  };
  const onClickBuyListButton = () => {
    Router.push(`/profiles/buy`);
  };
  const onClickLovedListButton = () => {
    Router.push(`/profiles/loved`);
  };
  const onClickPopUpbutton = () => {
    setShowingPopUp(true);
  };
  const setShowingPopUpFalse = () => {
    setShowingPopUp(false);
  };

  return (
    <Layout title="프로필" hasTabBar>
      <div className="px-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-gray-300 rounded-full" />
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => onClickEditProfile()}
          >
            <span className="font-medium text-gray-900">Steve Jebs</span>
            <span className="text-sm text-gray-700">Edit profile &rarr;</span>
          </div>
        </div>
        <div className="flex justify-around mt-10">
          <div className="flex flex-col items-center space-y-1">
            <div
              onClick={() => onClickSellListButton()}
              className="w-14 h-14 bg-orange-500 rounded-full flex justify-center items-center
          text-white cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">판매내역</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div
              onClick={() => onClickBuyListButton()}
              className="w-14 h-14 bg-orange-500 rounded-full flex justify-center items-center
          text-white cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">구매내역</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <div
              onClick={() => onClickLovedListButton()}
              className="w-14 h-14 bg-orange-500 rounded-full flex justify-center items-center
          text-white cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">관심목록</span>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
              <h4 className="text-sm font-bold text-gray-800">니꼬</h4>
              <div className="flex items-center justify-center">
                <svg
                  className="text-yellow-400 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-yellow-400 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="text-gray-400 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Normally, both your asses would be dead as fucking fried chicken,
              but you happen to pull this shit while I&apos;m in a transitional
              period so I don&apos;t wanna kill you, I wanna help you. But I
              can&apos;t give you this case, it don&apos;t belong to me.
              Besides, I&apos;ve already been through too much shit this morning
              over this case to hand it over to your dumb ass.
            </p>

            <button
              onClick={onClickPopUpbutton}
              className="p-4 bg-orange-700 rounded-md text-white"
            >
              Test Button
            </button>
            {showingPopUp ? (
              <div
                onClick={setShowingPopUpFalse}
                className="w-full h-full top-0 fixed bg-transparent z-10 cursor-pointer"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="shadow-lg p-5 fixed overflow-auto z-20 top-20 opacity-100 left-0 right-0 mx-auto h-2/3 w-2/3 bg-orange-300 text-9xl"
                >
                  <button
                    onClick={() => alert("fjfjf")}
                    className="p-4 bg-orange-600 rounded-md z-50"
                  >
                    Test!
                  </button>
                  🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻🙏🏻
                </motion.div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
