
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const squares = [];
        let score = 0;
        const width = 8;
        const shapes = ['circle', 'square','oval','pyramid','sun','moon'];// Не смотрите на имена , они рандомные

        //Закрытие меню
        document.getElementById("btnClose").onclick = function()
        {
        let vid = document.getElementsByClassName("menu");
        vid[0].style.visibility = "hidden";
        let vid2 = document.getElementById("btnOpen")
        vid2[0].style.visibility = "visible";
        }
        //restart
        document.getElementById("btnRestart").onclick = function()
        {
            let vid = document.getElementsByClassName("menu");
            vid[0].style.visibility = "hidden";
            window.location.reload()
        }
        //Открытие меню
        document.getElementById("btnOpen").onclick = function()
        {
            let vid = document.getElementsByClassName("menu");
            vid[0].style.visibility = "visible";
            let vid2 = document.getElementById("btnOpen")
            vid2[0].style.visibility = "hidden";
        }
        //Создание поля
        function createBoard() {
            for (let i = 0; i < 56; i++) {
                const square = document.createElement('div');
                let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                const shapeElement = document.createElement('div');
                shapeElement.setAttribute('draggable', true);
                
                if(i<56 &&i>47 ||i==47 ||i==39 ||i<8 &&i>-1||i==8||i==16){
                    shapeElement.setAttribute('draggable', false);
                    shapeElement.setAttribute('class', 'immovable');
                    shapeElement.setAttribute('id', i);
                    square.appendChild(shapeElement);
                    grid.appendChild(square);
                    squares.push(shapeElement);
                    continue
                } 
                
                shapeElement.setAttribute('id', i);
                shapeElement.classList.add(randomShape);
                square.appendChild(shapeElement);
                grid.appendChild(square);
                squares.push(shapeElement);
            }
        }
        //Поле 7 на 8 заполненное рандомно : квадрат / круг / типо-овал хз / типо пирамида / Лучше заменить на фото 
        createBoard();

// логика перетягивания "настоящая"

// Логика перетаскивания (Drag & Drop)
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

            if (this.classList.contains('immovable')) {
        return;
    }
            if (squares[idBeingDragged].classList.contains('immovable')) {
        return;
    }

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
                let rowOfFour = [i, i + 1, i + 2, i + 3];
                let rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
                let VIbrannayaFigura = squares[i].className;
                if(VIbrannayaFigura == "immovable"){
                continue
                } 
                const isBlank = squares[i].className === '';

                // Ограничение, чтобы ряд не перепрыгивал на другую строку
                if (i % 8 > 5) continue; 

                if (rowOfFive.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 5;
                    scoreDisplay.innerHTML = score;
                    rowOfFive.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }
                if (rowOfFour.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 4;
                    scoreDisplay.innerHTML = score;
                    rowOfFour.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }
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
            for (let i = 0; i < 56; i++) {
                let columnOfThree = [i, i + width, i + width * 2];
                let columnOfFour = [i, i + width, i + width * 2 , i + width * 3];
                let columnOfFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4];
                let VIbrannayaFigura = squares[i].className;
                const isBlank = squares[i].className === '';
                if(VIbrannayaFigura == "immovable"){
                    continue
                    } 
                if (columnOfFive.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 5;
                    scoreDisplay.innerHTML = score;
                    columnOfFive.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }else
                if (columnOfFour.every(index => squares[index].className === VIbrannayaFigura && !isBlank)) {
                    score += 4;
                    scoreDisplay.innerHTML = score;
                    columnOfFour.forEach(index => {
                        squares[index].className = ''; // "удаляем нафиг"
                        refillBoard(index);
                    });
                }else
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

        // Авто-проверка каждые 200мс
        window.setInterval(() => {
            checkMatches();
        }, 200);

        

        





        