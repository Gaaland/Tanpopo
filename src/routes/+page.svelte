<script>
  import { settings } from '$lib/settings.store';
  import { onMount } from 'svelte';
  import toast from 'svelte-french-toast';

  let input = '';
  let messages = [
    { role: 'assistant', content: 'Siema ziom! Tanpopo v1.0 gotowy. Pytaj o co chcesz – wiem wszystko.' }
  ];

  async function sendMessage() {
    if (!input.trim()) return;
    
    messages = [...messages, { role: 'user', content: input }];
    const userMsg = input;
    input = '';

    // Tu później podłączymy Ollama + Grok + Claude
    setTimeout(() => {
      let reply = `Spoko, ogarnąłem: ${userMsg}`;
      
      if ($settings.wiedzialesEnabled) reply += `\n\nwiedziałeś?`;
      if ($settings.sucharyEnabled) reply += `\n\nA i jeszcze jedno – jak masz 3060 Ti to już jesteś kozak, nie pierdol`;

      messages = [...messages, { role: 'assistant', content: reply }];
      toast.success('Odpowiedź przyszła!');
    }, 800);
  }

  onMount(() => {
    toast.success('Tanpopo uruchomione! Przełącz ustawienia w prawym górnym rogu');
  });
</script>

<div class="p-8 pt-24 max-w-4xl mx-auto">
  <div class="space-y-4 mb-8">
    {#each messages as msg}
      <div class={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div class={`max-w-lg px-6 py-4 rounded-3xl ${msg.role === 'user' ? 'bg-cyan text-black' : 'bg-glass border border-cyan/30'}`}>
          {msg.content}
        </div>
      </div>
    {/each}
  </div>

  <form on:submit|preventDefault={sendMessage} class="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl">
    <input 
      bind:value={input}
      placeholder="Pytaj o co chcesz..."
      class="w-full px-8 py-6 text-xl bg-glass backdrop-blur-xs rounded-full border border-cyan/40 focus:outline-none focus:border-cyan shadow-2xl"
    />
  </form>
</div>
