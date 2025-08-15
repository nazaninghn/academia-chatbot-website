# 🌐 نسخه Static HTML (پشتیبان)

اگر Django deploy نشد، می‌توانیم وب‌سایت را به صورت Static HTML تبدیل کنیم.

## 🚀 مزایای Static:
- ✅ رایگان کاملاً
- ✅ سریع‌تر
- ✅ آسان‌تر deploy
- ✅ بدون محدودیت

## 📁 فایل‌های مورد نیاز:
1. `index.html` (از template فعلی)
2. `style.css` (CSS جدا شده)
3. `script.js` (JavaScript جدا شده)
4. پوشه `images/` (تصاویر)

## 🛠️ تبدیل به Static:

### 1. ایجاد index.html
- محتوای `home.html` را کپی کنید
- CSS و JS را جدا کنید
- لینک‌های static را درست کنید

### 2. جداسازی CSS
- CSS داخل `<style>` را به `style.css` منتقل کنید

### 3. جداسازی JavaScript
- JavaScript را به `script.js` منتقل کنید

## 🌐 Deploy Static:

### GitHub Pages:
1. Repository → Settings → Pages
2. Source: Deploy from branch
3. Branch: main
4. URL: `https://username.github.io/repo-name`

### Netlify:
1. [netlify.com](https://netlify.com)
2. Drag & drop folder
3. URL: `https://random-name.netlify.app`

### Vercel:
1. [vercel.com](https://vercel.com)
2. Import from GitHub
3. URL: `https://project-name.vercel.app`

## 🎯 آیا می‌خواهید این کار را انجام دهیم؟

اگر Django deploy نمی‌شود، می‌توانم:
1. فایل‌های static ایجاد کنم
2. روی GitHub Pages قرار دهیم
3. در 5 دقیقه آماده باشد!

بگویید تا شروع کنم! 🚀