import { NextApiHandler } from "next";
import { registerSpeech } from "@/db/index";

const registerSpeechHandler: NextApiHandler<any> = async (req, res) => {
  try {
    const { body } = req;
    const response = await registerSpeech(body);
    if (response.acknowledged) {
      res.status(200).json({});
    } else {
      res.status(500).json({ error: "Could not acknowledge all fields" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export default registerSpeechHandler;
