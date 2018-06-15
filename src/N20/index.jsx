import React from "react";
import n20 from "./lib/n20.js";
import "./index.less";

// I love handling stuff manually
var divStyle = {
	backgroundImage: `url(${"https://i.imgur.com/E12npu2.png"})`
  };

class Paragraph extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {value : Array(14).fill('')};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	// To handle some thicc changes
	async handleChange(event)
	{
		let name = event.target.name;
		let value = event.target.value;
		let K = new Array();
		for(let i = 0; i < 14; i++)
		{
			if(i != name) K[i] = this.state.value[i]; else K[i] = value;
		}
		this.setState({value : K});
	}
	// To handle the submit stuff
	async handleSubmit(event)
	{
		this.props.move({a1 : this.state.value[1],
		a2 : this.state.value[2],
		a3 : this.state.value[3],
		a4 : this.state.value[4],
		a5 : this.state.value[5],
		a6 : this.state.value[6],
		b1 : this.state.value[7],
		b2 : this.state.value[8],
		b3 : this.state.value[9],
		b4 : this.state.value[10],
		b5 : this.state.value[11],
		b6 : this.state.value[12],
		s: this.state.value[13]});
		event.preventDefault();
	}

	render()
	{
		let res = []; // The message show at first.
		if(this.props.isEnding === null) {
		if(this.props.state.FirstTry == 0)	res.push(
		<div className="section">
		"Sai rồi!!! Hãy nhập kết quả chính xác."
		</div>);
		else res.push(
		<div className="section">
		"Hãy điền đáp án đúng vào chỗ trống nào."
		</div>);
		}
		else res.push(
		<div className="section">
		"Đúng rồi, Chúc mừng bạn!!!"
		</div>);
		let form = [];
		//Let's go boys. All  the variables are in here
		form.push(
		<form onSubmit={this.handleSubmit} className="form-style-10">
		<h1>Đáp án<span></span></h1>
		<div className="section"><span>1</span>Số nhân viên công ty </div>
			<div className="inner-wrap">
		<input type="text" value={this.state.value[1]} name = {1} onChange={this.handleChange} className="form1" placeholder="Bánh mì sandwich"  />
		<input type="text" value={this.state.value[2]} name = {2} onChange={this.handleChange} className="form1" placeholder="Ống sáo và nhạc cụ"/>
		<input type="text" value={this.state.value[3]} name = {3} onChange={this.handleChange} className="form1" placeholder="Đồ chơi giáo dục" />
		<input type="text" value={this.state.value[4]} name = {4} onChange={this.handleChange} className="form1" placeholder="Thủ công mỹ nghệ"/>
		<input type="text" value={this.state.value[5]} name = {5} onChange={this.handleChange}  className="form1" placeholder="Áo khoác"/>
		<input type="text" value={this.state.value[6]} name = {6} onChange={this.handleChange} className="form1" placeholder="Túi xách" />
		  </div>

		<div className="section"><span>2</span>Tổng tiền thu công ty</div>
			<div className="inner-wrap">
		<input type="text" value={this.state.value[7]} name = {7} onChange={this.handleChange} className="form1" placeholder="Bánh mì sandwich"/>
		<input type="text" value={this.state.value[8]} name = {8} onChange={this.handleChange} className="form1" placeholder="Ống sáo và nhạc cụ"/>
		<input type="text" value={this.state.value[9]} name = {9} onChange={this.handleChange} className="form1" placeholder="Đồ chơi giáo dục"/>
		<input type="text" value={this.state.value[10]} name = {10} onChange={this.handleChange} className="form1" placeholder="Thủ công mỹ nghệ"/>
		<input type="text" value={this.state.value[11]} name = {11} onChange={this.handleChange} className="form1" placeholder="Áo khoác"/>
		<input type="text" value={this.state.value[12]} name = {12} onChange={this.handleChange} className="form1" placeholder="Túi xách"/>
			</div>

		<div className="section"><span>3</span>Tổng cộng</div>
			<div className="inner-wrap">
		<input type="text" value={this.state.value[13]} name = {13} onChange={this.handleChange} className="form1" placeholder="Tổng số tiền"/>
	   	</div>

		<input  type="submit" value="Submit" className="button-section" />
			<div>
				{res}
			</div>
		</form>
		);

		return (
   		<div style={divStyle}  className="n20">
		  <div>
				<div className = "h1">
	       	Công trường xây dựng Riverrun
				</div>
				<div className="p1">
						<br></br>
						Khu phức hợp văn phòng Riverrun cần phải sửa chữa. Anh thợ Sony buộc phải thu phí ${this.props.state.money} trên mỗi nhân viên để có chi phí sửa chữa. Bạn hãy giúp Sony tính xem mỗi công ty có tất cả bao nhiêu nhân viên và phải thu tổng cộng bao nhiêu tiền và số tiền tổng kết cuối cùng thu được bao nhiêu làm tròn đến số tự nhiên gần nhất ?
						Sony không có thông tin gì về số lượng nhân viên xác định ngoài dữ liệu dưới đây.
						<p> Có {this.props.state.people} người làm việc tại Riverrum </p>
						<ul>
							<li> {this.props.state.sandwich} % làm việc cho công ty bánh mì sandwich. </li>
							<li> {this.props.state.music} % làm việc cho công ty ống sáo và nhạc cụ. </li>
							<li> {this.props.state.edu} % làm việc cho công ty sản xuất đồ chơi giáo dục. </li>
							<li> {this.props.state.crafts} % làm việc cho công ty hàng thủ công mỹ nghệ. </li>
							<li> {this.props.state.coat} % làm việc cho công ty áo khoác. </li>
							<li> {this.props.state.bag} % làm việc cho công ty sản xuất túi xách </li>
						</ul>
			 	 </div>
			<div className="div1">
				  {form}
			</div>
      		</div>
		</div>
		);
	}
}



export default Paragraph;
