import { useState,useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error("Error fetching employees:", error.message);
            }
        };
        fetchEmployees();
    }, []);


    const handleDelete =async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${employeeId}`, { 
                method: "DELETE",
            });
        if(response.ok){
            setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== employeeId));
        }
        console.log("Employee deleted successfully");
        }
        catch (error){
            console.error("Error deleting employee:", error.message);
        }
    };
    
    const handleUpdate = (employeeId) => {
        navigate(`/employee/${employeeId}`);
    };

    return (
       <>
       <Container className="mt-5">
          <Row>
            <Col>
              <h1 className="text-center">Employee List</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => handleUpdate(employee.id)}>Update</Button>{" "}
                                    <Button variant="outline-danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* <ul>
                    {employees.map((employee) => (
                        <li key={employee.id}>
                            {employee.name} - {employee.email} - {employee.phone} - {employee.department}
                        </li>

                    ))}
                </ul> */}
            </Col>
          </Row>
       </Container>
       </>
    );
}
export default Dashboard;