function toggleAudio(myAudio) {
   const audio = document.getElementById(myAudio);
   const iconId = `audioIcon${myAudioId.slice(-1)}`
   const icon = document.getElementById(IconId);


   // Pausa tutti gli altri audio
   document.querySelectorAll('audio').forEach(a => {
       if (a.id !== myAudio && !a.paused) {
           a.pause();
           a.currentTime = 0;
           const otherIcon = document.getElementById(`audioIcon${a.id.slice(-1)}`);
           if (otherIcon) {
               otherIcon.classList.remove("fa-pause");
               otherIcon.classList.add("fa-volume-up");
           }
       }
   });


   // Pausa->play o play->pausa con cambio di icona
   if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-volume-up");
      icon.classList.add("fa-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-volume-up");
    }


   // Aggiorna l'icona quando l'audio finisce
   audio.onended = function() {
       icon.classList.remove("fa-pause");
       icon.classList.add("fa-volume-up");
   };


}
