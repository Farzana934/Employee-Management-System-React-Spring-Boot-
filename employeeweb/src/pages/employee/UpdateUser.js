import './UpdateUser.css';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                if (!response.ok) throw new Error("Failed to fetch employee");
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching employee:", error.message);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Update failed");

            alert("Employee updated successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error updating employee:", error.message);
            alert("Update failed!");
        }
    };

    return (
        <div className="centered-form">
            <h2>Update Employee</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter Department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Edit Employee
                </Button>
            </Form>
        </div>
    );
};

export default UpdateUser;