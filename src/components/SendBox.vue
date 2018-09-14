<template>
    <div class="send-box">
        <div class="send-box-content">
            <div class="emot-preview">
                <div class="emot-category cat-1" @click="catChoice('cat-1')"><p>😁</p></div>
                <div class="emot-category cat-2" @click="catChoice('cat-2')"><p>🐻</p></div>
                <div class="emot-category cat-3" @click="catChoice('cat-3')"><p>🍔</p></div>
                <div class="emot-category cat-4" @click="catChoice('cat-4')"><p>⚽</p></div>
                <div class="emot-category cat-5" @click="catChoice('cat-5')"><p>🌇</p></div>
                <div class="emot-category cat-6" @click="catChoice('cat-6')"><p>💡</p></div>
                <div class="emot-category cat-7" @click="catChoice('cat-7')"><p>🔣</p></div>
                <div class="emot-category cat-8" @click="catChoice('cat-8')"><p>🎌</p></div>
            </div>
            <div class="emot-content">
                <EmotList v-for="(emoji,index) in emojis"
                          @emotChoice="onEmotChoice"
                          :key="index"
                          :emoji="emoji"/> <!-- Recup de l'event de EmotList -->
            </div>
            <div class="input-container">
                <form action="#" @submit.prevent="onFormSubmit">
                    <input class="input-content" type="text" v-model="input" @keydown="keyChoice($event)"/>
                    <button>Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import EmotList from './EmotList';
import store from '../store';

export default {
  data() {
    return {
      input: '',
      emojis: store.emojisFace,
    };
  },
  computed: {

  },
  components: {
    EmotList,
  },
  methods: {
    onEmotChoice(emoji) {
      this.input += emoji;
    },
    onFormSubmit() {
      this.$emit('messageSent', this.input);
      this.input = '';
    },
    catChoice(cat) {
      switch (cat) {
        case 'cat-1':
          this.emojis = store.emojisFace;
          break;
        case 'cat-2':
          this.emojis = store.emojisAnimal;
          break;
        case 'cat-3':
          this.emojis = store.emojisFood;
          break;
        case 'cat-4':
          this.emojis = store.emojisActivity;
          break;
        case 'cat-5':
          this.emojis = store.emojisTravel;
          break;
        case 'cat-6':
          this.emojis = store.emojisObject;
          break;
        case 'cat-7':
          this.emojis = store.emojisSymbol;
          break;
        case 'cat-8':
          this.emojis = store.emojisCountry;
          break;
        default:
      }
    },
    keyChoice($event) {
      // console.log($event.key)
      // console.log($event.keyCode)
      // #ffd88b
      $event.path[1][1].style.background = '#e8b34a';
    },
  },
};

</script>

<style lang="scss">
    .send-box {
        height: 272px;
        background: #eef2ff;
        .send-box-content {
            width: calc(100% - 54px);
            margin-left: 27px;
            height: 259px;
            background: #fbfbfb;
            border-radius: 9px;
            .emot-preview {
                height: 65px;
                padding: 20px 20px 0 20px;
                display: flex;
                justify-content: space-between;
                .emot-category {
                    height: 48px;
                    width: 48px;
                    border-radius: 24px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.8em;
                    p {
                        margin-top: 8px;
                    }
                }
                .cat-1 {background: #4a90e2;}
                .cat-2 {background: #7ed321;}
                .cat-3 {background: #f07be1;}
                .cat-4 {background: #e8b34a;}
                .cat-5 {background: #93c0f4;}
                .cat-6 {background: #ee8a4a;}
                .cat-7 {background: #bb79e8;}
                .cat-8 {background: #fb7d7d;}
            }
            .emot-content {
                height: 108px;
                padding: 0 0 0 20px;
                font-size: 2.968em;
                letter-spacing: 0.4em;
                overflow-y: scroll;
                cursor: pointer;
                display: flex;
                flex-wrap: wrap;
            }
            .input-container {
                padding: 0 20px;
                margin-top: 5px;
                input {
                    height: 40px;
                    border-radius: 8px;
                    background-color: #fafbff;
                    border: 1px solid #979797;
                    width: calc(80% - 20px);
                    padding-left: 20px;
                    font-size: 16px;
                    font-weight: 500;
                    outline: none;
                }
                button {
                    width: 133px;
                    height: 40px;
                    border-radius: 6px;
                    border: none;
                    background-color: #ffd88b;
                    margin-left: 17px;
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
    }
</style>
