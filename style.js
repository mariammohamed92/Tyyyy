document.querySelector('#toggle').addEventListener('change',function(){
    document.querySelector('html').classList.toggle('dark')
        
    })

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


    // Scroll Navbar
    const scrollheader=()=>{
        const scrollButton=document.getElementById('Navbar')
        if (this.scrollY>=50) {
            scrollButton.classList.add("border-b","border-yello-500")
        
        }else{
            scrollButton.classList.remove("border-b","border-yello-500")
        }
            }
        
            window.addEventListener("scroll",scrollheader)


            // Anmation All Websit

            const sr = ScrollReveal({
                origin:"top",
                distance:"60px",
                duration:2500,
                delay:300,
                reset:true

            })
            sr.reveal(`.home-data,.About_data,.Contact,.Footer`);
            sr.reveal(`.home-img,.About_img,.card,.Slider,.Contact_img`,{delay:500,scale:0.5});
