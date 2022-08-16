import Link from "next/link";

interface ICommunityIndex {
  id: number;
  title: string;
  writer: string;
  time: number;
  wonderCount: number;
  answerCount: number;
}

export default function CommunityIndex({
  id,
  title,
  writer,
  time,
  wonderCount,
  answerCount,
}: ICommunityIndex) {
  return (
    <Link href={`/community/${id}`}>
      <div
        key={id}
        className="flex flex-col items-start border-b cursor-pointer"
      >
        <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">
          동네질문
        </span>
        <span className="mt-4 text-gray-700">
          <span className="text-orange-500">Q.</span> {title}
        </span>
        <div className="text-xs flex justify-between text-gray-600 w-full mt-4">
          <span>{writer}</span>
          <span>{time}시간 전</span>
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
            <span>궁금해요 {wonderCount}</span>
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
            <span>답변 {answerCount}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
