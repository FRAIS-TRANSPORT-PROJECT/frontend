import React, { useRef, useState, useEffect } from "react";
import Axios from "axios";
import "../styles/demande.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Demande = () => {
  const mystyle = {
    height: "100vh",
    width: "100%",
    display: "grid",
    gridTemplateRows: "49px 1fr  40px",
    margin: "0",
    backgroundColor: "skyblue",
  };
//   const myImage = {
//     textAlign: "center",
//     marginLeft: "850px",
//     height: "150px",
//     marginTop: "40px",
//   };
  const headi = {
    textAlign: "center",
  };
  const customers = {
    fontFamily: "Arial, Helvetica, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
  };
  const td = {
    border: "1px solid #ddd",
    padding: "8px",
    backgroundColor: "#f2f2f2",
  };
  const th = {
    border: "1px solid #ddd",
    padding: "8px",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "left",
    backgroundColor: "#04AA6D",
    color: "white",
  };
//   const logo = require("./demande.png");
  const containerStyle = {
    position: "static",
  };
  // const [isHovering, setIsHovering] = useState(false);
  const [commande, setCommande] = useState([]);

  const handledelete = async (event, id) => {
    event.preventDefault();
    try {
      await Axios.delete("http://localhost:8010/api/v1/demandes/" + id);
      getcommande()
    } catch (err) {
      console.log(err);
    }
  };
  async function getcommande() {
    try {
      const getcommande = await Axios.get(
        "http://localhost:8010/api/v1/demandes"
      );
      setCommande(getcommande.data._embedded.demandes);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getcommande();
  }, []);

  return (
    <>
      <Navbar />
      <div containerStyle={containerStyle}>
        {/* <img src={logo} style={myImage} /> */}

        <h1 style={headi}>Mes demandes</h1>

        <table style={customers}>
          <tr>
            <th style={th}>Demande Numero</th>
            <th style={th}>Etat demande</th>
            <th style={th}>Plus d'informations</th>
          </tr>
          {commande.map((c) => (
            <tr key={c.id}>
              <td style={td}>{c.id}</td>
              <td style={td}>{c.etat.toLowerCase()}</td>
              {/* <td
              
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            > */}

              <td style={td}>
                <a
                  href={``}
                  onClick={(event) => handledelete(event, `${c.id}`)}
                >
                  supprimer
                </a>
              </td>
            </tr>
          ))}
        </table>

        {/* {isHovering && (
          <div>
            <p>Motif:</p>
            <p>Description:</p>
            <p>Moyen de transport:</p>
            <p>Description:</p>
            <p>Frais:</p>
            <p>Date Début:</p>
            <p>Date Fin:</p>
            <p>Ville départ:</p>
            <p>Ville arrivée:</p>
            <p>Etat:</p>
            <p>Justification:</p>
          </div>
        )} */}
      </div>
      <Footer />
    </>
  );
};

export default Demande;
