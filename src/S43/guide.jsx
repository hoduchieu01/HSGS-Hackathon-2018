import React from "react";
import "./guide.less"

class Guide extends React.Component {
    render() {
        return(
            <div className="s43">
                <div className="guide">
                    <h1> Hướng dẫn chơi </h1>
                    <span>
                    Chaim vừa phát minh ra trò <strong> Xoay để kết nối </strong> này giống như một phiên bản hiện đại của loạt game
                    Solitaire truyền thông. Nhiệm vụ của người chơi là xoay các địa tròn lần lượt theo góc 90 độ sao cho tất cả hình 
                    vuông đều được nối với nhau bởi tập hợp các đường dọc và ngang.
                    </span>
                    <div className="img">
                    <img src={'https://i.imgur.com/8yLPDnn.png'} width="400" height ="400" />
                    <img src={'https://i.imgur.com/Fm1nkMY.png'} width="400" height ="400" />

                    </div>
                    <span>
                        <ul>
                            <li>Miếng màu xanh thể hiện tất cả các ống nối ra cạnh đều đã được nối đi bằng các ống khác. </li>
                            <li>Miếng màu đỏ thể hiện tất cả các ống nối ra cạnh chưa được nối đi bằng các ống khác. </li>
                            <li>(Thử đường ống khác) để thay đổi loại đường ống 1 và 2 như hình trên. </li>
                            <li>(Gợi ý) để xem cách sắp xếp đường ống.</li>
                            <li> Bạn thắng khi tất cả các đường ống đều chuyển thành màu xanh.  </li>
                        </ul>
                    </span>
                
                </div>
            </div>
        );
    }
}

export default Guide;