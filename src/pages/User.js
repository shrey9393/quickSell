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
        {/* createing a table based on users name as header  and the listing the tickits of user in the bewlow row */}
        <table>
          <tr>
            <th>Users</th>
            <th>Tickets</th>
          </tr>
          {result &&
            result.map((item) => (
              <tr>
                <td>
                  <img
                    src="https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg"
                    alt=""
                    style={{ height: "100px" }}
                  />
                  <h2>{item.name}</h2>
                </td>
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

        <button onClick={fetchData} style={{ margin: "10px" }}>
          Double tap to Fetch Data
        </button>
      </div>
    </>
  );
}

export default User;
