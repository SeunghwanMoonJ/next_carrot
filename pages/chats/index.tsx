import { NextPage } from "next";
import ChatIndex from "../../component/chat-Index";
import Layout from "../../component/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar={true}>
      <div>
        <div className="space-y-8">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <ChatIndex
              key={i}
              id={i}
              name="Steve Jabbs"
              message="Hello, not sell yet? nego 10% please! 🙏🏻🙏🏻🙏🏻"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Chats;
