function _0xc86e(){const _0x38a376=['bind','creds','store','24xXtxDi','connectionClosed','1775275YeNzPy','20.0.04','keys','6069470btuTxo','registered','type','Tersambung','uncaughtException','525518rYzJgM','Your\x20Pairing\x20Code\x20:\x20','question','connecting','204pAfqoZ','deeppink','exit','10386467ndYivQ','logout','`☛𝐃𝐄𝐋𝐓𝐀 𝐕𝟏𝟒 𝐒𝐔𝐂𝐂𝐄𝐒 𝐂𝐎𝐍𝐍𝐄𝐂𝐓☚`','restartRequired','contacts','connectionLost','key','public','open','Error:\x20Stream\x20Errored\x20(unknown)','72lkHxfB','badSession','remoteJid','authState','Connecting...','status@broadcast','Connection\x20lost,\x20trying\x20to\x20reconnect','groupAcceptInvite','𝐉𝐀𝐍𝐆𝐀𝐍 𝐃𝐈 𝐒𝐄𝐁𝐀𝐑𝐊𝐀𝐍 𝐒𝐂𝐑𝐈𝐏𝐓 𝐈𝐍𝐈, 𝐉𝐈𝐊𝐀 𝐀𝐍𝐃𝐀 𝐒𝐄𝐁𝐀𝐑 𝐌𝐀𝐊𝐀 𝐓𝐎𝐊𝐄𝐍𝐍𝐘𝐀 𝐀𝐊𝐀𝐍 𝐒𝐀𝐘𝐀 𝐑𝐔𝐒𝐀𝐊\nTelegram: t.me/DigitalD3n','silent','Ubuntu','creds.update','ephemeralMessage','green','./database/place','contacts.update','loggedOut','messages','blue','sendMessage','notify','createInterface','readline','\x0aEnter\x20Your\x20Number\x0aNumber\x20:\x20','Chrome','32312UkbOsh','trim','13709944FespFy','[SYSTEM]','decodeJid','189502LlFgfv','bold','length','readMessages','makeWASocket','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','white','statusCode','timedOut','message','output','error','log','./deltatech.js'];_0xc86e=function(){return _0x38a376;};return _0xc86e();}const _0x315ad3=_0x2c79;function _0x2c79(_0x2f52fa,_0x4099cb){const _0xc86e8e=_0xc86e();return _0x2c79=function(_0x2c7943,_0x212080){_0x2c7943=_0x2c7943-0x1e4;let _0x69a7b2=_0xc86e8e[_0x2c7943];return _0x69a7b2;},_0x2c79(_0x2f52fa,_0x4099cb);}(function(_0x3cad6f,_0x27e7b3){const _0x39cbdb=_0x2c79,_0x31e7bf=_0x3cad6f();while(!![]){try{const _0x4990eb=parseInt(_0x39cbdb(0x215))/0x1+parseInt(_0x39cbdb(0x1fa))/0x2+-parseInt(_0x39cbdb(0x219))/0x3*(-parseInt(_0x39cbdb(0x1f5))/0x4)+parseInt(_0x39cbdb(0x20d))/0x5*(parseInt(_0x39cbdb(0x20b))/0x6)+parseInt(_0x39cbdb(0x21c))/0x7+parseInt(_0x39cbdb(0x1f7))/0x8+-parseInt(_0x39cbdb(0x226))/0x9*(parseInt(_0x39cbdb(0x210))/0xa);if(_0x4990eb===_0x27e7b3)break;else _0x31e7bf['push'](_0x31e7bf['shift']());}catch(_0x48045c){_0x31e7bf['push'](_0x31e7bf['shift']());}}}(_0xc86e,0xe379d),require('./database/global'));const func=require(_0x315ad3(0x1ea)),readline=require(_0x315ad3(0x1f2)),usePairingCode=!![],question=_0x2c6811=>{const _0x453adf=_0x315ad3,_0x188239=readline[_0x453adf(0x1f1)]({'input':process['stdin'],'output':process['stdout']});return new Promise(_0x16a5aa=>{const _0x4f9ec3=_0x453adf;_0x188239[_0x4f9ec3(0x217)](_0x2c6811,_0x16a5aa);});};async function startSesi(){const _0x370f3c=_0x315ad3,_0x18bfb5=makeInMemoryStore({'logger':pino()['child']({'level':_0x370f3c(0x1e5),'stream':_0x370f3c(0x20a)})}),{state:_0x332695,saveCreds:_0x226b6c}=await useMultiFileAuthState('./session'),{version:_0x2fddc8,isLatest:_0x14b89d}=await fetchLatestBaileysVersion();console[_0x370f3c(0x206)](chalk[_0x370f3c(0x1ee)][_0x370f3c(0x1fb)](_0x370f3c(0x1e4)));const _0x3248a4={'version':_0x2fddc8,'keepAliveIntervalMs':0x7530,'printQRInTerminal':!usePairingCode,'logger':pino({'level':'fatal'}),'auth':_0x332695,'browser':[_0x370f3c(0x1e6),_0x370f3c(0x1f4),_0x370f3c(0x20e)]},_0x1ec95c=func[_0x370f3c(0x1fe)](_0x3248a4);if(usePairingCode&&!_0x1ec95c[_0x370f3c(0x229)][_0x370f3c(0x209)][_0x370f3c(0x211)]){const _0x387a94=await question(chalk[_0x370f3c(0x1e9)](_0x370f3c(0x1f3))),_0x4835bc=await _0x1ec95c['requestPairingCode'](_0x387a94[_0x370f3c(0x1f6)]());console[_0x370f3c(0x206)](chalk[_0x370f3c(0x1e9)](_0x370f3c(0x216)+_0x4835bc+'\x20'));}return _0x18bfb5[_0x370f3c(0x208)](_0x1ec95c['ev']),_0x1ec95c['ev']['on']('connection.update',async _0x3970a4=>{const _0x41f9cc=_0x370f3c,{connection:_0x187ba6,lastDisconnect:_0x208b44}=_0x3970a4;if(_0x187ba6==='close'){const _0x55253e=new Boom(_0x208b44?.['error'])?.[_0x41f9cc(0x204)][_0x41f9cc(0x201)];console[_0x41f9cc(0x206)](color(_0x208b44[_0x41f9cc(0x205)],_0x41f9cc(0x21a)));if(_0x208b44[_0x41f9cc(0x205)]==_0x41f9cc(0x225))process[_0x41f9cc(0x21b)]();else{if(_0x55253e===DisconnectReason[_0x41f9cc(0x227)])console[_0x41f9cc(0x206)](color('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again')),process[_0x41f9cc(0x21b)]();else{if(_0x55253e===DisconnectReason[_0x41f9cc(0x20c)])console[_0x41f9cc(0x206)](color('[SYSTEM]','white'),color('Connection\x20closed,\x20reconnecting...',_0x41f9cc(0x21a))),process[_0x41f9cc(0x21b)]();else{if(_0x55253e===DisconnectReason[_0x41f9cc(0x221)])console['log'](color(_0x41f9cc(0x1f8),_0x41f9cc(0x200)),color(_0x41f9cc(0x22c),_0x41f9cc(0x21a))),process[_0x41f9cc(0x21b)]();else{if(_0x55253e===DisconnectReason['connectionReplaced'])console[_0x41f9cc(0x206)](color(_0x41f9cc(0x1ff))),_0x1ec95c[_0x41f9cc(0x21d)]();else{if(_0x55253e===DisconnectReason[_0x41f9cc(0x1ec)])console['log'](color('Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.')),_0x1ec95c[_0x41f9cc(0x21d)]();else{if(_0x55253e===DisconnectReason[_0x41f9cc(0x21f)])console['log'](color('Restart\x20Required,\x20Restarting...')),await startSesi();else _0x55253e===DisconnectReason[_0x41f9cc(0x202)]&&(console[_0x41f9cc(0x206)](color('Connection\x20TimedOut,\x20Reconnecting...')),startSesi());}}}}}}}else{if(_0x187ba6===_0x41f9cc(0x218))start('1',_0x41f9cc(0x22a));else _0x187ba6===_0x41f9cc(0x224)&&(success('1',_0x41f9cc(0x213)),_0x1ec95c[_0x41f9cc(0x1ef)]('6283193344628@s.whatsapp.net',{'text':_0x41f9cc(0x21e)}),autoJoin&&_0x1ec95c[_0x41f9cc(0x22d)](codeInvite));}}),_0x1ec95c['ev']['on']('messages.upsert',async _0x39a4b3=>{const _0x5431d0=_0x370f3c;try{m=_0x39a4b3[_0x5431d0(0x1ed)][0x0];if(!m[_0x5431d0(0x203)])return;m['message']=Object[_0x5431d0(0x20f)](m['message'])[0x0]===_0x5431d0(0x1e8)?m[_0x5431d0(0x203)][_0x5431d0(0x1e8)][_0x5431d0(0x203)]:m[_0x5431d0(0x203)];if(m[_0x5431d0(0x222)]&&m[_0x5431d0(0x222)][_0x5431d0(0x228)]===_0x5431d0(0x22b))return _0x1ec95c[_0x5431d0(0x1fd)]([m[_0x5431d0(0x222)]]);if(!_0x1ec95c['public']&&!m[_0x5431d0(0x222)]['fromMe']&&_0x39a4b3[_0x5431d0(0x212)]===_0x5431d0(0x1f0))return;if(m[_0x5431d0(0x222)]['id']['startsWith']('BAE5')&&m[_0x5431d0(0x222)]['id'][_0x5431d0(0x1fc)]===0x10)return;m=func['smsg'](_0x1ec95c,m,_0x18bfb5),require(_0x5431d0(0x207))(_0x1ec95c,m,_0x18bfb5);}catch(_0x3cf088){console[_0x5431d0(0x206)](_0x3cf088);}}),_0x1ec95c['ev']['on'](_0x370f3c(0x1eb),_0x5a70f8=>{const _0x332452=_0x370f3c;for(let _0x3ac2a6 of _0x5a70f8){let _0x16969e=_0x1ec95c[_0x332452(0x1f9)](_0x3ac2a6['id']);if(_0x18bfb5&&_0x18bfb5[_0x332452(0x220)])_0x18bfb5[_0x332452(0x220)][_0x16969e]={'id':_0x16969e,'name':_0x3ac2a6[_0x332452(0x1f0)]};}}),_0x1ec95c[_0x370f3c(0x223)]=!![],_0x1ec95c['ev']['on'](_0x370f3c(0x1e7),_0x226b6c),_0x1ec95c;}startSesi(),process['on'](_0x315ad3(0x214),function(_0x4b3827){const _0x576cc7=_0x315ad3;console[_0x576cc7(0x206)]('Caught\x20exception:\x20',_0x4b3827);});