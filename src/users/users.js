import _ from 'lodash'
/* eslint-disable no-underscore-dangle */

let currentId = 0;
let usersInternal = {}
const users = {
  getAll: () => _.cloneDeep(_.values(usersInternal)),
  add: ({ username, gameState = true }) => {
    currentId += 1;
    const newUser = { id: currentId, username, gameState };
    usersInternal[newUser.id] = newUser;
    return _.clone(newUser)
  },
  get: id => _.clone(usersInternal[_.toNumber(id)]),
  update: (id, body) => {
    const user = users.get(id);
    if (_.isString(body.username)) user.description = body.description;
    usersInternal[id] = user;
    return _.clone(user)
  },
  clear: () => {
    usersInternal = {}
  }
}

export default users
