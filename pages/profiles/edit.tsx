import { NextPage } from "next";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-5">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gray-300 rounded-full" />

          {/* label 태그안에 file type input을 넣고 숨겨서 label을 클릭해서 파일 업로드 가능하게 처리 */}
          <label
            className="p-2 cursor-pointer text-sm bg-orange-500 rounded-md text-white shadow-md
        hover:bg-orange-600
        active:ring-2 active:ring-offset-2 active:ring-orange-500
        "
          >
            Change
            {/* accept="image/*" 사진 파일만 받을 수 있게 처리 */}
            <input type="file" className="hidden" accept="image/*" />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-gray-600">
            Address
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none border-gray-300 border rounded-md shadow-sm w-full
                 focus:ring-1 focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="phone" className="text-sm text-gray-600">
            Phone number
          </label>
          <div className="flex">
            <span
              className="flex items-center justify-center px-3 border border-gray-300
                rounded-l-md rounded-r-0 border-r-0 shadow-sm text-gray-500 text-md"
            >
              +82
            </span>
            <input
              id="phone"
              type="number"
              className="appearance-none  border-gray-300 border rounded-r-md shadow-sm w-full
                   focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:ring-1"
              required
            />
          </div>
        </div>
        <button
          className="text-white border border-transparent w-full
           bg-orange-500 hover:bg-orange-600 rounded-md p-2 mt-4
           shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
        >
          Update Profile
        </button>
      </div>
    </Layout>
  );
};

export default EditProfile;
