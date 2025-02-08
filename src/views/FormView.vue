<template>
	<Header />
	<div class="form-view">
		<div class="form-view__title">
			<p>
				Каждый input и select это отдельные ui элементы, и в форму просто
				прокидываются данные о необходимых полях, и на основе этих данных
				строиться форма 🧐
			</p>

			<p>
				Тут отрисованно 12 отличающихся форм используя одни и те же ui элементы,
				и один компонент формы. Благодаря тому что составные части формы это
				отдельные ui компоненты, форм можно сделать много разных используя один
				и тот же набор компонентов 🧐
			</p>
		</div>

		<div class="form-view__forms">
			<FormComponent :title="'Первый заголовок'" :formFields="formFields1" />
			<FormComponent :title="'Второй заголовок'" :formFields="formFields2" />
			<FormComponent :title="'Третий заголовок'" :formFields="formFields3" />
			<FormComponent :title="'Четвёртый заголовок'" :formFields="formFields4" />
			<FormComponent :title="'Пятый заголовок'" :formFields="formFields5" />
			<FormComponent :title="'Шестой заголовок'" :formFields="formFields6" />
			<FormComponent :title="'Седьмой заголовок'" :formFields="formFields7" />
			<FormComponent :title="'Восьмой заголовок'" :formFields="formFields8" />
			<FormComponent :title="'Девятый заголовок'" :formFields="formFields9" />
			<FormComponent :title="'Десятый заголовок'" :formFields="formFields10" />
			<FormComponent
				:title="'Предпоследний заголовок'"
				:formFields="formFields11"
			/>
			<FormComponent
				:title="'Последний заголовок'"
				:formFields="formFields12"
			/>
		</div>
	</div>
</template>

<script setup>
import FormComponent from '@/components/FormView/FormComponent.vue';
import Header from '@/components/ui/Header.vue';
import {
	countries,
	cities,
	genders,
	languages,
	hobbies,
	schema,
} from '@/constants/formConfig';

const formFields1 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields2 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields3 = {
	inputFields: [
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields4 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
	],
	selectFields: [
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields5 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
	],
};

const formFields6 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [],
};

const formFields7 = {
	inputFields: [],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields8 = {
	inputFields: [
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],

	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields9 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'phone',
			label: 'Номер телефона',
			placeholder: 'Номер телефона',
			rules: schema.phone,
		},
		{
			name: 'nickname',
			label: 'Никнейм',
			placeholder: 'Никнейм',
			rules: schema.nickname,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],
	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};

const formFields10 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
	],
	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
	],
};

const formFields11 = {
	inputFields: [
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],
	selectFields: [
		{
			name: 'country',
			label: 'Страна',
			options: countries,
			rules: schema.country,
		},
		{
			name: 'gender',
			label: 'Пол',
			options: genders,
			rules: schema.gender,
		},
	],
};

const formFields12 = {
	inputFields: [
		{
			name: 'firstName',
			label: 'Имя',
			placeholder: 'Имя',
			rules: schema.firstName,
		},
		{
			name: 'lastName',
			label: 'Фамилия',
			placeholder: 'Фамилия',
			rules: schema.lastName,
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'Email',
			rules: schema.email,
		},
		{
			name: 'password',
			label: 'Пароль',
			placeholder: 'Пароль',
			type: 'password',
			rules: schema.password,
		},
	],
	selectFields: [
		{
			name: 'city',
			label: 'Город',
			options: cities,
			rules: schema.city,
		},
		{
			name: 'language',
			label: 'Язык',
			options: languages,
			rules: schema.language,
		},
		{
			name: 'hobby',
			label: 'Хобби',
			options: hobbies,
			rules: schema.hobby,
			multiple: true,
		},
	],
};
</script>

<style lang="scss" scoped>
.form-view {
	margin: 140px 10px 40px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	&__title {
		text-align: center;
	}

	&__forms {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		gap: 20px;
		flex-wrap: wrap;
	}
}
</style>
