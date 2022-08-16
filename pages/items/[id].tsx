import type { NextPage } from "next";
import Layout from "@components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10 space-y-20">
        <div>
          <div className="h-56 bg-gray-200" />
          <div className="py-4 flex items-center space-x-2 border-b">
            <div className="aspect-square w-12 bg-gray-200 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-bold text-gray-800">Galaxy S50</h1>
            <span className="text-2xl text-gray-800 block mt-3">$140</span>
            <p className="text-gray-700 text-base mt-3">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between mt-10 mb-10 space-x-2">
              <button
                className="py-2 outline-8 outline-gray-500 text-white flex-1 rounded-md active:bg-orange-600 focus:outline-none
               focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-md bg-orange-500 w-full"
              >
                Talk to seller
              </button>
              <button
                className="text-gray-500 hover:bg-gray-200 rounded-md p-2 focus:ring-2
             focus:ring-offset-2 focus:ring-orange-500"
              >
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium text-center mb-10">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 aspect-square bg-gray-200 rounded-md" />
                <h3 className="-mb-1 text-gray-800">Galaxy S60</h3>
                <p className="text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
