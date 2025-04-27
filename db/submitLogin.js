// /api/submitEntry.js
import { insertIntoDB } from "../submitLogin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Only POST allowed
  }

  try {
    const { email, password, shift, mood, sleep } = req.body;

    await insertIntoDB({
      email,
      password,
      shift,
      mood,
      sleep,
    });

    res.status(200).json({ message: "Entry saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving entry" });
  }
}
