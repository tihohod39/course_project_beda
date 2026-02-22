
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const width = 8;
        const squares = [];
        let score = 0;

        const shapes = ['circle', 'square'];

        // 1. Создание поля
        function createBoard() {
            for (let i = 0; i < 56; i++) {
                const square = document.createElement('div');
                let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                const shapeElement = document.createElement('div');
                shapeElement.setAttribute('draggable', true);
                shapeElement.setAttribute('id', i);
                shapeElement.classList.add(randomShape);
                square.appendChild(shapeElement);
                grid.appendChild(square);
                squares.push(shapeElement);
            }
        }
        createBoard();

        