async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('No se pudo obtener los posts');
        }

        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error al obtener los posts:', error.message);
    }
}

function displayPosts(posts) {
    const postDataDiv = document.getElementById('post-data');
    postDataDiv.innerHTML = ''; // Limpiar el contenido anterior

    if (posts.length === 0) {
        postDataDiv.textContent = 'No hay posts disponibles.';
        return;
    }

    const ul = document.createElement('ul');

    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        ul.appendChild(li);
    });

    postDataDiv.appendChild(ul);
}
