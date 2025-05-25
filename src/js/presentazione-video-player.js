function initVideoPlayer() {
    let videoModalInstance = null;
    let videoPlayer = null;
    let isPlaying = false;

    // Funzione per gestire lo stato del video
    const toggleVideo = () => {
        if (!videoPlayer) return;

        if (isPlaying) {
            videoPlayer.pause();
        } else {
            videoPlayer.muted = true;
            videoPlayer.play()
                .then(() => {
                    videoPlayer.muted = false;
                    isPlaying = true;
                })
                .catch(e => console.error("Errore riproduzione:", e));
        }
        isPlaying = !isPlaying;
    };

    // Funzione per resettare il video
    const resetVideo = () => {
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            isPlaying = false;
        }
    };

    // Evento click sul preview
    document.addEventListener('click', function(e) {
        if (e.target.closest('.video-preview-wrapper')) {
            // Inizializza solo se non esiste già
            if (!videoModalInstance) {
                const modalElement = document.getElementById('videoModal');
                videoPlayer = document.getElementById('videoPlayer');

                if (!modalElement || !videoPlayer) return;

                videoModalInstance = new bootstrap.Modal(modalElement, {
                    keyboard: true,
                    backdrop: true
                });

                // Gestione eventi del modal
                modalElement.addEventListener('show.bs.modal', () => {
                    if (!isPlaying) {
                        videoPlayer.muted = true;
                        videoPlayer.play()
                            .then(() => {
                                videoPlayer.muted = false;
                                isPlaying = true;
                            })
                            .catch(e => console.error("Errore riproduzione:", e));
                    }
                });

                modalElement.addEventListener('hide.bs.modal', resetVideo);

                // Click sul bottone play/pause nel video
                videoPlayer.addEventListener('click', function(e) {
                    e.stopPropagation(); // Evita la chiusura del modal
                    toggleVideo();
                });
            }

            // Mostra il modal esistente
            videoModalInstance.show();
        }
    });

    // Gestione chiusura con click fuori dal modal
    document.addEventListener('click', function(e) {
        const modalElement = document.getElementById('videoModal');
        if (videoModalInstance && modalElement &&
            modalElement.classList.contains('show') &&
            e.target === modalElement) {
            videoModalInstance.hide();
        }
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('videoModal')) {
        initVideoPlayer();
    } else {
        const observer = new MutationObserver(function(mutations) {
            if (document.getElementById('videoModal')) {
                initVideoPlayer();
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
});