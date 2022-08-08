import type { NextPage } from "next";
import FloatingInput from "../../component/floating-input";
import Layout from "../../component/layout";
import Message from "../../component/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-5">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reverse={true} />
        <Message message="No way." />
        <FloatingInput />
      </div>
    </Layout>
  );
};

export default ChatDetail;
