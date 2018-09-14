<template>
    <li class="user-list-user">
        <div class="user-list-circle">
            <img :src="user.avatar"/>
        </div>
            <div class="online"></div>
        {{ user.username }}
    </li>
</template>

<script>
export default {
  props: ['user'],
};
</script>
<style lang="scss">
    .user-list-user {
        list-style-type: none;
        font-size: 11px;
        font-weight: 500;
        margin-top: 15px;
        display: flex;
        align-items: center;
        position: relative;
        .user-list-circle {
            width: 40px;
            height: 40px;
            //background: grey;
            background: url('../assets/defaultAvatar.png');
            background-size: contain;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 15px;
            margin-right: 15px;
            position: relative;
            overflow: hidden;
            img {
                height: 100%;
                width: auto;
            }
        }
        .online {
            position: absolute;
            height: 12px;
            width: 12px;
            background: #95d352;
            border: 2px solid white;
            bottom: -1px;
            left: 43px;
            border-radius: 12px;
        }
    }
</style>
