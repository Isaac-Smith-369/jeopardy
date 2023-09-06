<script lang="ts">
	import { gameState } from '$lib/game';
	import type { Action } from 'svelte/action';

	const focusOnInit: Action<HTMLInputElement> = (node) => {
		node && typeof node.focus === 'function' && node.focus();
	};
</script>

<form
	on:submit|preventDefault={() => {
		gameState.checkAnswer();
	}}
	class="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 px-3 mb-2"
>
	<span class="text-lg font-semibold">What is</span>
	<input
		name="answer"
		type="text"
		bind:value={$gameState.currentPlayerAnswer}
		use:focusOnInit
		autocomplete="off"
		placeholder="Answer here"
		class="h-[50px] uppercase mb-1 font-semibold drop-shadow-lg placeholder:text-center text-lg rounded-lg w-full lg:w-[600px] md:w-[550px] placeholder:italic focus:border-dashed focus:border-blue-400 px-2 placeholder:text-lg placeholder:font-bold text-gray-800"
	/>
	<button
		type="submit"
		disabled={$gameState.attemptedQuestion || $gameState.currentPlayerAnswer.length === 0}
		class:hover:bg-blue-700={!$gameState.attemptedQuestion &&
			$gameState.currentPlayerAnswer.length > 0}
		class:bg-gray-300={$gameState.attemptedQuestion || $gameState.currentPlayerAnswer.length === 0}
		class:text-gray-400={$gameState.attemptedQuestion ||
			$gameState.currentPlayerAnswer.length === 0}
		class="w-[120px] bg-blue-600 mb-1 h-[50px] rounded-lg drop-shadow-lg">Submit</button
	>
</form>
