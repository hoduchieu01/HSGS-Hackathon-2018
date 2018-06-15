"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const n20 =
{
	// This Game is a joke. I have suicidal thought just by coding this.
	default(props = { Stepmoney:50,Steppeople:500,Stepsandwich:50,Stepmusic:50,Stepedu:50,Stepcrafts:50,Stepcoat:50,Stepbag:50})
	{
		//const ans = number of
		const ans_sandwich = 0;
		const ans_music = 0;
		const ans_edu = 0;
		const ans_crafts = 0;
		const ans_coat = 0;
		const ans_bag = 0;
		// const money
		const money_sandwich = 0;
		const money_music = 0;
		const money_edu = 0;
		const money_crafts = 0;
		const money_coat = 0;
		const money_bag = 0;
		// const sum
		const sum = 0;
		// Check if the state has lost its first time
		let FirstTry = 1;
		
		//The majestic random algorithm
		let money = (Math.floor(Math.random() * (Math.floor(100/props.Stepmoney) - 1) + 1 ) ) * props.Stepmoney ;

		let people = (Math.floor(Math.random() * (Math.floor(10000/props.Steppeople) - 1) + 1 ) ) * props.Steppeople;

		let k=100;
		let sandwich = (Math.floor(Math.random() * (Math.floor(k/props.Stepsandwich) - 1) + 1 ) ) * props.Stepsandwich ;
		k = k - sandwich;
		let music = (Math.floor(Math.random() * (Math.floor(k/props.Stepmusic) - 1) + 1 ) ) * props.Stepmusic ;
		k = k - music;
		let edu = (Math.floor(Math.random() * (Math.floor(k/props.Stepedu) - 1) + 1 ) ) * props.Stepedu ;
		k = k - edu;
		let crafts = (Math.floor(Math.random() * (Math.floor(k/props.Stepcrafts) - 1) + 1 ) ) * props.Stepcrafts ;
		k = k - crafts;
		let coat = (Math.floor(Math.random() * (Math.floor(k/props.Stepcoat) - 1) + 1 ) ) * props.Stepcoat ;
		k = k - coat;
		let bag = (Math.floor(Math.random() * (Math.floor(k/props.Stepbag) - 1) + 1 ) ) * props.Stepbag ;
		k = k - bag;
		return {money,people,sandwich,music,edu,crafts,coat,bag,ans_sandwich,ans_music,ans_edu,ans_crafts,ans_coat,ans_bag,money_sandwich,money_music,money_edu,money_crafts,money_coat,money_bag,sum,FirstTry};
	},

	actions:
	{
		async move(state, {a1,a2,a3,a4,a5,a6,b1,b2,b3,b4,b5,b6,s})
		{
			let money = state.money;
			let people = state.people;
			let sandwich = state.sandwich;
			let music = state.music;
			let edu = state.edu;
			let crafts = state.crafts;
			let coat = state.coat;
			let bag = state.bag;
			// number
			let ans_sandwich = state.ans_sandwich;
			let ans_music = state.ans_music;
			let ans_edu = state.ans_edu;
			let ans_crafts = state.ans_crafts
			let ans_coat = state.ans_coat;
			let ans_bag = state.ans_bag;
			//money
			let money_sandwich = state.money_sandwich;
			let money_music = state.money_music;
			let money_edu = state.money_edu;
			let money_crafts = state.money_crafts;
			let money_coat = state.money_coat;
			let money_bag = state.money_bag;
			// sum
			let sum = state.sum;
			// FirstTry
			let FirstTry = state.FirstTry;
			// number a1 -> a6
			ans_sandwich=a1;
			ans_music=a2;
			ans_edu=a3;
			ans_crafts=a4;
			ans_coat=a5;
			ans_bag=a6;
			//
			money_sandwich = b1;
			money_music = b2;
			money_edu = b3;
			money_crafts = b4;
			money_coat = b5;
			money_bag = b6;

			sum = s;
			// Remember that you have done **that**. Take responsibility for this.
			FirstTry = 0;
			return {money,people,sandwich,music,edu,crafts,coat,bag,ans_sandwich,ans_music,ans_edu,ans_crafts,ans_coat,ans_bag,money_sandwich,money_music,money_edu,money_crafts,money_coat,money_bag,sum,FirstTry};
		}
	},

	isValid(state) {
		return true;
	},

	isEnding(state)
	{
		let money = state.money;
		let people = state.people;
		let sandwich = state.sandwich;
		let music = state.music;
		let edu = state.edu;
		let crafts = state.crafts;
		let coat = state.coat;
		let bag = state.bag;
		// number
		let ans_sandwich = state.ans_sandwich;
		let ans_music = state.ans_music;
		let ans_edu = state.ans_edu;
		let ans_crafts = state.ans_crafts
		let ans_coat = state.ans_coat;
		let ans_bag = state.ans_bag;
		//money
		let money_sandwich = state.money_sandwich;
		let money_music = state.money_music;
		let money_edu = state.money_edu;
		let money_crafts = state.money_crafts;
		let money_coat = state.money_coat;
		let money_bag = state.money_bag;
		// sum
		let sum = state.sum;
		
		// Round that things up
		if( (Math.round(people*sandwich/100) == ans_sandwich && Math.round(people*music/100) == ans_music && Math.round(people*edu/100) == ans_edu && Math.round(people*crafts/100) == ans_crafts && Math.round(people*coat/100) == ans_coat && Math.round(people*bag/100) == ans_bag)
			&& (money*ans_sandwich == money_sandwich && money*ans_music == money_music && money*ans_edu == money_edu && money*ans_crafts == money_crafts && money*ans_coat == money_coat && money*ans_bag == money_bag)
		&& sum == money*ans_sandwich + money*ans_music + money*ans_edu + money*ans_crafts + money*ans_coat + money*ans_bag)
			return "won";
		else return null;
	}
};
exports.default = n20;
