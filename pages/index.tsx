import type { NextPage } from "next";
import { useRouter } from "next/router";
import FloatingButton from "../component/floating-button";
import Item from "../component/Item";
import Layout from "../component/layout";

const Home: NextPage = () => {
  const Router = useRouter();
  const onClickItem = (id: number) => {
    Router.push(`/items/${id}`);
  };

  return (
    <Layout title="Home" hasTabBar={true}>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="New iPhone 13"
            color="black"
            price={33}
            comments={1}
            loved={3}
          />
        ))}
        {/* fixed로 위치를 고정한 floating 버튼 생성 */}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
