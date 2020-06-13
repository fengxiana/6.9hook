import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { homeAdd, homeUpdate } from '@/actions/home'
import './styles.less'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

function AlertModal(props) {

  const { visible, setVisible, modalType } = props

  const handleOk  = () => {
    setVisible(false)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const onFinish = values => {
    const { type, id = '' } = modalType
    if (type === 'add') {
      homeAdd(values)
    } else if (type === 'update') {
      values = { ...values, id }
      homeUpdate(values)
    }
    setVisible(false)
  }

  const onFinishFailed = () => {}

  return (
    <div className="common-modal">
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default connect(({ home }) => {
  return {
    modalType: home.modalType
  }
}, {
  homeAdd,
  homeUpdate
})(AlertModal)

