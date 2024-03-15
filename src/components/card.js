import { useEffect, useState } from "react";

const Card = ({ card, selectedCards, setselectedCards}) => {
  const [isFripped, setIsFripped] = useState(false);

  const handleClick = () => {
    setselectedCards([...selectedCards, card]);
  }

  useEffect((()=> {
    if(selectedCards[0] === card || selectedCards[1] === card || card.isMatched){
      setIsFripped(true);
    } else {
      setIsFripped(false);
    }
  }), [selectedCards])
  return (
    <div className={isFripped ? "card open" : "card"} onClick={handleClick}>
      <div className="front">
        <img src={card.img} alt="" />
      </div>
      <div className="back"></div>
    </div>
  );
}

export default Card;



// const Card = ({card, selectedCards,setselectedCards}) =>{

//     const handleClick = () =>{
//         setselectedCards([...selectedCards, card]);
//     // console.log("クリックしました");
//     }
//     return(
//         <div className="card" onClick={handleClick}>
//             <div className="front">
//                 {/* imgタグを使って画像を表示 */}
//                 <img src={Card.img} alt="" />
//             </div>
//             <div className="back"></div>
//         </div>
//     );
// }


// // 他のファイルでインポートができるようにする
// export default Card;