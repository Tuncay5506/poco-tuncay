let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

const authorGrid = document.getElementById("author-grid");

authors.forEach(author => {
    const authorli = document.createElement("li");
    authorli.classList.add("author");

    const img = document.createElement("img");
    img.src = `img/tile_${author.firstName}_${author.lastName}.jpg`;
    img.alt = `${author.firstName} ${author.lastName}`;

    const nameTag = document.createElement("a");
    nameTag.classList.add("name");
    nameTag.textContent = `${author.firstName} ${author.lastName}`;

    authorli.appendChild(img);
    authorli.appendChild(nameTag);

    authorGrid.appendChild(authorli);

});