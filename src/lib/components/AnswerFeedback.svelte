<script lang="ts">
	export let feedback: string;
</script>

<div class="w-full flex justify-center items-center">
	<div
		class:text-green-500={feedback === 'Correct!'}
		class:text-red-500={feedback != 'Correct!'}
		class="text-xl md:text-2xl lg:text-3xl font-bold"
	>
		{feedback}
	</div>
</div>
