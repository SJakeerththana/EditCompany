import React from "react";
import { Form, Input, Button } from "antd";

class FormLayoutDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: "horizontal"
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 }
          }
        : null;
    const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 10, offset: 4 }
          }
        : null;
    return (
      <div>
        <Form layout={formLayout}>
          <Form.Item label="Field A" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default FormLayoutDemo;
