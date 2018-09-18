function initPage(){
    document.getElementById('subCount').innerHTML = '0';           
    document.getElementById('totalScore').innerHTML = "0";
    document.getElementById('number1').innerHTML = '';                      
    document.getElementById('number2').innerHTML = '';                     
    nextSubject();
}
function nextSubject(){
    var calaType = Math.ceil(Math.random() * 4); // 随机生成1到4之间的数字
    
                                                                // Math.random()方法可返回介于 0 ~ 1 之间的一个随机数
                                                    
                                                                // Math.ceil()进行四舍五入处理,向上取整, Math.ceil(1.4) = 2
    var number1 = Math.ceil(Math.random() * 99); // 数字范围是1到99之间
    var number2 = 0;
    if(calaType == 1 || calaType == 3){
        number2 = Math.ceil(Math.random() * 99);
    }
    else{
        number2 = Math.ceil(Math.random() * number1);  // 随机数范围是1到number1
    }
    if(calaType == 1){
        document.getElementById('calaType').innerHTML = '+';
    }
    else if(calaType == 2){
        document.getElementById('calaType').innerHTML = '-';
    }
    else if(calaType == 3){
        document.getElementById('calaType').innerHTML = '*';
    }
    else{
        document.getElementById('calaType').innerHTML = '/';
    }
    //document.getElementById('number1').innerHTML = '' + number1;    
    
    document.getElementById('number1').innerHTML = number1;   
    
    document.getElementById('number2').innerHTML = ''+number2; // 页面显示效果same as = number2.                                                                         // why??????????
    document.getElementById('inputResult').value = '';
    

    
    
    var sc = document.getElementById('subCount').innerHTML;            
    
    var nextSc = parseInt(sc) + 1;                                      
                                    // The parseInt() function parses a string and returns an integer.
   
    document.getElementById('subCount').innerHTML = '' + nextSc; 
    
                                    // 检查答案后 题目数 自动增加1 道
  }  
    
    

 /*  编写点击检查按钮的时候的函数checkResult */


function checkResult(){   
    var calaType = document.getElementById('calaType').innerHTML;
    var number1 = document.getElementById('number1').innerHTML;
    var number2 = document.getElementById('number2').innerHTML;
    number1 = parseInt(number1);
    number2 = parseInt(number2);   // 首先检查输入的所有字符都必须是数字
    var correctNumRet = 0;
    if(calaType == '+'){
        correctNumRet = number1 + number2;   // 然后取得2个数字和运算符
            
                                            // 先计算出正确的结果，然后和输入的结果进行比较
    }
    else if(calaType == '-'){
        correctNumRet = number1 - number2;
    }
    else if(calaType == '*'){
        correctNumRet = number1 * number2;
    }
    else if(calaType == '/'){
        correctNumRet = number1 / number2;
        correctNumRet = parseInt(correctNumRet);
    }
    
    // 如果相同则将分数加10分，否则不加分，然后显示alert....
    
    // 然后调用下一题函数nextSubject。
    
    var inputRet = document.getElementById('inputResult').value;
    inputRet = parseInt(inputRet);
  //  console.log('numberRet: ',correctNumRet);
   //  console.log('inputRet: ',inputRet);                 删除不影响哦
    
    var totalScore = document.getElementById('totalScore').innerHTML; //..ById('...') 
                                                                    // 一定要By 对名称
                                                                    // 不然整个 function 没有反应
    totalScore = parseInt(totalScore);  
    if(correctNumRet == inputRet){
        alert('Good job!');
        totalScore = totalScore + 10;
        document.getElementById('totalScore').innerHTML = '' + totalScore;
    }
    else if(document.getElementById('inputResult').value == ''){ 
        
                // 因为 inputRet = parseInt(inputRet); 所以不能if(inputRet)...
   
        alert('Please fill in the answer.');
        var sc = document.getElementById('subCount').innerHTML;
        document.getElementById('subCount').innerHTML = sc - 1;
        
                                        // 否则没有填答案 也会继续算多一道题目，因为最后call nextSubject();....
    } 
    else{
        alert('Error...');
    }
    var subCount = document.getElementById('subCount').innerHTML;
    subCount = parseInt(subCount);
    if(subCount == 10){
        alert('Total score: ' + totalScore);
        initPage();
    }
    else{
        nextSubject();
    }     
}

/*
总结一下，

要做一个有着比较完整的功能的网页，一般的做法是:

1. 先设计好网页元素，以及相应的事件和要处理的逻辑

2. 然后开始编写网页，

3. 然后编写样式，

4. 然后编写各个事件的JavaScript函数，

5. 然后编写调用函数，

6. 然后进行测试调整，直到符合预期结果。 */

















