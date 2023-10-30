document.querySelector('.login').addEventListener('click', async () => {
    // Coletar os valores dos campos
    const email = document.querySelector('.emailOrUser').value;
    const password = document.querySelector('.password').value;
  
    // fetch("http://127.0.0.1:5500/register", {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password })
    // }).then(response => {
    //   alert("usuário cadastrado");
      
    // }).catch(error => {
    //   alert("Usuário não cadastrado")
    // });

    axios.post('http://localhost:3000/api/register', { email, password })
      .then(response => {
        console.log('Dados cadastrados: ', response.data);
        console.log(response.status)
        window.location.href = '/app/login';
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
        alert("Solicitação inválida")
        console.error('Erro na solicitação', error);
        console.log(response.status)
      });
     
    });  
