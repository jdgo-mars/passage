var w = [
	40,
	39.6,
	39.2,
	38.8,
	38.4,
	38,
	37.6,
	37.2,
	36.8,
	36.4,
	36,
	35.6,
	35.2,
	34.8,
	34.4,
	34,
	33.6,
	33.2,
	32.8,
	32.4,
	32,
	31.6,
	31.2,
	30.8,
	30.4,
	30,
	29.6,
	29.2,
	28.8,
	28.4,
	28,
	27.6,
	27.2,
	26.8,
	26.4,
	26,
	25.6,
	25.2,
	24.8,
	24.4,
	24,
	23.6,
	23.2,
	22.8,
	22.4,
	22,
	21.6,
	21.2,
	20.8,
	20.4,
	20,
	19.6,
	19.2,
	18.8,
	18.4,
	18,
	17.6,
	17.2,
	16.8,
	16.4,
	16,
	15.6,
	15.2,
	14.8,
	14.4,
	14,
	13.6,
	13.2,
	12.8,
	12.4,
	12,
	11.6,
	11.2,
	10.8,
	10.4,
	10,
	9.6,
	9.2,
	8.8,
	8.4,
	8,
	7.6,
	7.2,
	6.8,
	6.4,
	6,
	5.6,
	5.2,
	4.8,
	4.4,
	4,
	3.6,
	3.2,
	2.8,
	2.4,
	2,
	1.6,
	1.2,
	0.8,
	0.4,
	0
];

var document = require('sketch/dom').getSelectedDocument();

let j = 0;
for (let i = 100; i <= 0; i--) {
	var l = document.getLayersNamed('progress_' + i);
	l[0].layers[0].layers[1].frame.width = w[j];
	j++;
}
