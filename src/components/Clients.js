import React from "react";
import IISYS from "../iisys.png";
import Chegg from "../cheggindia_logo.jpg";
import Mydos from "../1630581702749.jpg";
import Nalnda from "../nalnda_logo.jpg";
import StartC from "../star_catalysts_logo.jpg";

const clients = [
  { name: "IISYS", logo: IISYS },
  { name: "Nalnda", logo: Nalnda },
  { name: "Star Catalysts", logo: StartC },
  { name: "Chegg", logo: Chegg },
  { name: "MyDos Technology", logo: Mydos },
];

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container">
        <div className="badge">✦ Trusted By</div>
        <h2 className="clients-title">Companies I’ve Worked With</h2>
        {/* <p>sfd</p> */}

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-logo" key={index}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
