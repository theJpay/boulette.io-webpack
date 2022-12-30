<template>
  <div class="login-view">
    <CardBorder class="login-card">
      <div class="title">Login Page</div>
      <ButtonRegular title="Login" @click="login()" />
      <ButtonRegular impact="medium" title="Register" />
    </CardBorder>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ButtonRegular } from "@/components/generics/actions";
import { CardBorder } from "@/components/generics/containers";

export default defineComponent({
  components: {
    ButtonRegular,
    CardBorder,
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
  align-items: center;
  justify-content: center;
  height: 100vh;

  .login-card {
    display: flex;
    flex-direction: column;
    padding: 24px;

    .title {
      color: var(--primary-500);
      font-size: 32px;
    }
  }
}
</style>
