const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  canvas: state => state.canvas,
  event: state => state.event,
  notice: state => state.notice,
  roles: state => state.user.roles,
  menus: state => state.user.menus
}
export default getters
