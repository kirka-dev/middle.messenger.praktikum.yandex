export const registrationTmpl = `div(class='registration')
        form(class='registration__form')
            h1(class='registration__title') Регистрация
            #{inputEmail}
            #{inputLogin}
            #{inputFirstName}
            #{inputSecondName}
            #{inputPhone}
            #{inputPassword}
            #{inputPasswordRepeat}
            #{buttonSubmit}
            a(class='authorization__link' href='./authorization') Войти
`
