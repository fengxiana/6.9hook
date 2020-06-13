import React from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { myRegiste } from '@/actions/registe'
import './styles.less'

function Registe(props) {

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 }
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  }

  const onFinish = values => {
    props.myRegiste(values)
      .then(res => {
        if (res.payload.code === 200) {
          alert('注册成功')
        } else {
          alert('注册失败')
        }
      })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="pages-registe">
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
              注册
            </Button>
            <Button className="btn-registe">
              <Link to="/">登录</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default connect(state => {
  return {
    registeData: state.registe
  }
}, {
  myRegiste
})(Registe)
