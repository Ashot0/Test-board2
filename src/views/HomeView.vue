<template>
	<div class="home">
		<Header />
		<div class="home__text">
			<!-- text -->
		</div>
	</div>
</template>

<script setup>
import Header from '@/components/ui/Header.vue';
</script>

<style lang="scss" scoped>
.home {
	width: 100vw;
	max-width: 100vw;
	overflow: hidden;
	min-height: 100vh;
	background-image: url(../assets/Images/bg.jpg);
	background-size: 50%;

	&__text {
		height: 6000px;
	}
}
</style>
