//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
//全ての項目を配列として取得
const datalists = document.querySelectorAll('.datalist');

//全ての説明欄を配列として取得
const explanations = document.querySelectorAll('.explanation');

//全てのボタンを配列として取得
const buttons = document.querySelectorAll('.close-button');
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

//項目にカーソルを合わせると枠線が表示される（繰り返し）
for (let i = 0; i < datalists.length; i++) {
    datalists[i].addEventListener('mouseover', () => {
        datalists[i].classList.add('select');
    });
}

//項目からカーソルが離れると枠線が消える（繰り返し）
for (let i = 0; i < datalists.length; i++) {
    datalists[i].addEventListener('mouseout', () => {
        datalists[i].classList.remove('select');
    });
}

//説明欄のボタンを押すと説明欄が消える（繰り返し）
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        explanations[i].classList.remove('open');
    });
}



//各項目をクリックすると説明欄の表示/非表示が切り替わる（繰り返し）
for (let i = 0; i < datalists.length; i++) {
    datalists[i].addEventListener('click', () => {
        console.log('クリック→OK');
        explanations[i].classList.toggle('open');
        //もしそのデータリストの説明欄が閉じていたら
        if (explanations[i].classList.contains('open')) {
            console.log('説明欄閉じている判定→OK');
            //全ての説明欄を閉じて
            for (let j = 0; j < explanations.length; j++) {
                explanations[j].classList.remove('open');//作動しない
            }
            //そのデータリストの説明欄を開く
            explanations[i].classList.add('open');//作動しない
        }

    });
}


