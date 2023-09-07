<script lang="ts">
	import { gameState } from '$lib/game';
	import type { Jeopardy } from '$lib/types';
	import { onMount } from 'svelte';
	import AnswerCard from './AnswerCard.svelte';
	import GameBoard from './GameBoard.svelte';
	import ScoreBoard from './ScoreBoard.svelte';
	import Loading from './Loading.svelte';

	const get_jeopardy = async (): Promise<Jeopardy> => {
		const res = await fetch('/');
		return await res.json();
	};

	onMount(async () => {
		try {
			const jeopardy = await get_jeopardy();
			$gameState.round = jeopardy;
			$gameState.currentState = 'Jeopardy';
		} catch (e) {
			console.log(e);
		}
	});
</script>

{#if $gameState.round?.questions}
	<AnswerCard />
	<GameBoard on:revealQuestion={(e) => gameState.revealQuestion(e.detail)} />
	<ScoreBoard />
{:else}
	<Loading />
{/if}
