export const itemTemplate = `<div class="messenger-chat-list__item chat-list-item">
    <div class="chat-list-item__title">{{chat.title}}</div>
{{#if chat.last_message}}
    <div class="chat-list-item__message">{{chat.last_message.content}}</div>
{{else}}
    <div class="chat-list-item__message">Сообщений нет...</div>
{{/if}}
{{#if chat.unread_count}}
    <div class="chat-list-item__unread">{{chat.unread_count}}</div>
{{/if}}
</div>`
