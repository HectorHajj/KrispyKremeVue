<template>
    <div class="register-form">
        <h2 class="text-center">Register</h2>
        <form @submit.prevent="submitRegister">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" v-model="form.name" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" id="address" v-model="form.address" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required />
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { RegisterForm } from './types/RegisterForm';

export default {
    name: 'RegisterForm',
    setup() {
        const form = ref<RegisterForm>({
            name: '',
            email: '',
            address: '',
            password: ''
        });

        const submitRegister = async () => {
            try {
                const response = await fetch('http://localhost:5092/api/Auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form.value)
                });

                if (response.ok) {
                    alert('Registration successful');
                } else {
                    confirm('Registration failed');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred during registration');
            }
        };

        return {
            form,
            submitRegister
        };
    }
};
</script>

<style scoped>
.register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.text-center {
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}
</style>