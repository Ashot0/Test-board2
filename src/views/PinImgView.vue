<template>
	<LoaderDefault @loaded="onImagesLoaded" />

	<div v-if="!loader" class="pin-img-view">
		<PinDropdown class="pin-img-view__pin--lamp">
			<router-link to="/">Линк на home</router-link>
		</PinDropdown>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import LoaderDefault from '@/components/ui/LoaderDefault.vue';
import PinDropdown from '@/components/PinImgView/PinDropdown.vue';

const loader = ref(true);

const onImagesLoaded = () => {
	loader.value = false;
};
</script>

<style lang="scss" scoped>
.pin-img-view {
	width: 100vw;
	height: 100vh;
	background: url(../assets/Images/1.jpg) no-repeat center center fixed;
	background-size: 100% 100%;
	position: relative;

	&__pin {
		&--lamp {
			top: 48.5vh;
			left: 36.9vw;
		}
	}
}
</style>
