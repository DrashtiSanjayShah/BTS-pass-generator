import loveyourself from "../assets/concerts/loveyourself.png";
import mapofthesoul from "../assets/concerts/mapofthesoul.png";
import ptd from "../assets/concerts/ptd.png";
import speakyourself from "../assets/concerts/speakyourself.png";
import dday from "../assets/concerts/dday.png";
import hopeonthestreet from "../assets/concerts/hots.png";
import golden from "../assets/concerts/golden.png";


const concertData = {
  "Love Yourself Tour": {
    font: "'Playfair Display', serif",
    background: loveyourself,
    shape: "ticket-stub",
    zone: "VIP - Purple Zone",
    hashtag: "#LoveYourself",
    quote: `"Love myself, love yourself." – RM`,
    prefix: "LYT",
  },
  "Map of the Soul: ON:E": {
    font: "'Poppins', sans-serif",
    background: mapofthesoul,
    shape: "rounded",
    zone: "Ego Zone – Connect Room",
    hastag: "MapOfTheSoulONE",
    quote: `"Even if we’re apart, our hearts are connected." – BTS`,
    prefix: "MTS",
  },
  "Permission to Dance on Stage": {
    font: "'Baloo 2', cursive",
    background: ptd,
    zone: "Dance Floor Access",
    hashtag: "#WeDontNeedPermissionToDance",
    quote: `"The only permission you need is your own." – J-Hope`,
    prefix: "PTD",
  },
  "Speak Yourself: The Final": {
    font: "'Cinzel', serif",
    background: speakyourself,
    zone: "Finale Zone - Seoul Dome",
    hashtag: "#SpeakYourselfFinal",
    quote: `"Speak yourself. Find your name and find your voice by speaking yourself" - RM`,
    prefix: "SPY",
  },
  "SUGA | Agust D ‘D-DAY’ Tour": {
    font: "'Orbitron', sans-serif",
    background: dday,
    shape: "sharp",
    zone: "Shadow Zone – Agust Arena",
    hashtag: "#DDayTour",
    quote: `"The scars I got from facing the world are my medals." – Agust D`,
    prefix: "DDAY"
  },
  "J-Hope | Hope On the Street": {
    font: "'Bebas Neue', sans-serif",
    background: hopeonthestreet,
    shape: "ticket-curved",
    zone: "Edgy Beat Crew",
    hashtag: "#HopeOnTheStreet",
    quote: `"I am your hope. You’re my hope. I’m J-Hope!" – J-Hope`,
    prefix: "HOTS",
  },
  "Jungkook | Golden Live": {
    font: "'Josefin Sans', sans-serif",
    background: golden,
    shape: "sharp",
    zone: "Golden Zone - All Access",
    hashtag: "#GoldenLive",
    quote: `"I'm standing on this stage because of you. I won't let go of your hand" - JK`,
    prefix: "JK",
  },
};

export default concertData;
