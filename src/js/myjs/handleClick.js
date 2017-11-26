
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
var bool1;
var bool2;
document.getElementById('compare').onclick=function () {
    var input=document.querySelectorAll('input.form-control');
    if(input[2].value==''||input[4].value==''){
        alert('click tree');
    }else {
        processData(input[1].value,input[2].value,input[3].value,input[4].value,bool1,bool2);
        document.querySelectorAll('.btn.btn-primary.md-menu-white')[0].click()
        document.getElementById('tree').style.display='none';
        document.getElementById('main').style.display='block';
        document.getElementById('main2').style.display='block';
        createMap(mapdata);
        createMapchart();
    }





}
function treeClick(param) {
    var input=document.querySelectorAll('input.form-control');

    console.log(param);
    if(param.data.name=='青阳变电站'){
        return;
    }

    if(param.seriesName=='PMS'){
        input[2].value=param.data.name;
        if(param.data.children==undefined){
            bool1=false;
        }else {
            bool1=true;
        }
    }
    if(param.seriesName=="营销库"){
        input[4].value=param.data.name;
        if(param.data.children==undefined){
            bool2=false;
        }else {
            bool2=true;
        }
    }


}

