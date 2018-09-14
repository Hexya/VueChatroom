<template>
    <div class="login-view">
        <div class="login-content">
            <img src="@/assets/log.gif"/>
            <form class="form-content" action="" @submit.prevent="onFormSubmit">
                <label>Login</label>
                <input type="text" placeholder="Your pseudo" v-model="username">
                <input type="text" placeholder="Your pic" v-model="avatar">
                <div class="button-container">
                    <button>Connexion</button>
                </div>
            </form>
            <span class="litle-emot">🤣</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      avatar: '',
    };
  },
  methods: {
    onFormSubmit() {
      if (this.username.length > 0) {
        this.$emit('submit', this.username, this.avatar);
      } else {
        // display error
      }
    },
  },
};
</script>
<style lang="scss">
    .login-view {
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e8b34a;
        .login-content {
            position: relative;
            width: 398px;
            height: 389px;
            border-radius: 30px;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            img {
                height: 110px;
                width: auto;
                margin: 15px 0;
            }
            .form-content {
                display: flex;
                flex-direction: column;
                width: 80%;
                label {
                    font-size: 20px;
                    font-weight: bold;
                    color: #e8b34a;
                }
                input {
                    font-size: 16px;
                    font-weight: 500;
                    color: #777676;
                    border: none;
                    border-bottom: 1px solid #cccccc;
                    margin-top: 15px;
                    height: 30px;
                    outline: none;
                }
                .button-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    button {
                        margin: 60px 0 40px 0;
                        width: 133px;
                        height: 40px;
                        border-radius: 6px;
                        border: none;
                        color: white;
                        font-size: 16px;
                        font-weight: 500;
                        background-color: #e8b34a
                    }
                }
            }
            .litle-emot {
                position: absolute;
                right: -10px;
                bottom: -20px;
                font-size: 2em;
            }
        }
    }
</style>
