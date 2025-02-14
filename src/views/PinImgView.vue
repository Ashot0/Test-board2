<template>
	<LoaderDefault @loaded="onImagesLoaded" />

	<img
		class="pin-img-view__background"
		src="@/assets/Images/1.jpg"
		alt=""
		srcset=""
	/>

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
@import '../scss/base/mixins.scss';
//
.pin-img-view {
	width: 100vw;
	height: 100vh;
	position: relative;

	&__background {
		z-index: 10;
		position: absolute;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
	}

	&__pin {
		&--lamp {
			z-index: 15;
			position: absolute;
			@include vh-percentage(2668px, 1293px);
			@include vw-percentage(4000px, 1476px);

			transform: translate(-50%, -50%);

			@media (max-aspect-ratio: 3/2) {
				@include dynamic-viewport-offset-left(100vw / 4000px * 1476px);
			}

			@media (min-aspect-ratio: 3/2) {
				@include dynamic-viewport-offset-top(100vh / 2668px * 1293px);
			}
		}
	}
}
</style>
