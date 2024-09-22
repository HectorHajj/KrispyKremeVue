<template>
    <div class="login-view">
        <div class="row">
            <div class="col">
                <button @click="showLogin = !showLogin">
                    {{ showLogin ? 'Show Register' : 'Show Login' }}
                </button>
                <LoginForm v-if="showLogin" />
                <RegisterForm v-else />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue';
import LoginForm from '../components/login/LoginForm.vue';
import RegisterForm from '../components/login/RegisterForm.vue';

export default {
    name: 'LoginView',
    components: {
        LoginForm,
        RegisterForm
    },
    setup() {
        const showLogin: Ref<boolean> = ref(true);
        return {
            showLogin
        };
    }
};
</script>

<style scoped>
.login-view {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>