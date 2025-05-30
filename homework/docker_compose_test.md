# Docker Compose Test Savollari

## 1. Docker Compose nima?

A) Docker konteynerlarni boshqarish uchun grafik interfeys  
B) Bir nechta Docker konteynerlarni aniqlash va ishga tushirish uchun vosita  
C) Docker imagelarni yaratish uchun dastur  
D) Docker Hub bilan ishlash uchun API

---

## 2. Docker Compose faylining standart nomi nima?

A) compose.yml  
B) docker.yml  
C) docker-compose.yml  
D) container.yml

---

## 3. Docker Compose faylida qaysi YAML kaliti asosiy hisoblanadi?

A) containers  
B) services  
C) applications  
D) deployments

---

## 4. Barcha servislarni background rejimida ishga tushirish uchun qaysi buyruq ishlatiladi?

A) docker-compose start -d  
B) docker-compose run --detach  
C) docker-compose up -d  
D) docker-compose deploy --background

---

## 5. Docker Compose faylida volumeni qanday e'lon qilish mumkin?

A) Faqat `volumes:` bo'limida  
B) Faqat servis ichida `volumes:` da  
C) Ikkala usul ham to'g'ri  
D) `storage:` kaliti orqali

---

## 6. Environment o'zgaruvchilarni qaysi usulda belgilash mumkin?

A) Faqat `.env` fayl orqali  
B) Faqat `environment:` kaliti orqali  
C) Faqat `env_file:` kaliti orqali  
D) Barcha yuqoridagi usullar orqali

---

## 7. Servislar orasida bog'lanish (dependency) qanday belgilanadi?

A) `links:`  
B) `depends_on:`  
C) `requires:`  
D) `connections:`

---

## 8. Port mappingni qanday yozish to'g'ri?

A) `ports: "8080-80"`  
B) `ports: 8080:80`  
C) `ports: - "8080:80"`  
D) `ports: [8080->80]`

---

## 9. Docker Compose faylining versiyasini qanday belgilash kerak?

A) `version: '3.8'`  
B) `compose-version: 3.8`  
C) `docker-version: '3.8'`  
D) `schema: 3.8`

---

## 10. Barcha konteynerlarni to'xtatish va o'chirish uchun qaysi buyruq ishlatiladi?

A) `docker-compose stop && docker-compose rm`  
B) `docker-compose down`  
C) `docker-compose destroy`  
D) `docker-compose remove --all`

---

## 11. Servislarga nom berish uchun qaysi kalit ishlatiladi?

A) `name:`  
B) `service_name:`  
C) `container_name:`  
D) `hostname:`

---

## 12. Docker networkni Compose faylida qanday yaratish mumkin?

A) `networks:` bo'limida e'lon qilish  
B) `docker network create` buyrugi bilan  
C) `network_mode:` kaliti orqali  
D) A va B ikkala usul ham

---

## 13. Servisni qayta yaratish (rebuild) uchun qaysi flag ishlatiladi?

A) `docker-compose up --recreate`  
B) `docker-compose up --build`  
C) `docker-compose up --rebuild`  
D) `docker-compose up --force-build`

---

## 14. Docker Compose faylida shartli restart policy qanday belgilanadi?

A) `restart_policy: always`  
B) `restart: always`  
C) `auto_restart: true`  
D) `always_restart: yes`

---

## 15. Servisning loglarini ko'rish uchun qaysi buyruq ishlatiladi?

A) `docker-compose log`  
B) `docker-compose logs`  
C) `docker-compose show-logs`  
D) `docker-compose print-logs`

---
