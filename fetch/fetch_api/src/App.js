import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  console.log(users);

  const handleAddUser = () => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Avinash",
        lastName: "Rana",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="max-w-[600px] mx-auto space-y-2 my-5 m-2">
      <button
        type="button"
        className="border bg-gray-100 px-3 py-1 text-xs"
        onClick={handleAddUser}
      >
        Add User
      </button>
      {users.map((user) => (
        <div className="p-2 border border-gray-100 rounded-md" key={user.id}>
          <span>
            {user.id} : {user.firstName} {user.lastName}
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
