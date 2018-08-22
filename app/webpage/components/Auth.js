module.exports = {
    auth: (() => {
        let user = localStorage.getItem("user");
        user = user ? JSON.parse(user) : null;

        let token = localStorage.getItem("token");
        token = token ? JSON.parse(token) : null;

        return {
            is_login: user ? true : false,
            user: user,
            token: token
        };
    }),
    login: ((user, token) => {
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
    }),
    logout: (() => {
        localStorage.clear();
    }),
    queryString: ((name) => {
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }),
    isWeixin: (() => { 
        let ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    })
};
