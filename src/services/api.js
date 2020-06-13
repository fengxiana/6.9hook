const url = 'http://134.175.115.202/'
const baiUrl = 'http://api.baxiaobu.com/'

export default {
  loginApi: url+'index/qybapi/dologin',
  registeApi: url+'index/qybapi/userreg',
  homeDataApi: baiUrl+'index.php/home/v5/getuser',
  homeAddApi: baiUrl+'index.php/home/v5/add',
  homeUpdateApi: baiUrl+'index.php/home/v5/updateUser',
  homeDeleteApi: baiUrl+'index.php/home/v5/deleteUser'
}