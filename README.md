# 🎫 BTS Concert Pass Generator

A React-based web application that allows users to generate a custom BTS concert pass with their name, country, bias, and concert choice. The pass includes a dynamic seat number, a unique ticket number, and a scannable QR code containing a thank-you message and a surprise note.

---

## 📦 Dependencies

Make sure you have Node.js and Yarn installed.

Install all required packages with:

```bash
yarn add react react-dom
yarn add html2canvas
yarn add qrcode.react
```

### Development Dependencies (via Vite):

```bash
yarn create vite
# or for existing projects
yarn add vite
```

---

## 🚀 Features

- Dynamic form for name, country, concert, and BTS bias
- Concert-specific background themes, fonts, and quotes
- Generates a ticket with:
  - Seat number based on bias
  - Randomized ticket number
  - Country flag alongside South Korea
- QR code with ticket data + thank-you & surprise message
- Pass download functionality using `html2canvas`
- Fully responsive layout (mobile & desktop)

---

## 🧩 Project Structure

```
src/
├── assets/                # Background images & assets
├── utils/
│   └── concerts.js        # Concert-specific configurations
├── App.jsx                # Main logic & UI
├── App.css                # Styling
└── main.jsx               # Entry point
```

---

## 📋 Usage

### Run locally:

```bash
yarn dev
```

### Build for production:

```bash
yarn build
```


---

## 🌍 Deployment

This project is deployed via [Netlify](https://bts-concert-ticket.netlify.app).

### Steps:

1. Push your project to GitHub
2. Connect Netlify to your repository
3. Set build command: `yarn build`
4. Set publish directory: `dist/`

---

## 👩‍💻 Author

**Drashti Shah**  
LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/drashtisanjayshah/ )  
Portfolio: [Your Portfolio](https://portfolio-c4508.web.app )  


