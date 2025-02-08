<template>
	<div @click="hiddenText" class="pin-img-view">
		<button
			@click.stop="toggleText"
			:class="{ 'pin-img-view__pin_active': isOpen }"
			class="pin-img-view__pin"
		>
			<img
				class="pin-img-view__plus"
				src="@/assets/Images/icon-plus.png"
				alt=""
			/>
		</button>

		<div
			:class="{ 'pin-img-view__text_active': isOpen }"
			@click.stop
			class="pin-img-view__text"
		>
			<p>
				Я немного не понял на что именно вешать тень, поэтому она на самом пине
			</p>
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

const hiddenText = () => {
	isOpen.value = false;
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
		z-index: 20;
		position: absolute;
		top: 48.5vh;
		left: 36.9vw;
		transform: translate(-50%, -50%);
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
		top: 48.5vh;
		left: 36.9vw;
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
