<script lang="ts">
	import { gameState } from '$lib/game';
</script>

<div class="flex w-full h-full flex-col gap-5 items-center justify-center">
	<button
		on:click={() => ($gameState.currentState = 'Jeopardy')}
		class="bg-gray-900 border-4 border-gray-950 rounded-lg p-2 text-2xl items-center flex justify-center text-blue-100 font-bold w-[200px] h-[80px] text-center"
		>Play</button
	>
</div>
