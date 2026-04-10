     
        const grid = document.querySelector('.grid');
        const scoreDisplay = document.getElementById('score');
        const squares = [];
        let score = 0;
        const width = 12;
        const shapes = ['circle', 'square','oval','pyramid','sun','moon'];// Не смотрите на имена , они рандомные

// Изменение цвета
        let theme = 3;
        const buttons = document.querySelectorAll('button');
        const a = document.querySelectorAll('a');
        const ochert = document.getElementsByClassName('ochert');
        const h2 = document.querySelectorAll('h2');
        function changeColor() {
            switch (theme) {
                case 1:{
                document.body.style.backgroundColor = 'rgb(37 37 37)';
                buttons[0].style.borderColor = "rgb(104 240 99)";
                buttons.forEach( btn=>{
                    btn.style.color = "rgb(104, 240, 99)";
                   });
                   a.forEach( a=>{
                    a.style.color = "rgb(104, 240, 99)";
                });
                ochert[0].style.borderColor="rgb(104, 240, 99)";
                h2[0].style.color="rgb(104, 240, 99)";
                h2[0].style.textShadow = "0 -40px 100px, 0 0 2px, 0 0 1em #bfffc4, 0 0 0.5em #bfffc4, 0 0 0.1em #bfffc4;";
                break;
                }
                case 2:{
                    document.body.style.backgroundColor = 'rgb(143 223 220)';
                    buttons[0].style.borderColor = "rgb(3 71 255)";  
                    buttons.forEach( btn=>{
                        btn.style.color = "rgb(3 71 255)";
                       });   
                       a.forEach( a=>{
                        a.style.color = "rgb(3 71 255)";
                    });
                    ochert[0].style.borderColor="rgb(3 71 255)";
                    h2[0].style.color="rgb(3 71 255)";
                    h2[0].style.textShadow = "0 -40px 100px, 0 0 2px, 0 0 1em #6b00ff, 0 0 0.5em #6b00ff, 0 0 0.1em #6b00ff;";
                break;
                }   
                case 3:{
                  
                    document.body.style.backgroundColor = 'rgb(143 145 223)';
                    buttons[0].style.borderColor = "rgb(255 3 243)";  
                    buttons.forEach( btn=>{
                        btn.style.color = "rgb(255 3 243)";
                       });    
                       a.forEach( a=>{
                        a.style.color = "rgb(255 3 243)";
                    });
                    ochert[0].style.borderColor="rgb(255 3 243)";
                    h2[0].style.color="rgb(255 3 243)";
                    h2[0].style.textShadow = "0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;";
                break;
                }
                case 4:{
                   
                    document.body.style.backgroundColor = 'rgb(214 223 143)';
                    buttons[0].style.borderColor = "rgb(212 255 3)";  
                    buttons.forEach( btn=>{
                        btn.style.color = "rgb(212 255 3)";
                       });   
                       a.forEach( a=>{
                        a.style.color = "rgb(212 255 3)";
                    });
                    ochert[0].style.borderColor="rgb(212 255 3)";
                    h2[0].style.color="rgb(212 255 3)";
                    h2[0].style.textShadow = "0 -40px 100px, 0 0 2px, 0 0 1em #bfffc4, 0 0 0.5em #bfffc4, 0 0 0.1em #bfffc4;";
                break;
                }         
             }; 
        }
        changeColor();
//
       
        //Закрытие меню
        document.getElementById("btnClose").onclick = function()
        {
        let vid = document.getElementsByClassName("menu");
        vid[0].style.visibility = "hidden";
        let vid2 = document.getElementById("btnOpen")
        vid2[0].style.visibility = "visible";
        let vid3 = document.getElementById("btnRestart")
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
            let vid3 = document.getElementById("btnRestart")
            vid2[0].style.visibility = "hidden";
        }
        //Создание поля
        function createBoard() {
            for (let i = 0; i < 108; i++) {
                const square = document.createElement('div');
                let randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                const shapeElement = document.createElement('div');
                shapeElement.setAttribute('draggable', true);
                if(i%8== 1 || i >95 && i<108){
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
            for (let i = 0; i < 108; i++) {
                let rowOfThree = [i, i + 1, i + 2];
                let rowOfFour = [i, i + 1, i + 2, i + 3];
                let rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
                let VIbrannayaFigura = squares[i].className;
                if(VIbrannayaFigura == "immovable"){
                continue
                } 
                const isBlank = squares[i].className === '';

                // Ограничение, чтобы ряд не перепрыгивал на другую строку
                if (i % 12 > 9) continue; 

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
            for (let i = 0; i < 96; i++) {
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

        

        





        