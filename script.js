function showOptions(platform) {
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // مسح الخيارات القديمة

    const optionTypes = ['ثلاثي', 'رباعي', 'شبة رباعي'];
    
    optionTypes.forEach(type => {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = type + ' - ' + platform;
        optionsContainer.appendChild(inputElement);
    });

    optionsContainer.style.display = 'block'; // إظهار الخيارات
}
