"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const n36 = 
{
	// This Game is a joke. I have suicidal thought just by coding this.
	default(props = {Steppassenger:48,Stepfee:36,Steptip:5,Steptoday:80,Steppolish:25,Steppolish_man:30, Steplondon:25,Steplondon_woman:25, Stepalison:25,Stepalison_man:25,Stepitalian:25} )
	{
		// These are some majestic Random Algo. 
		// Tbh I can't say anything for myself about this. Just judge however you want. :(
		let passenger = (Math.floor(Math.random() * (Math.floor(100000/props.Steppassenger) - 1) + 1 ) ) * props.Steppassenger ;
		let fee = (Math.floor(Math.random() * (Math.floor(100/props.Stepfee) - 1) + 1 ) ) * props.Stepfee ;
		let tip = (Math.floor(Math.random() * (Math.floor(10/props.Steptip) - 1) + 1 ) ) * props.Steptip ;
		let today = (Math.floor(Math.random() * (Math.floor(100/props.Steptoday) - 1) + 1 ) ) * props.Steptoday ;
		let k=100;
		let polish = (Math.floor(Math.random() * (Math.floor(100/props.Steppolish) - 1) + 1 ) ) * props.Steppolish ;
		k = k - polish;
		let polish_man = (Math.floor(Math.random() * (Math.floor(100/props.Steppolish_man) - 1) + 1 ) ) * props.Steppolish_man ;
		let london = (Math.floor(Math.random() * (Math.floor(k/props.Steplondon) - 1) + 1 ) ) * props.Steplondon ;
		k = k - london;
		let london_woman = (Math.floor(Math.random() * (Math.floor(100/props.Steplondon_woman) - 1) + 1 ) ) * props.Steplondon_woman;
		let alison = (Math.floor(Math.random() * (Math.floor(k/props.Stepalison) - 1) + 1 ) ) * props.Stepalison ;
		k = k - alison;
		let alison_man = (Math.floor(Math.random() * (Math.floor(100/props.Stepalison_man) - 1) + 1 ) ) * props.Stepalison_man;
		let italian = (Math.floor(Math.random() * (Math.floor(k/props.Stepitalian) - 1) + 1 ) ) * props.Stepitalian ;
		let FirstTry = 1;
		const number_passenger = 0;
		const upgrade_polish = 0;
		const upgrade_london = 0;
		const upgrade_alison = 0;
		const upgrade_italian = 0;
		const sum = 0;		
		return {passenger,fee,tip,today,polish,polish_man,london,london_woman,alison,alison_man,italian,number_passenger,upgrade_polish,upgrade_london,upgrade_alison,upgrade_italian,sum,FirstTry};
	}, 
	
	actions: 
	{ 
		async move(state, { a1,a2,a3,a4,a5,a6 }) 
		{
			let passenger = state.passenger;
			let fee = state.fee;
			let tip = state.tip;
			let today = state.today;
			let polish = state.polish;
			let polish_man = state.polish_man;
			let london = state.london;
			let london_woman = state.london_woman;
			let alison = state.alison;
			let alison_man = state.alison_man;

			let italian = state.italian;
			let number_passenger = state.number_passenger;
			let upgrade_polish = state.upgrade_polish;
			let upgrade_london = state.upgrade_london;
			let upgrade_alison = state.upgrade_alison;
			let upgrade_italian = state.upgrade_italian;
			let sum =  state.sum;
			
			let FirstTry = state.FirstTry;
			
			number_passenger = a1;
			upgrade_polish = a2;
			upgrade_london = a3;
			upgrade_alison = a4;
			upgrade_italian = a5;
			sum = a6;
			//Remember, you have done **that**
			FirstTry = 0;
			
		return {passenger,fee,tip,today,polish,polish_man,london,london_woman,alison,alison_man,italian,number_passenger,upgrade_polish,upgrade_london,upgrade_alison,upgrade_italian,sum,FirstTry};
		}
	},

	isValid(state) {
		return true;
	},

	isEnding(state) 
	{
		let passenger = state.passenger;
			let fee = state.fee;
			let tip = state.tip;
			let today = state.today;
			let polish = state.polish;
			let polish_man = state.polish_man;
			let london = state.london;
			let london_woman = state.london_woman;
			let alison = state.alison;
			let alison_man = state.alison_man;
			let italian = state.italian;
		
			let number_passenger = state.number_passenger;
			let upgrade_polish = state.upgrade_polish;
			let upgrade_london = state.upgrade_london;
			let upgrade_alison = state.upgrade_alison;
			let upgrade_italian = state.upgrade_italian;
			let sum =  state.sum;
			//A can of Redbull a day keeps depression away.
			// ~ Pheeux ~
		if( (number_passenger = Math.round(today*passenger/100)) && (upgrade_polish==Math.round(polish*number_passenger*polish_man/10000)) && (upgrade_london == Math.round(london * number_passenger * (100 - 1*london_woman) / 10000)) && ( upgrade_alison == Math.round(alison * number_passenger * (100 - 1*alison_man) / 10000)) && (upgrade_italian == Math.round(italian * number_passenger / 100)) && (
		sum == (number_passenger*tip + upgrade_polish * fee + upgrade_london*fee + upgrade_alison*fee+upgrade_italian*fee)))
		return "win";
		else return null;
	}
};
exports.default = n36;
