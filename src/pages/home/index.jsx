import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import { connect } from 'react-redux'
import { homeData, homeType, homeDelte } from '@/actions/home'
import AlertModal from '@@/AlertModal'
import './styles.less'

function Home(props) {

  const { homeData, homeType, userData } = props

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    homeData()
  }, [])

  const showModal = (e ,id) => {
    const text = e.target.innerHTML
    if (text === '添 加') {
      homeType({ type: 'add' })
    } else if (text === '修 改') {
      homeType({ type: 'update', id })
    }
    setVisible(true)
  }

  const myDel = (id) => {
    homeDelte({ id })
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      render: (text) => (
        <Space size="middle">
          <Button onClick={(e) => {showModal(e, text.id)}}>修改</Button>
          <Button onClick={() => {myDel(text.id)}}>删除</Button>
        </Space>
      ),
    }
  ]

  return (
    <div className="pages-home">
      <Button type="primary" onClick={showModal}>添加</Button>
      {
        userData.length ? 
        <Table 
          rowKey="id"
          columns={columns}
          dataSource={userData}
        /> : null
      }

      {/* 模态框 */}
      <AlertModal 
        visible={visible} 
        setVisible={setVisible}
      />
    </div>
  )
}

export default connect(({ home }) => {
  return {
    userData: home.data
  }
}, {
  homeData,
  homeType,
  homeDelte
})(Home)

