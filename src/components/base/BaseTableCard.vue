<template>
    <div class="card mb-5">
        <div class="card-body d-flex justify-content-center align-items-center">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseTableCard'
};
</script>