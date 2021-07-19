import Image from 'next/image';


export default function Penguin() {
    let penguinID = Math.floor(Math.random() * 5);
    let imgW = 200
    let imgH = 200
    if(window.screen.width < window.screen.height - 50) {
        imgW = window.screen.width * (7/8)
        imgH = imgW
    } else {
        imgH = (window.screen.height - 50) * (3/4)
        imgW = imgH
    }
    return (
        <Image
        src={`/penguins/${penguinID}.svg`}
        alt="You should really turn pictures on, that's the whole point of this site..."
        width={imgW}
        height={imgH}
        layout="intrinsic"
        />
    )
}