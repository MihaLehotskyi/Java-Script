$(document).ready(function(){
    $('#ajaxPost').bind('click',function(){
        var userData = {
            username: $("#userNamePost").val(),
            userage: $("#userAgePost").val() 
        }
        if(userData.userage > 100 | userData.userage < 1){
            alert("Error : enter valid age!!!")
        }else
        $.ajax({
            type : 'Post',
            data : JSON.stringify(userData),
            contentType : 'application/json',
            url : 'http://localhost:3000/userPost',
            success : function(data){
                console.log('success');
                console.log(JSON.stringify(data));
            }
        })
    })

    $('#ajaxGet').bind('click',function(){
        var userData = {
            username: $("#userNameGet").val(),
            userage: $("#userAgeGet").val() 
        }
        if(userData.userage > 100 | userData.userage < 1){
            alert("Error : enter valid age!!!")
        }else
        $.ajax({
            type : 'Get',
            contentType : 'application/json',
            url : 'http://localhost:3000/userGet?username =' + userData.username + '& userage =' + userData.userage,
            success : function(data){
                console.log('success');
                console.log(JSON.stringify(data));
            }
        })
    })
    
})