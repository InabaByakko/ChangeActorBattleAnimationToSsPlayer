# ChangeActorBattleAnimationToSsPlayer
サイドビュー戦闘時のアクター側アニメーションをSpriteStudioアニメーションに差し替えるプラグインです。  

※ 暫定ドキュメントです。  

\*\* [English document is HERE.](README_EN.md) \*\*

### 注意
本プラグインの動作には、依存プラグイン「SsPlayerForRPGMV」が必要です。下のURLからダウンロードの上、
本プラグインより上の位置にインストールしてください。  
https://github.com/InabaByakko/SSPlayerForRPGMV

このソフトウェアは、MITライセンスのもとで公開されています。詳しくは LICENSE.md をお読み下さい。  

# デモ
こちらのURLで、このプラグインを使用したデモプロジェクトを公開しています。  

http://www.whiterabbit-hutch.net/CABA2SS_Sample/

# 使い方

### プロジェクトへの組込み

1. 右部の「Download ZIP」をクリックし、最新版のZIPアーカイブをダウンロードします。   
  
1. ダウンロードしたZIPファイルを解凍して出てきた ChangeActorBattleAnimationToSsPlayer.js を、組み込みたいゲームプロジェクトのjs/pluginsフォルダへ入れます。  
   
1. ツクールエディタの「プラグイン管理」より「ChangeActorBattleAnimationToSsPlayer」を追加します。  

### 用意されたモーションを使用する

1. 「sample\_animations」フォルダ中の「character\_3head.psd」ファイルを参考に、あなたのキャラクターを描き、任意のPNGファイル名で保存します。  

1. 保存したPNGファイルと、「sample\_animations\\export」フォルダにあるJSONファイルを、「SsPlayerForRPGMV」のプラグインパラメータで指定したアニメーションフォルダ
(既定では"img/animations/ssas")にコピーします。  

1. JSONファイル名の「character\_3head」の部分を、データベースのアクターに設定した"[SV]戦闘キャラ"画像ファイル名に書き換えます。 
  - 例)アクターに設定した"[SV]戦闘キャラ"画像ファイル名が「`Actor1_1.png`」だった場合、`character_3head_walk.json`を`Actor1_1_walk.json`に書き換えます。 
  
1. 各JSONファイル中の「character\_3head.png」を、1.で書き出したファイル名に変更します。  

1. 「データベース」の「システム」タブで「サイドビュー戦闘を使用」にチェックを入れます。  

1. お楽しみください。  

なお、本サンプルモーションは、一部SpriteStudio公式のキャラクターアニメーションテンプレートから引用させていただいており、別途足りないモーションを補完して添付しています。  
http://www.webtech.co.jp/help/ja/spritestudio/download/tool_sample_download/#sample

### 自作アニメーションを組み込む方法

1. 「SsPlayerForRPGMV」のプラグインパラメータで指定したアニメーションフォルダ
(既定では"img/animations/ssas")に、以下の法則で付けたファイル名のJSONファイルと、使用している
画像ファイルを配置します。  

    - アクターに設定した"[SV]戦闘キャラ"画像ファイル名が「`Actor1_1.png`」だった場合  
        * `Actor1_1_walk.json` (前進モーション用データ)
        * `Actor1_1_wait.json` (通常待機モーション用データ)
        * `Actor1_1_chant.json` (詠唱待機モーション用データ)
        * `Actor1_1_guard.json` (防御モーション用データ)
        * `Actor1_1_damage.json` (ダメージモーション用データ)
        * `Actor1_1_evade.json` (回避モーション用データ)
        * `Actor1_1_thrust.json` (突き攻撃モーション用データ)
        * `Actor1_1_swing.json` (振り攻撃モーション用データ)
        * `Actor1_1_missile.json` (飛び道具攻撃モーション用データ)
        * `Actor1_1_skill.json` (汎用スキル発動モーション用データ)
        * `Actor1_1_spell.json` (魔法発動モーション用データ)
        * `Actor1_1_item.json` (アイテム使用モーション用データ)
        * `Actor1_1_escape.json` (逃走モーション用データ)
        * `Actor1_1_victory.json` (勝利モーション用データ)
        * `Actor1_1_dying.json` (瀕死モーション用データ)
        * `Actor1_1_abnormal.json` (状態異常モーション用データ)
        * `Actor1_1_sleep.json` (睡眠モーション用データ)
        * `Actor1_1_dead.json` (戦闘不能モーション用データ)
    - これらのモーションファイル名(戦闘キャラ画像ファイル名と".json"の間)は、プラグインパラメータで変更可能です。  
    
2. 「データベース」の「システム」タブで「サイドビュー戦闘を使用」にチェックを入れます。   

3. お楽しみください。  


# 動作確認済みのサードパーティプラグイン
本プラグインは、以下の戦闘システムに介入するサードパーティプラグインを導入した際の動作検証を行っておりますが、
その他のプラグインとの競合が発生する場合があります。あらかじめご容赦ください。

* Yanfly Engine: Battle Engine Core
    - http://yanfly.moe/2015/10/10/yep-3-battle-engine-core/
    
## バグを見つけた場合
 
ご迷惑をお掛けしております。もし問題のある動作を発見された場合は、[GithubのIssue](https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer/issues)でトピックを立ててご報告いただくか、[Twitter@InabaByakko](https://twitter.com/InabaByakko)までご連絡をお願い致します。

Githubのご利用に慣れていらっしゃる方は、直接のPull Requestも歓迎しております。

---

- SpriteStudio, Web Technologyは、株式会社ウェブテクノロジの登録商標です。
- RPGツクールは、株式会社KADOKAWAの登録商標です。
- その他の商品名は各社の登録商標または商標です。
