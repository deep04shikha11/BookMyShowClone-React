import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../apiCalls/users";

function Register() {
  const onSubmit = async (values) => {
    try {
      const response = await RegisterUser(values);
      if (response.success) {
        message.success(response.success);
      } else {
        message.error(response.success);
      }
    } catch (error) {
      console.log("Register User submits error");
      console.log(error);
    }
  };

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form layout="vertical" onFinish={onSubmit}>
              <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input id="name" type="text" placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input id="email" type="text" placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: "600" }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                Already a User ? <Link to="/login">Login Now </Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;
