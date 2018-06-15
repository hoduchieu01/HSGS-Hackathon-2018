import React from "react";
import "./guide.less";

class Guide extends React.Component {
    render() {
        return(
            <div className="s17">
              <div className="h1">
                  <b> Hướng dẫn chơi </b>
              </div>
                  <br></br>
              <div className="p1">
                <b> Thử thách cờ vua của Mel. </b>
                  <br></br>
              </div>
                <div className="p1">
                    Đôi bạn Mel và Marvin rất thích chơi cờ vua cùng nhau tại quán cafe Hiệu cát tóc cũ.
                    Những khi không đấu tay đôi, họ lại nghĩ ra vài trò thách đố để thử tài đối phương,
                    và dưới đây là câu đố của Mel dành cho Marvin:
                    <br></br>
                    Làm thế nào để di chuyển con Mã trên tất cả các ô còn lại của bàn cờ, mà mỗi ô chỉ được đi qua một lần.
                    Nếu bạn là Marvin, bạn sẽ làm cách nào.
                    <br></br>
                    <b>Nước đi của con mã: </b>
                    <br></br>
                    Từ vị trí dưới con mã có thể đi đến các ô màu chấm đen.
                    <br></br>
                <div className="imgknight">
                  <img src={'https://i.imgur.com/rnKWTzE.png'}  width="400" height="400"   />
                </div>
                    <b>   Hướng dẫn sử dụng giao diện Game </b>
                <div className="imgknight">
                    <img src={'https://i.imgur.com/4hneKmj.png'}   />
                </div>
                <div>
                    <ul>
                        <li>Đầu tiên bạn click vào ô bạn muốn chọn vị trí đầu tiên của con mã. </li>
                        <li>Ô màu cam là vị trí hiện tại của con mã.</li>
                        <li>Ô màu xanh là vị trí có thể đến được từ vị trí hiện tại.</li>
                        <li>Ô màu xám là những vị trí mà con mã đã đi qua.</li>
                        <li>Bạn chiến thắng khi các ô còn lại chuyển sang màu xám.</li>
                        <li>Để quay lại bước đi trước bạn ấn Quay lại.</li>
                        <li>Để chơi lại trò chơi mới bạn ấn vào Game mới.</li>
                    </ul>

                </div>
                </div>
            </div>
        );
    }
}

export default Guide;
