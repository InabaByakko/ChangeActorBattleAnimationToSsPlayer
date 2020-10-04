//=============================================================================
// ChangeActorBattleAnimationToSsPlayer.js
//=============================================================================

/*:
 * @plugindesc Replace the actor's battle animations made by OPTPiX SpriteStudio.
 * @author Inaba Byakko
 * 
 * @param Suffix(walk)
 * @desc An suffix of side view battler's image file name which means idling motion. Default value is "walk"
 * @default walk
 *
 * @param Suffix(wait)
 * @desc An suffix of side view battler's image file name which means physical ready motion. Default value is "wait"
 * @default wait
 * 
 * @param Suffix(chant)
 * @desc An suffix of side view battler's image file name which means magical ready motion. Default value is "chant"
 * @default chant
 *
 * @param Suffix(guard)
 * @desc An suffix of side view battler's image file name which means guarding motion. Default value is "guard"
 * @default guard
 *
 * @param Suffix(damage)
 * @desc An suffix of side view battler's image file name which means damaged motion. Default value is "damage"
 * @default damage
 *
 * @param Suffix(evade)
 * @desc An suffix of side view battler's image file name which means evading motion. Default value is "evade"
 * @default evade
 *
 * @param Suffix(thrust)
 * @desc An suffix of side view battler's image file name which means stabbing motion. Default value is "thrust"
 * @default thrust
 *
 * @param Suffix(swing)
 * @desc An suffix of side view battler's image file name which means swinging motion. Default value is "swing"
 * @default swing
 *
 * @param Suffix(missile)
 * @desc An suffix of side view battler's image file name which means shooting motion. Default value is "missile"
 * @default missile
 *
 * @param Suffix(skill)
 * @desc An suffix of side view battler's image file name which means physical skill using motion. Default value is "skill"
 * @default skill
 *
 * @param Suffix(spell)
 * @desc An suffix of side view battler's image file name which means magical skill using motion. Default value is "spell"
 * @default spell
 *
 * @param Suffix(item)
 * @desc An suffix of side view battler's image file name which means item using motion. Default value is "item"
 * @default item
 *
 * @param Suffix(escape)
 * @desc An suffix of side view battler's image file name which means escaping motion. Default value is "escape"
 * @default escape
 *
 * @param Suffix(victory)
 * @desc An suffix of side view battler's image file name which means victory motion. Default value is "victory"
 * @default victory
 *
 * @param Suffix(dying)
 * @desc An suffix of side view battler's image file name which means idling motion with crisis. Default value is "dying"
 * @default dying
 *
 * @param Suffix(abnormal)
 * @desc An suffix of side view battler's image file name which means idling motion with abnormal state. Default value is "abnormal"
 * @default abnormal
 * 
 * @param Suffix(sleep)
 * @desc An suffix of side view battler's image file name which means sleeping motion. Default value is "sleep"
 * @default sleep
 *
 * @param Suffix(dead)
 * @desc An suffix of side view battler's image file name which means dead motion. Default value is "dead"
 * @default dead
 *
 * @param HideWeaponGraphics
 * @desc Select whether you hide battler's weapon animation graphics(ON or OFF). Default value is "OFF"
 * @default OFF
 * 
 * @param Loop(dead)
 * @desc Select whether you play dead motion repeatedly(ON or OFF). Default value is "ON"
 * @default ON
 *
 * @param Loop(victory)
 * @desc Select whether you play victory motion repeatedly(ON or OFF). Default value is "ON"
 * @default ON
 *
 * @help
 * ** INFORMATION **
 * This plug-in is depends on other plug-in "SsPlayerForRPGMV".
 * Please download from following URL and install above this plug-in.
 * https://github.com/InabaByakko/SSPlayerForRPGMV
 * 
 * Plug-in commands:
 * 
 * SSPlayAcrorMotion [Party member ID (start with 1)] [motion name]
 *   # Play any motion of a party member.
 *   # It searches for motion name by exact match.
 */

