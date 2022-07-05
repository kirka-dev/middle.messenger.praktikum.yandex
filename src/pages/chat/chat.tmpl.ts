export const chatTmpl = `div(class='chat')
        aside(class='chat__aside chat-aside')
            ul(class='chat__list chat-list')
                li(class='chat-list__user')
                    div(class='chat-list__avatar')
                    h5(class='chat-list__name') Ревьювер
                    p(class='chat-list__last-message') Служба ремонта дверных звонков.
                    div(class='chat-list__time') 10:23
                li(class='chat-list__user')
                    div(class='chat-list__avatar')
                    h5(class='chat-list__name') Супруга ❤️
                    p(class='chat-list__last-message') Купи вина 😅
                    div(class='chat-list__time') 18:48
                    div(class='chat-list__unread') 3
            div(class='chat-aside__menu chat-menu')
                a(class='chat-menu__item chat-menu__item_user-settings' href='./settings')
        section(class='chat__messages chat-messages')
            ul(class='chat-messages__list messages-list')
                #{message}
            form(class='chat-messages__field')
                input(class='chat-messages__input' placeholder='Сообщение' name='message' id='message' required)
                button(class='chat-messages__button' type='submit')

`
