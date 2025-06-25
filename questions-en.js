const questionsData = {
  // Sports questions
  sports: {
    // Easy sports questions
    easy: [
      {
        question: "Which sport is played at Wimbledon?",
        answers: ["Football", "Tennis", "Golf", "Cricket"],
        correct: "Tennis",
      },
      {
        question: "How many players are on a football team on the field?",
        answers: ["11", "7", "9", "10"],
        correct: "11",
      },
      {
        question: "What ball is used in baseball?",
        answers: ["Leather ball", "Hard ball", "Cricket ball", "Baseball"],
        correct: "Baseball",
      },
      {
        question: "Which sport uses a hoop and a ball?",
        answers: ["Volleyball", "Basketball", "Rugby", "Tennis"],
        correct: "Basketball",
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        answers: ["China", "Brazil", "UK", "Russia"],
        correct: "Brazil",
      },
    ],
    //   Medium sports questions
    medium: [
      {
        question: "Which athlete has won the most Olympic medals?",
        answers: ["Usain Bolt", "Simone Biles", "Michael Phelps", "Carl Lewis"],
        correct: "Michael Phelps",
      },
      {
        question: "In which sport would you perform a slam dunk?",
        answers: ["Tennis", "Basketball", "Handball", "Football"],
        correct: "Basketball",
      },
      {
        question: "Which country has won the most FIFA World Cups?",
        answers: ["Germany", "Italy", "Argentina", "Brazil"],
        correct: "Brazil",
      },
      {
        question: "What is the national sport of Japan?",
        answers: ["Karate", "Judo", "Sumo Wrestling", "Kendo"],
        correct: "Sumo Wrestling",
      },
      {
        question: "Which sport uses a pommel horse?",
        answers: ["Wrestling", "Gymnastics", "Athletics", "Boxing"],
        correct: "Gymnastics",
      },
    ],
    //   Hard sports questions
    hard: [
      {
        question: "Which cricketer is known as 'The Little Master'?",
        answers: [
          "Virat Kohli",
          "Sachin Tendulkar",
          "Don Bradman",
          "M.S. Dhoni",
        ],
        correct: "Sachin Tendulkar",
      },
      {
        question: "What year was the first modern Olympic Games held?",
        answers: ["1896", "1900", "1888", "1912"],
        correct: "1896",
      },
      {
        question: "Which country won the first ever FIFA World Cup in 1930?",
        answers: ["Brazil", "Germany", "Uruguay", "Italy"],
        correct: "Uruguay",
      },
      {
        question: "Which gymnast scored a perfect 10 at the 1976 Olympics?",
        answers: [
          "Simone Biles",
          "Olga Korbut",
          "Nadia Comăneci",
          "Shannon Miller",
        ],
        correct: "Nadia Comăneci",
      },
      {
        question: "Which sport awards the Heisman Trophy?",
        answers: ["American Football", "Basketball", "Baseball", "Soccer"],
        correct: "American Football",
      },
    ],
  },
  //   Geography questions
  geography: {
    // Easy geography questions
    easy: [
      {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris",
      },
      {
        question: "Which continent is Egypt in?",
        answers: ["Asia", "Africa", "Europe", "South America"],
        correct: "Africa",
      },
      {
        question: "Which ocean is on the west coast of the United States?",
        answers: ["Atlantic", "Arctic", "Pacific", "Indian"],
        correct: "Pacific",
      },
      {
        question: "What country is famous for the Great Wall?",
        answers: ["India", "China", "Japan", "South Korea"],
        correct: "China",
      },
      {
        question: "Which country has the most people?",
        answers: ["USA", "India", "Russia", "China"],
        correct: "China",
      },
    ],
    //   Medium geography questions
    medium: [
      {
        question: "Which desert is the largest in the world?",
        answers: ["Gobi", "Sahara", "Kalahari", "Arctic"],
        correct: "Sahara",
      },
      {
        question: "Mount Kilimanjaro is in which country?",
        answers: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
        correct: "Tanzania",
      },
      {
        question: "Which river is the longest in the world?",
        answers: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        correct: "Nile",
      },
      {
        question: "Which country does the island of Bali belong to?",
        answers: ["Thailand", "Philippines", "Indonesia", "Malaysia"],
        correct: "Indonesia",
      },
      {
        question: "What is the capital of Canada?",
        answers: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
        correct: "Ottawa",
      },
    ],
    // Hard geography questions
    hard: [
      {
        question: "Which country has the most natural lakes?",
        answers: ["USA", "Russia", "Canada", "Brazil"],
        correct: "Canada",
      },
      {
        question: "What is the smallest country in the world?",
        answers: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correct: "Vatican City",
      },
      {
        question: "Which city is known as the City of Canals?",
        answers: ["Venice", "Amsterdam", "Bangkok", "Bruges"],
        correct: "Venice",
      },
      {
        question: "What is the deepest point on Earth?",
        answers: ["Mariana Trench", "Dead Sea", "Lake Baikal", "Tonga Trench"],
        correct: "Mariana Trench",
      },
      {
        question: "Which mountain range separates Europe and Asia?",
        answers: ["Alps", "Himalayas", "Ural", "Andes"],
        correct: "Ural",
      },
    ],
  },
  // History questions
  history: {
    // Easy history questions
    easy: [
      {
        question: "Who was the first President of the United States?",
        answers: [
          "Abraham Lincoln",
          "George Washington",
          "Thomas Jefferson",
          "John Adams",
        ],
        correct: "George Washington",
      },
      {
        question: "In which country did World War II begin?",
        answers: ["France", "Germany", "Poland", "Japan"],
        correct: "Germany",
      },
      {
        question: "What ancient civilization built the pyramids?",
        answers: ["Romans", "Greeks", "Egyptians", "Aztecs"],
        correct: "Egyptians",
      },
      {
        question: "Who was the famous civil rights leader in the USA?",
        answers: [
          "Barack Obama",
          "Martin Luther King Jr.",
          "Malcolm X",
          "Frederick Douglass",
        ],
        correct: "Martin Luther King Jr.",
      },
      {
        question: "In which year did the Titanic sink?",
        answers: ["1912", "1905", "1898", "1923"],
        correct: "1912",
      },
    ],
    //   Medium history questions
    medium: [
      {
        question: "Which empire was ruled by Julius Caesar?",
        answers: ["Greek", "Egyptian", "Roman", "Ottoman"],
        correct: "Roman",
      },
      {
        question: "Who was the British Prime Minister during WWII?",
        answers: [
          "Neville Chamberlain",
          "Winston Churchill",
          "Tony Blair",
          "Margaret Thatcher",
        ],
        correct: "Winston Churchill",
      },
      {
        question:
          "What was the name of the ship on which the Pilgrims traveled to America in 1620?",
        answers: ["Santa Maria", "Mayflower", "Endeavour", "Discovery"],
        correct: "Mayflower",
      },
      {
        question: "What wall divided East and West Berlin?",
        answers: ["Berlin Wall", "Iron Curtain", "Great Wall", "Wall of Peace"],
        correct: "Berlin Wall",
      },
      {
        question: "Who discovered penicillin?",
        answers: [
          "Marie Curie",
          "Alexander Fleming",
          "Isaac Newton",
          "Albert Einstein",
        ],
        correct: "Alexander Fleming",
      },
    ],
    //   Hard history questions
    hard: [
      {
        question: "Which treaty ended World War I?",
        answers: [
          "Treaty of Paris",
          "Treaty of Versailles",
          "Treaty of Tordesillas",
          "Treaty of Ghent",
        ],
        correct: "Treaty of Versailles",
      },
      {
        question: "Who was the first emperor of China?",
        answers: ["Qin Shi Huang", "Sun Yat-sen", "Kublai Khan", "Mao Zedong"],
        correct: "Qin Shi Huang",
      },
      {
        question:
          "What was the name of the U.S. project that developed the atomic bomb?",
        answers: [
          "Project Mercury",
          "Trinity Project",
          "Apollo Program",
          "Manhattan Project",
        ],
        correct: "Manhattan Project",
      },
      {
        question: "In what year did the Berlin Wall fall?",
        answers: ["1987", "1989", "1991", "1993"],
        correct: "1989",
      },
      {
        question:
          "Which empire was famous for its road system and capital at Cuzco?",
        answers: ["Mayan", "Roman", "Inca", "Ottoman"],
        correct: "Inca",
      },
    ],
  },
  // Literature questions
  literature: {
    // Easy literature questions
    easy: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        correct: "William Shakespeare",
      },
      {
        question: "What is the name of Harry Potter’s pet owl?",
        answers: ["Hedwig", "Scabbers", "Crookshanks", "Errol"],
        correct: "Hedwig",
      },
      {
        question: "What is the main character's name in 'The Cat in the Hat'?",
        answers: ["Tom", "Cat", "Thing 1", "The Cat in the Hat"],
        correct: "The Cat in the Hat",
      },
      {
        question: "Which animal is the main character in 'Charlotte's Web'?",
        answers: ["Dog", "Spider", "Pig", "Cat"],
        correct: "Pig",
      },
      {
        question: "Who wrote 'The Very Hungry Caterpillar'?",
        answers: ["Eric Carle", "Dr. Seuss", "Roald Dahl", "Beatrix Potter"],
        correct: "Eric Carle",
      },
    ],
    //   Medium literature  questions
    medium: [
      {
        question:
          "What is the title of George Orwell’s novel about a dystopian future?",
        answers: ["1984", "Brave New World", "Animal Farm", "Fahrenheit 451"],
        correct: "1984",
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
          "Charlotte Brontë",
          "Jane Austen",
          "Emily Brontë",
          "Mary Shelley",
        ],
        correct: "Jane Austen",
      },
      {
        question: "What is the name of Sherlock Holmes’ assistant?",
        answers: ["Watson", "Hudson", "Lestrade", "Moriarty"],
        correct: "Watson",
      },
      {
        question: "Which novel begins with the line 'Call me Ishmael'?",
        answers: [
          "The Old Man and the Sea",
          "Moby-Dick",
          "Robinson Crusoe",
          "Treasure Island",
        ],
        correct: "Moby-Dick",
      },
      {
        question: "Who is the author of 'The Chronicles of Narnia'?",
        answers: [
          "J.K. Rowling",
          "C.S. Lewis",
          "J.R.R. Tolkien",
          "Philip Pullman",
        ],
        correct: "C.S. Lewis",
      },
    ],
    //   Hard literature questions
    hard: [
      {
        question: "Which Russian author wrote 'The Brothers Karamazov'?",
        answers: [
          "Leo Tolstoy",
          "Fyodor Dostoevsky",
          "Anton Chekhov",
          "Vladimir Nabokov",
        ],
        correct: "Fyodor Dostoevsky",
      },
      {
        question:
          "What is the name of the fictional language spoken by the Houyhnhnms?",
        answers: ["Hoo", "Hoo-ny", "Yahoolish", "It is never named"],
        correct: "It is never named",
      },
      {
        question:
          "In which novel would you find the character Humbert Humbert?",
        answers: ["Lolita", "Ulysses", "The Great Gatsby", "Catch-22"],
        correct: "Lolita",
      },
      {
        question: "Which poet wrote 'Do Not Go Gentle into That Good Night'?",
        answers: ["Robert Frost", "W.H. Auden", "Dylan Thomas", "T.S. Eliot"],
        correct: "Dylan Thomas",
      },
      {
        question: "What is the real name of Mark Twain?",
        answers: [
          "Samuel Clemens",
          "William Faulkner",
          "Ernest Hemingway",
          "F. Scott Fitzgerald",
        ],
        correct: "Samuel Clemens",
      },
    ],
  },
  // Film category
  film: {
    // Easy film questions
    easy: [
      {
        question: "Who is the main character in the movie 'Toy Story'?",
        answers: ["Woody", "Buzz Lightyear", "Andy", "Jessie"],
        correct: "Woody",
      },
      {
        question: "What is the name of the snowman in 'Frozen'?",
        answers: ["Olaf", "Kristoff", "Sven", "Hans"],
        correct: "Olaf",
      },
      {
        question: "Which superhero is known as the Caped Crusader?",
        answers: ["Superman", "Batman", "Spider-Man", "Iron Man"],
        correct: "Batman",
      },
      {
        question: "What color is Lightning McQueen in 'Cars'?",
        answers: ["Red", "Blue", "Yellow", "Green"],
        correct: "Red",
      },
      {
        question: "Which animated movie features a rat who can cook?",
        answers: ["Ratatouille", "Zootopia", "Up", "The Secret Life of Pets"],
        correct: "Ratatouille",
      },
    ],
    //   Medium dificulty film questions
    medium: [
      {
        question: "Which actor played Jack in 'Titanic'?",
        answers: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Matt Damon"],
        correct: "Leonardo DiCaprio",
      },
      {
        question:
          "Which movie series features a ring and a character named Frodo?",
        answers: [
          "Harry Potter",
          "Star Wars",
          "The Lord of the Rings",
          "Narnia",
        ],
        correct: "The Lord of the Rings",
      },
      {
        question: "In which film do blue aliens live on the planet Pandora?",
        answers: [
          "Avatar",
          "Star Trek",
          "The Fifth Element",
          "Guardians of the Galaxy",
        ],
        correct: "Avatar",
      },
      {
        question:
          "Which animated film is set in the Land of the Dead and follows a boy named Miguel?",
        answers: ["Coco", "Encanto", "Moana", "Onward"],
        correct: "Coco",
      },
      {
        question: "Who directed the movie 'Inception'?",
        answers: [
          "Steven Spielberg",
          "Christopher Nolan",
          "James Cameron",
          "Quentin Tarantino",
        ],
        correct: "Christopher Nolan",
      },
    ],
    //   Hard film questions
    hard: [
      {
        question: "What 1927 film is considered the first 'talkie'?",
        answers: ["The Jazz Singer", "Metropolis", "Citizen Kane", "Nosferatu"],
        correct: "The Jazz Singer",
      },
      {
        question: "Who composed the iconic score for 'Star Wars'?",
        answers: [
          "Hans Zimmer",
          "John Williams",
          "James Horner",
          "Howard Shore",
        ],
        correct: "John Williams",
      },
      {
        question: "Which actress has won the most Academy Awards?",
        answers: [
          "Meryl Streep",
          "Katharine Hepburn",
          "Audrey Hepburn",
          "Ingrid Bergman",
        ],
        correct: "Katharine Hepburn",
      },
      {
        question:
          "Which foreign-language film won Best Picture at the Oscars in 2020?",
        answers: [
          "Roma",
          "Parasite",
          "Crouching Tiger, Hidden Dragon",
          "Amour",
        ],
        correct: "Parasite",
      },
      {
        question:
          "In what film would you hear the line 'Here's looking at you, kid'?",
        answers: [
          "Gone with the Wind",
          "The Godfather",
          "Casablanca",
          "Citizen Kane",
        ],
        correct: "Casablanca",
      },
    ],
  },
};
