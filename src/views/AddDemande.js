import React, { useRef } from "react";
import Axios from "axios";
import { useNavigate  } from "react-router-dom"
// import '../styles/demande.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Demande = () => {
  const myDiv = {
    display: "flex",
    justifyContent: "center",
    marginTop: "200px",
  };

  const myform = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const myInput = {
    width: "500px",
  };
  const Motif = useRef();
  const Description = useRef();
  const Mdt  = useRef()
  const Frais = useRef();
  const DD = useRef();
  const DF = useRef();
  const VD = useRef();
  const VA = useRef();
  const Etat = useRef()
  const Justification = useRef();
  const navigate = useNavigate();

  async function handledemande(e) {
    e.preventDefault();
    try {
      await Axios.post('http://localhost:8010/api/v1/demandes',
      {   motif: Motif.current.value,
          description:Description.current.value,
          moyenTransport:Mdt.current.value,
          frais:parseFloat(Frais.current.value),
          dateDebut:DD.current.value,
          dateFin:DF.current.value,
          villeDepart:VD.current.value,
          villeArrive:VA.current.value,
          etat:Etat.current.value,
          justification:Justification.current.value
      });
      
      navigate("/demandes")
      
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <>
      <Navbar />
      <div style={myDiv}>
        <form onSubmit={handledemande} style={myform}>
          <label for="motif">Motif:</label>
          <input
            type="text"
            name="motif"
            id="motif"
            ref={Motif}
            style={myInput}
          ></input>
          <label for="description">Description:</label>
          <input
            type="textarea"
            name="description"
            ref={Description}
            id="description"
          ></input>
          <label for="moyenTransport">Moyen de transport:</label>
          <select id="moyenTransport" ref={Mdt} name="moyenTransportListe">
            <option value="voiture">Voiture</option>
            <option value="camion">Camion</option>
            <option value="moto">Moto</option>
          </select>
          <label for="frais">Frais:</label>
          <input type="text" name="frais" ref={Frais} id="frais"></input>
          <label for="dateDebut">Date Début:</label>
          <input type="date" id="dateDebut" ref={DD} name="dateDebut"></input>
          <label for="dateFin">Date Fin:</label>
          <input type="date" id="dateFin" ref={DF} name="dateFin"></input>
          <label for="villeDepart">Ville départ:</label>
          <input
            type="text"
            name="villeDepart"
            ref={VD}
            id="villeDepart"
          ></input>
          <label for="villeArrivee">Ville arrivée:</label>
          <input
            type="text"
            name="villeArrivee"
            ref={VA}
            id="villeArrivee"
          ></input>
          <label for="etat">Etat:</label>
          <select id="etat" ref={Etat} name="etattListe">
            <option value="EN_COURS">En Cours</option>
            <option value="VALIDE">Validée</option>
            <option value="REFUSE">Refusée</option>
            <option value="EN_ATTENTE">En Attente</option>
          </select>
          <label for="justification">Justification:</label>
          <input
            type="textarea"
            name="justification"
            ref={Justification}
            id="justification"
          ></input>
          <input
            type="submit"
            id="submit"
            name="submit"
            value="Envoyer"
          ></input>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Demande;
