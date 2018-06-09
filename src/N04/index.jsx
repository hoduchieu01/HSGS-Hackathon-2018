import React from "react";
import n04 from "./lib/n04.js";
import "./index.less";
// import

class Paragraph extends React.Component {
    render() {
      return (
        <div className="n04" >
          <p1 align="justify">
          Tại học viện Thánh Roch, cô Darja, thư ký trưởng, đang
          phải đau đầu chuyển đổi tỉ lệ học sinh đăng ký tham gia Tuần lễ hoạt động
          ngoại khóa thành con số thực tế để đưa vào trang thông tin. Bạn hãy giúp cô
          Darja tính ra số học sinh sẽ tham dự. Không được dùng máy tính hãy giấy viết,
          chỉ được tính nhẩm trong đầu xem có bao nhiêu học sinh chọn hoạt động làm
          bánh? Và bao nhiêu học sinh tham gia điệu nhảy đường phố.
          Biết rằng trường có tổng cộng n học sinh 
          x% tổng số học sinh tham gia tuần lễ hoạt động ngoại khóa
          Trong đó, y% tranh tài trong cuộc thi làm bánh
		      z% đăng ký nhảy vũ điệu đường phố.
          </p1>
        </div>
      );
    }
  }
  


export default Paragraph;
