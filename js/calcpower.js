function calcPower(){

	powerCalc = {
		idle: {
			shape: {
				main: power.idle.shape,
				charge: power.idle.shape * multi.charge,
				split: power.idle.shape * multi.split,
				main-charge: power.idle.shape + (power.idle.shape * multi.charge),
				main-split: power.idle.shape + (power.idle.shape * multi.split),
				charge-split: (power.idle.shape * multi.charge) + (power.idle.shape * multi.split),
				main-charge-split: power.idle.shape + (power.idle.shape * multi.charge) + (power.idle.shape * multi.split),
			},
			position: {
				charge: power.idle.position,
				split: power.idle.position,
				comp: power.idle.position * multi.comp;
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
			position: {
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