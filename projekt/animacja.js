function rotateImages() {
        const imgContainer = document.querySelector(".img-container");
    
        setInterval(() => {
            let first = imgContainer.firstElementChild;
            first.remove();
            imgContainer.appendChild(first);
        }, 2500);
    }
    rotateImages();