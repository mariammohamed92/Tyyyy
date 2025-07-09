  // تهيئة EmailJS
  (function() {
    emailjs.init("RhV5YAl2jkXAu2njT");   
  })();

  // التعامل مع الفورم
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    emailjs.sendForm("service_ytsppnl", "template_joqcdg5", this)
      .then(function(response) {
        alert("تم إرسال الرسالة بنجاح ✅");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("فيه خطأ أثناء الإرسال ❌");
        console.log("FAILED...", error);
      });
  });

              // Anmation All Websit

            const sr = ScrollReveal({
                origin:"top",
                distance:"60px",
                duration:2500,
                delay:300,
                reset:true

            })
            sr.reveal(`.home-data,.About_data,.secrvies_data,.work_data,.Contact_data,.Footer`);
            sr.reveal(`.About_img,.Contact_img`,{delay:500,scale:0.5});


            // Scroll icon arrow
    const scrollup=()=>{
const scrollButton=document.getElementById('scroll-up')
if (this.scrollY>=250) {
    scrollButton.classList.remove("-bottom-1/2")
    scrollButton.classList.add("bottom-4")

}else{
    scrollButton.classList.add("-bottom-1/2")
    scrollButton.classList.remove("bottom-4")
}
    }

    window.addEventListener("scroll",scrollup)


    // Dark
    document.querySelector('#toggle').addEventListener('change',function(){
    document.querySelector('html').classList.toggle('dark')
        
    })

//   const toggle = document.querySelector('#toggle');
//   const html = document.querySelector('html');

//     tailwind.config = { darkMode: 'class' }
// const toggleBtn = document.getElementById('toggleDark');
//     toggleBtn.addEventListener('click', () => {
//       document.documentElement.classList.toggle('dark');
//       localStorage.setItem('theme',
//         document.documentElement.classList.contains('dark') ? 'dark' : 'light');
//     });
//     if (localStorage.getItem('theme') === 'dark') {
//       document.documentElement.classList.add('dark');
//     }