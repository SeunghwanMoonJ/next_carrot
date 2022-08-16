import Link from "next/link";

interface ILiveIndex {
  id: number;
  title: string;
}

export default function LiveIndex({ id, title }: ILiveIndex) {
  return (
    <Link href={`/live/${id}`}>
      <div className="py-10 px-4">
        <div className="aspect-video shadow-md rounded-md w-full bg-gray-300 cursor-pointer"></div>
        <h3 className="text-2xl mt-1">{title}</h3>
      </div>
    </Link>
  );
}
