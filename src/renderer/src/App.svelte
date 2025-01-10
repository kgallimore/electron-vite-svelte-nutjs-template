<script lang="ts">
  import Versions from './components/Versions.svelte'
  let running = $state(false)
  let error = $state<false | Error>(null)
  async function runNut(): Promise<void> {
    running = true
    error = await window.api.runTest()
    running = false
  }
</script>

{#if running}
  <p>Running...</p>
{:else if error}
  <p>{error}</p>
{:else}
  <p>Not running...</p>
{/if}
<button disabled={running} onclick={runNut}>Send IPC</button>

<Versions />
