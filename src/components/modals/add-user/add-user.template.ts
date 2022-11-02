export const addUserTemplate = `<div class="modal">
    <div class="modal__header">
        <h3 class="modal__title">Добавить пользователя</h3>
        {{{close}}}
    </div>
    <form class="modal__form">
        {{{search}}}
        {{{button}}}
    </form>
    <div class="modal__user-list" id="user-list"></div>
</div>`
