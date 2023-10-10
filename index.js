const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.innerText = '+';
        } else {
            answer.style.display = 'block';
            icon.innerText = '-';
        }
    });
});

