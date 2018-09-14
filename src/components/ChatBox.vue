<template>
    <div class="chat-box">
        <MessageList :messages="messages"/>
        <SendBox @messageSent="onMessageSent"/>
    </div>
</template>

<script>

import MessageList from './MessageList';
import SendBox from './SendBox';
import Store from '../store';

export default {
  methods: {
    onMessageSent(message) {
      // Store.messages.push(message)
      this.$api.messageSend(message);
    },
  },
  computed: {
    messages: () => Store.messages,
  },
  components: {
    MessageList,
    SendBox,
  },
};

</script>

<style lang="scss">
    .chat-box {
        height: 90vh;
        width: calc(100% - 200px);
    }
</style>
