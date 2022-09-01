import "./styles.css";
import React, { useState } from "react";

var musicDataBase = {
  Soothing: [
    {
      name: "Bhage Re Mann",
      movie: "Chameli",
      artist: "Sunidhi Chauhan",
      duration: "5 min 34 sec",
      appleMusic:
        "https://music.apple.com/us/album/bhaage-re-mann/1139269910?i=1139269923",
      spotifyMusic:
        "https://open.spotify.com/track/2RktkeigsgvhuRNQl0ioGS?si=4b93311a69d44f93",
      jioSaavn: "https://www.jiosaavn.com/song/bhage-re-mann/GgoNXCtAQEU",
      youtube: "https://www.youtube.com/watch?v=dCosqNGw2ck"
    },
    {
      name: "Rubaru",
      movie: " Khuda Haafiz: Chapter 2 – Agni Pariksha",
      artist: "Vishal Mishra, Asees Kaur",
      duration: "4 min 21 sec",
      appleMusic:
        "https://music.apple.com/us/album/rubaru/1632169117?i=1632169119",
      spotifyMusic:
        "https://open.spotify.com/track/5sPMChpdGoMyGmZCma8Sje?si=8c66eb706b7b4116",
      jioSaavn: "https://www.jiosaavn.com/song/rubaru/ChFGAiBUWwU",
      youtube: "https://www.youtube.com/watch?v=ezBXkiud2ns"
    },
    {
      name: "Laagi Na Choote",
      movie: "A Gentleman",
      artist: "Arijit Singh, Shreya Ghoshal",
      duration: "3 min 30 sec",
      appleMusic:
        "https://music.apple.com/us/album/laagi-na-choote/1272689209?i=1272689218",
      spotifyMusic:
        "https://open.spotify.com/track/4x1ytzl1fpeWpmuRZHGnDu?si=71123e9e938f41ec",
      jioSaavn: "https://www.jiosaavn.com/song/laagi-na-choote/IyJeYxNxDwc",
      youtube: "https://www.youtube.com/watch?v=6I1fIHwO9nQ"
    },
    {
      name: "Kahin To",
      movie: "Jaane Tu Ya Jaane Na",
      artist: "Rashid Ali, Vasundhara Das",
      duration: "5 min 03 sec",
      appleMusic:
        "https://music.apple.com/us/album/kahin-to/1121136760?i=1121136901",
      spotifyMusic:
        "https://open.spotify.com/track/3E424W0IJS3ypZ4YOxE0Jn?si=3b72ef0f97d5411b",
      jioSaavn: "https://www.jiosaavn.com/song/kahin-to/KgdGaxgDAH8",
      youtube: "https://www.youtube.com/watch?v=hCsY8T0uBGA"
    }
  ],

  Love: [
    {
      name: "Saware",
      movie: "Phantom",
      artist: "Arijit Singh",
      duration: "5 min 21 sec",
      appleMusic:
        "https://music.apple.com/us/album/saware/1071880140?i=1071880666",
      spotifyMusic:
        "https://open.spotify.com/track/1juJ3mwsFerctbngtK42G4?si=e3077f557d67418f",
      jioSaavn: "https://www.jiosaavn.com/song/saware/JisOfytCdGc",
      youtube: "https://www.youtube.com/watch?v=RguA0jevrAc"
    },
    {
      name: "Kesariya",
      movie: "Brahmastra",
      artist: "Arijit Singh",
      duration: "4 min 28 sec",
      appleMusic:
        "https://music.apple.com/us/album/kesariya-from-brahmastra/1635013814?i=1635014240",
      spotifyMusic:
        "https://open.spotify.com/track/6VBhH7CyP56BXjp8VsDFPZ?si=733589aa9c7f49d2",
      jioSaavn:
        "https://www.jiosaavn.com/song/kesariya-from-brahmastra/NQotZhVbc0A",
      youtube: "https://www.youtube.com/watch?v=BddP6PYo2gs"
    },
    {
      name: "Sajde",
      movie: "Khatta Meetha",
      artist: "K.K., Sunidhi Chauhan",
      duration: "5 min 05 sec",
      appleMusic:
        "https://music.apple.com/us/album/sajde/1123336043?i=1123336063",
      spotifyMusic:
        "https://open.spotify.com/track/4N66qcycDiFLJGjnXiKbKX?si=97251b7721804027",
      jioSaavn: "https://www.jiosaavn.com/song/sajde/PFkzZB9WGmU",
      youtube: "https://www.youtube.com/watch?v=X6UXKpwxVzc"
    },
    {
      name: "Thode Kam Ajnabi(Reprise Version)",
      movie: "Pagglait",
      artist: "Himani Kapoor, Arijit Singh",
      duration: "5 min 01 sec",
      appleMusic:
        "https://music.apple.com/us/album/thode-kam-ajnabi-reprise-version/1558064223?i=1558065418",
      spotifyMusic:
        "https://open.spotify.com/track/59daovQqk9HTyn0itgWInN?si=725ee2343328440d",
      jioSaavn:
        "https://www.jiosaavn.com/song/thode-kam-ajnabi-reprise-version/LwJSSCVvZUI",
      youtube: "https://www.youtube.com/watch?v=jTuMsX43Ubs"
    }
  ],

  Indie: [
    {
      name: "Rangi Saari",
      movie: "Rangi Saari",
      artist: "Kavita Seth, Kanishk Seth",
      duration: "3 min 34 sec",
      appleMusic:
        "https://music.apple.com/us/album/rangi-saari/1507981034?i=1507981039",
      spotifyMusic:
        "https://open.spotify.com/track/3F2BSn4ayglzMwquBRHZq6?si=fb7b7ccad4624493",
      jioSaavn: "https://www.jiosaavn.com/song/rangi-saari/OA8tARJAZHQ",
      youtube: "https://www.youtube.com/watch?v=jY8mAWdQFOA"
    },
    {
      name: "Dil Mere",
      movie: "Aalas Ka Pedh",
      artist: "Raman Negi(The Local Train)",
      duration: "3 min 31 sec",
      appleMusic:
        "https://music.apple.com/us/album/dil-mere/1039334640?i=1039336328",
      spotifyMusic:
        "https://open.spotify.com/track/6ZmtxXUXRVjxOhugKkmerC?si=63d3d9189ed74e0c",
      jioSaavn: "https://www.jiosaavn.com/song/dil-mere/N1wPRQBmZkk",
      youtube: "https://www.youtube.com/watch?v=qLCLvzTGFVM"
    },
    {
      name: "Le Chal",
      movie: "Le Chal",
      artist: "Himonshu Parikh",
      duration: "3 min 16 sec",
      appleMusic:
        "https://music.apple.com/us/album/le-chal/1630793453?i=1630793456",
      spotifyMusic:
        "https://open.spotify.com/track/7dNQpEI1bOetj5XZqpKU5M?si=fab74c3283654746",
      jioSaavn: "https://www.jiosaavn.com/song/le-chal/ASdffS4IVGc",
      youtube: "https://www.youtube.com/watch?v=VZPKZdDjq-o"
    },
    {
      name: "Aziyat 2.0",
      movie: "Pratsofficial",
      artist: "Pratyush Dhiman",
      duration: "3 min 14 sec",
      appleMusic:
        "https://music.apple.com/us/album/aziyat-2-0-reprise-version/1579672818?i=1579672827",
      spotifyMusic:
        "https://open.spotify.com/track/3fwyItGexa88kR8j76dIqv?si=6501c33efbfa43db",
      jioSaavn:
        "https://www.jiosaavn.com/song/aziyat-2.0-reprise-version/Bho7RxV5UXk",
      youtube: "https://www.youtube.com/watch?v=nPjEupgrR8I"
    }
  ],

  Evergreen: [
    {
      name: "Kahin Door Jab Din Dhal Jaye",
      movie: "Anand",
      artist: "Mukesh",
      duration: "5 min 38 sec",
      appleMusic:
        "https://music.apple.com/us/album/kahin-door-jab-din-dhal-jaye/1340799450?i=1340799830",
      spotifyMusic:
        "https://open.spotify.com/track/2P7i3LoqblIGiNk1Jmbc30?si=00ef607249244dc9",
      jioSaavn:
        "https://www.jiosaavn.com/song/kahin-door-jab-din-dhal-jaye/NwAPUAdvR10",
      youtube: "https://www.youtube.com/watch?v=wjYK67cgNKc"
    },
    {
      name: "Lag Jaa Gale",
      movie: "Woh Kaun Thi?",
      artist: "Lata Mangeshkar",
      duration: "4 min 39 sec",
      appleMusic:
        "https://music.apple.com/us/album/lag-ja-gale-se-phir/1338740978?i=1338741073",
      spotifyMusic:
        "https://open.spotify.com/track/5Y5c5bJK0O7KJDDAYKkppH?si=b6d4590bd9be4488",
      jioSaavn: "https://www.jiosaavn.com/song/lag-ja-gale-se-phir/MzgMBAxfXFI",
      youtube: "https://www.youtube.com/watch?v=TFr6G5zveS8"
    },
    {
      name: "Pyar Diwana Hota Hai",
      movie: "Kati Patang",
      artist: "Kishore Kumar",
      duration: "4 min 45 sec",
      appleMusic:
        "https://music.apple.com/us/album/pyar-diwana-hota-hai/1347318440?i=1347320069",
      spotifyMusic:
        "https://open.spotify.com/track/0Yu6DMaU2w0777Ek5XQNyI?si=033d72f7d6f74b85",
      jioSaavn:
        "https://www.jiosaavn.com/song/pyar-diwana-hota-hai/MwYvfhEIGmA",
      youtube: "https://www.youtube.com/watch?v=wtfRQ76-I7k"
    },
    {
      name: "Ek Pyar Ka Nagma Hai",
      movie: "Shor",
      artist: "Lata Mangeshkar",
      duration: "5 min 56 sec",
      appleMusic:
        "https://music.apple.com/in/album/ek-pyar-ka-naghma-hai-happy/1274614031?i=1274614038",
      spotifyMusic:
        "https://open.spotify.com/track/1YLUarkcFoa880CxRs6ZaH?si=89fa6a3b31904833",
      jioSaavn:
        "https://www.jiosaavn.com/song/ek-pyar-ka-naghma-hai---happy/SR9eQwFGQlI",
      youtube: "https://www.youtube.com/watch?v=ST_WC13rNJo"
    }
  ]
};

