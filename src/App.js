import { useEffect, useState } from 'react';
import Card from "./components/Card";
import './App.css';

function App() {
  
  // let とconst　と　varは再宣言とかが違うだけ
  // letは同じスコープ内で再宣言できない（varはOK）
  // 変数imagesに6枚の画像を配列として格納する
  // 連想配列（＝オブジェクト）を使っている
  // キーは「num」、値が「img」
  const images =[
    {
      num: 1,
      img: "./img/chopper.png"
    },
    {
      num: 2,
      img: "./img/luffy.png"
    },
    {
      num: 3,
      img: "./img/nami.png"
    },
    {
      num: 4,
      img: "./img/sanji.png"
    },
    {
      num: 5,
      img: "./img/usopp.png"
    },
    {
      num: 6,
      img: "./img/zoro.png"
    },
  ];

  // useStateを使ってcardの状態を管理 初期値は[]空配列
  const [cards, setCards] = useState([]);
  // シャッフル
  const shuffleImages = () => {
    // スプレッド関数を用いて6枚の画像のセットをもう1セット作り、合計2セットを配列につっこむ
    let shuffleImages = [...images, ...images];//2枚ずつ
      // shuffleImagesにIDプロパティを付与する！！！！！！！（つまりポイント）
      // shuffleImages.map(  (item,index) => ({item,id:index+1}) );
      shuffleImages = shuffleImages.map((item, index)=>({...item,id:index+1}));

      // 並び替えを行う
      shuffleImages.sort((a,b) => 0.5 -Math.random());


    // 更新関数を使う
    setCards(shuffleImages);
  }

  useEffect(() =>{
    shuffleImages();
  },[]);

  console.log(cards);

  return (
    <div className="container">
      <div className="cards-container"> 
      {cards.map((card)=>(
        <Card
          key={card.id}
          card={card}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
