<template>
	<div v-click-outside="hideText" class="pin-img">
		<button
			@click="toggleText"
			:class="{ 'pin-img__pin_active': isOpen }"
			class="pin-img__pin"
		>
			<img class="pin-img__plus" src="@/assets/Images/icon-plus.png" alt="" />
		</button>

		<div :class="{ 'pin-img__text_active': isOpen }" class="pin-img__text">
			<router-link to="/">Линк на home</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleText = () => {
	isOpen.value = !isOpen.value;
};

const hideText = () => {
	isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.pin-img {
	position: absolute;

	&__pin {
		z-index: 20;
		position: absolute;
		width: 30px;
		height: 30px;
		border: none;
		padding: 0;
		border-radius: 50%;
		background-color: var(--white-color);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transform: translate(-50%, -50%);
		transition: transform 0.3s, width 0.3s, height 0.3s, box-shadow 0.3s;

		&:hover {
			width: 37.5px;
			height: 37.5px;
		}

		&_active {
			transform: translate(-50%, -50%) rotate(45deg);
			box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		}
	}

	&__text {
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-50%);
		width: 250px;
		height: 0px;
		background-color: var(--white-color);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		padding: 0 10px;
		transition: padding 0.3s, height 0.3s;

		&_active {
			height: 150px;
			padding: 10px;
		}
	}

	&__plus {
		width: 75%;
		height: 75%;
		pointer-events: none;
	}
}
</style>
