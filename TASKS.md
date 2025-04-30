# 📝 Twitter Clone: Task List

## 1. Project Setup
- [x] Monorepo structure: `/client` (Next.js), `/server` (Express + TypeScript)
- [x] Initialize both apps and set up TypeScript
- [x] Add `.gitignore`, `README.md`, and environment variable support

---

## 2. Backend (Express + TypeScript)
### 2.1. Core Setup
- [x] Set up Express server with TypeScript
- [x] Enable CORS
- [x] Set up environment variables (`dotenv`)
- [x] Set up logging middleware (e.g., `morgan`)
- [x] Set up error handling middleware

### 2.2. Database
- [ ] Choose and set up a database (e.g., PostgreSQL, MongoDB, or SQLite for dev)
- [ ] Install ORM/ODM (e.g., Prisma, Mongoose, Sequelize)
- [ ] Create database models:
  - [ ] User
  - [ ] Tweet
  - [ ] Follower/Following
  - [ ] Like
  - [ ] Comment/Reply
  - [ ] Notification (optional)

### 2.3. Authentication & Authorization
- [ ] User registration (sign up)
- [ ] User login (sign in)
- [ ] JWT or session-based authentication
- [ ] Password hashing (bcrypt)
- [ ] Protect routes (middleware)

### 2.4. API Endpoints
- [ ] User
  - [ ] Get user profile
  - [ ] Update profile
  - [ ] Follow/unfollow user
  - [ ] Get followers/following
- [ ] Tweet
  - [ ] Create tweet
  - [ ] Get timeline (feed)
  - [ ] Get user tweets
  - [ ] Delete tweet
  - [ ] Like/unlike tweet
  - [ ] Reply to tweet
- [ ] Notifications (optional)
  - [ ] Get notifications
  - [ ] Mark as read

### 2.5. Real-Time Features (Optional)
- [ ] Set up WebSocket (e.g., Socket.io) for real-time notifications

### 2.6. Testing
- [ ] Write unit and integration tests for API endpoints

---

## 3. Frontend (Next.js)
### 3.1. Core Setup
- [x] Create Next.js app
- [ ] Set up TypeScript (if not already)
- [ ] Set up Tailwind CSS or other styling framework
- [ ] Set up environment variables

### 3.2. Authentication
- [ ] Registration and login pages
- [ ] Auth context/provider for user state
- [ ] Protect routes (redirect if not logged in)

### 3.3. Main Features
- [ ] Home/feed page (timeline)
- [ ] Tweet component (display, like, reply, delete)
- [ ] Create tweet modal/form
- [ ] User profile page (with tweets, followers, following)
- [ ] Follow/unfollow button
- [ ] Like/unlike button
- [ ] Reply to tweet
- [ ] Notifications dropdown/page (optional)
- [ ] Edit profile page

### 3.4. UI/UX
- [ ] Responsive design
- [ ] Loading and error states
- [ ] Toast notifications (e.g., for errors, success)
- [ ] Skeleton loaders

### 3.5. API Integration
- [ ] Fetch data from Express API (with authentication)
- [ ] Handle API errors and loading states

### 3.6. Testing
- [ ] Write component and integration tests

---

## 4. DevOps & Deployment
- [ ] Set up Docker for both client and server (optional)
- [ ] Set up CI/CD (GitHub Actions, etc.)
- [ ] Deploy backend (e.g., Render, Heroku, Vercel, AWS)
- [ ] Deploy frontend (e.g., Vercel, Netlify)
- [ ] Set up domain and HTTPS

---

## 5. (Optional) Advanced Features
- [ ] Image upload for tweets and profiles (e.g., AWS S3, Cloudinary)
- [ ] Infinite scroll for timeline
- [ ] Hashtags and search
- [ ] Direct messaging
- [ ] Dark mode
- [ ] Analytics/dashboard for users

---

## 6. Documentation
- [ ] Update README with setup, usage, and API docs
- [ ] Add code comments and docstrings

--- 