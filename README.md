# ChangeActorBattleAnimationToSsPlayer
サイドビュー戦闘時のアクター側アニメーションをSpriteStudioアニメーションに差し替えるプラグインです。  
Replace the actor's battle animations made by OPTPiX SpriteStudio.

※ 暫定ドキュメントです。  
※ I need transrators for this document.

### 注意 - Attention
本プラグインの動作には、依存プラグイン「SsPlayerForRPGMV」が必要です。下のURLからダウンロードの上、
本プラグインより上の位置にインストールしてください。  
This plug-in is depends on other plug-in "SsPlayerForRPGMV". Please download from 
following URL and install above this plug-in.

https://github.com/InabaByakko/SSPlayerForRPGMV

このソフトウェアは、MITライセンスのもとで公開されています。詳しくは LICENSE.md をお読み下さい。  
This software is released under the MIT License, see LICENSE.md.

# 使い方 - Usage

1. 「SsPlayerForRPGMV」のプラグインパラメータで指定したアニメーションフォルダ
(既定では"img/animations/ssas")に、以下の法則で付けたファイル名のJSONファイルと、使用している
画像ファイルを配置します。  
Locate image and JSON files at the directory that you selected plug-in SsPlayerForRPGMV's parameter.
    - アクターに設定した"[SV]戦闘キャラ"画像ファイル名が「`Actor1_1.png`」だった場合  
    If you set an actor's "[SV]Battler" image file name as `Actor1_1.png`, give 
    JSON files' name by following rules:
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
    That motion names can be changed by this plug-in parameters.
2. 「データベース」の「システム」タブで「サイドビュー戦闘を使用」にチェックを入れます。  
On a tab "System" of "Database" dialog box, make sure that a check box "Use Side view battle" must be checked.
3. お楽しみください。  
Enjoy!


# 動作確認済みのサードパーティプラグイン
本プラグインは、以下の戦闘システムに介入するサードパーティプラグインを導入した際の動作検証を行っておりますが、
その他のプラグインとの競合が発生する場合があります。あらかじめご容赦ください。

* Yanfly Engine: Battle Engine Core
    - http://yanfly.moe/2015/10/10/yep-3-battle-engine-core/
    
---

- SpriteStudio, Web Technologyは、株式会社ウェブテクノロジの登録商標です。
- RPGツクールは、株式会社KADOKAWAの登録商標です。
- その他の商品名は各社の登録商標または商標です。
