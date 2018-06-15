"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const n04 = 
{
	// This Game is a joke. I have suicidal thought just by coding this.
	// Plz send help
	default(props = {Stepn : 1000 , Stepx : 50, Stepy : 20, Stepz : 20} ) 
	{
		function ucln(a, b)
		{
			let  i = a % b;
			while(i != 0)
			{
				a = b;
				b = i;
				i = a % b;
			}
			return b;
		}
		let ans = 0;
		let ans1 = 0;
		let n = (Math.floor(Math.random() * (Math.floor(10000/props.Stepn) - 1) + 1 ) ) * props.Stepn ;
		let x = (Math.floor(Math.random() * (Math.floor(100/props.Stepx) - 1) + 1 ) ) * props.Stepx ; 
		let x1 = 100;
		let k = ucln(x,x1);
		x = x / k; x1 = x1 / k;
		let y = (Math.floor(Math.random() * (Math.floor(100/props.Stepy) - 1) + 1 ) ) * props.Stepy ;
		let y1 = 100;
		k = ucln(y,y1);
		y = y / k; y1 = y1 / k;
		let z = (Math.floor(Math.random() * (Math.floor(100/props.Stepz) - 1) + 1 ) ) * props.Stepz ;
		let z1 = 100;
		k = ucln(z,z1);
		z = z / k; z1 = z1 / k;
		
		let FirstTry = 1;
		return {n,x,x1,y,y1,z,z1,ans,ans1,FirstTry};
	}, 
	
	actions: 
	{ 
		async move(state, { a, a1 }) 
		{
			let n = state.n;
			let x = state.x;
			let x1 = state.x1;
			let y = state.y;
			let y1 = state.y1;
			let z = state.z;
			let z1 = state.z1;
			let ans = state.ans;
			let ans1 = state.ans1;
			let FirstTry = state.FirstTry;
			ans=a;
			ans1=a1;
			FirstTry = 0;
			return {n,x,x1,y,y1,z,z1,ans,ans1,FirstTry};
		}
	},

	isValid(state) {
		return true;
	},

	isEnding(state) 
	{
		let n = state.n;
		let x = state.x;
		let x1 = state.x1;
		let y = state.y;
		let y1 = state.y1;
		let z = state.z;
		let z1 = state.z1;
		let ans = state.ans;
		let ans1 = state.ans1;
		if(Math.round((n * x * y) / (x1 * y1)) == ans && Math.round((n * x * z) / (x1 * z1)) == ans1 ) return "won";
		else return null;
		
	}
};
exports.default = n04;
