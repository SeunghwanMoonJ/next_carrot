import type { NextPage } from "next";
import Layout from "@components/layout";

const Create: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-16">
        <div className="my-4 space-y-1">
          <label className="mb-1 block text-sm font-medium">Price</label>
          <div className="flex relative items-center">
            <div className="absolute pl-1 flex items-center left-2 pointer-events-none">
              <span className="text-sm text-gray-500">$</span>
            </div>
            <input
              className="pl-6 appearance-none border-gray-300 border rounded-md shadow-sm w-full
                 focus:ring-1 focus:border-orange-500 focus:ring-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-2 pointer-events-none">
              <span className="text-sm text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            className="rounded-md w-full border-gray-300 shadow-sm focus:ring-1
           focus:border-orange-500 focus:ring-orange-500"
            rows={4}
          />
        </div>
        <button
          className="bg-orange-500 w-full p-3 mt-6 rounded-md shadow-md
       focus:bg-orange-600 focus:border-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500"
        >
          Go Live
        </button>
      </div>
    </Layout>
  );
};

export default Create;
