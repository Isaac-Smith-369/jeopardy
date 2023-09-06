<script lang="ts">
	import { gameState } from '$lib/game';
	import { fly } from 'svelte/transition';
	import Category from './Category.svelte';
	import QuestionCard from './QuestionCard.svelte';

	$: questions = $gameState.round?.questions;
</script>

{#if questions}
	<section
		in:fly={{ y: 200, duration: 2000 }}
		class=" mb-3 justify-center flex w-[95%] lg:w-[60%] text-blue-200"
	>
		{#each questions as question}
			<Category category={question[0].category}>
				{#each question as question (question.id)}
					<QuestionCard {question} on:revealQuestion />
				{/each}
			</Category>
		{:else}
			<div>No Questions Available</div>
		{/each}
	</section>
{/if}
