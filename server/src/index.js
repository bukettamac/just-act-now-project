// just.act.now — sunucu iskeleti
//
// Bu dosya henuz gercek bir TikTok/Instagram yuklemesi yapmiyor.
// Once docs/tiktok-instagram-entegrasyon-plani.md dosyasindaki adimlarin
// tamamlanmasi (onayli gelistirici uygulamalari + API erisimi) gerekiyor.

import express from "express";
import dotenv from "dotenv";
import { publishToTikTok } from "./services/tiktokService.js";
import { publishToInstagram } from "./services/instagramService.js";
import { generateCaption } from "./services/aiCaption.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Yapay zeka ile aciklama/hashtag uretimi (bu uc nokta gercekten calisir,
// Anthropic API kullanir).
app.post("/api/caption", async (req, res) => {
  try {
    const { quote, animalName, animalBlurb } = req.body;
    const result = await generateCaption({ quote, animalName, animalBlurb });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Asagidaki iki uc nokta, entegrasyon plani tamamlanana kadar
// "not_implemented" doner. Gercek TikTok/Instagram API baglantisi
// kuruldugunda tiktokService.js / instagramService.js icini doldur.
app.post("/api/publish/tiktok", async (req, res) => {
  try {
    const result = await publishToTikTok(req.body);
    res.json(result);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

app.post("/api/publish/instagram", async (req, res) => {
  try {
    const result = await publishToInstagram(req.body);
    res.json(result);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`just-act-now server (iskelet) http://localhost:${port} adresinde calisiyor`);
});
