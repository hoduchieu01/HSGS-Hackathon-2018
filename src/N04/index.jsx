import React from "react";
import n04 from "./lib/n04.js";
import "./index.less";

// This is a cry for help. I have crippling depression.
var divStyle = {
  backgroundImage: `url(${"https://i.imgur.com/N56BGfN.png"})`
};
class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", value2: "", err:null };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// Will change the way of handling submissions in the future.
// Damn it, too late.
  async handleChange1(event) {
    let K = this.state.value2;
    this.setState({ value1: event.target.value, value2: K });
  }

  async handleChange2(event) {
    let K = this.state.value1;
    this.setState({ value1: K, value2: event.target.value });
  }

  async handleSubmit(event) {
    this.props.move({ a: this.state.value1, a1: this.state.value2 });
    event.preventDefault();
  }

  render() {
	  //Message
    let err;
    if (this.props.isEnding !== null) {
      err = "Đúng rồi, Chúc mừng bạn!!!";
    } else if(this.props.state.FirstTry == 1) err = "Hãy điền đáp án vào ô trống nào!"; else err = "Sai rồi!!! Hãy nhập kết quả chính xác.";
    let res = [];
    if (this.props.isEnding === null)
      res.push(<div className="Wrong">{err}</div>);
    else res.push(<div className="True">{err}</div>);
	// The real form here. Only two values so nothing much.
    let form = [];
    form.push(
      <form className="form-style-9" onSubmit={this.handleSubmit}>
        <label> Số học sinh làm bánh: </label>
        <br />
        <input
          type="text"
          value={this.state.value1}
          onChange={this.handleChange1}
          className="cake"
        />
        <br />
        <label> Số học sinh nhảy đường phố: </label>
        <br />
        <input
          type="text"
          value={this.state.value2}
          onChange={this.handleChange2}
          className="dance"
        />
        <br />
        <input type="submit" value="Submit" className="submit1" />
        <div>
          {res}
        </div>
      </form>
    );

    return (
      <div style={divStyle} className="n04">
        <div className = "h1"> Tuần lễ hoạt động ngoại khóa </div>
        <br></br>
        <div className="p1">
          Tại học viện Thánh Roch, cô Darja, thư ký trưởng, đang phải đau đầu
          chuyển đổi tỉ lệ học sinh đăng ký tham gia Tuần lễ hoạt động ngoại
          khóa thành con số thực tế để đưa vào trang thông tin. Bạn hãy giúp cô
          Darja tính ra số học sinh sẽ tham dự.
          <br />
          Không được dùng máy tính hãy giấy viết, Hãy tính nhẩm trong xem có bao
          nhiêu học sinh chọn hoạt động làm bánh và bao nhiêu học sinh tham gia
          điệu nhảy đường phố. Do cô Darja cũng đã nhiều tuổi nên trong lúc ghi tỉ lệ có thể
		  có sai sót, đáp án sẽ làm tròn lên số tự nhiên gần nhất.
          <br />
          Biết rằng trường có tổng cộng {this.props.state.n} học sinh,{" "}
          {this.props.state.x}/{this.props.state.x1} tổng số học sinh tham gia
          tuần lễ hoạt động ngoại khóa. Trong đó, {this.props.state.y}/{
            this.props.state.y1
          }{" "}
          số học sinh tranh tài trong cuộc thi làm bánh, {this.props.state.z}/{
            this.props.state.z1
          }{" "}
          số học sinh đăng ký nhảy vũ điệu đường phố.
        </div>
        <div>
        {form}

        </div>
      </div>
    );
  }
}

export default Paragraph;
