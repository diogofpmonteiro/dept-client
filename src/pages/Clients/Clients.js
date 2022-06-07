import { useEffect } from "react";
import { useState } from "react";
import "./Clients.css";

const Clients = () => {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const result = await fetch("http://localhost:3000/clients/");
      const data = await result.json();
      setClientList(data);

      // console.log("fetch data ->", clientList);
    };
    getClients();
  }, []);
  return (
    <div className='clients-section'>
      <h1 className='clients-title'>Clients</h1>
      <p className='clients-text'>
        We value a great working relationship with our clients above all else. It's why they often come to our parties. It's also why we're
        able to challenge and inspire them to reach for the stars.
      </p>
      <ul className='clients-list'>
        {clientList &&
          clientList.map((eachClient) => (
            <li className='clients-list-item' key={eachClient.id}>
              <img src={eachClient.imageURL} alt='client-img' loading='lazy' />
              {eachClient.id}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Clients;