/*:ja
 * @plugindesc サイドビュー戦闘時のアクター側アニメーションをSpriteStudioアニメーションに差し替えるプラグインです。
 * @author Inaba Byakko
 * 
 * @param Suffix(walk)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、前進時のモーション名。デフォルトは"walk"
 * @default walk
 *
 * @param Suffix(wait)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、通常待機時のモーション名。デフォルトは"wait"
 * @default wait
 * 
 * @param Suffix(chant)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、詠唱待機時のモーション名。デフォルトは"chant"
 * @default chant
 *
 * @param Suffix(guard)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、防御時のモーション名。デフォルトは"guard"
 * @default guard
 *
 * @param Suffix(damage)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、ダメージ時のモーション名。デフォルトは"damage"
 * @default damage
 *
 * @param Suffix(evade)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、回避時のモーション名。デフォルトは"evade"
 * @default evade
 *
 * @param Suffix(thrust)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、突き攻撃時のモーション名。デフォルトは"thrust"
 * @default thrust
 *
 * @param Suffix(swing)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、振り攻撃時のモーション名。デフォルトは"swing"
 * @default swing
 *
 * @param Suffix(missile)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、飛び道具攻撃時のモーション名。デフォルトは"missile"
 * @default missile
 *
 * @param Suffix(skill)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、汎用スキル発動時のモーション名。デフォルトは"skill"
 * @default skill
 *
 * @param Suffix(spell)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、魔法発動時のモーション名。デフォルトは"spell"
 * @default spell
 *
 * @param Suffix(item)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、アイテム使用時のモーション名。デフォルトは"item"
 * @default item
 *
 * @param Suffix(escape)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、逃げる時のモーション名。デフォルトは"escape"
 * @default escape
 *
 * @param Suffix(victory)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、勝利時のモーション名。デフォルトは"victory"
 * @default victory
 *
 * @param Suffix(dying)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、瀕死時のモーション名。デフォルトは"dying"
 * @default dying
 *
 * @param Suffix(abnormal)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、状態異常時のモーション名。デフォルトは"abnormal"
 * @default abnormal
 * 
 * @param Suffix(sleep)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、睡眠時のモーション名。デフォルトは"sleep"
 * @default sleep
 *
 * @param Suffix(dead)
 * @desc SV戦闘キャラ画像ファイル名の後ろに付く、戦闘不能時のモーション名。デフォルトは"dead"
 * @default dead
 * 
 * @param HideWeaponGraphics
 * @desc 攻撃中の武器アニメーションを非表示にするか（ON/OFF) 。デフォルトはOFF
 * @default OFF
 *
 * @param Loop(dead)
 * @desc 戦闘不能モーションを繰り返し再生するか（ON/OFF) 。デフォルトはON
 * @default ON
 * 
 * @param Loop(victory)
 * @desc 勝利モーションを繰り返し再生するか（ON/OFF) 。デフォルトはON
 * @default ON
 * 
 * @help
 * ※注意
 * 本プラグインの動作には、依存プラグイン「SsPlayerForRPGMV」
 * が必要です。下のURLからダウンロードの上、本プラグインより
 * 上の位置にインストールしてください。
 * https://github.com/InabaByakko/SSPlayerForRPGMV
 * 
 * プラグインコマンド:
 *
 * SSアクターアニメ再生 [パーティメンバーID (先頭から1)] [モーション名]
 *   # 指定したパーティメンバーの任意のモーションを再生します。
 *   # モーション名は完全一致です。
 */

