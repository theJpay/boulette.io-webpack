<template>
  <div class="home">
    <h1>Hello {{ user?.email }}, {{ user?.emailVerified }}</h1>
    <LinkAction title="Sign out" @click="signOut()" />
    <LinkAction title="Verification email" @click="onSendVerificationEmail()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import {
  sendVerificationEmail,
  signOut as signOutUser,
  useAuthState,
} from "@/services/users";
import { LinkAction } from "@/components/generics/actions";

export default defineComponent({
  components: { LinkAction },
  setup() {
    const router = useRouter();

    const { user } = useAuthState();

    const signOut = async () => {
      await signOutUser();
      router.push({ name: "login" });
    };

    const onSendVerificationEmail = async () => {
      await sendVerificationEmail();
    };

    return { onSendVerificationEmail, signOut, user };
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}
</style>
