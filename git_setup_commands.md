# 🚀 دستورات Git برای آپلود به GitHub

## مرحله 1: ایجاد Repository در GitHub
1. به GitHub.com بروید
2. روی "New repository" کلیک کنید
3. نام repository را وارد کنید: `academia-chatbot-website`
4. توضیح اضافه کنید: `Modern bilingual AI chatbot business website built with Django`
5. Public یا Private انتخاب کنید
6. **README.md اضافه نکنید** (چون ما خودمان ایجاد کردیم)
7. روی "Create repository" کلیک کنید

## مرحله 2: دستورات Terminal/CMD

در پوشه `webBOT` این دستورات را اجرا کنید:

### 1. Git را مقداردهی اولیه کنید
```bash
git init
```

### 2. فایل‌ها را به staging area اضافه کنید
```bash
git add .
```

### 3. اولین commit را ایجاد کنید
```bash
git commit -m "🎉 Initial commit: Modern bilingual AI chatbot website

✨ Features:
- Bilingual support (English/Turkish)
- Modern minimalist design
- AI chatbot business focus
- Performance optimized (WebP images)
- Responsive design
- Django 5.2 backend

🚀 Ready for production deployment"
```

### 4. main branch را تنظیم کنید
```bash
git branch -M main
```

### 5. Remote repository را اضافه کنید
```bash
git remote add origin https://github.com/YOUR_USERNAME/academia-chatbot-website.git
```
**نکته**: `YOUR_USERNAME` را با نام کاربری GitHub خود جایگزین کنید

### 6. کد را به GitHub push کنید
```bash
git push -u origin main
```

## مرحله 3: تأیید آپلود
1. به repository خود در GitHub بروید
2. بررسی کنید که همه فایل‌ها آپلود شده‌اند
3. README.md را بررسی کنید که درست نمایش داده می‌شود

## 🔄 دستورات آینده (برای تغییرات بعدی)

### برای اضافه کردن تغییرات جدید:
```bash
git add .
git commit -m "توضیح تغییرات"
git push
```

### برای دیدن وضعیت فایل‌ها:
```bash
git status
```

### برای دیدن تاریخچه commit‌ها:
```bash
git log --oneline
```

## 🌟 نکات مهم

1. **نام کاربری GitHub**: حتماً `YOUR_USERNAME` را با نام کاربری واقعی خود جایگزین کنید
2. **Authentication**: ممکن است نیاز به وارد کردن username/password یا token داشته باشید
3. **Repository Name**: می‌توانید نام repository را تغییر دهید
4. **Branch Protection**: برای پروژه‌های تیمی، branch protection rules تنظیم کنید

## 🎯 Repository URL نهایی
```
https://github.com/YOUR_USERNAME/academia-chatbot-website
```

پس از آپلود موفق، می‌توانید لینک repository را با دیگران به اشتراک بگذارید! 🎉