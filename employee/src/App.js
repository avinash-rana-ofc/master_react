import "./App.css";
import Employee from "./component/Employee";

function App() {
  const employees = [
    {
      image: "/employee_1.png",
      code: "001",
      name: "Avinash Rana",
      salary: "10000",
      isActive : true
    },
    {
      image: "/employee_2.png",
      code: "002",
      name: "Anik Ghosh",
      salary: "20000",
      isActive : false
    },
    {
      image: "/employee_3.png",
      code: "003",
      name: "Debaleena Ghoshal",
      salary: "40000",
      isActive : true
    },
    {
      image: "/employee_4.png",
      code: "004",
      name: "Shuvam",
      salary: "20000",
      isActive : false
    },
  ];
  return (
    <>
      <div className="employee-list">
        {employees.map((e) => (
          <Employee employee={e} key={e.code}/>
        ))}
      </div>
    </>
  );
}

export default App;
