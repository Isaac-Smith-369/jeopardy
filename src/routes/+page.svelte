<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import { gameState } from '$lib/game';
	import Jeopardy from '$lib/components/Jeopardy.svelte';
	import GameOver from '$lib/components/GameOver.svelte';
	import Start from '$lib/components/Start.svelte';
	import FinalJeopardy from '$lib/components/FinalJeopardy.svelte';

	const STATES = {
		Start: Start,
		Jeopardy: Jeopardy,
		FinalJeopardy: FinalJeopardy,
		GameOver: GameOver,
		Loading: Loading
	};

	$: currentState = STATES[$gameState.currentState];
</script>

<svelte:head>
	<title>Quiz Riot</title>
</svelte:head>

<div class="flex-col bg-gray-300 items-center flex justify-center w-full h-screen">
	<svelte:component this={currentState} />
</div>
