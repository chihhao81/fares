document.addEventListener('DOMContentLoaded', function() {
    // 獲取新的 HTML 元素
    const distanceInput = document.getElementById('distance');
    const timeInput = document.getElementById('time');
    const baseFareInput = document.getElementById('baseFare');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    // 為按鈕添加點擊事件監聽器
    calculateBtn.addEventListener('click', function() {
        // 獲取三個輸入欄位的值
        const distance = parseFloat(distanceInput.value);
        const time = parseFloat(timeInput.value);
        const baseFare = parseFloat(baseFareInput.value);

        // 檢查所有輸入是否為有效的正數
        if (isNaN(distance) || isNaN(time) || isNaN(baseFare) || distance < 0 || time < 0 || baseFare < 0) {
            resultDiv.innerHTML = '<p style="color: red;">請輸入有效的公里、時間和起始價！</p>';
            return; // 結束執行
        }

        // 根據公式計算總金額
        // 金額 = 公里*15 + 分鐘*3 + 起始價
        const totalFare = (distance * 15) + (time * 3) + baseFare;

        // 將結果顯示到頁面上，使用 Math.round() 四捨五入到整數
        resultDiv.innerHTML = `<p>預估車資為 ${Math.round(totalFare)} 元</p>`;
    });
});