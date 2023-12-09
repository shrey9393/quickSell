import React, { useEffect, useState } from "react";
import Card from "../components/Card";

function User() {
  const [result, setResult] = useState(null);
  const [userMap, setUserMap] = useState(new Map());
  useEffect(() => {
    // Log the state values when they change
    console.log("TodoFinal:", userMap);
  }, [userMap]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );

      if (!response.ok || response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch data");
      }

      const res = await response.json();
      setResult(res.users);
      const tickets = res.tickets;
      let temp = {};

      tickets.forEach((element) => {
        if (temp[element.userId] === undefined) {
          temp[element.userId] = [];
        }
        temp[element.userId].push(element);
      });

      setUserMap(temp);
      console.log(userMap);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  return (
    <>
      <div>
        <button onClick={fetchData}>Fetch Data</button>
        {/* createing a table based on users name as header  and the listing the tickits of user in the bewlow row */}
        <table>
          <tr>
            <th>Users</th>
            <th>Tickets</th>
          </tr>
          {result &&
            result.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  {userMap[item.id] &&
                    userMap[item.id].map((ticket) => (
                      <div>
                        <Card user={ticket.id} msg={ticket.title} />
                      </div>
                    ))}
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default User;
