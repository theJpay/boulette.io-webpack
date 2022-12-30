<template>
  <div class="register-view">
    <FormCard v-model:form="form" :config="config" title="Boulette.io">
      <template #actions>
        <div class="actions">
          <ButtonRegular title="Register" @click="register()" />
          <div>
            Already have an account?
            <LinkAction title="Sign in" @click="goToLogin()" />
          </div>
        </div>
      </template>
    </FormCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { ButtonRegular, LinkAction } from "@/components/generics/actions";
import { FormCard } from "@/components/userForm";
import { createUser } from "@/services/users";

const LOGIN_FIELDS = [
  {
    formKey: "email",
    title: "Email",
  },
  {
    formKey: "pseudo",
    title: "Pseudo",
  },
  {
    formKey: "password",
    title: "Password",
    type: "password",
  },
  {
    formKey: "passwordConfirm",
    title: "Confirm password",
    type: "password",
  },
];

export default defineComponent({
  components: {
    ButtonRegular,
    FormCard,
    LinkAction,
  },
  setup() {
    const router = useRouter();

    const config = ref(LOGIN_FIELDS);
    const form = ref({
      email: "",
      password: "",
      passwordConfirm: "",
      pseudo: "",
    });

    const goToLogin = () => {
      router.push({ name: "login" });
    };
    const register = async () => {
      await createUser(
        form.value.email,
        form.value.password,
        form.value.pseudo
      );
      router.push({ name: "home" });
    };

    return { config, form, goToLogin, register };
  },
});
</script>

<style lang="scss" scoped>
.register-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
}
</style>
