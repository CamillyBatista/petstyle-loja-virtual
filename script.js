// encontrar botão
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
// clicar no botão e o menu deve aparecer 

btn.addEventListener('click',function(){
    menu.classList.toggle('hidden');
});
 

//manipular envio de formulario
const form = document.getElementById('formulario');

const msg = document.getElementById('mensagem');

form.addEventListener('submit',function(event){
    event.preventDefault();

    //espaço de mensagem de sucesso ao enviar
    msg.classList.remove("hidden");

    form.reset();

    setTimeout(() => {
        msg.classList.add('hidden');
    }, 10000);
});

