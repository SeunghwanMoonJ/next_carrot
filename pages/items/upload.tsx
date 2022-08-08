import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <div
          className="flex justify-center w-full border-2 py-10 border-dashed
          mb-4 text-gray-600 hover:border-orange-300 hover:text-orange-300 rounded-md
          cursor-pointer "
        >
          <label htmlFor="input" className="text-sm text-gray-600">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input id="input" className="hidden" type="file" />
          </label>
        </div>
      </div>
      <div className="my-14 space-y-1">
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
        Upload product
      </button>
    </div>
  );
};

export default Upload;
