<script>
  import { settings, toggleSetting } from '$lib/settings.store';
  import Toast from 'svelte-french-toast';
</script>

<div class="min-h-screen bg-dark text-white font-sans">
  <!-- Główny chat będzie tutaj później -->
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold text-cyan mb-8 text-center">Tanpopo v1.0</h1>
    
    <!-- Ustawienia w prawym górnym rogu -->
    <div class="fixed top-4 right-4 bg-glass backdrop-blur-xs rounded-2xl p-6 border border-cyan/20 shadow-2xl">
      <h3 class="text-cyan font-bold mb-4">Ustawienia</h3>
      
      <label class="block mb-3">
        <input type="checkbox" bind:checked={$settings.ziomekMode} on:change={() => toggleSetting('ziomekMode')} />
        Tryb Ziomek
      </label>
      <label class="block mb-3">
        <input type="checkbox" bind:checked={$settings.sebixVoice} on:change={() => toggleSetting('sebixVoice')} />
        Głos Sebixa
      </label>
      <label class="block mb-3">
        <input type="checkbox" bind:checked={$settings.sucharyEnabled} on:change={() => toggleSetting('sucharyEnabled')} />
        Suchary po odpowiedziach
      </label>
      <label class="block mb-3">
        <input type="checkbox" bind:checked={$settings.wiedzialesEnabled} on:change={() => toggleSetting('wiedzialesEnabled')} />
        „wiedziałeś?” na końcu
      </label>
      <label class="block mb-6">
        <input type="checkbox" bind:checked={$settings.fullControlSafeMode} on:change={() => toggleSetting('fullControlSafeMode')} />
        Safe Mode w Valorant (zawsze włączone)
      </label>
      
      <p class="text-xs opacity-60">Model: {$settings.selectedModel}</p>
    </div>
  </div>
</div>

<Toast />

<style>
  :global(body) { margin: 0; }
</style>
