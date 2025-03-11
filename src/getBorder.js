export const getBorder = (index) => {
	switch (index) {
		case 0:
		case 1:
			return 'right';
		case 3:
		case 4:
		case 6:
		case 7:
			return 'rightTop';
		case 5:
		case 8:
			return 'top';
		default:
			return '';
	}
};
