import { writable } from 'svelte/store';

export const settings = writable({
  // Tryb Ziomek i wszystko co może wkurwiać
  ziomekMode: true,           // włączony domyślnie
  sebixVoice: true,            // głos Sebixa
  sucharyEnabled: true,        // wrzuca suchary po odpowiedziach
  wiedzialesEnabled: true,     // kończy odpowiedzi „wiedziałeś?”
  capslockMode: false,         // tryb Nightclub – capslock po 22:00
  trollMode: false,            // raz na 20 wiadomości tylko memy

  // Inne ważne
  selectedModel: 'llama-3.2-8b', // domyślny model
  voiceEnabled: true,          // TTS + STT
  fullControlSafeMode: true,   // blokuje robotjs jak Valorant uruchomiony
  autoUpdateModels: true,
});

export const toggleSetting = (key) => {
  settings.update(s => ({ ...s, [key]: !s[key] }));
};
