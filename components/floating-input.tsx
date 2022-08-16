export default function FloatingInput() {
  return (
    // 채팅 입력 칸의 최대 넓이는 max-w-md 448px로 고정하고 바닥에서 움직이지 않고 floating 하게 작성
    <div className="fixed mx-auto max-w-md bottom-4 inset-x-0">
      {/* inset-x-0 : left-0 right-0 과 똑같다 */}
      <div className="flex  items-center">
        <input
          className="pl-6 appearance-none border-gray-300 border rounded-md shadow-sm w-full
         focus:ring-1 focus:border-orange-500 focus:ring-orange-500"
          type="text"
          placeholder="write a chat here"
        />
        <div className="flex items-center absolute right-3 cursor-pointer">
          <span
            className="text-white bg-orange-500 rounded-full w-7 h-7 flex justify-center items-center
    hover:bg-orange-600 active:ring-2 active:ring-offset-2 active:bg-orange-500 active:ring-orange-500"
          >
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
