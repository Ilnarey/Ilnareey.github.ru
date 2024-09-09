<!DOCTYPE html>

 <head>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <meta name="author" content="Ильнара">
    <title>Список задач</title>
 </head>
 <body>
    <section class="header">
            <h>Список задач</h>
    </section>
    <section class="new_task">
        <label>Новая задача</label>
        <form>
            <input type="text"placeholder="Название задачи...">
            <button type="button">+ Добавить</button>
        </form>
    </section>
    <section class="row">
        <div class="blogack">
            <ul class="list_blogack">
                <label>Бэклог</label>
                <li class="task">Выучить JS</li>
                <li class="task">Выучить React</li>
                <li class="task">Сделать домашку</li>
            </ul>
        </div>
        <div class="in_progress">
            <ul class="list_in_progress">
                <label>В процессе</label>
                <li class="task">Выпить смузи</li>
                <li class="task">Попить воды</li>
            </ul>
        </div>
        <div class="ready"> 
            <ul class="list_ready">
                <label>Готово</label>
                <li class="task">Позвонить маме</li>
                <li class="task">Погладить кота</li>
            </ul>
        </div>
        <div class="garbage">
            <ul class="list_garbage">            
                <label>Корзина</label>
                <li class="task">Сходить погулять</li>
                <li class="task">Прочитать войну и мир</li>
                <button type="button">x Очистить</button>
            </ul>
        </div>
</section>
</body>
</html>  
</div>
