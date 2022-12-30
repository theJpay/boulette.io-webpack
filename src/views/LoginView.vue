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
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { ButtonRegular } from "@/components/generics/actions";
import { FormCard } from "@/components/userForm";
import { signIn } from "@/services/users";

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
    const form = ref({
      email: "",
      password: "",
    });

    const login = async () => {
      await signIn(form.value.email, form.value.password);
      router.push({ name: "home" });
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
