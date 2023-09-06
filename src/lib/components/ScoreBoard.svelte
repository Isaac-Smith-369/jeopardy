<script lang="ts">
	import { gameState } from '$lib/game';
</script>

<section
	class="  flex flex-col justify-center items-center text-blue-100 font-bold rounded-sm h-[10%] p-2 w-[90%] lg:w-[60%]"
>
	<div
		class="lg:text-4xl md:w-[300px] md:text-3xl text-2xl w-[200px] lg:w-[400px] rounded-sm h-[150px] border-8 border-solid shadow-inner flex items-center justify-center bg-blue-900 font-extrabold border-gray-800"
	>
		<p>$ {$gameState.playerScore}</p>
	</div>
</section>
