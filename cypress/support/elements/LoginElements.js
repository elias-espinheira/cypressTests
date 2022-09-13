class LoginElements {
    botaoLogin = () => { return 'body > div.wrapper > header > div > div > nav > div > div.main-nav__wrapper > div > a' }

    campoLogin = () => { return 'user_login' }

    campoSenha = () => { return 'user_pass' }

    botaoConecte = () => { return '#wp-submit' }
}

export default LoginElements;