<template>
  <div class="login-view">
    <CardBorder class="login-card">
      <div class="title">Login Page</div>
      <div class="form">
        <div>Email:</div>
        <InputRegular v-model="form.email" />
        <div>Password:</div>
        <InputRegular v-model="form.password" type="password" />
      </div>
      <div class="buttons">
        <ButtonRegular impact="medium" title="Register" />
        <ButtonRegular title="Login" @click="login()" />
      </div>
    </CardBorder>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { ButtonRegular } from "@/components/generics/actions";
import { CardBorder } from "@/components/generics/containers";
import { InputRegular } from "@/components/generics/inputs";

export default defineComponent({
  components: {
    ButtonRegular,
    CardBorder,
    InputRegular,
  },
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });

    const login = () => {
      console.log("Login", form.email, form.password);
    };

    return { form, login };
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
    gap: 16px;
    padding: 24px;

    .title {
      color: var(--neutral-900);
      font-size: 32px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 8px;

      color: var(--neutral-900);

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
