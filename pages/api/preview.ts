import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.query.token;

  if (!token || token !== process.env.PREVIEW_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.query.clear !== undefined) {
    res.clearPreviewData();
    res.end("Preview mode disabled");
  } else {
    res.setPreviewData({});
    res.end("Preview mode enabled");
  }
}
