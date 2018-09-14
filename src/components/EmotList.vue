<template>
    <span @click="emotChoice(emoji)">
        {{ emoji }}
    </span>
</template>

<script>
import store from '../store';

export default {
  props: ['emoji'],
  methods: {
    emotChoice(emoji) {
      this.$emit('emotChoice', emoji); // $emit fait remonter l'Event
    },
  },
};
</script>

<style lang="scss">
    .emoji-target {
        animation: bounce .2s ease-out forwards;
    }
    @keyframes bounce {
        0%{font-size: 1em;}
        50%{font-size: 1.2em;}
        100%{font-size: 1em;}
    }
</style>
