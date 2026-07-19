# Sistem Manajemen Kos

Aplikasi web untuk manajemen kos dengan fitur autentikasi, manajemen kamar, penyewa, dan pembayaran.

**Author:** HUSNUL MUTMAINNAH - 60900123027

## Fitur

- **Authentication** - Login dan logout untuk pengguna
- **Dashboard** - Overview sistem manajemen
- **Manajemen Kamar** - Tambah, edit, hapus data kamar
- **Manajemen Penyewa** - Tambah, edit, hapus data penyewa
- **Manajemen Pembayaran** - Tracking dan verifikasi pembayaran
- **Responsive Design** - Mobile-friendly interface
- **Data Persistence** - Menggunakan localStorage untuk penyimpanan data

## Tech Stack

- **HTML5** - Markup language
- **CSS3** - Styling
- **JavaScript (Vanilla)** - Client-side logic
- **LocalStorage** - Data persistence

## Prerequisites

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor atau IDE (VS Code recommended)
- Local server (Optional, untuk development)

## Setup

### 1. Clone Repository

```bash
git clone https://github.com/HUSNUL-MUTMAINNAH/TUBES-WEB-MANAJEMEN-WEB.git
cd TUBES-WEB-MANAJEMEN-WEB
```

### 2. Run Application

Buka file `index.html` langsung di browser:

```
Double-click index.html
```

Atau gunakan local server:

```bash
# Menggunakan Python 3
python -m http.server 8000

# Menggunakan Python 2
python -m SimpleHTTPServer 8000

# Menggunakan Node.js (http-server)
npx http-server
```

Kemudian akses di browser:
```
http://localhost:8000
```

## Project Structure

```
TUBES-WEB-MANAJEMEN-WEB/
├── index.html           # Landing page
├── auth.js              # Authentication logic
├── auth.js              # Auth controller
├── dashboard.html       # Dashboard page
├── kamar.html           # Room management page
├── kamar.js             # Room controller
├── penyewa.html         # Tenant management page
├── penyewa.js           # Tenant controller
├── pembayaran.html      # Payment management page
├── pembayaran.js        # Payment controller
├── style.css            # Global styles
└── README.md
```

## File Descriptions

### HTML Files

- **index.html** - Entry point aplikasi, halaman login/register
- **dashboard.html** - Dashboard dengan statistik dan overview
- **kamar.html** - Halaman untuk manajemen data kamar
- **penyewa.html** - Halaman untuk manajemen data penyewa
- **pembayaran.html** - Halaman untuk manajemen pembayaran

### JavaScript Files

- **auth.js** - Handle login, register, logout, dan session management
- **kamar.js** - CRUD operations untuk kamar
- **penyewa.js** - CRUD operations untuk penyewa
- **pembayaran.js** - CRUD operations untuk pembayaran

### CSS File

- **style.css** - Global styling untuk semua halaman

## Fitur Detail

### Authentication

1. **Login**
   - Input username dan password
   - Data tersimpan di localStorage
   - Session management

2. **Register**
   - Create user baru
   - Data tersimpan di localStorage
   - Auto-login setelah register

3. **Logout**
   - Clear session
   - Redirect ke login page

### Dashboard

Menampilkan:
- Total kamar
- Total penyewa
- Total pembayaran
- Recent activities

### Kamar Management

Features:
- Lihat daftar kamar
- Tambah kamar baru
- Edit data kamar
- Hapus kamar
- Search dan filter

### Penyewa Management

Features:
- Lihat daftar penyewa
- Tambah penyewa baru
- Edit data penyewa
- Hapus penyewa
- Assign kamar ke penyewa

### Pembayaran Management

Features:
- Lihat daftar pembayaran
- Tambah pembayaran baru
- Verifikasi pembayaran
- Edit status pembayaran
- Laporan pembayaran

## Data Storage

Data disimpan menggunakan browser's localStorage:

```javascript
// User data
localStorage.setItem('users', JSON.stringify(users));

// Room data
localStorage.setItem('kamar', JSON.stringify(kamar));

// Tenant data
localStorage.setItem('penyewa', JSON.stringify(penyewa));

// Payment data
localStorage.setItem('pembayaran', JSON.stringify(pembayaran));
```

**Note:** Data akan hilang jika browser cache dihapus.

## Usage

### Login

1. Buka aplikasi di browser
2. Input username dan password
3. Klik "Login"

### Tambah Data Kamar

1. Login ke aplikasi
2. Go to Kamar menu
3. Klik "Tambah Kamar"
4. Isi form data kamar
5. Klik Submit

### Lihat Dashboard

1. Setelah login, dashboard akan menampilkan overview
2. Lihat statistik dan recent activities

### Logout

1. Klik tombol "Logout" di navbar
2. Session akan dihapus
3. Redirect ke login page

## Development

### Code Style

- Use camelCase untuk variabel dan fungsi
- Use UPPER_CASE untuk constants
- Add comments untuk logika kompleks

### Adding New Features

1. Update HTML file dengan UI baru
2. Create atau update JS file untuk logic
3. Add styling di style.css
4. Test di browser

### Browser DevTools

Gunakan browser DevTools untuk debugging:
- Console tab untuk error messages
- Storage tab untuk lihat localStorage data
- Network tab untuk monitor requests

## Known Limitations

- Data hanya tersimpan di browser (tidak persisten antar device)
- Tidak ada backend validation
- Tidak ada authentication yang aman (password disimpan plain text di localStorage)
- Limited offline capabilities

## Future Improvements

- Backend API integration
- Database for data persistence
- Secure authentication dengan JWT
- User management dengan roles
- Export data ke PDF/Excel
- Dark mode support
- Progressive Web App (PWA) capabilities
- Real-time notifications

## Deployment

### Deploy ke Vercel

1. Push repository ke GitHub
2. Connect ke Vercel
3. Set build command: (tidak perlu, static site)
4. Deploy!

### Deploy ke Netlify

1. Push repository ke GitHub
2. Connect ke Netlify
3. Automatic deployment on push

### Deploy ke GitHub Pages

1. Go to repository settings
2. Enable GitHub Pages
3. Select branch untuk deploy
4. Access di `https://username.github.io/repo-name`

## Security Notes

**⚠️ WARNING:** Aplikasi ini adalah prototype/educational purpose saja.

Jangan gunakan untuk production karena:
- Password disimpan plain text
- Tidak ada server-side validation
- Tidak ada encryption
- Tidak ada CSRF protection

Untuk production, gunakan:
- Backend dengan proper authentication
- Database yang aman
- HTTPS
- Input validation dan sanitization
- Security best practices

## Testing

### Manual Testing

1. Test login dengan username/password yang berbeda
2. Test CRUD operations untuk setiap menu
3. Test data persistence (reload page, data harus tetap ada)
4. Test logout dan re-login
5. Test di berbagai browser

### Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- IE (tidak direkomendasikan)

## Troubleshooting

### Page tidak muncul dengan benar
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (Ctrl+R)
- Check browser console untuk errors

### Data tidak tersimpan
- Check localStorage di DevTools Storage tab
- Verify browser tidak dalam private/incognito mode
- Check browser storage quota

### Login tidak bekerja
- Verify username/password benar
- Check localStorage untuk user data
- Clear localStorage dan re-register

## Support

Untuk pertanyaan atau issues, buat issue di GitHub repository atau hubungi author.

## License

MIT

---

**Last Updated:** 2026
**Author:** HUSNUL MUTMAINNAH - 60900123027
