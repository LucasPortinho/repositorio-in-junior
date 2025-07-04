// Em uma aplicação node, isso estaria em um arquivo como JSON e seria importado no ex 8 e ex 9
const booksByCategory = [
  {
    category: "Romance",
    books: [
      { title: "O Sol Também é Uma Estrela", author: "Nicola Yoon" },
      { title: "O Noivo da Minha Melhor Amiga", author: "Emily Giffin" },
      { title: "Orgulho e Preconceito", author: "Jane Austen" },
    ],
  },
  {
    category: "Fantasia",
    books: [
      { title: "Harry Potter e a Pedra Filosofal", author: "J.K. Rowling" },
      { title: "O Hobbit", author: "J.R.R. Tolkien" },
      { title: "Eragon", author: "Christopher Paolini" },
      { title: "O Nome do Vento", author: "Patrick Rothfuss" },
    ],
  },
  {
    category: "Suspense",
    books: [
      { title: "A Garota no Trem", author: "Paula Hawkins" },
      { title: "O Silêncio dos Inocentes", author: "Thomas Harris" },
    ],
  },
  {
    category: "Ficção Científica",
    books: [
      { title: "Duna", author: "Frank Herbert" },
      { title: "Neuromancer", author: "William Gibson" },
      { title: "Fundação", author: "Isaac Asimov" },
      { title: "1984", author: "George Orwell" },
      { title: "O Fim da Infância", author: "Arthur C. Clarke" },
    ],
  },
];

function countBooksInCategory() {
  const result = {};
  
  booksByCategory.forEach(category => {
    result[category.category] = category.books.length;
  });
  
  return result;
}

countBooksInCategory()
