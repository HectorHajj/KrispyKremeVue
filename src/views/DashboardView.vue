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

<script>
import { ref, onMounted } from 'vue';
import SalesTable from '../components/dashboard/SalesTable.vue';
import BaseTableCard from '../components/base/BaseTableCard.vue';

export default {
    name: 'DashboardView',
    components: {
        SalesTable,
        BaseTableCard
    },
    setup() {
        const sales = ref([]);

        const fetchSales = async () => {
            const response = await fetch('http://localhost:5092/api/Sales');
            sales.value = await response.json();
        };

        onMounted(() => {
            fetchSales();
        });

        return {
            sales,
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