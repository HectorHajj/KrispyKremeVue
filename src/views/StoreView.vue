<template>
    <main class="container">
        <div class="row my-5">
            <div class="col">
                <div class="card">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <div class="w-100">
                            <h5 class="card-title fw-bold krispyGreenText text-center">STORE</h5>

                            <form @submit.prevent="submitSale">
                                <div class="row mb-3">
                                    <div class="col">
                                        <label for="doughnutId" class="form-label">Select Doughnut</label>
                                        <select id="doughnutId" v-model="form.doughnutId" class="form-control mw-100"
                                            @change="validateForm">
                                            <option value="">Select a Doughnut</option>
                                            <option v-for="doughnut in doughnuts" :key="doughnut.id"
                                                :value="doughnut.id">
                                                {{ doughnut.name }}
                                            </option>
                                        </select>
                                        <span class="text-danger">{{ validationMessages.doughnutId }}</span>
                                    </div>
                                    <div class="col">
                                        <label for="quantity" class="form-label">Quantity</label>
                                        <input type="number" id="quantity" v-model="form.quantity"
                                            class="form-control mw-100" @input="validateForm" />
                                        <span class="text-danger">{{ validationMessages.quantity }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col d-flex justify-content-center align-items-center">
                                        <button type="submit" class="btn krispyRedText fw-bold">SUBMIT</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { ref, onMounted, Ref } from 'vue';
import { useAuthStore } from '../store/modules/auth/authStore';
import { Doughnut } from '../models/Doughnut';
import { Form } from '../models/Form';
import { ValidationMessages } from '../models/ValidationMessages';

export default {
    name: 'StoreView',
    setup() {
        const authStore = useAuthStore();
        const doughnuts: Ref<Doughnut[]> = ref([]);
        const form: Ref<Form> = ref({
            doughnutId: '',
            saleDate: new Date().toISOString(),
            quantity: 0
        });
        const validationMessages: Ref<ValidationMessages> = ref({});

        const fetchDoughnuts = async (): Promise<void> => {
            const response = await fetch('http://localhost:5092/api/Doughnut');
            doughnuts.value = await response.json();
        };

        const validateForm = (): void => {
            validationMessages.value = {};

            if (!form.value.doughnutId) {
                validationMessages.value.doughnutId = 'Please select a doughnut.';
            }

            if (!form.value.quantity || form.value.quantity <= 0) {
                validationMessages.value.quantity = 'Please enter a valid quantity.';
            }
        };

        const submitSale = async (): Promise<void> => {
            validateForm();

            if (Object.values(validationMessages.value).some(msg => msg)) {
                return;
            }

            const saleData = {
                ...form.value,
                customerId: authStore.customerId
            };

            const response = await fetch('http://localhost:5092/api/Sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authStore.token}`
                },
                body: JSON.stringify(saleData)
            });

            if (response.ok) {
                alert('Sale submitted successfully');
            } else {
                alert('Failed to submit sale');
            }
        };

        onMounted(() => {
            fetchDoughnuts();
        });

        return {
            doughnuts,
            form,
            validationMessages,
            validateForm,
            submitSale
        };
    }
};
</script>

<style scoped>
.krispyGreenText {
    color: green;
}

.krispyRedText {
    color: red;
}
</style>