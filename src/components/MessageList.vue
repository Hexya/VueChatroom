<template>
    <div class="message-list" @click="keySpace($event)">
        <MessagesListMessage v-for="(message,index) in messages" :key="index" :message="message"/>
    </div>
</template>

<script>
import MessagesListMessage from './MessagesListMessage';
import Vue from 'vue';

export default {
  props: ['messages'],
  watch: {
    messages(mes) {
      Vue.nextTick(() => {
        setTimeout(() => {
          this.$el.scrollTop = this.$el.scrollHeight;
        }, 550);
        // console.log(this)
        // console.log(this.$children[this.$children.length-1].$el.lastChild.children[1].innerHTML.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/))
        document.querySelector('button').style.background = '#ffd88b';
        if (this.$children[this.$children.length - 1].$el.getAttribute('value') == 'Hexya') {
          this.$children[this.$children.length - 1].$el.style.flexDirection = 'row-reverse';
        }
        const reg = /^[A-Za-z =.+ù%'1234567890°?éè@<,azeà#açzeazTon̨͖̠̞̫̞̹̜͕̫̫̦̜͉̻͙̘͒̿̅̂͆͑̀͐̓̊͑̽̓̓̈̓̂͛́̑̈́̒̂̏̔̿͆͒͆̊͑̐̈́͒̒̑́̆̍̓̄̍̇̽̒͗̏̃̽̑̔͑̏̐̉̔̉̑͒̒͌͆̂͒̓̃͛̎̏̇͗͂͑̉̓̚͘͘̚͘̕̚͠͠͝͝͝͝͝͝͝ͅͅ;:=أبلهù``^^1234567890°_]+$/;
        const word = this.$children[this.$children.length - 1].$el.lastChild.children[1].innerHTML.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
        if (word.join().match(reg)) {
          // console.log('only letter')
          console.log(word.join());
          const splitWord = word.join().split('');

          const emojiArray = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🐮', '🐷', '🐽', '🐸', '🐙', '🐵', '🙈', '🙉', '🙊', '🐒', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🐗', '🐴', '🐝', '🐛', '🐌', '🐞', '🐜', '🐍', '🐢', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐔', '🐄', '🐪', '🐫', '🐘', '🐐', '🐏', '🐑', '🐎', '🐖', '🐀', '🐁', '🐓', '🐕', '🐩', '🐈', '🐇', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🌾', '🌺', '🌻', '🌹', '🌼', '🌷', '🌸', '🍄', '💐', '🌰', '🎃', '🐚', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌛', '🌜', '🌞', '🌙', '⭐', '🌟', '💫', '✨', '⛅', '🔥', '💥', '❄️⛄', '💨', '☔', '💧', '💦', '🌊', '😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '😎', '😏', '😶', '😐', '😑', '😒', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😥', '😢', '😪', '😓', '😭', '😵', '😲', '😷', '😴', '💩', '💤', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙌', '👏', '👋', '👍', '👎', '👊', '✊✌️', '👌', '✋', '👐', '💪', '🙏', '☝️', '👆', '👇', '👈', '👉', '💅', '👄', '👅', '👂', '👃', '👀', '👤', '👥', '👶', '👦', '👧', '👨', '👩', '👱', '👴', '👵', '👲', '👳', '👮', '👷', '💂', '🎅', '👼', '👸', '👰', '🚶', '🏃', '💃', '👯', '👫', '👬', '👭'];
          // console.log(splitWord.length)
          for (let i = 0; i < splitWord.length; i++) {
            splitWord[i] = emojiArray[Math.floor(Math.random() * Math.floor(emojiArray.length))];
          }
          splitWord[2] = '😀';
          // console.log(splitWord.toString().replace(/\,/g,""))
          this.$children[this.$children.length - 1].$el.lastChild.children[1].innerHTML = splitWord.toString().replace(/\,/g, '');
        }
      });
    },
  },
  methods: {
    keySpace($event) {
      // console.log(this)
      // console.log(this.$el.lastChild)
      // console.log($event)
      this.$el.lastChild.lastChild.classList.add('space');
      setTimeout(() => {
        this.$el.lastChild.lastChild.classList.remove('space');
      }, 250);
    },
  },
  components: {
    MessagesListMessage,
  },
};
</script>

<style lang="scss">
    .message-list {
        overflow-y: scroll;
        height: calc(100% - 277px);
        border-bottom: 5px solid #eef2ff;
        background: #eef2ff;
        position: relative;
    }
</style>
