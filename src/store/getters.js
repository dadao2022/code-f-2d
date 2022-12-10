const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  username: state => state.user.username,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  userrole: state => state.user.userrole,
  type: state => state.app.type,
  user: state => state.user
}
export default getters
