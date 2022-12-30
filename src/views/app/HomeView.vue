<template>
  <div class="about">
    <h1>Hello {{ user?.email }}</h1>
    <LinkAction title="Sign out" @click="signOut()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { signOut as signOutUser, useAuthState } from "@/services/users";
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

    return { signOut, user };
  },
});
</script>
