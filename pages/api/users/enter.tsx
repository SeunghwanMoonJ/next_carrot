import client from "@libs/client/client";
import smtpTransport from "@libs/server/email";
import withHandler, { responseType } from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<responseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `your login token is ${payload}`,
    // });
    // console.log(message);
  }
  if (email) {
    // const mailOptions = {
    //   from: "raac@naver.com",
    //   to: email,
    //   subject: "Nomad Carrot Authentication Email",
    //   text: `Authentication Code : ${payload}`,
    // };
    // const result = smtpTransport.sendMail(mailOptions, (error, responses) => {
    //   if (error) {
    //     console.log(error);
    //     return null;
    //   } else {
    //     console.log(responses);
    //     return null;
    //   }
    // });
    // smtpTransport.close();
    // console.log(result);
  }

  const token = await client.token.create({
    data: {
      payload,
      user: {
        // connectOrCreate : where로 유저 검색 후 있으면 토큰과 연결,
        // 유저가 없다면 유저를 생성 후 토큰과 연결. 해서 위의 upsert 함수 기능까지 토큰 함수로 한번에 해결.
        connectOrCreate: {
          where: {
            // ES6의 기능인 ...으로 객체 안에서 조건문 작성 가능
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  // req.body는 header없이 작동하지만 req.body.email은 작동하지 않는다(request의 인코딩을 기준으로 인코딩하기 때문)
  // header에 "content-type": "application/json" 작성해주면 req.body.email 가능
  return res.json({
    ok: true,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
