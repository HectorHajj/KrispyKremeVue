<template>
  <nav class="navbar navbar-expand-sm navbar-toggleable-sm bg-light">
    <div class="container">
      <RouterLink to="/" class="navbar-brand krispyRedText fw-bold">KRISPY KREME VUE</RouterLink>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
        title="Toggle navigation" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-sm-inline-flex justify-content-between">
        <ul class="navbar-nav flex-grow-1">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link fw-bold"
              :class="{ 'krispyRedText': isActiveRoute('Home'), 'krispyGreenText': !isActiveRoute('Home') }">HOME
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/store" class="nav-link fw-bold"
              :class="{ 'krispyRedText': isActiveRoute('Store'), 'krispyGreenText': !isActiveRoute('Store') }">STORE
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/dashboard" class="nav-link fw-bold"
              :class="{ 'krispyRedText': isActiveRoute('Dashboard'), 'krispyGreenText': !isActiveRoute('Dashboard') }">
              DASHBOARD</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link fw-bold"
              :class="{ 'krispyRedText': isActiveRoute('Login'), 'krispyGreenText': !isActiveRoute('Login') }">
              LOGIN | REGISTER</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute();

    const isActiveRoute = (routeName) => {
      return route.name === routeName;
    };

    return {
      isActiveRoute,
    };
  },
};
</script>

<style>
.krispyRedText {
  color: red;
}

.krispyGreenText {
  color: green;
}
</style>