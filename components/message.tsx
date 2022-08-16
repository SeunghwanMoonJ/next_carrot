import { cls } from "@libs/client/utils";

interface IMessage {
  message: string;
  reverse?: boolean;
}

export default function Message({ message, reverse }: IMessage) {
  return (
    <div
      className={cls(
        "flex items-center space-x-2",
        reverse ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className="w-8 h-8 rounded-full bg-gray-300" />
      <div className="w-1/2">
        <p className="text-sm text-gray-700 border rounded-md p-3">{message}</p>
      </div>
    </div>
  );
}
