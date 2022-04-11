import { NextApiHandler } from "next";

const registerSpeechHandler: NextApiHandler<any> = (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
export default registerSpeechHandler;
