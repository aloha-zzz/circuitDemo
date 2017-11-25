document.getElementById('newSearch').onclick=function () {
    var clickBox=document.querySelectorAll('.clickBox');
    var pms=clickBox[0].checked;
    var saleLib=clickBox[1].checked;
    var input=document.getElementById('routeName').value;

    var obj={input,pms,saleLib}
    $.ajax({
        url:'',
        type:'POST',
        data:obj,
        dataType:'JSON',
        success:function (data) {
            console.log(data);
        },
        error:function (data) {
            console.log(data);
        }
    })
}


