const apiRoot = 'http://api.xx.xx.xx/';

module.exports = {
    root: apiRoot,
    verifycode: apiRoot + '/auth/verifycode/',
    register: apiRoot + '/auth/register/',
    login: apiRoot + '/auth/login/',
    password: apiRoot + '/auth/password/'
};
