## Тестовое задание #3

DEMO: [https://auth-mongo-restapi-feed-news-3.herokuapp.com](https://auth-mongo-restapi-feed-news-3.herokuapp.com)

**Цель**: выяснить уровень знаний full-stack приложения React/Express. Уровень работы с REST API. Понимание взаимодействия MongoDB и Mongoose.

В качестве БД взять Atlas MongoDB подключить к серверу Express.

### Предподготовка

Внешний вид приложения и прочие моменты:

- Логин / Регистрация (`/auth`)
- Посты (`/posts`)
- Отдельный пост (`/post/:id`)
- Создать пост (`/post/create`)
- Профиль (страница с информацией о пользователе, `/profile/:id`)
- Посты авторизованного пользователя (`/profile/posts`)
- Кнопка «войти/выйти»
- AutoLogin из localStorage
- Проверка срока жизни токена и autoLogout при его истечении
- Страница `/profile` недоступна для тех, кто не залогинился.

### Создать .env файл в корне

Со следующим содержанием:

```
MONGO_URI=
JWT=
```

### Бэкэнд

Модель пользователя:

- email
- password
- posts

Модель поста:

- title
- text
- date
- owner

---

### Страница /auth

Валидация на клиенте и на сервере при авторизации и регистрации.

### Профиль /profile/:id

На странице профиля необходимо сделать GET запрос, и получить подробную информацию о пользователе.

Добавить 2 кнопки: Добавить пост и Мои посты.

### Добавить пост /post/create

Валидация полей на клиенте и на сервере.

### Мои посты /profile/posts

Сделать GET запрос и показать только добавленные данным авторизованным пользователем посты.

### Посты /posts

Страница отображает список всех постов, добавленных всеми зарегистрированными пользователями

### Отдельный пост /post/:id

Страница отображает отдельный пост по params.id

### Войти/Выйти

Кнопка просто меняет свое состояние. Если пользователи уже залогинился — «Выйти», если нет — «Войти»

### Требования

- Внимание к деталям.

- Для асинхронных запросов использовать свой хук useHttp и нативный fetch.

- Пока новости / профиль грузятся — показывать прелоадер.

- Пока запрос на логине «в процессе» блокировать повторные запросы (самый легкий способ, это блокировать нажатия кнопки Enter + сделать disabled кнопку отправки формы). Разумеется, чтобы пользователю было понятнее, текст disabled кнопки можно сделать: «Проверяю…» либо прелоадер как на профиле/новостях.

- В форме показывать ошибку + стандартную валидацию email (по типу инпута, либо по регулярному выражению).
