export const messengerTemplate = `<div class="messenger">
    <div class="messenger__chat-list messenger-chat-list" id="chat-list"></div>
    <div class="messenger__chat messenger-chat">
        <div class="messenger-chat__header">
            {{{header}}}
        </div>
        <div class="messenger-chat__messages" id="messages"></div>
        <form class="messenger-chat__send-message send-message">
            {{{textarea}}}
            <div class="send-message__button">
                {{{submit}}}
            </div>
        </form>
    </div>
</div>`
