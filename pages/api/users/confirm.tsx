import client from '@libs/client/client';
import withHandler, { responseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '@libs/server/withSession';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<responseType>,
) {
    const { token } = req.body;
    const foundedToken = await client.token.findUnique({
        where: {
            payload: token,
        },
        // include: Token 검색하면서 해당 token과 연결된 user 정보까지 함께 보여준다.
        // include: {
        //   user: true,
        // },
    });
    // 404 : not found
    if (!foundedToken) return res.status(404).end();

    // 토큰에 맞는 유저가 DB에 있으면 해당 유저 id를 iron-session으로 암호화해서 쿠키에 저장
    req.session.user = {
        id: foundedToken.userId,
    };
    await req.session.save();

    // 토큰 사용 후 DB에서 해당 id 토큰 전부 삭제
    await client.token.deleteMany({
        where: {
            userId: foundedToken.userId,
        },
    });
    res.json({ ok: true });
}

// withSession : withIronSessionApiRoute 함수와 이 함수에 필요한 옵션을 포함한 함수
export default withApiSession(
    withHandler({ method: 'POST', handler, isPrivate: false }),
);
