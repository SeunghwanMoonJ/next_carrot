import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { cls } from "@libs/client/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

function Layout({ title, canGoBack, hasTabBar, children }: LayoutProps) {
  const Router = useRouter();
  const onClickBackButton = () => {
    Router.back();
  };

  return (
    <div className="relative">
      {/* fixed max-w-2xl : 요소를 고정시키면 부모의 max-width를 따르지 않기 때문에 따로 설정해줘야 한다. */}
      <div
        className={cls(
          !canGoBack ? "justify-center" : "",
          " bg-white w-full font-medium text-lg py-2 fixed max-w-2xl text-gray-700 border-b top-0 flex item-center"
        )}
      >
        {canGoBack ? (
          <button
            onClick={onClickBackButton}
            className="text-2xl text-gray-600"
          >
            &larr;
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      {/* 탭바가 필요하면 하단 여백을 주도록 처리 */}
      <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <div
          className="fixed bg-white w-full max-w-2xl py-2 text-gray-700 font-medium text-lg 
        border-t bottom-0 flex justify-around items-center"
        >
          <Link href="/">
            <a
              className={cls(
                Router.pathname === "/" ? "text-orange-500" : "",
                "flex flex-col items-center space-y-1"
              )}
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span className="flex justify-center text-sm">홈</span>
            </a>
          </Link>
          <Link href="/community">
            <a
              className={cls(
                Router.pathname === "/community" ? "text-orange-500" : "",
                "flex flex-col items-center space-y-1"
              )}
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                ></path>
              </svg>
              <span className="flex justify-center text-sm">동네생활</span>
            </a>
          </Link>
          <Link href="/chats">
            <a
              className={cls(
                Router.pathname === "/chats" ? "text-orange-500" : "",
                "flex flex-col items-center space-y-1"
              )}
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span className="flex justify-center text-sm">채팅</span>
            </a>
          </Link>
          <Link href="/live">
            <a
              className={cls(
                Router.pathname === "/live" ? "text-orange-500" : "",
                "flex flex-col items-center space-y-1"
              )}
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="flex justify-center text-sm">라이브</span>
            </a>
          </Link>
          <Link href="/profiles">
            <a
              className={cls(
                Router.pathname === "/profiles" ? "text-orange-500" : "",
                "flex flex-col items-center space-y-1"
              )}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="flex justify-center text-sm">프로필</span>
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Layout;
