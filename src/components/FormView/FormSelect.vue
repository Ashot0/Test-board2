<template>
	<div class="form-select">
		<label class="form-select__label" :for="name">{{ label }}</label>

		<Field :name="name" :rules="rules" v-slot="{ field, errors }">
			<Multiselect
				v-bind="field"
				v-model="field.value"
				:options="options"
				:multiple="multiple"
				:placeholder="placeholder"
				:disabled="disabled"
				class="form-select__input"
			/>
		</Field>

		<ErrorMessage :name="name" class="form-select__error" />
	</div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';
import Multiselect from 'vue-multiselect';
import { computed } from 'vue';

const props = defineProps({
	name: String,
	label: String,
	options: Array,
	multiple: Boolean,
	placeholder: String,
	rules: [String, Function, Object, Array],
	disabled: Boolean,
});

const fieldValue = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value),
});

const emit = defineEmits(['update:modelValue']);
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.form-select {
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	max-width: 370px;

	&__input {
		width: 100%;
	}

	&__error {
		color: red;
	}
}
</style>
