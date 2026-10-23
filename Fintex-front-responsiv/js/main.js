document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       1. STICKY HEADER EFFECT
    ========================================== */
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header?.classList.add("header-scrolled");
        } else {
            header?.classList.remove("header-scrolled");
        }
    });

    /* ==========================================
       2. ANIMATED NUMBERS (STATS COUNTER)
    ========================================== */
    const statNumbers = document.querySelectorAll("#stats .inside h3");
    let animated = false;

    const startCounter = () => {
        statNumbers.forEach((stat) => {
            const targetText = stat.innerText.trim();
            const target = parseInt(targetText.replace(/\D/g, ""), 10);
            const suffix = targetText.replace(/[0-9]/g, ""); // '+', 'km' və s. saxlayır
            let count = 0;
            const speed = target / 50; // Sürət tənzimlənməsi

            const updateCount = () => {
                count += Math.ceil(speed);
                if (count >= target) {
                    stat.innerText = target + suffix;
                } else {
                    stat.innerText = count + suffix;
                    setTimeout(updateCount, 30);
                }
            };
            updateCount();
        });
    };
    startCounter();

    // Scroll ilə görünən zaman işə düşməsi
    // const statsSection = document.getElementById("stats");
    // if (statsSection) {
    //     window.addEventListener("scroll", () => {
    //         const sectionPos = statsSection.getBoundingClientRect().top;
    //         const screenPos = window.innerHeight / 1.2;

    //         if (sectionPos < screenPos && !animated) {
    //             startCounter();
    //             animated = true;
    //         }
    //     });
    // }

    /* ==========================================
       3. SEARCH BUTTON INTERACTION
    ========================================== */
    const searchBtn = document.querySelector(".search-btn");
    if (searchBtn) {
        searchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const query = prompt("Axtarış sözünü daxil edin:");
            if (query) {
                alert(`"${query}" üzrə axtarış edilir...`);
            }
        });
    }

    /* ==========================================
       4. LANGUAGE SELECTOR CHANGE
    ========================================== */
    const langSelect = document.getElementById("lang-dropdown");
    if (langSelect) {
        langSelect.addEventListener("change", (e) => {
            console.log("Seçilmiş dil:", e.target.value);
            // Dil dəyişmə məntiqi bura əlavə oluna bilər
        });
    }


    // Index page image make bigger
    var img = document.querySelector("#documents .document .overlay");
    var bigImgDiv = document.querySelector("#documents .big-image");
    var bigImg = document.querySelector("#documents .big-image img");

    img?.addEventListener("click",function(){
        bigImgDiv.style.visibility = "visible";
    })
    bigImg?.addEventListener("click",function(e){
        e.stopPropagation();
    })
    bigImgDiv?.addEventListener("click",function(e){
       if (e.target === this) {
        this.style.visibility = "hidden";
    }
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerMenuBtn');
    const drawer = document.getElementById('fintexSidebar');
    const overlay = document.getElementById('burgerOverlay');
    const closeBtn = document.getElementById('drawerCloseBtn');

    function toggleBurgerMenu() {
        burgerBtn.classList.toggle('active');
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    if (burgerBtn) burgerBtn.addEventListener('click', toggleBurgerMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleBurgerMenu);
    if (overlay) overlay.addEventListener('click', toggleBurgerMenu);
});


