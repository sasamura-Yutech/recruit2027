(()=>{
    // ここからDOM要素の取得
    const $document = document;
    const $tab = $document.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    // ここまでDOM要素の取得
    // 初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();
    // クリックしたら実行される処理
    const handleClick = (e) => {
        e.preventDefault();
        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;
        // 対象外のnavコンテンツをすべてリセット
        let index = 0;
    while(index < $nav.length){
        $content[index].style.display = 'none';
        $nav[index].classList.remove('is-active');
        index++;
    }
        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display='block';
        $nav[targetVal].classList.add('is-active');
    };
    // すべてのnav要素に対して関数を適応させる
    let index=0;
    while(index < $nav.length){
        $nav[index].addEventListener('click',(e) => handleClick(e));
        index++;
    }
})();

(() =>{
    const $skipbutton=document.getElementById('js-skipbutton');
    const $btn=$skipbutton.getElementsByTagName('button');
    const $section=document.querySelectorAll('[data-section]');
    
    // クリックによる該当箇所へのスクロール処理
    $btn[0].addEventListener('click', () => {
        $section[0].scrollIntoView({
            block: "center",
        });
    }); 
    $btn[1].addEventListener('click', () => {
        $section[1].scrollIntoView({
            block: "center",
        });
    }); 
    $btn[2].addEventListener('click', () => {
        $section[2].scrollIntoView({
            block: "center",
        });
    }); 
    $btn[3].addEventListener('click', () => {
        $section[3].scrollIntoView({
            block: "center",
        });
    });

    //リファクタリング(失敗しました)
    // index= 0; 
    // while(index < $btn.length){
        // $btn[index].addEventListener('click', (e) => $skipbutton(e));
        // index++;
    // }

})();