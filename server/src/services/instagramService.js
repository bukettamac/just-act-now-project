// Instagram Graph API entegrasyonu — YER TUTUCU
//
// Gercek calismasi icin gerekenler (bkz. docs/tiktok-instagram-entegrasyon-plani.md):
//   1. META_APP_ID / META_APP_SECRET (.env)
//   2. Instagram hesabinin Isletme/Yaratici hesabina donusturulmus olmasi
//   3. Bir Facebook Sayfasi'na baglanmis olmasi
//   4. instagram_content_publish izni (Meta uygulama incelemesi gerekir)
//   5. Video dosyasinin herkese acik bir URL'den erisilebilir olmasi
//
// Akis ozetle:
//   POST /{ig-user-id}/media       -> container olusturulur (video_url, caption)
//   POST /{ig-user-id}/media_publish -> container yayinlanir

export async function publishToInstagram({ videoUrl, caption, accessToken }) {
  if (!process.env.META_APP_ID || !accessToken) {
    throw new Error(
      "Instagram entegrasyonu henuz kurulmadi. Once Meta for Developers'ta " +
      "bir uygulama olusturup Instagram Graph API erisimi almalisin."
    );
  }

  // TODO: gercek Instagram Graph API cagrilarini burada yap.
  throw new Error("not_implemented");
}
