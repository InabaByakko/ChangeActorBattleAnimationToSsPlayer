# ChangeActorBattleAnimationToSsPlayer
Replace the actor's battle animations made by OPTPiX SpriteStudio.

\* This is a preliminary document.

\* I'm sorry in poor English. 
I need transrators for this document.

### Attention
This plug-in is depends on other plug-in "SsPlayerForRPGMV". Please download from 
following URL and install above this plug-in.

https://github.com/InabaByakko/SSPlayerForRPGMV

This software is released under the MIT License, see LICENSE.md.

# Demo
I'll show a demo project of this plug-in by the following URL.

http://www.whiterabbit-hutch.net/CABA2SS_Sample/

# Usage

### How to install into your project

1. Click "Download ZIP" button on this page to download a latest ZIP archive.  
1. Unzip archive, and copy "ChangeActorBattleAnimationToSsPlayer.js" to "js/plugins" on your project folder.  
1. On a dialog box "Manage Plug-ins", add "ChangeActorBattleAnimationToSsPlayer" to the list.

### Use prepared motions

1. Draw your character with file "sample\_animatons\\character\_3head.psd" as a reference, and save to PNG file.

1. Copy PNG image and JSON files on a folder "sample\_animations\\export" at the folder that you selected plug-in SsPlayerForRPGMV's parameter.

1. Rename a part of JSON files' "character\_3head" to actor's "[SV]Battler" image file name you set by database. 
  For example, if you set an actor's "[SV]Battler" image file name as `Actor1_1.png`, rename JSON file `"character_3head_walk.json` name as `Actor1_1_walk.json`.

1. Rewrite these JSON files' content that written "character\_3head.png" to image file name that you made by step 1.

1. On a tab "System" of "Database" dialog box, make sure that a check box "Use Side view battle" must be checked.  

1. Enjoy!

By the way, these sample motions has been made from SpriteStudio's official character animation templates. Thanks a lot!  
http://www.webtech.co.jp/help/ja/spritestudio/download/tool_sample_download/#sample

### Include animations that you made

1. Locate image and JSON files at the folder that you selected plug-in SsPlayerForRPGMV's parameter.  

    If you set an actor's "[SV]Battler" image file name as `Actor1_1.png`, give 
    JSON files' name by following rules:
        * `Actor1_1_walk.json`
        * `Actor1_1_wait.json` 
        * `Actor1_1_chant.json` 
        * `Actor1_1_guard.json` 
        * `Actor1_1_damage.json` 
        * `Actor1_1_evade.json` 
        * `Actor1_1_thrust.json` 
        * `Actor1_1_swing.json` 
        * `Actor1_1_missile.json` 
        * `Actor1_1_skill.json` 
        * `Actor1_1_spell.json` 
        * `Actor1_1_item.json` 
        * `Actor1_1_escape.json` 
        * `Actor1_1_victory.json` 
        * `Actor1_1_dying.json` 
        * `Actor1_1_abnormal.json` 
        * `Actor1_1_sleep.json` 
        * `Actor1_1_dead.json` 
    - That motion names can be changed by this plug-in parameters.  
    
2. On a tab "System" of "Database" dialog box, make sure that a check box "Use Side view battle" must be checked.  

3. Enjoy!


# Compatible third party plug-ins

This plug-in is compatible with these plug-ins which affects RPG Maker MV's battle system.  
But other plug-ins which is not in below list has no warranty to work.

* Yanfly Engine: Battle Engine Core
    - http://yanfly.moe/2015/10/10/yep-3-battle-engine-core/
    
    
## When you found BUGs

I'm sorry for causing you trouble. If you found some probrem, please report to make a topic at [Issue of Github](https://github.com/InabaByakko/ChangeActorBattleAnimationToSsPlayer/issues), or mention to [Twitter@InabaByakko](https://twitter.com/InabaByakko).

If you're an expert of Github, I'm glad to be sent pull requests to fix issue.

Thank you for your cooperation.

---

* SpriteStudio, Web Technology is a Registered trademark of WebTechnology Corp.
* RPG Maker is a Registered trademark of KADOKAWA Corp.
* Other product names are trademarks of these companies.
