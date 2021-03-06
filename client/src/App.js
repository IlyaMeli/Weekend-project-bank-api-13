import { useState, useEffect } from "react";
import myApi from "./api/Api";
import "./App.css";

function App() {
  const [myData, setMyData] = useState(null);
  const [userValue, SetUserValue] = useState("");
  const [userIdValue, setUserIdValue] = useState("");
  const [cashValue, SetCashValue] = useState(0);
  const [creditValue, SetCreditValue] = useState(0);
  const [userIdForDeposit, setUserIdForDeposit] = useState("");
  const [userCashDeposit, setUserCashForDeposit] = useState("");

  const deposit = async () => {
    const { data } = await myApi.put("/users/deposit", {
      id: userIdForDeposit,
      deposit: Number(userCashDeposit),
    });
    console.log(data);
    const copyData = [...myData];
    const updatedUser = copyData.findIndex((user) => user.id === data.id);
    copyData[updatedUser] = data;
    setMyData(copyData);
  };

  const getReq = async () => {
    const { data } = await myApi.get("/users");
    setMyData(data);
  };
  const postUser = async () => {
    const { data } = await myApi.post("/users", {
      userId: userIdValue,
      userName: userValue,
      cash: cashValue,
      credit: creditValue,
    });
    setMyData((prev) => [...prev, data]);
  };
  const createData = () => {
    return myData.map((user) => {
      return (
        <div key={user._id} className="user-wrap">
          <span>
            <span className="user-title">_id:</span> {user._id}
          </span>
          <span>
            <span className="user-title">ID:</span> {user.userId}
          </span>
          <span>
            <span className="user-title">Name:</span> {user.userName}
          </span>
          <span>
            <span className="user-title">Cash:</span> {user.cash}
          </span>
          <span>
            <span className="user-title">Credit:</span> {user.credit}
          </span>
        </div>
      );
    });
  };

  useEffect(() => {
    getReq();
  }, []);

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
        <label>Add ID </label>
        <input
          onChange={(e) => {
            setUserIdValue(e.target.value);
          }}
          type="number"
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
        <input onChange={(e) => setUserIdForDeposit(e.target.value)} />
        <label>Deposit Cash</label>
        <input
          onChange={(e) => setUserCashForDeposit(e.target.value)}
          type="number"
        />
        <button onClick={deposit}>Deposit</button>
      </div>
    </div>
  );
}

export default App;
