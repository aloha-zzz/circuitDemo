
var inputValue1;
var inputValue2;
document.getElementById('newSearch').onclick=function () {
    // var clickBox=document.querySelectorAll('.clickBox');
    // var pms=clickBox[0].checked;
    // var saleLib=clickBox[1].checked;
    // var input=document.getElementById('routeName').value;
    //
    // var obj={input,pms,saleLib}
    // $.ajax({
    //     url:'',
    //     type:'POST',
    //     data:obj,
    //     dataType:'JSON',
    //     success:function (data) {
    //         console.log(data);
    //     },
    //     error:function (data) {
    //         console.log(data);
    //     }
    // })
    document.getElementById('main').style.display='none';
    document.getElementById('main2').style.display='none';
    document.getElementById('tree').style.display='block';
    createTree();
    var input=document.querySelectorAll('input.form-control');
    input[1].value=inputValue1;
    input[2].value='';
    input[3].value=inputValue2;
    input[4].value='';
}

document.getElementById('compare').onclick=function () {
    document.querySelectorAll('.btn.btn-primary.md-menu-white')[0].click()
    document.getElementById('tree').style.display='none';
    document.getElementById('main').style.display='block';
    document.getElementById('main2').style.display='block';
    createMap(mapdata);
    createMapchart();
    

}
function treeClick(param) {
    var input=document.querySelectorAll('input.form-control');
    console.log(param);
    if(param.seriesName=='PMS'){

        input[2].value=param.data.name;
    }
    if(param.seriesName=="营销库"){

        input[4].value=param.data.name;
    }
}