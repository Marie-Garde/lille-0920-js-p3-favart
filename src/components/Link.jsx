import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `http://localhost:3001/client`,
    }).then((res) => {
      setClients(res.data);
      setLoading(false);
    });
  }, [setClients]);

  return (
    <div>
      {loading && <p>it's loading</p>}
      {!loading && (
        <>
          {clients.map((client, i) => (
            <div key={i}>{client.name}</div>
          ))}
        </>
      )}
    </div>
  );
};
