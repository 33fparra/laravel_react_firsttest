<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
</p>

# Aeela - Sistema de Gestión Empresarial

## ¿De qué trata este proyecto?

Este es un sistema para gestionar empresas. Imagina una tienda o negocio:

- ** controlas qué productos tienes** (inventario)
- **controlas las ventas** (punto de venta)
- **guardas información de tus clientes**
- **puedes ver reportes** de cuánto vendes

Todo eso es **Aeela**.

---

## ¿Cómo funciona? (Explicado fácil)

El sistema tiene dos partes que trabajan juntas:

### 🖥️ Frontend (Lo que ves en pantalla)

Está en la carpeta: `resources/js/`

Aquí está el código de las pantallas que el usuario ve:

- `Login.jsx` - pantalla para iniciar sesión
- `Register.jsx` - pantalla para crear cuenta
- `Welcome.jsx` - la página principal
- `Dashboard.jsx` - el panel después de entrar

Quando abres una página, el navegador descargga estos archivos y los muestra.

### ⚙️ Backend (Lo que no ves, pero hace todo el trabajo)

Está en la carpeta: `app/`

Aquí está la lógica:

- `app/Http/Controllers/Auth/` - controla el login, registro, etc.
- `app/Models/User.php` - define cómo son los usuarios en la base de datos

### 🗄️ Base de datos (Donde se guarda todo)

La base de datos actual es **MySQL** (la de XAMPP).

Las tablas están en: `database/migrations/`

Tablas importantes:

- `users` - usuarios del sistema (nombre, email, contraseña)
- `sessions` - para mantener la sesión iniciada
- `password_reset_tokens` - para recuperar contraseña

---

## ¿Qué necesitas para ponerlo a correr?

### Programas necesarios:

1. **PHP** - ya viene con XAMPP
2. **Composer** - gestor de dependencias de PHP
3. **Node.js** - para el frontend
4. **npm** - viene con Node.js
5. **XAMPP** - para MySQL (la base de datos)

### Langkah-langkah menjalankan:

```bash
# 1. Instalar dependencias de PHP
composer install

# 2. Instalar dependencias de frontend
npm install

# 3. Copiar archivo de configuración
cp .env.example .env

# 4. Generar clave de la app
php artisan key:generate

# 5. Crear la base de datos (en MySQL de XAMPP)
# Ve a localhost/phpmyadmin y crea una base de datos llamada: bd_larabel_local

# 6. Crear las tablas
php artisan migrate

# 7. Levantar el servidor (dos Terminales)

# Terminal 1 - Backend
php artisan serve

# Terminal 2 - Frontend
npm run dev
```

### Después de ejecutar:

- Backend: **http://localhost:8000**
- Frontend: **http://localhost:5173**

Generalmente vas a **http://localhost:8000** y ahí ves la página principal.

---

## Sobre la base de datos

**Ahora mismo usa:** MySQL (de XAMPP)

**Nombre de la base:** `bd_larabel_local`

**Usuario:** `root`
**Contraseña:** (vacío)

**Próximamente:** Se changeará a SQL Developer (Oracle)

El archivo de configuración está en `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bd_larabel_local
DB_USERNAME=root
DB_PASSWORD=
```

---

## Tecnologías usadas

- **Laravel 12** - Framework de PHP para el backend
- **React** - Librería de JavaScript para el frontend
- **Inertia.js** - Pegamento entre Laravel y React (hace que se comuniquen)
- **Vite** - ferramenta para construir el frontend
- **Tailwind CSS** - estilos modernos
- **MySQL** - base de datos

---

## Estructura de carpetas importante

```
Laravel/
├── app/                    # Backend (lógica de PHP)
│   └── Http/Controllers/Auth/  # Controladores de autenticación
├── resources/js/           # Frontend (React)
│   ├── Pages/             # Pantallas (Login, Register, etc.)
│   ├── Layouts/           # Diseño base
│   └── Components/       # Componentes pequeños
├── routes/                # Rutas del sistema
├── database/
│   └── migrations/        # Tablas de la base de datos
├── public/                # Archivos públicos (logos, etc.)
└── .env                  # configuración (NO se sube a GitHub)
```

---

## Información importante

**NO subir a GitHub:**

- `node_modules/` - dependencias de npm
- `vendor/` - dependencias de Composer
- `.env` - tiene contraseñas
- `public/build/` - se genera con `npm run build`

El archivo `.gitignore` ya-excluye estos.

---

## ¿Tienes dudas?

Si algo no funciona, revisa:

1. ¿XAMPP está corriendo? (activa Apache y MySQL)
2. ¿La base de datos `bd_larabel_local` existe?
3. ¿Ejecutaste `php artisan migrate`?
4. ¿Tienes npm instalado? (`npm -v`)

¡Listo! 🎉
