<template>
    <div class="col-sm-12 col-md-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title fw-bold krispyGreenText">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted krispyGreenText">{{ subtitle }}</h6>
                <router-link :to="link" class="card-link fw-bold krispyRedText">GO</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BaseCard',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
});
</script>