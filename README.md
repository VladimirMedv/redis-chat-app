# Real-Time Chat Application  

![Chat App Preview](https://i.ibb.co/rRcCfbK0/chat.png)  

## 💬 О проекте  

Современное веб-приложение для обмена сообщениями в реальном времени с аутентификацией через Google. Приложение демонстрирует работу с WebSockets, управление состоянием и оптимизированные запросы к API.  

**Примечание**: В связи с удалением базы данных, доступен только исходный код без рабочего бэкенда.  

## 🚀 Технологический стек  

### Frontend  
- **Framework**: Next.js  
- **UI Library**: React  
- **Styling**: Tailwind CSS  
- **Animations**: Framer Motion  
- **State Management**: Zustand  

### Backend & Services  
- **Authentication**: Kinde Auth  
- **Realtime**: Pusher  
- **Database**: Redis  
- **Image Storage**: Cloudinary  
- **Data Fetching**: TanStack Query  

## 🔥 Ключевые особенности  

- ⚡ Мгновенный обмен сообщениями через WebSockets  
- 🔐 Безопасная аутентификация через Google (Kinde)  
- 🖼️ Загрузка изображений через Cloudinary  
- ✨ Плавные анимации интерфейса (Framer Motion)  
- 🧩 Оптимизированное управление состоянием (Zustand)  
- 🔄 Фоновое обновление данных (React Query)  
- 📱 Полностью адаптивный интерфейс  

## 🛠️ Установка и запуск  

1. Клонируйте репозиторий:  
```bash
git clone https://github.com/VladimirMedv/redis-chat-app.git
cd redis-chat-app
```

2. Установите зависимости:  
```bash
npm install
# или
yarn install
```

3. Настройте переменные окружения (`.env.local`):  
```env
NEXT_PUBLIC_PUSHER_APP_ID=your_pusher_id
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_SECRET=your_pusher_secret
NEXT_PUBLIC_PUSHER_CLUSTER=your_cluster
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
KINDE_CLIENT_ID=your_kinde_id
KINDE_CLIENT_SECRET=your_kinde_secret
KINDE_ISSUER_URL=your_kinde_url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000
```

4. Запустите приложение:  
```bash
npm run dev
# или
yarn dev
```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.  

## 📌 Особенности реализации  

- **Pusher Channels** для реального времени  
- **Kinde Auth** для OAuth с Google  
- **Redis** как высокопроизводительное хранилище  
- **Cloudinary** для хранения медиафайлов  
- **Zustand** для глобального состояния  
- **TanStack Query** для кэширования данных  

## 🛠 Скрипты  

- `dev`: Запуск development сервера  
- `build`: Сборка production версии  
- `start`: Запуск production сервера  
- `lint`: Проверка кода ESLint  
- `type-check`: Проверка TypeScript типов  

## 🔗 Ссылки  

- [GitHub репозиторий](https://github.com/VladimirMedv/redis-chat-app.git)  
- [Pusher Documentation](https://pusher.com/docs)  
- [Kinde Auth](https://kinde.com/docs)  
- [TanStack Query](https://tanstack.com/query/latest)  
- [Zustand](https://zustand-demo.pmnd.rs/)
