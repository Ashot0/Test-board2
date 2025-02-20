<template>
	<header
		:class="[
			'header',
			{ 'header--compact': isCompact, 'header--hidden': isHidden },
		]"
	>
		<img :class="['header__logo']" src="@/assets/logo.png" alt="Logo" />

		<button class="header__burger" @click="toggleMenu">
			<span></span>
			<span></span>
			<span></span>
		</button>

		<nav
			:class="[
				'header__nav',
				{ 'header__nav--open': isMenuOpen, 'header__nav--compact': isCompact },
			]"
		>
			<router-link class="header__link" to="/" @click="closeMenu">
				Home
			</router-link>
			<router-link class="header__link" to="/form" @click="closeMenu">
				Form
			</router-link>
			<router-link class="header__link" to="/pin-img" @click="closeMenu">
				Pin-Img
			</router-link>
		</nav>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isMenuOpen = ref(false);
const isCompact = ref(false);
const isHidden = ref(false);

let lastScrollY = window.scrollY;
let scrollUpDistance = 0;

const enableScroll = () => {
	document.body.style.overflow = '';
	document.body.style.position = '';
	document.body.style.width = '';
	document.body.style.top = '';
};

const disableScroll = () => {
	document.body.style.top = `-${window.scrollY}px`;
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.width = '100%';
};

const toggleMenu = () => {
	if (isMenuOpen.value) {
		const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
		enableScroll();
		window.scrollTo(0, scrollY);
	} else {
		disableScroll();
	}
	isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
	if (isMenuOpen.value) toggleMenu();
};

const handleScroll = () => {
	const scrollY = window.scrollY;
	isCompact.value = window.innerWidth > 1024 && scrollY > 250;

	if (window.innerWidth <= 1024) {
		if (window.innerWidth > window.innerHeight) {
			scrollUpDistance =
				scrollY < lastScrollY ? scrollUpDistance + (lastScrollY - scrollY) : 0;
			isHidden.value = scrollY > lastScrollY || scrollUpDistance < 60;
		} else {
			isHidden.value = false;
		}
	}
	lastScrollY = scrollY;
};

const handleResize = () => {
	if (window.innerWidth > 768 && isMenuOpen.value) {
		enableScroll();
		isMenuOpen.value = false;
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
	window.removeEventListener('resize', handleResize);
	enableScroll();
});

watch(isMenuOpen, (open) => {
	if (!open) enableScroll();
});
</script>

<style lang="scss" scoped>
.header {
	z-index: 200;
	display: flex;
	align-items: center;
	padding: 20px 30px;
	gap: 50px;
	width: 100vw;
	background-color: var(--blue-color);
	position: fixed;
	top: 0;
	left: 0;
	transition: padding 0.3s ease, transform 0.3s ease-in-out;

	&--compact {
		@media (min-width: 1025px) {
			padding: 10px 15px;
		}
	}

	&--hidden {
		@media (max-width: 1024px) and (orientation: landscape) {
			transform: translateY(-100%);
		}
	}

	&__logo {
		width: 70px;
		height: 75px;
	}

	&__nav {
		display: flex;
		width: max-content;
		gap: 20px;
		position: relative;
		transition: left 0.3s ease-in-out, transform 0.3s ease;

		@media (max-width: 768px) {
			position: absolute;
			top: 99%;
			right: -230px;
			flex-direction: column;
			width: 200px;
			padding: 15px;
			background: var(--blue-color);
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			transition: right 0.3s ease-in-out;
		}

		@media (min-width: 769px) {
			left: 0;
		}

		&--open {
			right: 0;
		}

		&--compact {
			@media (min-width: 1025px) {
				transition: left 0.3s ease-in-out, transform 0.3s ease;
				left: calc(50% - 145px);
				transform: translateX(-50%);
			}
		}
	}

	&__link {
		font-size: 20px;
		text-transform: uppercase;
		font-weight: 600;
		text-decoration: none;
		color: var(--background-dark-blue);
	}

	&__burger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;

		span {
			width: 30px;
			height: 3px;
			background: var(--background-dark-blue);
			transition: transform 0.3s ease-in-out;
		}

		@media (max-width: 768px) {
			display: flex;
		}
	}
}
</style>
