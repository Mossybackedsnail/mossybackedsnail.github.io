        var theme;
        const toggleButton = document.getElementById('dark-mode-toggle');
        if (localStorage.getItem("theme")) {
            theme = localStorage.getItem("theme");
        } else {
            theme = "light";
            localStorage.setItem("theme", theme);
        }
        if(theme == "light"){
            document.body.classList.remove('dark-mode');
            toggleButton.textContent = "☾";
        }
        else{
            document.body.classList.add('dark-mode');
            toggleButton.textContent = "☼";
        }
        toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')){
            toggleButton.textContent = "☼";
            localStorage.setItem("theme", 'dark');
        }
        else{
            toggleButton.textContent = "☾";
            localStorage.setItem("theme", 'light');
        }
        });