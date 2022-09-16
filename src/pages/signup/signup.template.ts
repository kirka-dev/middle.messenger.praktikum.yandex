export const signupTemplate = `<div class="page signup-page">
    <div class="signup">
        <div class="signup__header">
            <h1 class="signup__title">Регистрация</h1>
            {{{routeButton}}}
        </div>
        <form class="signup__form">
            {{{email}}}
            {{{login}}}
            {{{firstName}}}
            {{{secondName}}}
            {{{phone}}}
            {{{password}}}
            {{{passwordRepeat}}}
            {{{submit}}}
        </form>
    </div>
</div>`
