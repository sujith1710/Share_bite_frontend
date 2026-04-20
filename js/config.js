// ============================================================
// ShareBite Frontend Configuration
// ============================================================
// Auto-detects local vs production environment.
// - Local dev  → http://127.0.0.1:5000/api
// - Production → https://share-bite-backend.onrender.com/api
// ============================================================

const ShareBite_API_URL = (
    window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://127.0.0.1:5000/api'
        : 'https://share-bite-backend.onrender.com/api'
);
