document.addEventListener("DOMContentLoaded", function() {
    const senhasAceitas = ["hellen", "kenite", "kaliane", "juan", "gabriel", "k"];

    const imagens = {
        'Inglês': 'https://th.bing.com/th/id/R.1a1859937ed4e0a30880e6486d4ac416?rik=v0z4%2bSVD1A1f2Q&pid=ImgRaw&r=0.jpg',
        'Português': 'https://th.bing.com/th/id/R.1733c967d9592a00673e110baa195433?rik=oQoztDXJRRGpjw&pid=ImgRaw&r=0.jpg',
        'Ciência': 'caminho/para/ciencia.jpg',
        'Física': 'caminho/para/fisica.jpg',
        'Biologia': 'caminho/para/biologia.jpg',
        'Educação-Física': 'caminho/para/educacao_fisica.jpg'
    };

    function openDocument(subject) {
        const senha = prompt(`Por favor, insira a senha para ${subject}:`);
        const lowerCaseSenha = senha ? senha.toLowerCase() : "";

        if (senhasAceitas.includes(lowerCaseSenha)) {
            const confirmacao = confirm(`Você tem certeza de que deseja abrir a imagem de ${subject}?`);
            if (confirmacao) {
                // Criar um elemento de imagem para a visualização em tela cheia
                const fullscreenImage = document.createElement('img');
                fullscreenImage.src = imagens[subject];
                fullscreenImage.alt = subject;
                fullscreenImage.style.width = '100%';
                fullscreenImage.style.height = '100%';

                // Criar uma div em tela cheia para exibir a imagem
                const fullscreenDiv = document.createElement('div');
                fullscreenDiv.style.position = 'fixed';
                fullscreenDiv.style.top = '0';
                fullscreenDiv.style.left = '0';
                fullscreenDiv.style.width = '100%';
                fullscreenDiv.style.height = '100%';
                fullscreenDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                fullscreenDiv.style.display = 'flex';
                fullscreenDiv.style.flexDirection = 'column'; // Ajuste para organizar os elementos em coluna
                fullscreenDiv.style.justifyContent = 'space-between'; // Espaço entre os elementos
                fullscreenDiv.appendChild(fullscreenImage);

                // Adicionar um botão de fechar no canto superior direito
                const closeButton = document.createElement('button');
                closeButton.textContent = 'Fechar';
                closeButton.style.position = 'absolute';
                closeButton.style.top = '10px';
                closeButton.style.right = '10px';
                closeButton.style.backgroundColor = '#041900';
                closeButton.style.color = 'white';
                closeButton.style.border = 'none';
                closeButton.style.borderRadius = '5px';
                closeButton.style.cursor = 'pointer';
                closeButton.addEventListener('click', () => {
                    document.body.removeChild(fullscreenDiv);
                    // Habilitar botões após fechar a imagem
                    subjects.forEach(subject => {
                        document.querySelector(`.${subject}`).disabled = false;
                    });
                });
                fullscreenDiv.appendChild(closeButton);

                // Adicionar a div em tela cheia ao corpo do documento
                document.body.appendChild(fullscreenDiv);

                // Desabilitar outros botões enquanto a imagem está aberta
                subjects.forEach(otherSubject => {
                    if (otherSubject !== subject) {
                        document.querySelector(`.${otherSubject}`).disabled = true;
                    }
                });
            }
        } else {
            alert(`Senha incorreta. Não é possível abrir a matéria de ${subject}.`);
            document.querySelector(`.${subject}`).disabled = true;
        }
    }

    // Adicionar ouvintes de eventos de clique para cada matéria
    const subjects = ['Inglês', 'Português', 'Ciência', 'Física', 'Biologia', 'Educação-Física'];
    subjects.forEach(subject => {
        const button = document.querySelector(`.${subject}`);
        button.addEventListener('click', () => openDocument(subject));
    });
});
