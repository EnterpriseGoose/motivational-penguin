export default function BG() {
	let colors = ["blue-400", "yellow-500", "green-500", "indigo-400", "purple-400"]
	let color = colors[Math.floor(Math.random() * colors.length)]
	return(<div className={`absolute w-full h-full bg-${color}`} />)
}