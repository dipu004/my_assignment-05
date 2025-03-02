document.getElementById("theme-changer").addEventListener("click", function(event){
          const colorTheme = `
          #${Math.floor(Math.random() * 1667779).toString(16)}

          `
          document.getElementById("main-container").style.backgroundColor = colorTheme;
})