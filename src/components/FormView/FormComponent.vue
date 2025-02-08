<template>
	<Form class="form" :initial-values="values" @submit="onSubmit">
		<h3 class="form__title">{{ props.title }}</h3>

		<template v-for="field in formFields.inputFields" :key="field.name">
			<FormInput
				class="form__input"
				v-bind="field"
				:placeholder="field.placeholder"
				:readonly="isSubmitting"
			/>
		</template>

		<template v-for="field in formFields.selectFields" :key="field.name">
			<FormSelect
				v-model="values[field.name]"
				class="form__select"
				:name="field.name"
				:label="field.label"
				:options="field.options"
				:rules="field.rules"
				:multiple="field.multiple || false"
				:disabled="isSubmitting"
			/>
		</template>

		<button class="form__button" type="submit" :disabled="isSubmitting">
			Отправить
		</button>

		<p v-if="isSuccess" class="form__success">Форма успешно отправлена!</p>
	</Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';

const props = defineProps({
	title: String,
	formFields: {
		inputFields: Array,
		selectFields: Array,
	},
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const values = ref({
	firstName: '',
	lastName: '',
	phone: '',
	nickname: '',
	email: '',
	password: '',
	country: null,
	city: null,
	gender: null,
	language: null,
	hobby: [],
});

const onSubmit = async (formValues, { resetForm }) => {
	if (isSubmitting.value) return;
	isSubmitting.value = true;
	isSuccess.value = false;

	await new Promise((resolve) => setTimeout(resolve, 1000));

	isSubmitting.value = false;
	isSuccess.value = true;
	resetForm();
};
</script>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	border-radius: 8px;
	border: 1px solid rgba(151, 151, 151, 0.541);
	padding: 5px;

	&__title {
		font-size: 1.15rem;
		text-transform: uppercase;
		text-align: center;
	}

	&__select,
	&__input {
		padding: 5px;
	}

	&__button {
		padding: 0 5px;
		min-height: 40px;
		border: 1px solid #e8e8e8;
		border-radius: 5px;
		background-color: white;

		&:hover {
			background-color: #f8f8f8;
		}

		&:active {
			background-color: #e8e8e8;
		}
	}

	&__success {
		color: green;
		font-weight: bold;
		margin-top: 10px;
	}
}
</style>
