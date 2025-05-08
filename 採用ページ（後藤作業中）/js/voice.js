(() => {
    const $element=document.querySelector('#js-accordion');
    const $trigger=$element.getElementsByClassName('accordion-trigger-box');

    const triggerLen=$trigger.length;
    let index = 0;
    while(index < triggerLen){
        $trigger[index].addEventListener('click',(e) => clickHandler(e),);
        
        index++;
    }
   
    // クリックしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();
        const $target = e.currentTarget; 
        const $content = $target.nextElementSibling; 
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    }

    const accordions = document.getElementsByClassName("accordion-trigger-box");
for (let i = 0; i < accordions.length; i++) {
    console.log(accordions[i])
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
}

    
    
        
    
})();