//para puxar o botão do banner
const bannerBotao=document.querySelector('.banner__botao');

//para alterar o link da TAG A quando o botão do banner for clicado
bannerBotao.addEventListener('click',()=>{
    //para puxar a TAG a do botão do link
    tagA=document.querySelector('#banner__link');    
    //alterar o link
    tagA.href='#secao__consoles';
})






