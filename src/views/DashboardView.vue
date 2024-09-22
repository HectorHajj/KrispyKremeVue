<template>
    <main class="container">
        <div class="row my-5">
            <div class="col">
                <BaseTableCard>
                    <SalesTable :sales="sales" />
                </BaseTableCard>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import { ref, onMounted, Ref } from 'vue';
import SalesTable from '../components/dashboard/SalesTable.vue';
import BaseTableCard from '../components/base/BaseTableCard.vue';
import { DashboardSale } from '../models/DashboardSale';

export default {
    name: 'DashboardView',
    components: {
        SalesTable,
        BaseTableCard
    },
    setup() {
        const sales: Ref<DashboardSale[]> = ref([]);

        const fetchSales = async (): Promise<void> => {
            const response = await fetch('http://localhost:5092/api/Sales');
            sales.value = await response.json();
        };

        onMounted(() => {
            fetchSales();
        });

        return {
            sales
        };
    }
};
</script>