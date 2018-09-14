import Vue from 'vue';

const store = new Vue({
  data() {
    return {
      messages: [],
      user: null,
      users: [],
      input: '',
      emojisFace: ['😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '😎', '😏', '😶', '😐', '😑', '😒', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😥', '😢', '😪', '😓', '😭', '😵', '😲', '😷', '😴', '💩', '💤', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙌', '👏', '👋', '👍', '👎', '👊', '✊✌️', '👌', '✋', '👐', '💪', '🙏', '☝️', '👆', '👇', '👈', '👉', '💅', '👄', '👅', '👂', '👃', '👀', '👤', '👥', '👶', '👦', '👧', '👨', '👩', '👱', '👴', '👵', '👲', '👳', '👮', '👷', '💂', '🎅', '👼', '👸', '👰', '🚶', '🏃', '💃', '👯', '👫', '👬', '👭', '🙇', '💁', '🙅', '🙆', '🙋', '🙎', '🙍', '💇', '💆', '💏', '👨', '‍❤️‍', '💋', '👨', '👩', '👧', '👧', '👨', '👨', '👦', '👨', '👨', '👧', '👨', '👨', '👧', '👦', '👨', '👨', '👦', '👦', '👨', '👨', '👧', '👧', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '💄', '💋', '👣', '👠', '👡', '👢', '👞', '👟', '👒', '🎩', '🎓', '👑', '🎒', '👝', '👛', '👜', '💼', '👓', '💍', '🌂'],
      emojisAnimal: ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🐮', '🐷', '🐽', '🐸', '🐙', '🐵', '🙈', '🙉', '🙊', '🐒', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🐗', '🐴', '🐝', '🐛', '🐌', '🐞', '🐜', '🐍', '🐢', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐔', '🐄', '🐪', '🐫', '🐘', '🐐', '🐏', '🐑', '🐎', '🐖', '🐀', '🐁', '🐓', '🐕', '🐩', '🐈', '🐇', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🌾', '🌺', '🌻', '🌹', '🌼', '🌷', '🌸', '🍄', '💐', '🌰', '🎃', '🐚', '🌎', '🌍', '🌏', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌚', '🌝', '🌛', '🌜', '🌞', '🌙', '⭐', '🌟', '💫', '✨', '⛅', '🔥', '💥', '❄️⛄', '💨', '☔', '💧', '💦', '🌊'],
      emojisFood: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🍅', '🍆', '🌽', '🍠', '🍞', '🍗', '🍖', '🍤', '🍳', '🍔', '🍟', '🍕', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍙', '🍚', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🍯', '🎂', '🍮', '🍬', '🍭', '🍫', '🍩', '🍪', '🍺', '🍻', '🍷', '🍸', '🍹', '🍶', '🍵', '☕', '🍼', '🍴'],
      emojisActivity: ['⚽', '🏀', '🏈', '🎾', '🏉', '🎱', '⛳', '🎿', '🏂', '🎣', '🚣', '🏊', '🚴', '🚵', '🏇', '🏆', '🎽', '🎫', '🎭', '🎨', '🎪', '🎤', '🎧', '🎼', '🎹', '🎷', '🎺', '🎸', '🎻', '🎬', '🎮', '👾', '🎯', '🎲', '🎰', '🎳'],
      emojisTravel: ['🚗', '🚕', '🚇', '🚙', '🚌', '🚎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🚲', '🚨', '🚍', '🚘', '🚔', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚝', '🚄', '🚅', '🚈', '🚞', '🚂', '🚆', '🚊', '🚉', '🚁', '✈️⛵', '🚤', '🚀', '💺', '⚓', '🚧', '⛽', '🚏', '🚦', '🚥', '🏁', '🚢', '🎡', '🎢', '🎠', '🌁', '🗼', '🏭', '⛲', '🎑', '🗻', '🌋', '🗾', '🌅', '🌄', '🌇', '🌆', '🌃', '🌉', '🌌', '🎇', '🎆', '🌈', '🏰', '🏯', '🗽', '🏠', '🏡', '🏢', '🏬', '⛺', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '⛪', '🌠'],
      emojisObject: ['🔨', '🔩', '🔫', '💣', '🔪', '🚬', '🔮', '💈', '🔭', '🔬', '💡', '💊', '💉', '🔖', '🚽', '🚿', '🛀', '🛁', '🔑', '🚪', '🗿', '🎈', '🎏', '🎀', '🎁', '🎊', '🎉', '🎎', '🎐', '🎌', '🏮', '✉️', '📩', '📨', '💌', '📧', '📮', '📪', '📫', '📬', '📭', '📦', '📯', '📥', '📤', '📜', '📃', '📑', '📊', '📈', '📉', '📄', '📆', '📇', '📋', '📁', '📂', '📰', '📓', '📕', '📗', '📘', '📙', '📔', '📒', '📚', '📖', '🔗', '📎', '✂️', '📐', '📏', '📌', '📍', '🚩', '🔐', '🔒', '🔓', '🔏', '✒️', '📝', '✏️', '🔍', '🔎'],
      emojisSymbol: ['🔯', '⛎', '🆔', '📴', '📳', '🆚', '💮', '🆎', '🆑', '🆘', '⛔', '📛', '🚫', '❌', '⭕', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '⁉️', '💯', '🔅', '🔆', '🔱', '〽️', '⚠️', '🚸', '🔰', '💹', '✅', '💠', '🌀', '🌐', 'Ⓜ️', '🏧', '🛂', '🛃', '🛄', '🛅', '🚭', '🚾', '✴️', '🚰', '🚹', '🚺', '🚼', '🚻', '🚮', '🎦', '📶', '🈁', '🆖', '♻️', '🆗', '🆒', '❇️', '🆕', '🆓', '🔟', '🔢', '🔀', '🔁', '⏩', '🔂', '◀️', '🔼', '🔽', '⏫', '⏬', '🆙', '➡️', '️↪️', '🔄', '🔤', '🔡', '🔠', '🔣', '🎵', '🎶', '〰️', '➿', '✔️', '🔃', '➕', '➖', '➗', '️➰', '💲', '💱', '️™️', '🔚', '🔙', '🔛', '🔝', '🔜', '☑️', '🔘', '⚪', '⚫', '🔴', '🔵', '🔹', '🔸', '🔶', '🔷', '🔺', '️◻️', '🔻', '⬛', '⬜', '🔲', '🔳', '🔈', '🔉', '🔊', '🔇', '📣', '📢', '🔔', '🀄', '🔕', '🃏', '️️♦️', '🎴', '💭', '💬', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧', '🈶', '🉐', '🈹', '🈚', '🈲', '🉑', '🈸', '🈴', '🈳', '㊗', '️㊙️', '🈺', '🈵'],
      emojisCountry: ['🇺', '🇸', '🇦', '🇪', '🇻', '🇳', '🇦', '🇹', '🇦', '🇺', '🇿', '🇦', '🇧', '🇪', '🇧', '🇷', '🇨', '🇦', '🇨', '🇭', '🇨', '🇱', '🇨', '🇳', '🇨', '🇴', '🇩', '🇪', '🇩', '🇰', '🇪', '🇸', '🇫', '🇮', '🇫', '🇷', '🇬', '🇧', '🇭', '🇰', '🇮', '🇩', '🇮', '🇪', '🇮', '🇱', '🇮', '🇳', '🇮', '🇹', '🇯', '🇵', '🇰', '🇷', '🇲', '🇴', '🇲', '🇽', '🇲', '🇾', '🇳', '🇱', '🇳', '🇴', '🇳', '🇿', '🇵', '🇭', '🇵', '🇱', '🇵', '🇷', '🇵', '🇹', '🇷', '🇺', '🇸', '🇦', '🇸', '🇪', '🇸', '🇬', '🇹', '🇷'],
    };
  },
  created() {
    Vue.nextTick(() => {
      // @ts-ignore
      this.$api.onError((data) => {
        console.error('Error from API', data);
      });
      // @ts-ignore
      this.$api.onMessage((data) => {
        store.messages.push(data.message);
      });

      // @ts-ignore
      this.$api.onUsersUpdate(({ type, user, users }) => { // type join and left
        console.log(`${user.username} just ${type} the room`);
        store.users = users;
      });
    });
  },
});

export default store;
