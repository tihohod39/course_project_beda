
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const squares = [];
        let score = 0;
        const width = 8;
        const shapes = ['circle', 'square','oval'];

        //Закрытие меню
        document.getElementById("btnClose").onclick = function()
        {
        let vid = document.getElementsByClassName("menu");
        vid[0].style.visibility = "hidden";
        }
        //Создание поля + добавление перетягивания
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
        //Поле 7 на 8 заполненное рандомно : квадрат / круг / типо-овал хз
        createBoard();

// логика перетагивания "настоящая"

// 2. Логика перетаскивания (Drag & Drop)
        let shapeBeingDragged;
        let shapeBeingReplaced;
        let idBeingDragged;
        let idBeingReplaced;

        squares.forEach(shape => shape.addEventListener('dragstart', dragStart));
        squares.forEach(shape => shape.addEventListener('dragover', e => e.preventDefault()));// чтобы браузер не мешал
        squares.forEach(shape => shape.addEventListener('drop', dragDrop));

        function dragStart() {
            shapeBeingDragged = this.className;
            idBeingDragged = parseInt(this.id);
        }

        function dragDrop() {
            shapeBeingReplaced = this.className;
            idBeingReplaced = parseInt(this.id);

            // Проверка: можно ли ходить (только соседние клетки)
            const validMoves = [
                idBeingDragged - 1,
                idBeingDragged + 1,
                idBeingDragged - width,
                idBeingDragged + width
            ];

            if (validMoves.includes(idBeingReplaced)) {
                this.className = shapeBeingDragged;
                squares[idBeingDragged].className = shapeBeingReplaced;
                checkMatches();
            }
        }
        // 3. Проверка совпадений
        function checkMatches() {
            // Проверка по горизонтали
            for (let i = 0; i < 54; i++) {
                let rowOfThree = [i, i + 1, i + 2];
                let VIbrannayaFigura = squares[i].className;
                const isBlank = squares[i].className === '';

                // Ограничение, чтобы ряд не перепрыгивал на другую строку
                if (i % 8 > 5) continue; 

                if (rowOfThree.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 3;
                    scoreDisplay.innerHTML = score;
                    rowOfThree.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }
            }
            
            // Проверка по вертикали
            for (let i = 0; i < 54; i++) {
                let columnOfThree = [i, i + width, i + width * 2];
                let VIbrannayaFigura = squares[i].className;
                const isBlank = squares[i].className === '';

                if (columnOfThree.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 3;
                    scoreDisplay.innerHTML = score;
                    columnOfThree.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }
            }
        }
// 4. Заполнение пустых мест
        function refillBoard(index) {
            // Я хз как заставить их падать , просто заменяем на новую случайную фигуру
            setTimeout(() => {
                if (squares[index].className === '') {
                    squares[index].className = shapes[Math.floor(Math.random() * shapes.length)];
                }
            }, 200);
        }

        // Авто-проверка каждые 100мс
        window.setInterval(() => {
            checkMatches();
        }, 100);

        

        





        