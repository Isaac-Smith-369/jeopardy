<script lang="ts">
	export let category: string;
</script>

<div class="shadow-md lg:w-[500px] w-[300px] m-1 space-y-2">
	<h2
		class="h-[100px] text-gray-200 p-1 rounded-sm flex text-lg md:text-xl lg:text-2xl overflow-hidden break-words text-ellipsis font-extrabold text-center items-center justify-center bg-gray-900"
	>
		{category}
	</h2>
	<slot />
</div>
