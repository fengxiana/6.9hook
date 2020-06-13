import Loadable from '@@/Loadable'

const Login = Loadable(() => import('@/pages/login'))
const Registe = Loadable(() => import('@/pages/registe'))
const Home = Loadable(() => import('@/pages/home'))

export {
  Login,
  Registe,
  Home
}
