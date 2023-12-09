// ... (import statements)

import { useEffect, useState } from "react";
import Card from "../components/Card";

function Priority() {
  const tableHeaderStyle = {
    padding: "10px",
    backgroundColor: "#f2f2f2",
  };

  const [result, setResult] = useState(null);
  const [priorityUrgent, setPriorityUrgent] = useState();
  const [priorityHigh, setPriorityHigh] = useState();
  const [priorityMedium, setPriorityMedium] = useState();
  const [priorityLow, setPriorityLow] = useState();
  const [priorityNo, setPriorityNo] = useState();

  useEffect(() => {
    // Log the state values when they change
    console.log("priorityUrgent:", priorityUrgent);
    console.log("priorityHigh:", priorityHigh);
    console.log("priorityMedium:", priorityMedium);
    console.log("priorityLow:", priorityLow);
    console.log("priorityNo:", priorityNo);
  }, [priorityUrgent, priorityHigh, priorityMedium, priorityLow, priorityNo]);

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
      let np = [];
      let u = [];
      let h = [];
      let m = [];
      let l = [];

      result.forEach((element) => {
        if (element.priority === 4) {
          u.push(element);
        } else if (element.priority === 3) {
          h.push(element);
        } else if (element.priority === 2) {
          m.push(element);
        } else if (element.priority === 1) {
          l.push(element);
        } else if (element.priority === 0) {
          np.push(element);
        }
      });

      setPriorityUrgent(u);
      setPriorityHigh(h);
      setPriorityMedium(m);
      setPriorityLow(l);
      setPriorityNo(np);
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
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {/* ... (table structure) */}
        <tr>
          <th style={tableHeaderStyle}>No priority</th>
          <th style={tableHeaderStyle}>Urgent</th>
          <th style={tableHeaderStyle}>High</th>
          <th style={tableHeaderStyle}>Medium</th>
          <th style={tableHeaderStyle}>Low</th>
        </tr>
        <tr>
          <td style={tableCellStyle}>
            {priorityNo &&
              priorityNo.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {priorityUrgent &&
              priorityUrgent.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {priorityHigh &&
              priorityHigh.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {priorityMedium &&
              priorityMedium.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          <td style={tableCellStyle}>
            {priorityLow &&
              priorityLow.map((item) => (
                <>
                  <Card user={item.id} msg={item.title} />
                </>
              ))}
          </td>
          {/* <td style={tableCellStyle}>
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
          </td> */}
        </tr>
      </table>
      <button onClick={fetchData}>Double tap to Fetch Data</button>
    </>
  );
}

export default Priority;
