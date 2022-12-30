<template>
  <div class="side-menu">
    <div class="title">SIDE BAR</div>
    <LinkAction title="HOME" @click="navigateTo('home')" />
    <LinkAction title="PROFILE" @click="navigateTo('profile')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { LinkAction } from "../generics/actions";

export default defineComponent({
  components: { LinkAction },
  setup() {
    const router = useRouter();

    const navigateTo = (name: string) => {
      router.push({ name });
    };

    return { navigateTo };
  },
});
</script>

<style lang="scss" scoped>
.side-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;

  float: left;
  width: 180px;

  background-color: var(--primary-200);
}
</style>
