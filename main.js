console.log("заработало")
const passwordinput = document.getElementById('password')
const toggleButton = document.getElementById('togglePassword')



toggleButton.addEventListener('click', function() {
   
if (passwordinput.type === 'password') {
   passwordinput.type = 'text'
   toggleButton.textContent = 'Скрыть';
}else{
   passwordinput.type = 'password';
   toggleButton.textContent = 'Показать' ;
}
});