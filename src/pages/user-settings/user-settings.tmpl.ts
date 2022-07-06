export const userSettingsTmpl = `div(class='user-settings')
        aside(class='user-settings__aside')
            a(class='user-settings__back-button' href='./?page=chat')
        form(class='user-settings__form')
            div(class='user-settings__avatar avatar-edit')
                input(class='avatar-edit__field' type='file' name='avatar' id='avatar')
            #{inputEmail}
            #{inputLogin}
            #{inputFirstName}
            #{inputSecondName}
            #{inputDisplayName}
            #{inputPhone}
            #{inputOldPassword}
            #{inputNewPassword}
            #{buttonSubmit}
            a(class='user-settings__link' href='./?page=authorization') Выйти
`
