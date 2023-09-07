<script lang="ts">
	import { sineOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import AnswerFeedBack from './AnswerFeedback.svelte';
	import { gameState } from '$lib/game';
	import AnswerInput from './AnswerInput.svelte';

	const handleEscape = (e: KeyboardEvent) => {
		if ($gameState.attemptedQuestion) {
			e.key === 'Escape' && gameState.markQuestionAsSeen();
		}
	};
</script>

<svelte:window on:keydown={handleEscape} />

{#if $gameState.currentQuestion}
	<div
		transition:scale={{ delay: 200, duration: 200, easing: sineOut }}
		class="lg:w-[60%] w-[95%] flex items-center p-2 flex-col justify-center rounded-md text-center absolute h-[80%] bg-gray-900"
	>
		{#if $gameState.attemptedQuestion}
			<button
				class="m-10 absolute bg-red-500 rounded-full w-[50px] h-[50px] drop-shadow-lg font-extrabold hover:bg-red-500 text-white flex items-center justify-center text-2xl top-0 right-0"
				on:click={() => {
					gameState.markQuestionAsSeen();
				}}>x</button
			>
		{/if}

		<div
			class="font-extrabold mb-5 h-auto uppercase w-full md:w-[700px] lg:w-[800px] text-xl lg:text-3xl text-gray-200 drop-shadow-md"
		>
			{@html $gameState.currentQuestion.question}
		</div>
		<AnswerInput />
		{#if $gameState.answerFeedback}
			<AnswerFeedBack feedback={$gameState.answerFeedback} />
		{/if}
	</div>
{/if}
