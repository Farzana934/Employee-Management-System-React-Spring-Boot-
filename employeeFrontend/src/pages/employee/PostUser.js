import "./PostUser.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const PostUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    const handleChange = (e) => { // Update form data state on input change
      const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate(); // Hook for navigation after form submission

    const handleSubmit = async (e) => { // Handle form submission
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
            try {
                const response = await fetch("http://localhost:8080/api/employee", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });
                const result = await response.json();
                console.log("Employee created :", result);
                navigate("/"); // Navigate to home page after successful submission 
            } 
            
            catch (error) {
                console.error("Error posting employee:", error.message);
            }
    };
    return (
        <>
        <div className="centered-form">
            <h2>Post New Employee</h2>
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
                   
                
                 <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                </Form.Group>

                 <Form.Group controlId="formBasicName">
                    <Form.Control 
                    type="text"
                    name="department"
                    placeholder="Enter Department"
                    value={formData.department}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">Post Employee</Button>
            </Form>
            </div>
            </>
    );
}
export default PostUser;
