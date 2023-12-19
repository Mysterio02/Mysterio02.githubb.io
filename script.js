document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
  
    // Variable to track the number of clicks
    let clickCount = 0;
  
    yesBtn.addEventListener("click", () => {
      if (clickCount === 0) {
        question.innerHTML = "Yay! I AM COMING TO GET YOU, MY LOVE! See you soon!<br><br><span style='color: red;'>Say YES again!</span>";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
        gif.style.width = "400px";
        gif.style.height = "400px";
      } else if (clickCount === 1) {
        question.innerHTML = "WWOOOOOWW! Baby! BB! Brb.... Blushing harder!<br><br><span style='color: red;'>Say YES again!</span>";
        gif.src = "https://media.giphy.com/media/65wE7Exx1eKZGYIP0G/giphy.gif";
        gif.style.width = "400px";
        gif.style.height = "400px";
      } else if (clickCount === 2) {
        question.innerHTML = "<span style='color: red;'>WHEN I CATCH YOU....!!!!</span>";
        gif.src = "https://media.giphy.com/media/bxFtVkOWFzSD7RKon5/giphy.gif";
        gif.style.width = "300px";
        gif.style.height = "300px";

        // Remove the "Yes" and "No" buttons
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      }

  
      // Increment the click count
      clickCount++;
    });
  
    noBtn.addEventListener("mouseover", () => {
      const noBtnRect = noBtn.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;
  
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
  
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + "px";
    });
  });
  