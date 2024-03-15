
import { useEffect, useState } from "react";
import Card from "./components/Card";
import './App.css';

function App() {
  let images = [
    {
      num: 1,
      img: "./img/01akitainu.png",
      isMatched: false
    },
    {
      num: 2,
      img: "./img/02doberman.png",
      isMatched: false
    },
    {
      num: 3,
      img: "./img/03etoinu.png",
      isMatched: false
    },
    {
      num: 4,
      img: "./img/04kaiken.png",
      isMatched: false
    },
    {
      num: 5,
      img: "./img/05papillon.png",
      isMatched: false
    },
    {
      num: 6,
      img: "./img/06rottweiler.png",
      isMatched: false
    },
  ];

  const [cards, setCards] = useState([]);
  const [selectedCards, setselectedCards] = useState([]);
  const [tries, setTries] = useState(0);

  const shuffleImages = () => {
    let shuffledImages = [...images, ...images]
      .map((item, index) => ({...item, id: index + 1}))
      .sort((a, b) => 0.5 - Math.random());

    setCards(shuffledImages);
  }

  useEffect(() => {
    shuffleImages();
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2){
      setTimeout(()=>{
        setselectedCards([]);
      }, 1000);
      checkMatch();
    }
  }, [selectedCards]);

  useEffect(() => {
    if (cards.length === 0) return

    const allMatched = cards.every(card => card.isMatched);
    if (allMatched) {
      setTimeout(()=>{
        alert('ゲームクリア！！おめでとうみーさん！');
      }, 500);
    }
  }, [cards]);

  const checkMatch = () => {
    if (selectedCards[0].num === selectedCards[1].num) {
      let updatedCards = cards.map((card) => {
        if (card.num === selectedCards[0].num){
          console.log(cards);
          return { ...card, isMatched: true}
        }

        return card
      });
      setCards(updatedCards);
    } else {
      setTries(prev => prev + 1);

      if (tries > 20) {
        setTimeout(() => {
          alert('ゲームオーバー！残念みーさん');
        }, 500);
      }
    }
  }

  return (
    <div className="container">
      <div className="cards-container">
        {cards.map((card)=>(
          <Card
            key={card.id}
            card={card}
            selectedCards={selectedCards}
            setselectedCards={setselectedCards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





// import { useEffect, useState } from 'react';
// import Card from "./components/Card";
// import './App.css';

// function App() {
  
//   // let とconst　と　varは再宣言とかが違うだけ
//   // letは同じスコープ内で再宣言できない（varはOK）
//   // 変数imagesに6枚の画像を配列として格納する
//   // 連想配列（＝オブジェクト）を使っている
//   // キーは「num」、値が「img」


//   const images =[
//     {
//       num: 1,
//       img: "./img/chopper.png"
//     },
//     {
//       num: 2,
//       img: "./img/luffy.png"
//     },
//     {
//       num: 3,
//       img: "./img/nami.png"
//     },
//     {
//       num: 4,
//       img: "./img/sanji.png"
//     },
//     {
//       num: 5,
//       img: "./img/usopp.png"
//     },
//     {
//       num: 6,
//       img: "./img/zoro.png"
//     },
//   ];

//   // useStateを使ってcardの状態を管理 初期値は[]空配列
//   const [cards, setCards] = useState([]);
//   const[selectedCards, setselectedCards] =useState([]);

//   // シャッフル
//   const shuffleImages = () => {
//     // スプレッド関数を用いて6枚の画像のセットをもう1セット作り、合計2セットを配列につっこむ
//     let shuffleImages = [...images, ...images];//2枚ずつ
//       // shuffleImagesにIDプロパティを付与する！！！！！！！（つまりポイント）
//       // shuffleImages.map(  (item,index) => ({item,id:index+1}) );
//       shuffleImages = shuffleImages.map((item, index)=>({...item,id:index+1}));

//       // 並び替えを行う
//       shuffleImages.sort((a,b) => 0.5 -Math.random());


//     // 更新関数を使う
//     setCards(shuffleImages);
//   }

//   useEffect(() =>{
//     shuffleImages();
//   },[]);

//   useEffect(()=>{
//     if(selectedCards.length === 2){
//       checkMatch();
//     }
//     // console.log(selectedCards);
//   },[selectedCards]);

//   const checkMatch = () =>{
//     if(selectedCards[0].num === selectedCards[1].num){
//       console.log("マッチ")
//     }else{
//       console.log("ミスマッチ")
//     }
//   }




//   // console.log(cards);

//   return (
//     <div className="container">
//       <div className="cards-container"> 
//       {cards.map((card)=>(
//         <Card
//           key={card.id}
//           card={card}
//           selectedCards={selectedCards}
//           setselectedCards={setselectedCards}
//         />
//       ))}
//       </div>
//     </div>
//   );
// }

// export default App;
