function calcPower(){

	powerCalc = {
		idle: {
			shape: {
				main: power.idle.shape,
				charge: power.idle.shape * multi.charge,
				split: power.idle.shape * multi.split,
				main-charge: power.idle.shape + (power.idle.shape * multi.charge),
				main-split: ,
				charge-split: ,
				main-charge-split: ,
			},
			charge: {
				charge: ,
				split: ,
				comp: ,
			},
			color: {
				main:,
				charge:,
				split:,
				main-charge:,
				main-split:,
				charge-split:,
				main-charge-split:,
				main-comp:,
				charge-comp:,
				split-comp:,
				main-charge-comp:,
				main-split-comp:,
				charge-split-comp:,
				main-charge-split-comp:,
			},
		},

		click: {
			shape: {
				main:,
				charge:,
				split:,
				main-charge:,
				main-split:,
				charge-split:,
				main-charge-split:,
			},
			charge: {
				charge:,
				split:,
				comp:,
			},
			color: {
				main:,
				charge:,
				split:,
				main-charge:,
				main-split:,
				charge-split:,
				main-charge-split:,
				main-comp:,
				charge-comp:,
				split-comp:,
				main-charge-comp:,
				main-split-comp:,
				charge-split-comp:,
				main-charge-split-comp:,
			},
		},
	}

}