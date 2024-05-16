function showStory(period) {
    const stories = {
        past: `<h3>Year 1984</h3>
        <div class="story-box">
        <div style="display: flex;">
        <img src="images/a1.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
        <div style="margin-left: 10px; text-align: left;">
        <p><b>Vanz:</b> In the early days of my career, patient records were all paper-based. It's very frustrating when you have to find that one patient record between hundreds of papers in a minute.</p>
        </div>
        </div>
        <br>
        <div style="display: flex;">
        <div style="margin-left: auto; margin-right: 10px; text-align: right;">
        <p><b>Vanz:</b> Managing patient data was truly a time-consuming ordeal.</p>
        </div>
        <img src="images/a2.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
        </div>
        <br>
        <div style="display: flex;">
        <img src="images/a3.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
        <div style="margin-left: 10px; text-align: left;">
        <p><b>Vanz:</b> I've always dreamed of a more efficient way to deliver care.</p>
        </div>
        </div>
        <br>
        <div style="display: flex;">
        <div style="margin-left: auto; margin-right: 10px; text-align: right;">
        <p><b>Vanz:</b> But little did I know, digital revolution was somewhere over the horizon.</p>
        </div>
        <img src="images/a4.jpg" alt="Past Image" class="img-fluid mb-2" style="max-width: 300px; border-radius: 8px;">
        </div>
        </div>`,
      transition: `<h3>Year 2000</h3>
                   <div class="story-box">
                   <p><b>Vanz:</b> As I immersed myself in the world of health informatics, I realized the potential for transformation.</p>
                   <p><b>Vanz:</b> I devoured every piece of knowledge, eager to embrace the future of enhanced patient care.</p>
                   <p><b>Vanz:</b> It was clear... digital technology held the key to revolutionize and enhance patient care!</p>
                   <p><b>Vanz:</b> Armed with knowledge, I embarked on a journey to modernize my practice.</p>
                   </div>`,
      present: `<h3>Year 2024</h3>
                <div class="story-box">
                <p><b>Vanz:</b> As you can see, with computers and modernized physical therapy modalities, my clinic stands as testament to the power of health informatics.</p>
                <p><b>Vanz:</b> Those days where I had to continuously sift paper has been gone. Electronic health records have streamlined our workflow.</p>
                <p><b>Vanz:</b> Telehealth has allowed us to reach patients wherever they are, breaking down barriers to efficient health care.</p>
                <p><b>Vanz:</b> With each successful treatment, I'm reminded of how far I've come.</p>
                </div>`,
      future: `<h3>Year 2050</h3>
               <div class="story-box">
               <p><b>Vanz:</b> But the journey doesn't end here. The future of health informatics holds even a greater promise.</p>
               <p><b>Vanz:</b> AI and machine learning are revolutionizing diagnostics, helping us tailor treatments with precision.</p>
               <p><b>Vanz:</b> Virtual reality has transformed rehabilitation, making exercises engaging and effective.</p>
               <p><b>Vanz:</b> As we continue to embrace innovation, I'm filled with hope for what lies ahead.</p>
               </div>`
    };

    const storyBoxes = document.querySelectorAll('.story-box-selection');
    storyBoxes.forEach(box => {
        box.classList.remove('selected');
    });

    document.querySelector(`.story-box-selection[data-period="${period}"]`).classList.add('selected');

    document.getElementById('story-content').innerHTML = stories[period];
}
