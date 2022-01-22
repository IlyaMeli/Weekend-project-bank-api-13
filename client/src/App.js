import { useState, useEffect } from "react";
import myApi from "./api/Api";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [myData, setMyData] = useState(null);
  const [userValue, SetUserValue] = useState("");
  const [cashValue, SetCashValue] = useState(0);
  const [creditValue, SetCreditValue] = useState(0);
  // console.log(process.env.NODE_ENV);

  const getReq = async () => {
    const { data } = await myApi.get("/users");
    setMyData(data);
  };
  const postUser = () => {
    myApi.post("/users", {
      userName: userValue,
      cash: cashValue,
      credit: creditValue,
    });
  };
  const createData = () => {
    return myData.map((user) => {
      return (
        <div key={user._id} className="user-wrap">
          <span><span className="user-title">ID:</span> {user._id}</span>
          <span><span className="user-title">Name:</span>  {user.userName}</span>
          <span><span className="user-title">Cash:</span>  {user.cash}</span>
          <span><span className="user-title">Credit:</span>  {user.credit}</span>
        </div>
      );
    });
  };

  useEffect(() => {
    getReq();
  }, [myData]);

  return (
    <div className="App">
      <h1>Bank Api</h1>
      <div className="inputs">
        <label>Add User </label>
        <input
          onChange={(e) => {
            SetUserValue(e.target.value);
          }}
          type="text"
        />
        <label>Cash</label>
        <input
          type="number"
          onChange={(e) => {
            SetCashValue(e.target.value);
          }}
        />
        <label>Credit</label>
        <input
          type="number"
          onChange={(e) => {
            SetCreditValue(e.target.value);
          }}
        />
        <button onClick={postUser} type="submit">
          Add
        </button>
      </div>
      {myData && <div className="data-wrap">{createData()}</div>}
          <div className="deposit">
            <label>Inset User ID:</label>
            <input/>
            <label>Deposit Cash</label>
            <input type="number"/>
            <button>Deposit</button>
          </div>
    </div>
  );
}

export default App;