var songsCollection = Object.keys(musicDataBase);

export default function App() {
  var [musicType, setMusicType] = useState("Soothing");

  function onClickHandler(musicType) {
    setMusicType(musicType);
  }

  return (
    <div className="App">
      <h1
        className="heading"
        style={{ backgroundColor: "#0f172a", padding: "1rem", color: "white" }}
      >
        <span style={{ color: "#bef264" }}>𝄞</span> Fine
        <span
          style={{ color: "yellow", fontSize: "3.25rem", margin: "0 0.25rem" }}
        >
          ♪
        </span>
        Music <span style={{ color: "#bef264" }}>𝄞</span>
      </h1>

      <h3 className="description" style={{ margin: "1.5rem", color: "white" }}>
        Music has no end. Yet here are a few recommended songs to go through a
        good time listening to them
      </h3>

      <div className="button">
        {songsCollection.map(function (music) {
          return (
            <span key={music}>
              <button
                id="musicBtn"
                style={{
                  padding: "1% 4%",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  display: "inline-block",
                  border: "none",
                  margin: "1rem",
                  // backgroundColor: "#4c1d95",
                  backgroundColor: "#374151",
                  color: "white",
                  borderRadius: "0.45rem",
                  boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
                }}
                onClick={() => onClickHandler(music)}
              >
                {music}
              </button>
            </span>
          );
        })}
        <hr></hr>

        <div>
          <ul>
            {musicDataBase[musicType].map((songName) => (
              <li
                key={songName.name}
                style={{
                  listStyle: "none",
                  border: "0.5px #f3f3f3 solid",
                  padding: "1rem",
                  width: "600px",
                  borderRadius: "1rem",
                  backgroundColor: "#f4f4f4",
                  margin: "2rem auto",
                  boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15"
                }}
              >
                <div style={{ padding: "0.5rem" }}>
                  <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                    {songName.name}
                  </span>
                </div>
                <div style={{ fontWeight: "300" }}>
                  <div>Movie/Album: {songName.movie}</div>
                  <div>Artist: {songName.artist}</div>
                </div>
                <hr></hr>
                <div style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>
                  {songName.duration}
                </div>
                <div>
                  Listen on-
                  <a
                    className="music-links apple"
                    href={songName.appleMusic}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Apple Music"}
                  </a>
                  <a
                    className="music-links spotify"
                    href={songName.spotifyMusic}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Spotify"}
                  </a>
                  <a
                    className="music-links saavn"
                    href={songName.jioSaavn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Jio Saavn"}
                  </a>
                  <a
                    className="music-links youtube"
                    href={songName.youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Youtube"}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
