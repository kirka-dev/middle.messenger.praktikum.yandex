export const authorization = `div(class='authorization')
        form(class='authorization__form')
            h1(class='authorization__title') Вход
            +input('Логин')(name='login' id='login')
            +input('Пароль')(name='password' id='password' type='password')
            +button('Вход')(class='authorization__button' type='submit')
            a(class='authorization__link' href='./registration.pug') Нет аккаунта?`
