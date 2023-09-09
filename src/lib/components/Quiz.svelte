<script lang="ts">
	import { gameState } from '$lib/game';
	import type { Quiz } from '$lib/types';
	import { onMount } from 'svelte';
	import AnswerCard from './AnswerCard.svelte';
	import GameBoard from './GameBoard.svelte';
	import ScoreBoard from './ScoreBoard.svelte';
	import Loading from './Loading.svelte';

	const get_quiz = async (): Promise<Quiz> => {
		const res = await fetch('/');
		return await res.json();
	};

	onMount(async () => {
		try {
			const quiz = await get_quiz();
			$gameState.quiz = quiz;
			$gameState.currentState = 'Quiz';
		} catch (e) {
			console.log(e);
		}
	});
</script>

{#if $gameState.quiz?.questions}
	<AnswerCard />
	<GameBoard on:revealQuestion={(e) => gameState.revealQuestion(e.detail)} />
	<ScoreBoard />
{:else}
	<Loading />
{/if}
