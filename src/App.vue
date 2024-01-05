<template>
	<section class="bg-gray-100 h-screen flex flex-col">
		<Header></Header>
		<main class="flex-grow p-4">
			<router-view v-slot="{ Component }" class="container mx-auto h-full p-4 rounded bg-white">
				<transition name="nested" mode="out-in" @transitionend="transitionend">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
	</section>
</template>
<script setup lang="ts">
import Header from './components/Header.vue'
function transitionend() {
	console.log('transitionend')
}
</script>
