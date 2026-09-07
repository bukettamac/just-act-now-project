// TikTok Content Posting API entegrasyonu — YER TUTUCU
//
// Gercek calismasi icin gerekenler (bkz. docs/tiktok-instagram-entegrasyon-plani.md):
//   1. TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET (.env)
//   2. Onaylanmis Content Posting API erisimi
//   3. Hesap basina saklanan access_token / refresh_token (veritabaninda,
//      bu dosyada degil)
//
// Akis ozetle:
//   POST https://open.tiktokapis.com/v2/post/publish/video/init/
//   -> video parca parca yuklenir
//   -> POST .../video/publish/ ile yayinlanir

export async function publishToTikTok({ videoUrl, caption, accessToken }) {
  if (!process.env.TIKTOK_CLIENT_KEY || !accessToken) {
    throw new Error(
      "TikTok entegrasyonu henuz kurulmadi. Once TikTok Developer Portal'da " +
      "bir uygulama olusturup Content Posting API erisimi almalisin."
    );
  }

  // TODO: gercek TikTok API cagrilarini burada yap.
  throw new Error("not_implemented");
}
