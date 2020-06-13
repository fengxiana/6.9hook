import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { myLogin } from '@/actions/login'
import './styles.less'

function Login(props) {

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  const onFinish = values => {
    props.myLogin(values)
      .then(res => {
        if (res.payload.code === 200) {
          alert('登录成功')
          props.history.push('/home')
        } else {
          alert('登录失败')
        }
      })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="pages-login">
      <div className="center-box">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button className="btn-registe">
              <Link to="/registe">注册</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default connect(state => {
  return {

  }
}, {
  myLogin
})(Login)
