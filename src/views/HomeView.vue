<template>
	<div class="home">
		<LoaderDefault @loaded="onImagesLoaded" />
		<Header />

		<div v-if="!loader" class="home__text">
			<!-- text -->
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import LoaderDefault from '@/components/ui/LoaderDefault.vue';
import Header from '@/components/ui/Header.vue';

const loader = ref(true);

const onImagesLoaded = () => {
	loader.value = false;
};
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
