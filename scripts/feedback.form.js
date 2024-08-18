document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const modal = new bootstrap.Modal(
        document.getElementById("staticBackdrop")
    );

    // Функция проверки валидности формы
    function validateForm() {
        if (form.checkValidity()) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Обработка события input для проверки валидности
    form.addEventListener("input", validateForm);

    // Обработка события клика по кнопке "Получить ответ"
    submitBtn.addEventListener("click", function () {
        if (form.checkValidity()) {
            // Закрываем модальное окно
            modal.hide();

            // Можно добавить код для отправки данных на сервер или другой обработки
        } else {
            validateForm();
        }
    });
});
