import type { UseFormRegisterReturn } from "react-hook-form";

interface IInput {
  name: string;
  type: string;
  kind: "text" | "phone" | "email";
  label: string;
  // resister 함수에 마우스 올려서 정보보기를 하면 리턴 타입이 나와 있다. 타입 안써줘도 ...rest로 받을 수 있음.
  // type이므로 위에 import에 type이라고 작성
  resister: UseFormRegisterReturn;
  // 아래 코드로 어떤 요소도 다 받을 수 있게 처리
  [key: string]: any;
}

export default function Input({
  name,
  type,
  kind,
  label,
  resister,
  // 위 요소들에 해당하지 않는 나머지 input prop들이 ...rest로 넘어온다.
  ...rest
}: IInput) {
  return (
    <div>
      <label htmlFor="input" className="text-sm text-gray-600">
        {label}
      </label>
      {kind === "text" ? (
        <div>
          <div>
            <input
              // useForm의 resister 함수 실행 후 리턴된 여러 요소를 펼침
              {...resister}
              id={name}
              type={type}
              {...rest}
              className="appearance-none border-gray-300 border rounded-xl shadow-sm w-full
                 focus:ring-1 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex">
          <span
            className="flex items-center justify-center px-3 border border-gray-300
                rounded-l-md rounded-r-0 border-r-0 shadow-sm text-gray-500 text-md"
          >
            +82
          </span>
          <input
            {...resister}
            id={name}
            type={type}
            className="appearance-none  border-gray-300 border rounded-r-xl shadow-sm w-full
                   focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            {...rest}
          />
        </div>
      ) : null}
      {kind === "email" ? (
        <div>
          <input
            {...resister}
            id={name}
            type={type}
            {...rest}
            className="appearance-none border-gray-300 border rounded-xl shadow-sm w-full
                 focus:ring-1 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
      ) : null}
    </div>
  );
}
