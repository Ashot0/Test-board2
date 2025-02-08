<template>
	<div class="form-input">
		<label class="form-input__label" :for="name">{{ label }}</label>

		<Field
			class="form-input__field"
			:name="name"
			:type="type"
			:rules="rules"
			v-slot="{ field }"
		>
			<input
				class="form-input__input"
				:class="readonly && 'form-input__input_readonly'"
				:type="type"
				v-bind="field"
				:placeholder="props.placeholder"
				:readonly="readonly"
			/>
		</Field>

		<ErrorMessage :name="name" class="form-input__error" />
	</div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
	name: String,
	label: String,
	type: {
		type: String,
		default: 'text',
	},
	placeholder: String,
	rules: [String, Function, Object],
	readonly: Boolean,
});
</script>

<style lang="scss" scoped>
.form-input {
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	max-width: 370px;
	margin: 0 10px 0 0;

	&__input {
		width: 100%;
		padding: 0 5px;
		min-height: 40px;
		border: 1px solid var(--grey-light);
		border-radius: 5px;

		&_readonly {
			background-color: var(--grey-ultra-light);
			cursor: not-allowed;
		}
	}

	&__error {
		color: red;
	}
}
</style>
