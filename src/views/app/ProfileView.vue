<template>
  <div v-if="isSelf">This is your profile page</div>
  <div v-else>This is the profile page of "{{ userId }}"</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const userId = ref(route.params.id);
    const isSelf = computed(() => !userId.value);

    return { isSelf, userId };
  },
});
</script>
