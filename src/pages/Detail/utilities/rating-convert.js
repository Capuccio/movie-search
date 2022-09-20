/** @format */

export function ratingConvert(ratio) {
	if (ratio.includes('%')) return ratio
	else if (ratio.includes('.')) return ratio.split('.').join('').concat('%')
	return ratio.concat('%')
}
