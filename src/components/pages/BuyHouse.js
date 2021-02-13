import React ,{useState} from 'react'
import { Form, Input, InputNumber, Button } from 'antd';


function BuyHouse() {
  const [inputValue, setinputValue] = useState({
    name : "  ",
    email : "",
    Discription: "",
  })

  const handleChange =(e)=>{
    setinputValue({
      ...inputValue , 
      [e.target.id]:e.target.value, id:Math.random().toString(36).substring(7) 
    })
    console.log(inputValue)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    localStorage.setItem("inputValue" , JSON.stringify(inputValue))
    alert("Your Request is send successfully")
  }

        
 const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

    const onFinish = (values) => {
      console.log(values);
    };
    return (
      <div>
        <Form {...layout} name="nest-messages" onFinish={onFinish} onSubmit={handleSubmit} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input id="name" onChange={handleChange} />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input id="email" onChange={handleChange} />
        </Form.Item>
         <Form.Item name={['user', 'Discription']} id="Discription" label="Discription" onChange={handleChange}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  };



export default BuyHouse

