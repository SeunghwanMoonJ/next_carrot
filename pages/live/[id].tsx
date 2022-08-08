import type { NextPage } from "next";
import FloatingInput from "../../component/floating-input";
import Layout from "../../component/layout";
import Message from "../../component/message";

const Stream: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-2xl block mt-3 text-gray-900">$140</span>
          <p className=" my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>

          {/* h-[50vh] overflow-y-scroll 채팅내역만 스크롤 가능하게 높이를 지정하고 스크롤 처리 */}
          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ￦20,000" reverse={true} />
            <Message message="Byebye." />
          </div>
          <FloatingInput />
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
