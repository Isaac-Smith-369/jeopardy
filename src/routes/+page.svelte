<script lang="ts">
	import Loading from '$lib/components/Loading.svelte';
	import { gameState } from '$lib/game';
	import GameOver from '$lib/components/GameOver.svelte';
	import Start from '$lib/components/Start.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	const STATES = {
		Start: Start,
		Quiz: Quiz,
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
