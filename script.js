let totalCredits = 0;

document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', function() {
        if (!this.classList.contains('approved')) {
            this.classList.add('approved');
            totalCredits += parseFloat(this.getAttribute('data-credits'));
            document.getElementById('total-credits').innerText = totalCredits;

            // Desbloquear requisitos
            const requirements = this.getAttribute('data-requirements').split(', ');
            requirements.forEach(req => {
                const reqCourse = Array.from(document.querySelectorAll('.course')).find(c => c.textContent.includes(req));
                if (reqCourse) {
                    reqCourse.classList.remove('locked');
                }
            });
        }
    });
});
