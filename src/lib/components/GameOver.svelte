<script lang="ts">
	import { gameState } from '$lib/game';
</script>

<section class="flex text-gray-800 justify-center flex-col items-center">
	<div class="mb-2 text-3xl font-extrabold">Game Over</div>
	<div class="mb-2 text-2xl font-extrabold">
		Your Score is
		<span class="text-gray-900 text-4xl font-extrabold">
			{$gameState.playerScore}
		</span>
	</div>
	<button
		on:click={() => ($gameState.currentState = 'Jeopardy')}
		class="bg-gray-800 border-4 border-gray-900 rounded-lg p-2 text-2xl items-center flex justify-center text-gray-100 font-bold w-[200px] h-[60px] text-center"
		>Play Again</button
	>
</section>
