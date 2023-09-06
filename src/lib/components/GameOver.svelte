<script lang="ts">
	import { gameState } from '$lib/game';
</script>

<section class="flex justify-center, items-center">
	<div class="mb-2 text-3xl font-extrabold">Game Over</div>
	<div class="mb-2 text-2xl font-extrabold">
		Your Score is
		<span class="text-blue-300">
			{$gameState.playerScore}
		</span>
	</div>
	<button
		on:click={() => ($gameState.currentState = 'Jeopardy')}
		class="bg-blue-700 border-4 border-gray-600 rounded-lg p-2 text-2xl items-center flex justify-center text-blue-100 font-bold w-[200px] h-[60px] text-center"
		>Play Again</button
	>
</section>
