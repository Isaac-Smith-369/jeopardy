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
	class="h-[90px] text-yellow-500 rounded-sm mb-1 flex w-full text-xl md:text-2xl lg:text-3xl font-extrabold justify-center items-center bg-blue-800"
>
	{#if question.seen}
		<p />
	{:else}
		<p class="">${question.value}</p>
	{/if}
</button>
