// 객체정의 (class 가 아니라 function)
function Account(bank, id, name, money) {

    // 멤버변수
    this.bank = bank;
    this.id = id;
    this.name = name;
    this.money = money;

    // 멤버함수
    this.deposit = function(money){
        this.money += money;
    }
    this.withdraw = function(money){
        this.money -= money;
    }
    this.info = function(money){
        document.write("================");
        document.write("<br> 은 행 명 : " + this.bank + "</bR>");
        document.write("계좌번호 : " + this.id + "</bR>");
        document.write("입 금 주 : " + this.name + "</bR>");
        document.write("현재잔액 : " + this.money + "</bR>");
        document.write("================<br>");
    }
}