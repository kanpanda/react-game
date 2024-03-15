const Card = () =>{
    return(
        <div className="card">
            <div className="front">
                {/* imgタグを使って画像を表示 */}
                <img src={Card.img} alt="" />
            </div>
            <div className="back"></div>
        </div>
    );
}


// 他のファイルでインポートができるようにする
export default Card;