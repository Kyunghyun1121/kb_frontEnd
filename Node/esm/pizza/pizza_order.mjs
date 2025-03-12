function pizzaOrder(pizzaName) {
  const pizzaList = ['치즈피자', '불고기피자', '페페로니피자'];

  return new Promise((resolve, reject) => {
    if (pizzaList.includes(pizzaName)) {
      resolve(() => {
        //성공했을때 반환할 함수
        console.log(`${pizzaName} 주문 완료 >_<`);

        setTimeout(() => {
          console.log(`${pizzaName} 배달을 시작했습니다. `);
        }, 3000);
      });
    } else {
      //실패했을때 반환할 값
      reject(`주문 실패, ${pizzaName}은 존재하지 않습니다.`);
    }
  });
}

export default pizzaOrder;
