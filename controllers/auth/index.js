const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resentEmail = require("./resentEmail")

module.exports = { register, resentEmail, login, verify, getCurrent, logout, updateAvatar };
