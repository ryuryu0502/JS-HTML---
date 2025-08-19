//IDを使って要素を取得するらしい
const todoInput = document.getElementById("todo-text");
const addButton = document.getElementsByName("add-button");
const todolist = document.getElementById("todo-list");

//取得した要素をコンソールに表示して確認するらしい
console.log("入力フィールドの要素",todoInput);
console.log("追加ボタンの要素",addButton);
console.log("Todoリストの要素",todoList);

// querySelectorを使って要素を取得することもできる ←どゆこと？
const addButtonQuery = document.querySelector('#add-button');
console.log("querySelectorで取得した追加ボタン:", addButtonQuery);

const inputAreaDiv = document.querySelector('.todo-input-area');
console.log("querySelectorで取得した入力エリアのdiv:", inputAreaDiv);

// querySelectorAllを使うと、指定したセレクタに一致する全ての要素を取得できる（今回は使いませんが参考までに）
// const listItems = document.querySelectorAll('#todo-list li');
// console.log("リストアイテム全て:", listItems);

// 追加ボタンがクリックされたときに実行される処理を設定する
addButton.addEventListener('click', function() {
    console.log("追加ボタンがクリックされました！");
    // TODO: ここにTodoを追加する処理を書く
});

// function() { ... } の部分は、イベント発生時に実行したい処理をまとめた関数です。
// このような名前のない関数を「無名関数」と呼び、イベントリスナーによく使われます。
