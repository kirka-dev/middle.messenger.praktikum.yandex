export const settingsTemplate = `<div class="page settings-page">
    <div class="settings">
        <div class="settings-column settings-column_header">
            <h1 class="settings__title">Настройки</h1>
            {{{routeButtonMessenger}}}
            {{{routeButtonLogout}}}
        </div>
        <div class="settings-column settings-column_profile">
            <h2 class="settings__sub-title">Информация</h2>
            <form class="settings__form">
                {{{email}}}
                {{{login}}}
                {{{firstName}}}
                {{{secondName}}}
                {{{displayName}}}
                {{{phone}}}
                {{{submitProfile}}}
            </form>
        </div>
        <div class="settings-column settings-column_password">
            <h2 class="settings__sub-title">Пароль</h2>
            <form class="settings__form">
                {{{oldPassword}}}
                {{{newPassword}}}
                {{{submitPassword}}}
            </form>
        </div>
        <div class="settings-column settings-column_avatar">
            <h2 class="settings__sub-title">Аватар</h2>
            <form class="settings__form">
                {{{fileInput}}}
                {{{submitAvatar}}}
            </form>
        </div>
    </div>
</div>`
