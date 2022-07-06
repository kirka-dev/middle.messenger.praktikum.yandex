export const authorizationTmpl = `div(class='authorization')
        form(class='authorization__form')
            h1(class='authorization__title') Вход
            #{inputLogin}
            #{inputPassword}
            #{buttonSubmit}
            a(class='authorization__link' href='./?page=registration') Нет аккаунта?`
