# TikTok & Instagram Otomatik Yayın — Entegrasyon Planı

Bu belge, `just.act.now` editöründen üretilen videoların TikTok ve
Instagram'a **gerçekten otomatik** yüklenebilmesi için izlenmesi gereken
adımları özetler.

## 1. TikTok tarafı

1. [TikTok for Developers](https://developers.tiktok.com/) üzerinden bir
   uygulama oluştur.
2. **Content Posting API** için erişim başvurusu yap (TikTok bu izni
   inceleyip onaylıyor, otomatik verilmiyor).
3. Uygulama onaylandıktan sonra OAuth 2.0 akışıyla `just.act.now`
   hesabına bağlan; bu sana bir `access_token` ve `refresh_token` verir.
4. Bu token'lar **sunucuda** (tarayıcıda değil) saklanır ve süresi
   dolduğunda otomatik yenilenir.
5. Video yükleme, `POST /v2/post/publish/video/init/` uç noktası ile
   yapılır; video dosyası parçalar halinde yüklenir.

## 2. Instagram tarafı

1. [Meta for Developers](https://developers.facebook.com/) üzerinden bir
   uygulama oluştur.
2. Instagram hesabının **İşletme veya Yaratıcı** hesabına dönüştürülmüş
   ve bir Facebook Sayfası'na bağlı olması gerekir.
3. `instagram_content_publish` iznini iste (Meta'nın uygulama incelemesi
   gerekir).
4. Instagram Graph API üzerinden: önce medya container'ı oluşturulur
   (`/media`), sonra yayınlanır (`/media_publish`).
5. Video dosyasının incelemeden geçmesi ve herkese açık bir URL'den
   erişilebilir olması gerekir (yani sunucunun videoyu geçici olarak
   barındırması gerekir).

## 3. Ortak gereksinimler

- **Sunucu / hosting:** token'ları güvenli saklamak ve API çağrılarını
  yapmak için bir backend şart (bkz. `server/` klasörü).
- **HTTPS callback/redirect URL:** OAuth akışları için gerekli.
- **Video barındırma:** Instagram, videoyu bir URL'den çekiyor; bu yüzden
  üretilen video geçici olarak bir sunucuda/CDN'de barındırılmalı.
- **Uygulama incelemesi:** Her iki platform da canlıya çıkmadan önce
  uygulamanı inceler; bu süreç günler/haftalar sürebilir.

## 4. Bu noktaya kadar `just.act.now` editörünün yaptığı iş

- Videoyu üretir ve indirir.
- Yapay zeka ile açıklama + hashtag üretir.
- Açıklamayı panoya kopyalar, ilgili platformun yükleme sayfasını açar.

Yukarıdaki adımlar tamamlandığında `server/src/services/tiktokService.js`
ve `instagramService.js` dosyalarındaki yer tutucular gerçek API
çağrılarıyla doldurulacak ve editördeki "Paylaş" butonları doğrudan
sunucuya istek atacak şekilde güncellenecek.
