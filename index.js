const buttons = document.querySelectorAll('.box');
        const body = document.querySelector('body');

        buttons.forEach(function (button) {
            console.log(button);

            button.addEventListener('click', function(e){
                
                console.log(e.target);

                if(e.target.id === 'grey'){
                    body.style.backgroundColor = 'grey'
                }

                if(e.target.id === 'yellow'){
                    body.style.backgroundColor = 'yellow'
                }

                if(e.target.id === 'orange'){
                    body.style.backgroundColor = 'orange'
                }

                if(e.target.id === 'violet'){
                    body.style.backgroundColor = 'violet'
                }
            })
        })