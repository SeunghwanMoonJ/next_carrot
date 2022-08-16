import type { NextPage } from "next";
import Router from "next/router";
import CommunityIndex from "@components/community-index";
import FloatingButton from "@components/floating-button";
import Layout from "@components/layout";

const Community: NextPage = () => {
  const onClickQuestion = (id: number) => {
    Router.push(`/community/${id}`);
  };

  return (
    <Layout title="동네생활" hasTabBar>
      <div className="px-4 relative space-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <CommunityIndex
            key={i}
            id={i}
            title="What is the best pet shop"
            writer="두부당근"
            time={2}
            wonderCount={3}
            answerCount={4}
          />
        ))}
        <FloatingButton href="community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
