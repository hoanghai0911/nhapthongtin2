function send(){
    var arr= document.getElementsByTagName("input");
    var name = arr[0].value;
    var check4= arr[4].checked;
    var check5= arr[5].checked;
    var check6= arr[6].checked;
    if(check4||check5){
        alert("Chúng tôi đã biết giới tính thật của bạn dề nghị bạn chọn lại");
    
    }
    else { 
        alert("cảm ơn bạn đã tham gia bài khảo sát");
    }
  
}