(function () {

    // 依存プラグイン導入チェック
    if (typeof SsSprite !== "function") {
        throw new Error(
                "Dependency plug-in 'SsPlayerForRPGMV' is not installed.");
    }
    // TODO: version check isReady

    // 接尾語収集
    var parameters = PluginManager
            .parameters('ChangeActorBattleAnimationToSsPlayer');
    var motion_suffixes = {
        walk: parameters["Suffix(walk)"],
        wait: parameters["Suffix(wait)"],
        chant: parameters["Suffix(chant)"],
        guard: parameters["Suffix(guard)"],
        damage: parameters["Suffix(damage)"],
        evade: parameters["Suffix(evade)"],
        thrust: parameters["Suffix(thrust)"],
        swing: parameters["Suffix(swing)"],
        missile: parameters["Suffix(missile)"],
        skill: parameters["Suffix(skill)"],
        spell: parameters["Suffix(spell)"],
        item: parameters["Suffix(item)"],
        escape: parameters["Suffix(escape)"],
        victory: parameters["Suffix(victory)"],
        dying: parameters["Suffix(dying)"],
        abnormal: parameters["Suffix(abnormal)"],
        sleep: parameters["Suffix(sleep)"],
        dead: parameters["Suffix(dead)"]
    };

    if (parameters["Loop(dead)"].toUpperCase() == "OFF")
        Sprite_Actor.MOTIONS["dead"]["loop"] = false;
    if (parameters["Loop(victory)"].toUpperCase() == "OFF")
        Sprite_Actor.MOTIONS["victory"]["loop"] = false;

    var animationDir = SSP4MV.animationDir;

    // プラグインコマンドの定義
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        command = command.toUpperCase();
        if (command === "SSアクターアニメ再生" || command === "SSPlayAcrorMotion") {
            var member = $gameParty.members()[Number(args[0]||1)-1];
            if (member) member.forceMotion(args[1]);
        }
    };

    var _Sprite_Actor_createMainSprite = Sprite_Actor.prototype.createMainSprite;
    Sprite_Actor.prototype.createMainSprite = function () {
        _Sprite_Actor_createMainSprite.call(this);
        this._ssSprite = new SsSprite(null);
        this._forcedSsMotion = '';
        this._mainSprite.addChild(this._ssSprite);
    };

    var _Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
    Sprite_Actor.prototype.setBattler = function (battler) {
        var changed = (battler !== this._actor);
        _Sprite_Actor_setBattler.call(this, battler);
        if (changed) {
            this._ssMotions = {};
            this.loadSsMotionSet(this._actor.battlerName());
        }
    };

    Sprite_Actor.prototype.loadActorSsMotions = function (motions) {
        for (var motion in motions) {
            if (motions.hasOwnProperty(motion)) {
                var suffix = motions[motion];
                this._ssMotions[motion] = null;
                this.loadSsMotion(this._actor.battlerName(), motion, suffix);
            }
        }
    };

    Sprite_Actor.prototype.loadSsMotion = function (battlerName, motionKey, motionSuffix) {
        var xhr = new XMLHttpRequest();
        var url = animationDir + battlerName + "_" + motionSuffix + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function (key) {
            if (xhr.status < 400) {
                var jsonData = JSON.parse(xhr.responseText)[0];
                this.setActorSsMotion(jsonData, key);
                // ロード完了コールバックがあれば実行
                if (typeof this.onSsMotionLoad === "function") {
                    this.onSsMotionLoad();
                }
            }
        } .bind(this, motionKey);
        xhr.send();
    };

    Sprite_Actor.prototype.loadSsMotionSet = function (battlerName) {
        var xhr = new XMLHttpRequest();
        var url = animationDir + battlerName + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function () {
            if (xhr.status < 400) {
                var jsonData = JSON.parse(xhr.responseText);
                this.setActorSsMotionSet(jsonData, battlerName);
            } else {
                this.loadActorSsMotions(motion_suffixes);
            }
        } .bind(this);
        xhr.onerror = function () {
            this.loadActorSsMotions(motion_suffixes);
        }.bind(this);
        xhr.send();
    };

    Sprite_Actor.prototype.setActorSsMotionSet = function (jsonData, fileName) {
        Object.keys(motion_suffixes).forEach(function(motion) {
            this._ssMotions[motion] = null;
        }.bind(this));
        jsonData.forEach(function(animData){
            var name = animData.name.replace(new RegExp('^'+fileName+'_'), '');
            if (!Object.keys(motion_suffixes).some(function(motion){
                if (name === motion_suffixes[motion]){
                    this.setActorSsMotion(animData, motion);
                    return true;
                }
            }.bind(this))){
                this.setActorSsMotion(animData, name);
            }
        }.bind(this));
    };

    Sprite_Actor.prototype.setActorSsMotion = function (jsonData, motionKey) {
        var imageList = new SsImageList(jsonData.images, animationDir,
                    true);
        var animation = new SsAnimation(jsonData.animation, imageList);
        this._ssMotions[motionKey] = animation;
    };

    // 元スプライトのビットマップを無効化し、SsSpriteのモーション更新を行う
    Sprite_Actor.prototype.updateBitmap = function () {
        Sprite_Battler.prototype.updateBitmap.call(this);
        if (!this._mainSprite._isReplaced) {            
            var width = this._ssSprite.getWidth();
            var height = this._ssSprite.getHeight();
            if (width !== 0 && height !== 0) {
                this._mainSprite.bitmap = new Bitmap(width * 9, height * 6);
                this._mainSprite._needsTint = function() { return false; };
                this._mainSprite._isReplaced = true;
            }
        }            
        this.updateSsMotion();
    };

    // オプションがONのとき、武器アニメーションを非表示に
    var _spriteActorSetupWeaponAnimation = Sprite_Actor.prototype.setupWeaponAnimation;
    Sprite_Actor.prototype.setupWeaponAnimation = function () {
        if (parameters["HideWeaponGraphics"].toUpperCase() === "OFF") {
            _spriteActorSetupWeaponAnimation.call(this);
        }
    };

    Sprite_Actor.prototype.updateSsMotion = function () {
        if (typeof this._motion === "object") {
            var motionName = "";
            for (var key in Sprite_Actor.MOTIONS) {
                if (this._motion === Sprite_Actor.MOTIONS[key])
                    motionName = key;
            }
            ;
            if (motionName === ""){
                if (this._forcedSsMotion) {
                    motionName = this._forcedSsMotion;
                } else {
                    motionName = this._motion["index"];
                }
            }
            var newMotion = this._ssMotions[motionName];
            if (this._ssSprite.getAnimation() !== newMotion) {
                if (typeof this._ssMotions === "undefined")
                    return;
                this._ssSprite.setAnimation(newMotion);
                this._ssSprite.setLoop(Number(!this._motion["loop"]));
                if (this._motion["loop"] === false) {
                    this._ssSprite.setEndCallBack(function () {
                        this.refreshMotion();
                    } .bind(this));
                } else {
                    this._ssSprite.setEndCallBack(function () {
                    });
                }
                if (newMotion !== null)
                    this.onSsMotionLoad = null;
            }
        }
    };

    Sprite_Actor.prototype.updateMotionCount = function () {
        if (this._motion && this._ssSprite.isPlaying()) {
            this._motionCount = this._ssSprite.getFrameNo();
        } else {
            this.refreshMotion();
        }
    };

    var _Sprite_Actor_refreshMotion = Sprite_Actor.prototype.refreshMotion;
    Sprite_Actor.prototype.refreshMotion = function () {
        this._forcedSsMotion = '';
        if (BattleManager.isBattleEnd()) {
            return;
        }
        _Sprite_Actor_refreshMotion.call(this);
    };

    // 次に再生するモーションを予約
    // YEP_BattleEngineCoreに同名のメソッドがあればそれを使う
    var _Game_Battler_forceMotion = Game_Battler.prototype.forceMotion;
    Game_Battler.prototype.forceMotion = function(motionType) {
        if (_Game_Battler_forceMotion !== undefined) {
            return _Game_Battler_forceMotion.call(this,motionType);
        }
        this._motionType = motionType;
        if (this.battler()) {
          this.battler().forceMotion(motionType);
        }
    };
    var _Sprite_Actor_forceMotion = Sprite_Actor.prototype.forceMotion;
    Sprite_Actor.prototype.forceMotion = function(motionType) {
        if (_Sprite_Actor_forceMotion !== undefined && !this._mainSprite._isReplaced) {
            return _Sprite_Actor_forceMotion.call(this);
        }
        if (Object.keys(Sprite_Actor.MOTIONS).some(function(motion){return motion === motionType;})){
            if (_Sprite_Actor_forceMotion !== undefined) {
                return _Sprite_Actor_forceMotion.call(this, motionType);
            } else {
                var newMotion = Sprite_Actor.MOTIONS[motionType];
                this._motion = newMotion;
                this._motionCount = 0;
                this._pattern = 0;
            }   
        }
        if (Object.keys(this._ssMotions).some(function(motion){return motion === motionType;})){
            this._motion = {index:0, loop:false};
            this._forcedSsMotion = motionType;
            this._motionCount = 0;
            this._pattern = 0;
        }
    };

    var _Sprite_Actor_updateMove = Sprite_Actor.prototype.updateMove;
    Sprite_Actor.prototype.updateMove = function() {
        if (this._mainSprite._isReplaced){
            var animation = this._ssSprite.getAnimation();
            if (animation && animation.isReady()) {
                _Sprite_Actor_updateMove.call(this);
            }
        }else{
            _Sprite_Actor_updateMove.call(this);
        }
    };

})();