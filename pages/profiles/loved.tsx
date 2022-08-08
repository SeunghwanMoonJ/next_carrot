import { NextPage } from "next";
import Layout from "../../component/layout";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4">
        <div className="flex flex-col space-y-5">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <div
              key={i}
              className="border-b pb-4 cursor-pointer flex justify-between px-5"
            >
              <div className="flex space-x-5">
                <div className="w-20 h-20 bg-gray-100 rounded-sm" />
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col justify-start">
                    <h2 className="text-lg">New iPhone 14</h2>
                    <span className="text-xs text-gray-500">Black</span>
                  </div>
                  <span className="flex items-end mt-1">$95</span>
                </div>
              </div>
              <div className="flex space-x-1.5 items-end justify-end">
                <div className="flex space-x-0.5 justify-center text-sm text-gray-500">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
                <div className="flex space-x-0.5 justify-center text-sm text-gray-500">
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
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Loved;
