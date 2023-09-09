<script lang="ts">
	import '../app.css';
</script>

<slot />

<style>
	:global(html, body) {
		box-sizing: border-box;
		height: '100%';
		width: '100%';
		margin: 0;
		padding: 0;
		color: white;
	}
</style>
