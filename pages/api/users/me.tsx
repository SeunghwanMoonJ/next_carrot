import client from "@libs/client/client";
import withHandler, { responseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseType>
) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  res.json({
    ok: true,
    profile,
  });
}

// withSession : withIronSessionApiRoute 함수와 이 함수에 필요한 옵션을 포함한 함수
export default withApiSession(withHandler({ method: "GET", handler }));
