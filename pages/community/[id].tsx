import type { NextPage } from "next";
import Layout from "../../component/layout";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10">
        <div className="py-4 mb-4 flex items-center space-x-2 border-b">
          <div className="aspect-square w-12 bg-gray-200 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
          동네질문
        </span>
        <div className="mt-2">
          <div>
            <span className="mt-4 text-gray-700 cursor-pointer">
              <span className="text-orange-500">Q.</span> What is the best mandu
              restaurant?
            </span>
          </div>
          <div className="mt-4 flex space-x-5 text-gray-700 py-2">
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-2 text-sm">
              <svg
                className="w-4 h-4"
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
              <span>답변 1</span>
            </span>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="w-12 h-12 aspect-square rounded-full bg-gray-300" />
          <div className="flex flex-col pl-2">
            <span className="text-sm text-gray-700">Steve Jebs</span>
            <span className="text-xs text-gray-600">2시간 전</span>
            <p className="text-gray-700 pt-1 pb-4">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="w-12 h-12 aspect-square rounded-full bg-gray-300" />
          <div className="flex flex-col pl-2">
            <span className="text-sm text-gray-700">Steve Jebs</span>
            <span className="text-xs text-gray-600">2시간 전</span>
            <p className="text-gray-700 pt-1 pb-4">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>

        <div className="flex mt-2">
          <div className="w-12 h-12 aspect-square rounded-full bg-gray-300" />
          <div className="flex flex-col pl-2">
            <span className="text-sm text-gray-700">Steve Jebs</span>
            <span className="text-xs text-gray-600">2시간 전</span>
            <p className="text-gray-700 pt-1 pb-4">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>

        <div>
          <textarea
            className="rounded-md w-full border-gray-300 shadow-sm focus:ring-1
           focus:border-orange-500 focus:ring-orange-500"
            rows={4}
            placeholder="Answer this question!"
          />
          <button
            className="bg-orange-500 w-full p-3 mt-3 rounded-md shadow-md
       focus:bg-orange-600 focus:border-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500"
          >
            Reply
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
