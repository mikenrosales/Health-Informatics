function showStory(period) {
    const stories = {
        past:   `<h3>Year 1984</h3>
                <div class="story-box">
                <div style="display: flex;">
                <img src="images/a1.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">In the early days of my career, patient records were all paper-based. It's very frustrating when you have to find that one patient record between hundreds of papers in a minute.</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">Managing patient data was truly a time-consuming ordeal.</p>
                </div>
                <img src="images/a2.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                <br>
                <div style="display: flex;">
                <img src="images/a3.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">I've always dreamed of a more efficient way to deliver care.</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">But little did I know, digital revolution was somewhere over the horizon.</p>
                </div>
                <img src="images/a4.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                </div>`,
      transition: 
                `<h3>Year 2000</h3>
                <div class="story-box">
                <div style="display: flex;">
                <img src="images/b1.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">As I immersed myself in the world of health informatics, I realized the potential for transformation.</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">I devoured every piece of knowledge, eager to embrace the future of enhanced patient care.</p>
                </div>
                <img src="images/b2.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                <br>
                <div style="display: flex;">
                <img src="images/b3.jpeg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">It was clear... digital technology held the key to revolutionize and enhance patient care!</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">Armed with knowledge, I embarked on a journey to modernize my practice.</p>
                </div>
                <img src="images/b4.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                </div>`,
      present: 
                `<h3>Year 2024</h3>
                <div class="story-box">
                <div style="display: flex;">
                <img src="images/c1.jpeg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">As you can see, with computers and modernized physical therapy modalities, my clinic stands as testament to the power of health informatics.</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">Those days where I had to continuously sift paper has been gone. Electronic health records have streamlined our workflow.</p>
                </div>
                <img src="images/c2.jpeg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                <br>
                <div style="display: flex;">
                <img src="images/c3.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                <div style="margin-left: 10px; text-align: left;">
                <p class="comic-bubble comic-bubble-left">Telehealth has allowed us to reach patients wherever they are, breaking down barriers to efficient health care.</p>
                </div>
                </div>
                <br>
                <div style="display: flex;">
                <div style="margin-left: auto; margin-right: 10px; text-align: right;">
                <p class="comic-bubble comic-bubble-right">With each successful treatment, I'm reminded of how far I've come.</p>
                </div>
                <img src="images/c4.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
                </div>
                </div>`,

      future:
               `<h3>Year 2050</h3>
               <div class="story-box">
               <div style="display: flex;">
               <img src="images/d1.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
               <div style="margin-left: 10px; text-align: left;">
               <p class="comic-bubble comic-bubble-left">But the journey doesn't end here. The future of health informatics holds even a greater promise.</p>
               </div>
               </div>
               <br>
               <div style="display: flex;">
               <div style="margin-left: auto; margin-right: 10px; text-align: right;">
               <p class="comic-bubble comic-bubble-right">AI and machine learning are revolutionizing diagnostics, helping us tailor treatments with precision.</p>
               </div>
               <img src="images/d2.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
               </div>
               <br>
               <div style="display: flex;">
               <img src="images/d3.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
               <div style="margin-left: 10px; text-align: left;">
               <p class="comic-bubble comic-bubble-left">Virtual reality has transformed rehabilitation, making exercises engaging and effective.</p>
               </div>
               </div>
               <br>
               <div style="display: flex;">
               <div style="margin-left: auto; margin-right: 10px; text-align: right;">
               <p class="comic-bubble comic-bubble-right">As we continue to embrace innovation, I'm filled with hope for what lies ahead.</p>
               </div>
               <img src="images/d4.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
               </div>
               </div>`,
    };

    const storyBoxes = document.querySelectorAll('.story-box-selection');
    storyBoxes.forEach(box => {
        box.classList.remove('selected');
    });

    document.querySelector(`.story-box-selection[data-period="${period}"]`).classList.add('selected');

    document.getElementById('story-content').innerHTML = stories[period];
}

// Function to scroll to the top of the page with smooth transition
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

const typingText = "Health Informatics in Physical Therapy";
const typingSpeed = 50;

let typingIndex = 0;

function typeText() {
  if (typingIndex < typingText.length) {
    document.getElementById("typingText").innerHTML += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    document.getElementById("typingCursor").style.display = "none";
  }
}

window.onload = function() {
  typeText();
}
