/** @format */

export function lenghtConvert(length) {
	let lengthMinutes = parseInt(length[0])
	let hour = lengthMinutes / 60
	let rhour = Math.floor(hour)
	let minutes = (hour - rhour) * 60
	let rminutes = Math.round(minutes)

	return `${rhour} hour(s) y ${rminutes} minute(s)`
}
