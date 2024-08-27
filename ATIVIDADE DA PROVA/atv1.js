let usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email) {
        console.log("Erro: Todos os campos devem ser preenchidos.");
        return;
    }
    
    if (idade <= 0) {
        console.log("Erro: A idade deve ser maior que 0.");
        return;
    }
    
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    
    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso!");
}
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
     } else {
    console.log("Lista de usuários cadastrados:");
    usuarios.forEach(function(usuario, index) {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}}
adicionarUsuario("Sofia", 17, "sofia_scheidt@estudante.sesisenai.org.br")
adicionarUsuario("Larissa", 16, "larissa_schmitz@estudante.sesisenai.org.br")
adicionarUsuario("Lilian", 16, "lilian_sens@estudante.sesisenai.org.br")
adicionarUsuario("Vitória", 16, "vitoria_silva1@estudante.sesisenai.org.br")

listarUsuarios();

