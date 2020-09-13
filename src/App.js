import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './start.css';
import Header from './components/header'
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div classNameName="App">
      <Header />

      <p className="name">松元士温/shion matsumoto</p>
    {/* test */}
    
    
    <h2 className="h1">～自己紹介～</h2>
    <h3 className="first">はじめまして！現在(2020年時点)高校2年生の<span className="name-1">松元士温（まつもと　しおん）</span>と申します！このサイトは自己紹介をWEBで出来たらカッコよくね？と思い作ってみました(*ﾉωﾉ)あまり面白いことは書いていないと思うのでお暇な時に見ていただけるといいなと思います<span className="yohaku">初めての記事作成なのでミスが多々あると思いますがどうぞお楽しみください！</span></h3>


    <p className="yohaku pro">～プロフィール～</p>
    <h2 className="pro h2">名前:松元士温（まつもと　しおん）年齢：17歳2003年7月30日生まれ職業：学生趣味：プログラミング、ゲーム（FPS,RPG),おしゃべり,映画鑑賞</h2>
    <h3 className="pro">僕の出身は鹿児島県で現在家族と３人暮らしをしています。普段は学校から帰って直ぐにゲームやプログラミングをしているので暇な方は是非お声かけください！</h3>

    <p className="yohaku pro">～趣味1|プログラミングについて～</p>
    <h4>自分がプログラミングを始めたのは１～２年ぐらい前なのですが、がっつりやりだしたのは今年（2020年）からでまだまだ初心者なのですが日々<a className="link1" href="https://prog-8.com/"><button type="button" class="btn btn-outline-primary" size="sm" >Pro-Gate</button></a>というサイトでプログラミングの勉強に励んでいます！プログラミングを始めたきっかけは<a className="link1" href="https://note.com/aokha/n/n063f853dd255">草場海斗</a>という人に「お前暇やったらプログラミングやってみてみ、おもろいから」みたいなかんじで誘われたので試しにやってみたらめっっっっちゃ面白かったし、何よりcodeがものすごくかっこよかったのでもっとやってみたい、遊んでみたいという感じになって今に至るわけです(笑)そして現在は、React + React-bootstrap + Githubでstaticなwebsiteを作ってます</h4>

    <p className="yohaku pro">～趣味2|ゲーム～</p>
    <h4>僕が初めてプレイしたゲームはニンテンドーDSのNew　スーパーマリオブラザーズです。この作品をプレイしたのは小学一年生でしかも超絶飽き性なので八面までクリアせずにやめたのを覚えています（笑）最近やってるゲームはCS:GO,MHWI,PUBGをやっています。特にCS:GOは、ほぼ毎日のようにやっていて毎ラウンド大声をあげながらしんでいます（笑）</h4>


    <p className="yohaku pro">～趣味3|映画鑑賞～</p>
    <h4>僕は３歳の頃に初めて映画を見ました。その時の作品は<span className="name-1">バイオハザード2</span>でとても３歳が見るような作品ではないのですがこの作品のおかげで映画にドハマりしてしまいました（笑）ちなみに好きな映画シリーズは<span className="name-1">トランスフォーマー、マーベル作品、DC系</span>です。どの作品も大体<a className="link1" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjmupOR9P7nAhWjNKYKHb8pB88QFjAAegQIARAB&url=https%3A%2F%2Fwww.netflix.com%2Fjp%2F&usg=AOvVaw0XaR9lvnN6TGE-LWjQKQ1E">Netflix</a>にあるので見てみてください！</h4>

    <p className="yohaku pro">～SNS|ゲームアカウント～</p>
    <a href="https://twitter.com/deemontuyoinoka">
    <Button variant="primary" size="sm">twitter</Button>
        </a>

     <a href="https://steamcommunity.com/profiles/76561198804543860/">
     <Button variant="dark" size="sm">steam</Button>
        </a>  
    <a href="https://line.me/ti/p/rDfv0I59Xo">
    <Button variant="success" size="sm">line</Button>
      </a>    
    </div>
  )  
}
  


export default App;
