function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
function $c(nodename_string){
    let node=document.createElement(nodename_string);
    return node;
}
//export { $g as $get };                            
export{$g,$c};