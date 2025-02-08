<template>
	<div v-if="isVisible" class="loader__wrapper">
		<div class="loader"></div>
	</div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';

const isVisible = ref(true);

const props = defineProps({
	selector: {
		type: String,
		default: 'img',
	},
});

const emit = defineEmits(['loaded']);

const waitForImagesToLoad = (selector) => {
	return new Promise((resolve) => {
		const images = document.querySelectorAll(selector);
		let loadedCount = 0;

		if (!images.length) {
			resolve();
			return;
		}

		images.forEach((img) => {
			img.onload = img.onerror = () => {
				loadedCount++;
				if (loadedCount === images.length) {
					resolve();
				}
			};
		});
	});
};

onMounted(async () => {
	await waitForImagesToLoad(props.selector);

	isVisible.value = false;

	emit('loaded');
});
</script>

<style lang="scss" scoped>
.loader {
	--d: 22px;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	color: var(--blue-medium-color);
	box-shadow: calc(1 * var(--d)) calc(0 * var(--d)) 0 0,
		calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 1px,
		calc(0 * var(--d)) calc(1 * var(--d)) 0 2px,
		calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
		calc(-1 * var(--d)) calc(0 * var(--d)) 0 4px,
		calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
		calc(0 * var(--d)) calc(-1 * var(--d)) 0 6px;
	animation: s7 1s infinite steps(8);

	&__wrapper {
		width: 100%;
		height: 100%;
		min-height: 450px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
@keyframes s7 {
	100% {
		transform: rotate(1turn);
	}
}
</style>
