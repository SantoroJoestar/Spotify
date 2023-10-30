
document.querySelector('.login').addEventListener('click', () => {
    // Coletar os valores dos campos
    const email = document.querySelector('.emailOrUser').value;
    const password = document.querySelector('.password').value;
  
    // Fazer a solicitação POST com o Axios
    axios.post('http://localhost:3000/api/authenticate', { email, password })
      .then(response => {
        alert('Usuário Logado com sucesso')
        console.log('Dados logados: ', response.data);
        document.cookie = `authorization=Bearer ${response.data.token}`
        window.location.href = '/app/';
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        alert("Solicitação inválida")
        console.error('Erro na solicitação', error);
      });
});
  