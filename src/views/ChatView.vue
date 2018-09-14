<template>
    <div class="chat-view">
        <div class="header">
            <div class="user-content"></div>
            <div class="title-content">
                <div class="title-txt">Vendredi, 14 septembre</div>
            </div>
        </div>
        <div class="chat-container">
            <UsersList/>
        <ChatBox/>
        </div>
    </div>
</template>

<script>
import UsersList from '@/components/UsersList';
import ChatBox from '@/components/ChatBox';

export default {
  components: {
    UsersList,
    ChatBox,
  },
};
</script>

<style lang="scss">
    .header {
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        background: #eef2ff;
        .user-content {
            width: 200px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
        }
        .title-content {
            width: calc(100% - 200px);
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .title-txt {
                height: 35px;
                width: 215px;
                background: #6e4ae8;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                font-weight: 500;
                color: white;
                margin-bottom: 10px;
            }
        }
    }
    .chat-view {
        .chat-container {
            display: flex;
            flex-direction: row-reverse;
        }
    }
</style>
