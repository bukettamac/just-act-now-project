// Yapay zeka ile TikTok/Instagram aciklamasi + hashtag uretimi.
// Bu servis GERCEKTEN calisir (tarayicidaki editorde de ayni mantik kullaniliyor).
// ANTHROPIC_API_KEY .env'de tanimli olmali.

export async function generateCaption({ quote, animalName, animalBlurb }) {
  const prompt = `Bir TikTok/Instagram Reels videosu icin Turkce, kisa, motive edici bir aciklama (caption) ve 6-10 arasi ilgili hashtag uret.
Video temel sozu: "${quote}"
Videodaki disiplin sembolu hayvan: ${animalName} (${animalBlurb})
Marka adi: just.act.now — kisa, net, harekete gecirici bir dil kullan.
Sadece su JSON formatinda cevap ver, baska hicbir aciklama veya markdown ekleme:
{"caption": "...", "hashtags": ["...", "..."]}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  const textBlock = (data.content || []).find((c) => c.type === "text");
  const raw = (textBlock?.text || "").replace(/```json|```/g, "").trim();
  return JSON.parse(raw);
}
