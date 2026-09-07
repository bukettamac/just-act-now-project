# just.act.now — Yazılım Klasör Düzeni

Bu klasör, "just.act.now" video editörü ve sosyal medya yayın sisteminin
profesyonel proje yapısını içerir.

```
just-act-now/
├── just-act-now-editor.html    Tarayıcıda çalışan editör (bugün kullandığın araç)
├── server/                     Gerçek TikTok/Instagram otomatik yükleme için İSKELET (henüz çalışmıyor)
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── index.js
│       └── services/
│           ├── tiktokService.js
│           ├── instagramService.js
│           └── aiCaption.js
└── docs/
    └── tiktok-instagram-entegrasyon-plani.md
```

## Bugün ne çalışıyor?

`just-act-now-editor.html` — tek dosyalık, tarayıcıda çalışan editör:

- Sözleri ve şarkıları kalıcı olarak saklar (veritabanı).
- mp4 yüklenirse otomatik mp3'e çevirir.
- Animasyonlu video üretir ve indirir (webm).
- Yapay zeka ile TikTok/Instagram açıklaması ve hashtag üretir.
- "Paylaş" butonları açıklamayı panoya kopyalar ve TikTok/Instagram'ın
  yükleme sayfasını yeni sekmede açar — **son adımı (dosyayı seçme,
  yapıştırma, onaylama) sen yaparsın.**

## Neden otomatik yükleme yok?

TikTok'a ve Instagram'a **tek tıkla, insan müdahalesi olmadan** video
yüklemek için üç şey gerekir:

1. TikTok Developer Portal'da onaylanmış bir uygulama + Content Posting API
   erişimi.
2. Meta for Developers'ta onaylanmış bir uygulama + Instagram Graph API
   erişimi (Instagram İşletme hesabı gerektirir).
3. Erişim anahtarlarını (token) güvenli şekilde saklayan bir **sunucu**
   (tarayıcıda çalışan bir araç, gizli anahtarları güvenle saklayamaz —
   herkes tarayıcının geliştirici panelinden görebilir).

Bu üçü olmadan gerçek otomasyon yapılamaz; sahte bir "yüklendi" mesajı
göstermek yanıltıcı olur. `server/` klasörü, bu üç adım tamamlandığında
doldurulacak gerçek entegrasyonun iskeletini içeriyor.
Ayrıntılı yol haritası için `docs/tiktok-instagram-entegrasyon-plani.md`
dosyasına bak.
