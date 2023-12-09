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
          <th style={tableHeaderStyle}>
            <img
              src="https://e7.pngegg.com/pngimages/962/722/png-clipart-computer-icons-encapsulated-postscript-others-text-monochrome.png"
              alt=""
              style={{ height: "10px" }}
            />
            No priority
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Software-update-urgent.svg/1200px-Software-update-urgent.svg.png"
              alt=""
              style={{ height: "15px" }}
            />
            Urgent
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://pixlok.com/wp-content/uploads/2021/12/Mobile-Network-Icon-SVG-vvc.png"
              alt=""
              style={{ height: "15px" }}
            />
            High
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://static.thenounproject.com/png/587669-200.png"
              alt=""
              style={{ height: "15px" }}
            />
            Medium
          </th>
          <th style={tableHeaderStyle}>
            <img
              src="https://static.thenounproject.com/png/269791-200.png"
              alt=""
              style={{ height: "15px" }}
            />
            Low
          </th>
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
      <button onClick={fetchData} style={{ margin: "10px" }}>
        Double tap to Fetch Data
      </button>
    </>
  );
}

export default Priority;
