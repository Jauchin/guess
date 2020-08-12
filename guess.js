// console.log(Math.floor(Math.random()*10));  //0-9隨機數

// var str = "1234";
// var result = str.indexOf("23");            //檢查字串
// console.log(result);
var answer = "";
while (answer.length < 4) {
    var number = Math.floor(Math.random() * 10);
    if (answer.indexOf(number) == -1) {
        answer += number;
    }
}


var userInput = document.getElementById('number-input');
var btn = document.getElementById('submit-btn');
// var resetBtn = document.getElementById('Re-start');
var show = document.getElementById('result-span');

var tmpResult = '';

// resetBtn.addEventListener("click", function(){


// });
console.log(answer);

btn.addEventListener("click", function(){    
    //check if repeat
    var flag = true;
    var userNumber = userInput.value;
    outerLoop: for(var j=0; j<3; j++){
        for(var k=j+1; k<4; k++){
            if (userNumber[j].indexOf(userNumber[k])!=-1){
                alert("請輸入不重複的數字");
                flag = false;
                break outerLoop;
            }
        }        
    }

    if(flag){
        var a = 0;
        var b = 0;
        for (var i = 0; i < 4; i++) {
            if (answer[i] == userNumber[i]) {
                a++;
                continue;
            }
            if (answer.indexOf(userNumber[i]) != -1) {
                b++;
            }
        }
        tmpResult += userInput.value + " " + a + 'A' + b + 'B<br>';
        show.innerHTML = tmpResult;


        if (a != 4){            
            console.log(userInput.value + "result:" + a + 'A' + b + 'B');
        }else{
            alert("恭喜, 你答對了, 答案正是 " + userInput.value);
            var restart = confirm("是否要重新開始?");
            if(restart){
                javascript: window.location.reload();
            }
        }
    }
    userInput.value = "";
    

});


    
    // console.log(temp);
    


