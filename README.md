# 👤 User Management System – React.js

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" />
</p>

---

## ✨ Project Overview

A simple and clean **User Management System** built with **React.js** that supports authentication, role-based access, and full CRUD operations using a fake REST API (**DummyJSON**).

---

## 🚀 Features

✅ Login with external API  
✅ Role-based access (**Admin / Normal User**)  
✅ Protected routes + Logout  
✅ View users list  
✅ View user profile  
✅ Admin can **Add / Edit / Delete** users  
✅ One reusable form for **Add / Edit / Profile**  
✅ Custom `useToggle` hook (sidebar & password visibility)  
✅ Global state with **React Context**  
✅ Custom form errors with **react-hook-form**  
✅ Delete confirmation using **SweetAlert2**

---

## 🔐 Authentication & Roles

- Uses: `https://dummyjson.com/auth/login`
- Only users from DummyJSON can log in

### 🛡 Permissions

| Role        | Permissions                            |
|------------|------------------------------------------|
| **Admin**   | View, Add, Edit, Delete users             |
| **User**    | View users list & own profile only        |

---
🛠️ Tech Stack

⚛️ React.js

🔀 React Router DOM

📨 Axios

📝 React Hook Form

📚 React Pro Sidebar

🎨 Bootstrap

⭐ Font Awesome

🔐 jwt-decode

🔔 React Toastify

✅ SweetAlert2

---

## 🌐 API Endpoints

```bash
GET    https://dummyjson.com/users
POST   https://dummyjson.com/users/add
PUT    https://dummyjson.com/users/:id
PATCH  https://dummyjson.com/users/:id
DELETE https://dummyjson.com/users/:id
```

________________________________________________________________________________________________________

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
