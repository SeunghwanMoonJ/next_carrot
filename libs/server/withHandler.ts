import { NextApiRequest, NextApiResponse } from "next";

export interface responseType {
  ok: boolean;
  [key: string]: any;
}
interface ConfigType {
  method: "POST" | "GET" | "DELETE";
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
export default function withHandler({
  method,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      // 401 : 인증되지 않은 요청
      res.status(401).json({ ok: false });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
