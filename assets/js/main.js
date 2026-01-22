// التحقق من حقول واجهة التواصل
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Email regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation
        if (name === '') {
            window.alert("رجاء ادخل الأسم")
            return
        }

        if (email === '') {
            window.alert("رجاء ادخل بريدك الالكتروني")
            return
        }

        if (message === '') {
            window.alert("رجاء ادخل رسالة")
            return
        }

        if (!emailPattern.test(email)) {
            window.alert("!صيغة بريدك الالكتروني غير صحيحة")
            return
        }

        if (name !== '' && email !== '' && message !== '' && emailPattern.test(email)) {
            document.querySelector('#contactForm button').innerHTML = '...إرسال'

            setTimeout(() => {
                document.querySelector('#contactForm button').innerHTML = 'إرسال'
                form.reset();
            }, 1500)

            setTimeout(() => {
                window.alert("تم ارسال طلبك بنجاح")
                return
            }, 2000)
        }
    });
}


// التعامل مع زر صعود الشاشة والتحكم باظهاره واخفاءه
window.onscroll = function () {
    if (window.scrollY >= 180) {
        document.querySelector('.scrollTop').classList.remove('d-none')

    } else {
        document.querySelector('.scrollTop').classList.add('d-none')

    }
}

// حجز مكان وهمي للفعالية
reservationForm = document.getElementById('reservation-form')
if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
        e.preventDefault()
        window.alert('تم حجز مكان وهمي للفعالية')
    })
}

// تطبيق عملية الفلترة على الأصناف
eventCategory = document.getElementById('event-cat')
if (eventCategory) {
    eventCategory.addEventListener('change', function (e) {
        selectedCategory = e.target.value
        document.querySelectorAll('.category').forEach(category => {
            if (selectedCategory === 'all') {
                category.classList.remove('d-none')
                category.classList.remove('hidden-location-event')
                category.classList.remove('hidden-date-event')
            } else {
                if (category.classList.contains(`category-${selectedCategory}`))
                    category.classList.remove('d-none')
                else
                    category.classList.add('d-none')
            }
        })
    })
}

eventLocation = document.getElementById('event-location')
if (eventLocation) {
    eventLocation.addEventListener('change', function (e) {
        selectedLocation = e.target.value
        document.querySelectorAll('.location').forEach(location => {
            if (selectedLocation === 'all') {
                location.classList.remove('d-none')
                location.classList.remove('hidden-location-event')
                location.classList.remove('hidden-date-event')
            } else {
                if (location.classList.contains(`location-${selectedLocation}`) && !location.classList.contains('hidden-date-event')) {
                    location.classList.remove('d-none')
                    location.classList.remove('hidden-location-event')
                }
                else {
                    location.classList.add('d-none')
                    location.classList.add('hidden-location-event')
                }

            }
        })
    })
}

eventDate = document.getElementById('event-date')
if (eventDate) {
    eventDate.addEventListener('change', function (e) {
        selectedDate = e.target.value
        document.querySelectorAll('.date').forEach(eventDate => {
            if (eventDate.classList.contains(`date-${selectedDate}`) && !eventDate.classList.contains('hidden-location-event')) {
                eventDate.classList.remove('d-none')
                eventDate.classList.remove('hidden-date-event')
            }
            else {
                eventDate.classList.add('d-none')
                eventDate.classList.add('hidden-date-event')
            }

        })
    })
}

// تخصيص معلومات سلايدر فريق العمل
var swiper = new Swiper(".team", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        990: {
            slidesPerView: 3
        }
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// تخصيص معلومات سلايدر الخاص بمعرص صور الفعالية
var swiper = new Swiper(".gallay-imgs", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});