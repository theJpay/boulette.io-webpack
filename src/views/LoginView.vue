<template>
  <div class="login-view">
    <FormCard v-model:form="form" :config="config" title="Boulette.io">
      <template #actions>
        <ButtonRegular
          impact="medium"
          title="Create account"
          @click="goToRegister()"
        />
        <ButtonRegular title="Login" @click="login()" />
      </template>
    </FormCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ButtonRegular } from "@/components/generics/actions";
import { FormCard } from "@/components/userForm";

const LOGIN_FIELDS = [
  {
    formKey: "email",
    title: "Email",
  },
  {
    formKey: "password",
    title: "Password",
    type: "password",
  },
];

export default defineComponent({
  components: {
    ButtonRegular,
    FormCard,
  },
  setup() {
    const router = useRouter();

    const config = ref(LOGIN_FIELDS);
    const form = reactive({
      email: "",
      password: "",
    });

    const login = () => {
      console.log("Login", form.email, form.password);
    };
    const goToRegister = () => {
      router.push({ name: "register" });
    };

    return { config, form, goToRegister, login };
  },
});
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
