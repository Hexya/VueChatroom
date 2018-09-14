<template>
    <li class="message-list-message" :value="message.user.username">
        <div class="user-mess-circle">
            <img :src="message.user.avatar"/>
        </div>
        <div class="user-mess-txt"><span class="user-name">{{ message.user.username }}:</span> <span class="emoji-txt">{{message.text}}</span></div>
    </li>
</template>

<script>
export default {
  props: ['message'],
};
</script>
<style lang="scss">
    .message-list-message {
        list-style-type: none;
        display: flex;
        align-items: center;
        color: grey;
        font-weight: bold;
        margin: 35px 0;
        animation: .5s popMess ease-out forwards;
        @keyframes popMess {
            0% {
                //transform:translate3d(-35%,20vh,0);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: scale(1);
            }
            2% {
                transform: scale(1.5);
            }
            97% {
                transform: scale(1);
            }
            98% {
                transform: scale(1);
            }
            99% {
                transform: scale(1);
            }
            100% {
                transform: scale(1);
                //transform:translate3d(0,0,0);
                position: relative;
            }
        }
        &:nth-child(1n+1) {
            .user-mess-txt {
                background: #dacfff;
            }
        }
        &:nth-child(2n+1) {
            //flex-direction: row-reverse;
            .user-mess-txt {
                background: #6cbaf1;
            }
        }
        &:nth-child(3n+1) {
            .user-mess-txt {
                background: #ffeedc;
            }
        }
        &:nth-child(3n+2) {
            .user-mess-txt {
                background: #fb7d7d;
            }
        }
        .user-mess-circle {
            background: url('../assets/defaultAvatar.png');
            background-size: contain;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 15px;
            margin-right: 15px;
            overflow: hidden;
            img {
                height: 100%;
                width: auto;
            }
        }
        .user-mess-txt {
            max-width: 40%;
            border-radius: 9px;
            padding: 20px;
            position: relative;
            .user-name {
                position: absolute;
                top: -23px;
                left: 0px;
            }
            .emoji-txt {
                font-size: 25px;
                word-wrap: break-word;
            }
            .date-txt {
                position: absolute;
                top: 60px;
                right: 12px;
                font-size: 7px;
                opacity: 0.7;
            }
        }
        .space {
            animation: space .2s ease-out forwards;
        }
        @keyframes space {
            0% {transform: scale(1);}
            10% {transform: scale(1.1);}
            20% {transform: scale(1.2);}
            90% {transform: scale(1.2);}
            80% {transform: scale(1.1);}
            100% {transform: scale(1);}
        }
    }
</style>
