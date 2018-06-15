import React from "react";
import "./guide.less"

class Guide extends React.Component {
    render() {
        return(
            <div className="n38">
                <div className="guide">
                <h1> Hướng dẫn chơi </h1>
                <span>
                Hadi thích chơi ô số toán học với cha của mình, ông Aref. Vì thế, Hadi đã tạo ra một ô số cộng - cộng dưới đáy dành riêng
                cho ông Aref. Bạn có thể giúp ông Aref điền các số từ 1 đến n*n sao cho tổng các hàng và các cột bằng với số cho sẵn bên
                phải hàng và bên dưới cột. (Với n là kích cỡ của bảng).
                </span>
                <h1>Hướng dẫn sử dụng giao diện Game</h1>
                  <div className="imgn38">
                    <img src={'https://i.imgur.com/GziM3Ak.png'}     />
                  </div>
                <span>
                 <ul>
                    <li> Những ô<strong> hình vuông màu đỏ </strong> ở bên phải và bên dưới lần lượt là tổng phần còn thiếu của hàng và cột tương ứng. </li>
                    <li> Những ô<strong>  hình tròn màu trắng </strong> là những số cho trước. </li>
                    <li> Những ô <strong>  hình tròn màu vàng </strong> là những ô bạn phải điền số vào sao cho tất cá các số trong ô<strong>  hình
                     vuông màu vàng và trắng </strong> có tổng từng hàng và cột trùng với ô vuông màu đỏ tương ứng.  </li>
                   <li> Khi tổng của một hàng hoặc một cột bằng với ô màu đỏ tương ứng thì ô màu đỏ sẽ chuyển thành màu xanh. </li>
                   <li> Khi tất cả các ô màu đỏ chuyển thành màu xanh Bạn dành chiến thắng.</li>
                 </ul>
                </span>

                </div>
            </div>
        );
    }
}

export default Guide;
