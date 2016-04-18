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
 *   (none)
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
 *   （なし）
 */

(function () {

    // 依存プラグイン導入チェック
    if (typeof SsSprite !== "function") {
        throw new Error(
                "Dependency plug-in 'SsPlayerForRPGMV' is not installed.");
    }

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

    var animationDir = String(PluginManager.parameters('SSPlayerForRPGMV')['Animation File Path']
            || "img/animations/ssas")
            + "/";

    var _Sprite_Actor_createMainSprite = Sprite_Actor.prototype.createMainSprite;
    Sprite_Actor.prototype.createMainSprite = function () {
        _Sprite_Actor_createMainSprite.call(this);
        this._ssSprite = new SsSprite(null);
        this._mainSprite.addChild(this._ssSprite);
    };

    var _Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
    Sprite_Actor.prototype.setBattler = function (battler) {
        var changed = (battler !== this._actor);
        _Sprite_Actor_setBattler.call(this, battler);
        if (changed) {
            this._ssMotions = {};
            this.loadActorSsMotions(motion_suffixes);
        }
    };

    Sprite_Actor.prototype.loadActorSsMotions = function (motions) {
        for (var motion in motions) {
            this._ssMotions[motion] = null;
            this.loadSsMotion(this._actor.battlerName(), motion);
        }
    };

    Sprite_Actor.prototype.loadSsMotion = function (battlerName, motionSuffix) {
        var xhr = new XMLHttpRequest();
        var url = animationDir + battlerName + "_" + motionSuffix + ".json";
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function (motionSuffix) {
            if (xhr.status < 400) {
                var jsonData = JSON.parse(xhr.responseText)[0];
                var imageList = new SsImageList(jsonData.images, animationDir,
                    true);
                var animation = new SsAnimation(jsonData.animation, imageList);
                this._ssMotions[motionSuffix] = animation;
                // ロード完了コールバックがあれば実行
                if (typeof this.onSsMotionLoad === "function") {
                    this.onSsMotionLoad();
                }
            }
        } .bind(this, motionSuffix);
        xhr.send();
    };

    // 元スプライトのビットマップを無効化し、SsSpriteのモーション更新を行う
    Sprite_Actor.prototype.updateBitmap = function () {
        Sprite_Battler.prototype.updateBitmap.call(this);
        this._mainSprite.bitmap = null;
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
            if (motionName === "") motionName = this._motion["index"];
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

    var _Sprite_Actor_refreshMotion = Sprite_Actor.prototype.refreshMotion;
    Sprite_Actor.prototype.refreshMotion = function () {
        if (BattleManager.isBattleEnd()) {
            return;
        }
        _Sprite_Actor_refreshMotion.call(this);
    };
})();