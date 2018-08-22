const allowedLanguage = ['zh_cn', 'us_en'];

const languages = {
    zh_cn: {
        alert_title: '温馨提示',
        is_logout: '确定退出？',
        modify_password: '修改密码',
        logout: '退出登录',
        input_phone: '请输入手机号码',
        input_password: '请输入密码',
        input_password_again: '请再次输入密码',
        input_old_password: '请输入旧密码',
        input_new_password: '请输入新密码',
        input_new_password_again: '请再次输入新密码',
        password_different: '两次输入的密码不一样，请重新输入',
        password_modified: '密码修改成功！',
        login_success: '登录成功',
        login: '登录',
        register: '注册',
        modify_confirm: '确认修改',
        send_code_success: '验证码发送成功',
        input_verify_code: '请输入验证码',
        register_success: '注册成功，将为您自动登录',
        user_exists: '用户已存在',
        account_already: '已有账号',
        send: '发送',
        user_center: '个人中心'
    }
};

let getLanguage = function() {
    let language = localStorage.getItem("language");
    language = language ? language : 'zh_cn';
    return language;
};

let cur_language = getLanguage();

let setLanguage = function(language) {
    if (allowedLanguage.indexOf(language) != -1) {
        cur_language = language;
        localStorage.setItem("language", language);
        return true;
    } else {
        return false;
    }
};

module.exports = {
    allowed_language: allowedLanguage,
    get_language: getLanguage,
    set_language: setLanguage,
    get: ((key) => {
        return languages[cur_language][key];
    })
};
