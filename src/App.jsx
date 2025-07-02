import React, { useState, useRef, useMemo, useEffect } from "react";
import concertData from "./utils/concerts";
import html2canvas from "html2canvas";
import QRCode from "qrcode";
import "./App.css";

// Country mapping
const countryCodes = {
  India: "IN",
  USA: "US",
  US: "US",
  "United States": "US",
  "South Korea": "KR",
  Japan: "JP",
  UK: "GB",
  Germany: "DE",
  France: "FR",
  Australia: "AU",
  Canada: "CA",
  Brazil: "BR",
};

const getCountryCode = (input) => {
  if (!input) return "KR";
  const formatted = input.trim().toLowerCase();
  const found = Object.entries(countryCodes).find(
    ([key]) => key.toLowerCase() === formatted
  );
  return found ? found[1] : "KR";
};

function App() {
  const [name, setName] = useState("");
  const [concert, setConcert] = useState("Love Yourself Tour");
  const [country, setCountry] = useState("");
  const [bias, setBias] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [qrUrl, setQrUrl] = useState("");

  const ticketRef = useRef(null);
  const selectedConcert = concertData[concert];

  const ticketNumber = useMemo(() => {
    const prefix = selectedConcert?.prefix || "BTS";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${randomNum}`;
  }, [concert]);

  const getSeatNumber = () => {
    if (!bias || bias.toLowerCase() === "ot7") {
      return `OT7-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    const birthdates = {
      rm: "1209",
      jin: "1204",
      suga: "0309",
      "j-hope": "1802",
      jimin: "1310",
      v: "3012",
      jungkook: "0109",
    };

    const formattedBias = bias.toLowerCase();
    const birthdate = birthdates[formattedBias] || "0000";
    const initials = formattedBias
      .split("-")
      .map((part) => part[0].toUpperCase())
      .join("");

    return `${initials}-${birthdate}`;
  };

  const seatNumber = useMemo(() => getSeatNumber(), [bias]);

  const qrContent = `
  🎉 Surprise: You're loved more than you'll ever know.
🎫 BTS Concert Pass
-----------------------
Name: ${name || "Your Name"}
Country: ${country || "N/A"}
Concert: ${concert}
Seat No: ${seatNumber}
Ticket No: ${ticketNumber}

Follow me on the socials @thatonegirlinbtech 
💜 Thank you ARMY!
`;

  useEffect(() => {
    if (showPass) {
      QRCode.toDataURL(qrContent)
        .then((url) => setQrUrl(url))
        .catch((err) => console.error(err));
    }
  }, [qrContent, showPass]);

  const downloadPass = () => {
    const ticketElement = document.querySelector(".ticket");
    const originalTransform = ticketElement.style.transform;
    const originalWidth = ticketElement.style.width;
    const originalHeight = ticketElement.style.height;

    ticketElement.style.transform = "none";
    ticketElement.style.width = "72rem";
    ticketElement.style.height = "360px";

    html2canvas(ticketElement, {
      scale: window.devicePixelRatio || 2,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "bts_concert_pass.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      ticketElement.style.transform = originalTransform;
      ticketElement.style.width = originalWidth;
      ticketElement.style.height = originalHeight;
    });
  };

  return (
    <div className={`app-container ${!showPass ? "form-bg" : ""}`}>
      {!showPass && (
        <div className="form-container">
          <h2>💜 Generate your BTS Concert Pass</h2>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Your Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <select value={bias} onChange={(e) => setBias(e.target.value)}>
            <option value="">Select Your Bias</option>
            <option value="rm">RM</option>
            <option value="jin">Jin</option>
            <option value="suga">SUGA</option>
            <option value="j-hope">J-Hope</option>
            <option value="jimin">Jimin</option>
            <option value="v">V</option>
            <option value="jungkook">Jungkook</option>
            <option value="ot7">OT7</option>
          </select>

          <select value={concert} onChange={(e) => setConcert(e.target.value)}>
            {Object.keys(concertData).map((concertName) => (
              <option key={concertName} value={concertName}>
                {concertName}
              </option>
            ))}
          </select>

          <button onClick={() => setShowPass(true)}>Generate My Pass</button>
        </div>
      )}

      {showPass && (
        <div className="ticket-wrapper">
          <div
            ref={ticketRef}
            className={`ticket ${selectedConcert.shape} ticket-${concert
              .split(" ")[0]
              .toLowerCase()}`}
            style={{
              backgroundImage: `url(${selectedConcert.background})`,
              fontFamily: selectedConcert.font,
            }}
          >
            <div className="ticket-main">
              {selectedConcert.quote && (
                <p style={{ textAlign: "center" }}>{selectedConcert.quote}</p>
              )}
              <h1 style={{ margin: "1rem" }}>{concert}</h1>
              {selectedConcert.hashtag && (
                <p
                  className="hashtag"
                  style={{ textAlign: "center", fontSize: "1rem" }}
                >
                  {selectedConcert.hashtag}
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "1rem",
                }}
              >
                <p style={{ color: "white", fontSize: "1.25rem" }}>
                  Ticket No: {ticketNumber}
                </p>
                <p>Seat No: {seatNumber}</p>
              </div>
              <p style={{ fontSize: "2.25rem" }}>{name || "Your Name"}</p>
              {selectedConcert.zone && (
                <p
                  className="zone"
                  style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}
                >
                  {selectedConcert.zone}
                </p>
              )}
            </div>

            <div className="ticket-strip">
              <p>{name || "Your Name"}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={`https://flagcdn.com/48x36/${getCountryCode(
                    country
                  ).toLowerCase()}.png`}
                  alt="User Country"
                  style={{ height: "24px", width: "36px", objectFit: "cover" }}
                />
                <span style={{ fontWeight: "bold" }}>—</span>
                <img
                  src="https://flagcdn.com/48x36/kr.png"
                  alt="South Korea"
                  style={{ height: "24px", width: "36px", objectFit: "cover" }}
                />
              </div>
              <p>Seat No: {seatNumber}</p>
              {qrUrl && (
                <img
                  src={qrUrl}
                  alt="QR Code"
                  style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "6px",
                    marginTop: "-1rem",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {showPass && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button onClick={downloadPass} className="download-btn">
            Download My Pass
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
