import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/client/utils";
import { useRouter } from "next/router";

interface EnterForm {
  email?: string;
  phone?: string;
}
interface TokenForm {
  token: string;
}
interface MutationResult {
  ok: boolean;
}

export default function Enter() {
  // DB를 mutate하는 hook 작성
  const [enter, { loading, data, error }] =
    useMutation<MutationResult>("/api/users/enter");
  // 위 mutate hook을 토큰 검증을 위해 api url만 바꿔서 재사용
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>("/api/users/confirm");
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");

  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };
  const onTokenValid = (tokenValidForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(tokenValidForm);
  };
  // 토큰이 존재하면 로그인 처리
  const router = useRouter();
  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);

  return (
    <div className="p-2">
      <h3 className="text-3xl text-center">Enter to Carrot</h3>
      <div>
        {data?.ok ? (
          <form
            // useForm의 handleSubmit으로 submit시 request 새로고침이 되지 않게 처리
            onSubmit={tokenHandleSubmit(onTokenValid)}
            className="mt-10 flex flex-col text-center"
          >
            <div>
              <Input
                resister={tokenRegister("token", { required: true })}
                name="token"
                label="Confirmation Token"
                kind="text"
                type="number"
                required
              />
            </div>
            <button
              className="border border-transparent
                 bg-orange-500 hover:bg-orange-600 rounded-md p-2 mt-4
                 shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
            >
              {tokenLoading ? "Token Loading.." : "Confirm Token"}
            </button>
          </form>
        ) : (
          <>
            <div className="mt-10 flex flex-col items-center">
              <h5 className="mt-10 text-gray-600">Enter using :</h5>
              <div className="mt-10 text-md grid grid-cols-2 w-screen">
                <button
                  className={cls(
                    "p-2 border-b",
                    method === "email" ? "border-b border-b-orange-500" : ""
                  )}
                  onClick={onEmailClick}
                >
                  Email
                </button>
                <button
                  // jsx에서 {``} 지저분하게 남발하는 것을 막기 위해 유틸 함수 사용
                  // const cls = (...classes: string[]) => classes.join(" ");
                  className={cls(
                    "p-2 border-b",
                    method === "phone" ? "border-b border-b-orange-500" : ""
                  )}
                  onClick={onPhoneClick}
                >
                  Phone
                </button>
              </div>
            </div>
            <form
              // useForm의 handleSubmit으로 submit시 request 새로고침이 되지 않게 처리
              onSubmit={handleSubmit(onValid)}
              className="mt-10 flex flex-col text-center"
            >
              <div>
                {method === "email" ? (
                  <Input
                    resister={register("email", { required: true })}
                    name="email"
                    label="email"
                    required
                    type="email"
                    kind="email"
                  />
                ) : null}
                {method === "phone" ? (
                  <Input
                    resister={register("phone", { required: true })}
                    name="phone"
                    label="Phone number"
                    kind="phone"
                    type="number"
                    required
                  />
                ) : null}
              </div>
              <button
                className="border border-transparent
           bg-orange-500 hover:bg-orange-600 rounded-md p-2 mt-4
           shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
              >
                {method === "email"
                  ? loading
                    ? "Loading.."
                    : "Get login link"
                  : null}
                {method === "phone"
                  ? loading
                    ? "Loading.."
                    : "Get one-time password"
                  : null}
              </button>
            </form>
          </>
        )}

        <div>
          <div className="relative mt-5">
            <div className="absolute border-t border-t-gray-200 w-full" />
            <div className="relative -top-3 text-center">
              <span className="bg-white text-gray-500 px-3 text-sm">
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <button
              className="hover:bg-gray-200 flex justify-center items-center text-gray-500
             border border-gray-300 bg-gray-50 p-3 rounded-md"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button
              className="hover:bg-gray-200 flex justify-center items-center text-gray-500
             border border-gray-300 bg-gray-50 p-3 rounded-md"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
