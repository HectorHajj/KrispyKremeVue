<template>
    <div class="w-100">
        <h5 class="card-title fw-bold krispyGreenText text-center">Sales</h5>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Doughnut</th>
                    <th>Quantity</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sale in sales" :key="sale.id" @click="goToSaleDescription(sale.id)">
                    <td>{{ sale.customerName }}</td>
                    <td>{{ sale.customerAddress }}</td>
                    <td>{{ sale.doughnutName }}</td>
                    <td>{{ sale.quantity }}</td>
                    <td>{{ new Date(sale.saleDate).toLocaleDateString() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DashboardSale } from '../../models/DashboardSale';

export default defineComponent({
    name: 'SalesTable',
    props: {
        sales: {
            type: Array as PropType<DashboardSale[]>,
            required: true
        }
    },
    methods: {
        goToSaleDescription(saleId: number): void {
            this.$router.push({ name: 'sale-description', params: { id: saleId } });
        }
    }
});
</script>