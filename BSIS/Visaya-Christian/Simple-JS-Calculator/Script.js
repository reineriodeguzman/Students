var ScreenValue = '0';
var OperatorPlus = false;
var FirstNumber;
var SecondNumber;

function Del() {
          ScreenValue = '0';
          document.getElementById('ScreenValue').innerHTML = ScreenValue;
}

function Toggle() {
          var Nav = document.getElementById('NavBar');
          var BackFocus = document.getElementById('BackFocus');

          Nav.style.width = '20%';
          BackFocus.style.display = 'block';
}

function ReturnView() {
          var Nav = document.getElementById('NavBar');
          var BackFocus = document.getElementById('BackFocus');

          Nav.style.width = '0%';
          BackFocus.style.display = 'none';
}

function Seven() {
          var x = document.getElementById('ScreenValue');
          x.innerHTML = "Christian";
}

function Operator(Operator) {
          FirstNumber = Number(ScreenValue);

          if(Operator == '+' && OperatorPlus == false){
                    OperatorTool = '+';
                    OperatorPlus = true;
                    ScreenValue = ScreenValue + Operator;
                    document.getElementById('ScreenValue').innerHTML = ScreenValue;
          }
}

function Send(Value) {
          if(ScreenValue == '0' && Value == '0'){
                    ScreenValue = '0';
          }else if(ScreenValue == '0'){
                    ScreenValue = Value;
          }else{
                    ScreenValue = ScreenValue + Value;
          }


          document.getElementById('ScreenValue').innerHTML = ScreenValue;
}
