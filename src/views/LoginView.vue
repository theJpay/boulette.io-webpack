<template>
  <div class="login-view">
    <div class="title">Login Page</div>
    <ButtonRegular title="Login" @click="login()" />
    <ButtonRegular impact="medium" title="Register" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonRegular } from "@/components/generics/actions";

export default defineComponent({
  components: {
    ButtonRegular,
  },
  setup() {
    const login = () => {
      console.log("Login");
    };

    return { login };
  },
});
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: var(--primary-500);
  font-size: 32px;
}
</style>
