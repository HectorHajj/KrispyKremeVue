<template>
    <div>
        <h1>Sale Description</h1>
        <div v-if="sale">
            <p><strong>Customer Name:</strong> {{ sale.customerName }}</p>
            <p><strong>Customer Address:</strong> {{ sale.customerAddress }}</p>
            <p><strong>Doughnut:</strong> {{ sale.doughnutName }}</p>
            <p><strong>Quantity:</strong> {{ sale.quantity }}</p>
            <p><strong>Date:</strong> {{ new Date(sale.saleDate).toLocaleDateString() }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '../store/modules/auth/authStore';
import { CreateSale } from '../models/CreateSale';

export default {
    name: 'SaleDescriptionView',
    setup() {
        const authStore = useAuthStore();
        const sale: Ref<CreateSale | null> = ref(null);
        const route = useRoute();

        const fetchSaleDetails = async (saleId: string): Promise<void> => {
            try {
                const response = await fetch(`http://localhost:5092/api/Sales/${saleId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authStore.token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: CreateSale = await response.json();
                sale.value = data;
            } catch (error) {
                console.error('Error fetching sale details:', error);
            }
        };

        onMounted(() => {
            const saleId = route.params.id as string;
            fetchSaleDetails(saleId);
        });

        return {
            sale
        };
    }
};
</script>