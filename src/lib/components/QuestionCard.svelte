<script lang="ts">
	import type { Question } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let question: Question;

	const dispatch = createEventDispatcher<{ revealQuestion: Question }>();
</script>

<button
	disabled={question.seen}
	class:hover:bg-blue-900={!question.seen}
	on:click={() => dispatch('revealQuestion', question)}
	class="h-[90px] shadow-md text-yellow-500 rounded-sm mb-1 flex w-full text-2xl md:text-3xl lg:text-4xl font-extrabold justify-center items-center bg-gray-900"
>
	{#if question.seen}
		<p />
	{:else}
		<p class="">{question.value}</p>
	{/if}
</button>
