import "./styles.css";

const onClickAdd = () => {
  // 入力内容を取得し、クリアする
  const inputText = document.getElementById("new-task").value;
  document.getElementById("new-task").value = "";
  createIncompleteList(inputText);
};

//未完了タスク追加機能
const createIncompleteList = (text) => {
  //divを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

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
      //戻すボタンを押されたら、完了タスクから削除する
      const completeTask = backBtn.parentNode;
      document.getElementById("complete-list").removeChild(completeTask);

      //タスクの内容を取得
      const incompleteText = incompleteTask.firstElementChild.innerText;
      createIncompleteList(incompleteText);
    });
  });

  //削除ボタンを追加
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  //削除ボタンでタスクを削除
  deleteBtn.addEventListener("click", () => {
    const deleteTask = deleteBtn.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTask);
  });

  //divタグの子要素に各liタグを設定
  div.appendChild(li);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
};

document
  .getElementById("add-new-task")
  .addEventListener("click", () => onClickAdd());
