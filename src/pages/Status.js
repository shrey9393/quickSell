// ... (import statements)

import { useEffect, useState } from "react";
import Card from "../components/Card";

function Status() {
  const tableHeaderStyle = {
    padding: "10px",
    backgroundColor: "#f2f2f2",
  };

  const [result, setResult] = useState(null);
  const [TodoFinal, setTodoFinal] = useState();
  const [InProgressFinal, setInProgressFinal] = useState();
  const [DoneFinal, setDoneFinal] = useState();
  const [CanceledFinal, setCanceledFinal] = useState();

  useEffect(() => {
    // Log the state values when they change
    console.log("TodoFinal:", TodoFinal);
    console.log("InProgressFinal:", InProgressFinal);
    console.log("DoneFinal:", DoneFinal);
    console.log("CanceledFinal:", CanceledFinal);
  }, [TodoFinal, InProgressFinal, DoneFinal, CanceledFinal]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );

      if (!response.ok || response.status < 200 || response.status >= 300) {
        throw new Error("Failed to fetch data");
      }

      const res = await response.json();
      setResult(res.tickets);

      let Todo = [];
      let InProgress = [];
      let Done = [];
      let Canceled = [];

      result.forEach((element) => {
        if (element.status === "Todo") {
          Todo.push(element);
        } else if (element.status === "In progress") {
          InProgress.push(element);
        } else if (element.status === "Done") {
          Done.push(element);
        } else if (element.status === "Backlog") {
          Canceled.push(element);
        }
      });

      setTodoFinal(Todo);
      setInProgressFinal(InProgress);
      setDoneFinal(Done);
      setCanceledFinal(Canceled);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const tableCellStyle = {
    padding: "10px",
    textAlign: "Center",
  };

  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#F2F2F2",
        }}
      >
        {/* ... (table structure) */}
        <tr>
          <th style={tableHeaderStyle}>
            <img
              src="https://cdn.icon-icons.com/icons2/1674/PNG/512/radiobuttonoff_111068.png"
              alt=""
              style={{ height: "10px" }}
            />
            Todo
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5695/5695839.png"
              alt=""
              style={{ height: "10px" }}
            />
            In Progress
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhBs2hYbPF84nPCwQr8fRD4s8Awx_ia7-qOaLir2Ubg&s"
              alt=""
              style={{ height: "10px" }}
            />
            Done
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://p1.hiclipart.com/preview/634/931/750/check-mark-logo-symbol-sign-semiotics-x-mark-red-png-clipart.jpg"
              alt=""
              style={{ height: "10px" }}
            />
            Canceled
          </th>
        </tr>
        <tr>
          <td style={tableCellStyle}>
            {TodoFinal &&
              TodoFinal.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {InProgressFinal &&
              InProgressFinal.map((item) => (
                <>
                  {console.log(item)},
                  <>
                    <Card user={item.id} msg={item.title} />
                  </>
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {DoneFinal &&
              DoneFinal.map((item) => (
                <>
                  {console.log(item)},
                  <>
                    <Card user={item.id} msg={item.title} />
                  </>
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {CanceledFinal &&
              CanceledFinal.map((item) => (
                <>
                  <>
                    <Card user={item.id} msg={item.title} />
                  </>
                </>
              ))}
          </td>
        </tr>
      </table>
      <button onClick={fetchData} style={{ margin: "10px" }}>
        Double tap to Fetch Data
      </button>
    </>
  );
}

export default Status;
