import "./styles.css";

const onClickAdd = () => {
  // 入力内容を取得し、クリアする
  const inputText = document.getElementById("new-task").value;
  document.getElementById("new-task").value = "";

  //divを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //未完了のタスクに追加する
  document.getElementById("incomplete-list").appendChild(div);

  //完了ボタンを追加
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    const incompleteTask = completeBtn.parentNode;
    //テキスト内容を取得
    const incompleteText = incompleteTask.firstElementChild.innerText;

    //div以下を初期化
    incompleteTask.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = incompleteText;

    incompleteTask.appendChild(li);

    //戻すボタンを作成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    incompleteTask.appendChild(backBtn);

    //完了ボタンで完了タスクに追加
    document.getElementById("complete-list").appendChild(incompleteTask);

    backBtn.addEventListener("click", () => {
      const completeTask = backBtn.parentNode;
      //div以下を初期化
      const completeText = completeTask.firstElementChild.innerText;
      completeTask.textContent = null;

      //liタグ生成
      const li = document.createElement("li");
      li.innerText = completeText;

      //タスクを未完了リストに追加
      completeTask.appendChild(li);

      //未完了タスクのbuttonを作成
      completeTask.appendChild(completeBtn);
      completeTask.appendChild(deleteBtn);

      document.getElementById("incomplete-list").appendChild(div);
    });
  });

  //削除ボタンを追加
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    const deleteTask = deleteBtn.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTask);
  });

  //divタグの子要素に各liタグを設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
};

const onClickDone = () => {
  //未完了タスクを取得し、クリアする
  document.get;
};

document
  .getElementById("add-new-task")
  .addEventListener("click", () => onClickAdd());
