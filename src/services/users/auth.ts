import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutUser,
} from "firebase/auth";
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { User, Unsubscribe } from "firebase/auth";

export function useAuthState() {
  const user = ref<User | null>(null);
  const error = ref<Error | null>(null);

  const auth = getAuth();
  let unsubscribe: Unsubscribe;
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (error.value = e)
    );
  });
  onUnmounted(() => unsubscribe());

  const isAuthenticated = computed(() => user.value != null);

  return { user, error, isAuthenticated };
}

export async function getUserState() {
  return new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  );
}

export async function signIn(email: string, password: string) {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    const auth = getAuth();
    await signOutUser(auth);
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(email: string, password: string) {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}
