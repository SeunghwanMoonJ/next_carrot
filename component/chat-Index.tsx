import Link from "next/link";

interface IChatIndex {
  id: number;
  name: string;
  message: string;
}

export default function ChatIndex({ id, name, message }: IChatIndex) {
  return (
    <Link href={`/chats/${id}`}>
      <div
        // 마지막 요소만 밑줄을 없애기 위해 last:border-none 을 사용
        // tailwindcss 유틸리티인 형제 요소 간 구분선을 그어주는 divide-y-1 도 사용 가능
        className="cursor-pointer px-4 pb-4 flex last:border-none items-center space-x-2 border-b"
      >
        <div className="aspect-square w-12 bg-gray-200 rounded-full" />
        <div>
          <p className="text-sm text-gray-700">{name}</p>
          <p className="text-xs text-gray-500">{message}</p>
        </div>
      </div>
    </Link>
  );
}
