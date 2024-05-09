/* I18n Extension
  Supported languages: Japanese, Russian, French, Catgirl (generated using ChatGPT)
  Power by Dr0
*/

var ex_languages = [
  ["日本語", "ja_jp"],
  ["Русский", "ru_ru"],
  ["Français", "fr_fr"],
  ["猫娘(R18)", "sh_cxg"],
];
var i18n_ex = {
  langs: ["ja_jp", "ru_ru", "fr_fr", "sh_cxg"],
  list: ["ui", "prompt", "system", "info", "home"],
  ui: [
    [
      "Pin sidebar",
      ["ja_jp", "固定サイドバー"],
      ["ru_ru", "Фиксированная боковая панель"],
      ["fr_fr", "Barre latérale fixe"],
      ["sh_cxg", "固定侧边栏"],
    ],
    [
      "Sound notifications",
      ["ja_jp", "ビープ音"],
      ["ru_ru", "Звуковые сигналы"],
      ["fr_fr", "Bips"],
      ["sh_cxg", "提示音"],
    ],
    [
      "Screen notifications",
      ["ja_jp", "ブラウザ通知"],
      ["ru_ru", "Уведомления браузера"],
      ["fr_fr", "Notifications du navigateur"],
      ["sh_cxg", "浏览器通知"],
    ],
    [
      "Join/left notify",
      ["ja_jp", "参加、終了メッセージの表示"],
      ["ru_ru", "Показывать сообщения о вступлении, выходе"],
      ["fr_fr", "Afficher les messages de jointure et de sortie"],
      ["sh_cxg", "显示加入、退出消息"],
    ],
    [
      "Allow LaTeX",
      ["ja_jp", "LaTeX数式の表示"],
      ["ru_ru", "Показывать формулы LaTeX"],
      ["fr_fr", "Afficher les formules LaTeX"],
      ["sh_cxg", "显示LaTeX公式"],
    ],
    [
      "Allow Highlight",
      ["ja_jp", "コードハイライト"],
      ["ru_ru", "Подсветка кода"],
      ["fr_fr", "Mise en évidence du code"],
      ["sh_cxg", "代码高亮"],
    ],
    [
      "Allow Images",
      ["ja_jp", "画像の表示"],
      ["ru_ru", "Показывать картинки"],
      ["fr_fr", "Afficher les images"],
      ["sh_cxg", "显示图片"],
    ],
    [
      "Embed images like: ![Title](https://i.imgur.com/image.png)",
      ["ja_jp", "画像投稿フォーマット: ！ [タイトル](画像アドレス)"],
      [
        "ru_ru",
        "Формат размещения изображения: ! [название](адрес изображения)",
      ],
      ["fr_fr", "Format de l'image affichée : ! [titre](adresse de l'image)"],
      ["sh_cxg", "发图格式：![标题](图片地址)"],
    ],
    [
      "Allow All Images (Not Recommended)",
      ["ja_jp", "画像のドメイン制限をオフにする (推奨しません)"],
      ["ru_ru", "Отключить ограничение домена изображений (не рекомендуется)"],
      [
        "fr_fr",
        "Désactiver la restriction du domaine de l'image (non recommandé)",
      ],
      ["sh_cxg", "关闭图片域名限制（不推荐）"],
    ],
    [
      "Check allow images to set this. If this is not checked, only images hosted at trusted domain names can be rendered. Note that this may enable IP grabbers to grab your IP address.",
      [
        "ja_jp",
        "このオプションを設定するには、画像を表示するにチェックを入れます。 このオプションにチェックを入れないと、信頼できるドメインの画像のみが表示されます。 このオプションにチェックを入れると、IPロガーによってIPアドレスが記録される危険性があることに注意してください。",
      ],
      [
        "ru_ru",
        "Чтобы установить эту опцию, отметьте Показывать изображения. Если эта опция не отмечена, будут отображаться только изображения на доверенных доменах. Обратите внимание, что при установке этого флажка возникает риск записи IP-адресов в журналы IP-логгеров.",
      ],
      [
        "fr_fr",
        "Cochez Afficher les images pour activer cette option. Si cette option n'est pas cochée, seules les images des domaines de confiance seront affichées. Veuillez noter que si vous cochez cette option, les adresses IP risquent d'être enregistrées par des enregistreurs d'adresses IP.",
      ],
      [
        "sh_cxg",
        "勾选显示图片以设置这个选项。如果没有勾选这个选项，只有受信任的域名上的图片会被显示。请注意，勾选这个选项会产生被IP记录器记录IP地址的风险。",
      ],
    ],
    [
      "Soft @Mention",
      ["ja_jp", "'@'の間にスペースを入れる"],
      ["ru_ru", "'@' с пробелом между ними"],
      ["fr_fr", "'@' avec un espace entre les deux"],
      ["sh_cxg", "@中间加空格"],
    ],
    [
      "Record Messages",
      ["ja_jp", "クライアントログ情報"],
      ["ru_ru", "Информация о регистрации клиента"],
      ["fr_fr", "Informations sur l'enregistrement du client"],
      ["sh_cxg", "客户端记录信息"],
    ],
    [
      "Mobile buttons",
      ["ja_jp", "モバイルボタン"],
      ["ru_ru", "Мобильная кнопка"],
      ["fr_fr", "Bouton mobile"],
      ["sh_cxg", "手机版按钮"],
    ],
    [
      "Index Online Count",
      ["ja_jp", "ホームページにオンライン人数を表示"],
      [
        "ru_ru",
        "На главной странице отображается количество людей, находящихся онлайн",
      ],
      ["fr_fr", "La page d'accueil indique le nombre de personnes en ligne"],
      ["sh_cxg", "首页显示在线人数"],
    ],
    [
      "Language",
      ["ja_jp", "言語"],
      ["ru_ru", "Язык"],
      ["fr_fr", "Langue"],
      ["sh_cxg", "语言"],
    ],
    [
      "Color scheme",
      ["ja_jp", "カラースキーム"],
      ["ru_ru", "Цветовая схема"],
      ["fr_fr", "Schéma de couleurs"],
      ["sh_cxg", "配色方案"],
    ],
    [
      "Highlight scheme",
      ["ja_jp", "コードハイライト"],
      ["ru_ru", "Схема выделения кода"],
      ["fr_fr", "Schéma de mise en évidence des codes"],
      ["sh_cxg", "代码高亮方案"],
    ],
    [
      "Connect tunnel",
      ["ja_jp", "接続アドレス"],
      ["ru_ru", "Адрес подключения"],
      ["fr_fr", "Adresse de connexion"],
      ["sh_cxg", "连接地址"],
    ],
    [
      "Add tunnel",
      ["ja_jp", "加速トンネルの追加"],
      ["ru_ru", "Добавить ускоренный туннель"],
      ["fr_fr", "Ajouter un tunnel accéléré"],
      ["sh_cxg", "添加加速隧道"],
    ],
    [
      "Remove tunnel",
      ["ja_jp", "加速トンネルの削除"],
      ["ru_ru", "Удалить ускоренный туннель"],
      ["fr_fr", "Supprimer un tunnel accéléré"],
      ["sh_cxg", "移除加速隧道"],
    ],
    [
      "Upload Image",
      ["ja_jp", "画像のアップロード"],
      ["ru_ru", "Загрузить изображение"],
      ["fr_fr", "Télécharger l'image"],
      ["sh_cxg", "上传图片"],
    ],
    [
      "Clear all messages",
      ["ja_jp", "このページのチャット履歴を空にする"],
      ["ru_ru", "Пустая история чата на этой странице"],
      ["fr_fr", "Vider l'historique du chat sur cette page"],
      ["sh_cxg", "清空本页聊天记录"],
    ],
    [
      "Set auto color",
      ["ja_jp", "ユーザー名の自動色変更設定"],
      ["ru_ru", "Настройка автоматической смены цвета имени пользователя"],
      [
        "fr_fr",
        "Configurer le changement de couleur automatique des noms d'utilisateur",
      ],
      ["sh_cxg", "设置用户名自动改色"],
    ],
    [
      "Set Massage Template",
      ["ja_jp", "メッセージテンプレートの設定"],
      ["ru_ru", "Настройка шаблонов сообщений"],
      ["fr_fr", "Configurer des modèles de messages"],
      ["sh_cxg", "设置消息模板"],
    ],
    [
      "Copy JSON Record",
      ["ja_jp", "JSONレコードのコピー"],
      ["ru_ru", "Копирование записей JSON"],
      ["fr_fr", "Copier des enregistrements JSON"],
      ["sh_cxg", "复制JSON记录"],
    ],
    [
      "Copy Message Record",
      ["ja_jp", "メッセージログのコピー"],
      ["ru_ru", "Копирование журналов сообщений"],
      ["fr_fr", "Copier les journaux de messages"],
      ["sh_cxg", "复制消息记录"],
    ],
    [
      "Don't Click",
      ["ja_jp", "機能を隠す"],
      ["ru_ru", "Скрыть функции"],
      ["fr_fr", "Cacher des fonctions"],
      ["sh_cxg", "隐藏功能"],
    ],
    [
      "Users online",
      ["ja_jp", "オンラインリスト"],
      ["ru_ru", "Онлайн-список"],
      ["fr_fr", "Liste en ligne"],
      ["sh_cxg", "在线列表"],
    ],
    [
      "(Click user to invite; right click to ignore.)",
      ["ja_jp", "(クリックで招待、右クリックで非表示）"],
      [
        "ru_ru",
        "(Нажмите, чтобы пригласить, нажмите правую кнопку мыши, чтобы скрыть)",
      ],
      [
        "fr_fr",
        "(Cliquer pour inviter, cliquer avec le bouton droit de la souris pour masquer)",
      ],
      ["sh_cxg", "(点击邀请,右键拉黑)"],
    ],
    [
      "Advance Notice Before Sending Long Messages",
      ["ja_jp", "長いメッセージの自動警告を送信"],
      ["ru_ru", "Отправка длинного сообщения с автоматическим предупреждением"],
      ["fr_fr", "Envoi d'un message long avec avertissement automatique"],
      ["sh_cxg", "发送长消息自动预警"],
    ],
    [
      "Fold Long Messages",
      ["ja_jp", "長いメッセージを折りたたむ"],
      ["ru_ru", "Свернуть длинное сообщение"],
      ["fr_fr", "Réduire le message long"],
      ["sh_cxg", "折叠长消息"],
    ],
    [
      "Send",
      ["ja_jp", "送信"],
      ["ru_ru", "Отправить"],
      ["fr_fr", "Envoyer"],
      ["sh_cxg", "发送"],
    ],
    [
      "Settings",
      ["ja_jp", "設定"],
      ["ru_ru", "Настройки"],
      ["fr_fr", "Paramètres"],
      ["sh_cxg", "设置"],
    ],
  ],
  prompt: [
    [
      "Nickname:",
      ["ja_jp", "ユーザー名を入力してください："],
      ["ru_ru", "Пожалуйста, введите ваше имя пользователя:"],
      ["fr_fr", "Veuillez saisir votre nom d'utilisateur :"],
      ["sh_cxg", "哼哼~杂鱼哥哥快点告诉我你的名字啦♡"],
    ],
    [
      'Your nickname color:(press enter without inputing to reset; input "random" to set it to random)',
      [
        "ja_jp",
        'ユーザーネームの色: (エンターキーを押すとリセットされます。"random "と入力するとランダムになります。)',
      ],
      [
        "ru_ru",
        'Цвет вашего имени пользователя: (просто нажмите enter, чтобы сбросить, введите "random", чтобы установить случайный цвет).',
      ],
      [
        "fr_fr",
        'La couleur de votre nom d\'utilisateur : (appuyez sur la touche Entrée pour réinitialiser, tapez "aléatoire" pour rendre la couleur aléatoire).',
      ],
      ["sh_cxg", "嘻嘻，选个颜色玩玩吧，杂鱼哥哥♡"],
    ],
    [
      "Rejoin or join a Channel to make it go into effect.",
      [
        "ja_jp",
        "ユーザーネームの色を有効にするには、他のチャンネルに再入会または参加してください。",
      ],
      [
        "ru_ru",
        "Присоединитесь к другому каналу, чтобы цвет имени пользователя стал эффективным.",
      ],
      [
        "fr_fr",
        "Rejoignez ou rejoignez un autre canal pour que la couleur du nom d'utilisateur soit effective.",
      ],
      ["sh_cxg", "杂鱼哥哥跑一圈回来颜色就变啦~♡"],
    ],
    [
      /Suessfully set your auto nickname color to #([0-9A-Fa-f]{6})\. /,
      ["ja_jp", "ユーザーネームの色を#$1に設定できました。"],
      ["ru_ru", "Удалось установить цвет имени пользователя на #$1."],
      [
        "fr_fr",
        "La couleur du nom d'utilisateur a été réglée avec succès sur #$1.",
      ],
      ["sh_cxg", "哇~杂鱼哥哥的颜色变成#$1了呢，真好看♡"],
    ],
    [
      "Suessfully set your auto nickname color to random. ",
      ["ja_jp", "ユーザーネームの色をランダムに設定する。"],
      ["ru_ru", "Удалось установить случайный цвет имени пользователя."],
      [
        "fr_fr",
        "Réussir à régler la couleur du nom d'utilisateur sur aléatoire.",
      ],
      ["sh_cxg", "哥哥的颜色变成随机的啦，每次都有新惊喜呢♡"],
    ],
    [
      "Suessfully disabled autocolor.",
      ["ja_jp", "ユーザー名の色の自動変更を無効にすることに成功しました。"],
      [
        "ru_ru",
        "Удалось отключить автоматическое изменение цвета имени пользователя.",
      ],
      [
        "fr_fr",
        "Désactivation réussie du changement automatique de la couleur du nom d'utilisateur.",
      ],
      ["sh_cxg", "杂鱼哥哥不想变颜色啦？关掉它了♡"],
    ],
    [
      "Invalid color. Please give color in hex RGB code.",
      [
        "ja_jp",
        "カラー値が不正です。 16進数のRBGカラーコードを使用してください。",
      ],
      [
        "ru_ru",
        "Неправильное значение цвета. Пожалуйста, используйте шестнадцатеричный код цвета RBG.",
      ],
      [
        "fr_fr",
        "Valeur de couleur illégale. Veuillez utiliser le code de couleur hexadécimal RBG.",
      ],
      ["sh_cxg", "唔~这个颜色码好像不对哦，要用正确的才行啦，杂鱼哥哥♡"],
    ],
    [
      "Your template string:(use %m to replace your message content. press enter without inputing to reset.)",
      [
        "ja_jp",
        "あなたのテンプレート文字列：（メッセージ内容を%mに置き換えてください。 テンプレートを閉じるにはEnterキーを直接押してください)。",
      ],
      [
        "ru_ru",
        "Строка вашего шаблона: (Замените содержимое вашего сообщения на %m. Нажмите Enter, чтобы закрыть шаблон).",
      ],
      [
        "fr_fr",
        'Chaîne de votre modèle : (Remplacez le contenu de votre message par %m. Appuyez directement sur la touche "Entrée" pour fermer le modèle).',
      ],
      ["sh_cxg", "哥哥想怎么调皮地说话呀？用模板就可以啦♡"],
    ],
    [
      "Suessfully set template.",
      ["ja_jp", "テンプレートの設定に成功しました。"],
      ["ru_ru", "Успешно установлен шаблон."],
      ["fr_fr", "Le modèle a été défini avec succès."],
      ["sh_cxg", "耶~哥哥的模板设置好了，现在可以更顽皮地聊天啦♡"],
    ],
    [
      "Suessfully disabled template.",
      ["ja_jp", "テンプレートを正常に閉じました。"],
      ["ru_ru", "Успешно закрыт шаблон."],
      ["fr_fr", "Fermeture réussie du modèle."],
      ["sh_cxg", "模板关掉啦，哥哥是想认真聊天吗？♡"],
    ],
    [
      "Invalid template. ",
      ["ja_jp", "テンプレートが不正です。"],
      ["ru_ru", "Неправильный шаблон."],
      ["fr_fr", "Modèle illégal."],
      ["sh_cxg", "哎呀，这个模板不太对劲呢，杂鱼哥哥要不再试试？♡"],
    ],
    [
      " successfully copied to clipboard. ",
      ["ja_jp", "クリップボードに正常にコピーされました。"],
      ["ru_ru", "Успешно скопировано в буфер обмена."],
      ["fr_fr", "Copié avec succès dans le presse-papiers."],
      ["sh_cxg", "嘻嘻，哥哥的东西已经复制好啦，粘贴去吧♡"],
    ],
    [
      "JSON log",
      ["ja_jp", "JSONレコード"],
      ["ru_ru", "Запись JSON"],
      ["fr_fr", "Enregistrement JSON"],
      ["sh_cxg", "JSON记录"],
    ],
    [
      "Normal log",
      ["ja_jp", "通常のレコード"],
      ["ru_ru", "Обычные записи"],
      ["fr_fr", "Enregistrements ordinaires"],
      ["sh_cxg", "普通记录"],
    ],
    [
      "Please save it in case it may be lost.",
      ["ja_jp", "損失を避けるために、レコードを時間内に保存してください。"],
      ["ru_ru", "Пожалуйста, сохраните запись вовремя, чтобы избежать потерь."],
      [
        "fr_fr",
        "Veuillez sauvegarder l'enregistrement à temps pour éviter toute perte.",
      ],
      ["sh_cxg", "记得保存哦，不然哥哥辛苦打的字就没啦♡"],
    ],
    [
      "Failed to copy log to clipboard.",
      ["ja_jp", "コピーに失敗しました。"],
      ["ru_ru", "Копирование не удалось."],
      ["fr_fr", "La copie a échoué."],
      ["sh_cxg", "啊哦，复制没有成功，再试一次吧，哥哥♡"],
    ],
    [
      "target channel:(defaultly random channel generated by server)",
      [
        "ja_jp",
        "相手を招待したいチャンネル名: (デフォルトはランダムチャンネル)",
      ],
      [
        "ru_ru",
        "Название канала, на который вы хотите пригласить другого человека: (по умолчанию - случайный канал)",
      ],
      [
        "fr_fr",
        "Nom du canal sur lequel vous souhaitez inviter l'autre personne : (par défaut, canal aléatoire)",
      ],
      ["sh_cxg", "快告诉我，哥哥想把人家拉到哪个频道呀？♡"],
    ],
    [
      "Image host provided by Dataeverything team. All uploads on your own responsibility.",
      [
        "ja_jp",
        "このマップベッドはDataeverything Teamによって提供されています。 このマップベッドを使用して行われたすべての行動は自己責任となります。",
      ],
      [
        "ru_ru",
        "Карта предоставлена командой Dataeverything Team. За все действия, совершенные с использованием этой карты, вы несете ответственность сами.",
      ],
      [
        "fr_fr",
        "Le lit de carte est fourni par l'équipe de Dataeverything. Toutes les actions effectuées en utilisant ce mapbed sont de votre propre responsabilité.",
      ],
      ["sh_cxg", "哼哼，用图床要自己负责哦，杂鱼哥哥♡"],
    ],
    [
      "Warning, please verify this is where you want to go: ",
      [
        "ja_jp",
        "警告、以下のリンクがあなたが行きたいものであることを確認してください：",
      ],
      [
        "ru_ru",
        "Внимание, пожалуйста, убедитесь, что ссылка ниже - это та, по которой вы хотите перейти:",
      ],
      [
        "fr_fr",
        "Attention, assurez-vous que le lien ci-dessous est bien celui que vous souhaitez utiliser :",
      ],
      ["sh_cxg", "哥哥，点链接前要检查清楚哦，别走错地方了呀♡"],
    ],
    [
      "Automatically converted into upper case by client.",
      ["ja_jp", "クライアントは自動的に大文字に変換されています。"],
      ["ru_ru", "Клиент был автоматически преобразован в верхний регистр."],
      ["fr_fr", "Le client a été automatiquement converti en majuscules."],
      ["sh_cxg", "看哦，哥哥的字都变成大写啦，是不是感觉自己变强了呀♡"],
    ],
    [
      "Please input the tunnel URL.(IF YOU DON'T KNOW WHAT THIS DOES, CLICK CANCEL.)",
      ["ja_jp", "トンネルのURLを入力してください。"],
      [
        "ru_ru",
        'Пожалуйста, введите URL туннеля. (Если вы не знаете, что это значит, нажмите "Отмена").',
      ],
      [
        "fr_fr",
        "Veuillez entrer l'URL du tunnel (si vous ne savez pas ce que cela fait, cliquez sur annuler).",
      ],
      ["sh_cxg", "哥哥，要输入隧道的网址哦，不懂的话就点取消吧♡"],
    ],
    [
      "Invaild tunnel URL.",
      ["ja_jp", "不正なトンネルURLです。"],
      ["ru_ru", "Нелегальный URL-адрес туннеля."],
      ["fr_fr", "Illegal tunnel URL."],
      ["sh_cxg", "哎呀，这个隧道网址好像不对呢，哥哥再检查一下吧♡"],
    ],
    [
      "The LaTeX included in your text may cause you got kicked, rejected sending.",
      [
        "ja_jp",
        "あなたのテキストには、キックアウトされる可能性のあるLaTeXの特殊な数式が含まれており、送信が中断されています。",
      ],
      [
        "ru_ru",
        "Ваш текст содержит части специальных формул LaTeX, из-за которых вас могут выкинуть, и отправка была прервана.",
      ],
      [
        "fr_fr",
        "Votre texte contient des parties de formules spéciales de LaTeX qui pourraient vous faire expulser, et l'envoi a été interrompu.",
      ],
      ["sh_cxg", "哥哥，你写的东西有点危险哦，我帮你停了下来，安全第一嘛♡"],
    ],
  ],
  system: [
    [
      "Users online: ",
      ["ja_jp", "オンラインユーザー: "],
      ["ru_ru", "Онлайн-пользователи:"],
      ["fr_fr", "Utilisateurs en ligne :"],
      ["sh_cxg", "杂鱼们~♡："],
    ],
    [
      "Thanks for using hackchat++ client! Source at: ",
      [
        "ja_jp",
        "hackchat++をご利用いただきありがとうございます！ オープンソースになりました：",
      ],
      [
        "ru_ru",
        "Спасибо за использование hackchat++! Открытый исходный код в деле:",
      ],
      [
        "fr_fr",
        "Merci d'utiliser hackchat++ ! L'open source est à l'honneur :",
      ],
      ["sh_cxg", "哼哼，用hackchat++还不错嘛~开源在这呢："],
    ],
    [
      /^([a-zA-Z0-9_]{1,24}) joined$/,
      ["ja_jp", "$1がチャットルームに参加"],
      ["ru_ru", "$1 присоединился к чату"],
      ["fr_fr", "1$ a rejoint le salon de discussion"],
      ["sh_cxg", "唔\\~ 一条叫 $1 的杂鱼来了哦\\~"],
    ],
    [
      /^([a-zA-Z0-9_]{1,24}) left$/,
      ["ja_jp", "$1がチャットルームを退室しました。"],
      ["ru_ru", "$1 покинул чат"],
      ["fr_fr", "$1 a quitté le salon de discussion"],
      ["sh_cxg", "唔\\~ 一条叫 $1 的杂鱼溜走啦\\~"],
    ],
    [
      "You cancelled joining. Press enter at the input field to reconnect.",
      [
        "ja_jp",
        "参加をキャンセルしました。 再参加するには入力ボックスのエンターキーを押してください。",
      ],
      [
        "ru_ru",
        "Вы отменили присоединение. Нажмите Enter в поле ввода, чтобы присоединиться снова.",
      ],
      [
        "fr_fr",
        "Vous avez annulé votre inscription. Appuyez sur la touche Entrée de la boîte de saisie pour rejoindre la salle de chat.",
      ],
      ["sh_cxg", "唔\\~杂鱼哥哥要走了吗\\~ 在输入框上按回车可以重新加入哟♡\\~"],
    ],
    [
      "Server disconnected. ",
      ["ja_jp", "接続を切断しました！"],
      ["ru_ru", "Соединение прервано!"],
      ["fr_fr", "La connexion a été interrompue !"],
      ["sh_cxg", "杂鱼~掉线啦！♡"],
    ],
    [
      "Attempting to reconnect. . .",
      ["ja_jp", "再接続を試みています。"],
      ["ru_ru", "Пытаюсь восстановить соединение ......"],
      ["fr_fr", "Essai de reconnexion ......"],
      ["sh_cxg", "嘻嘻~杂鱼\\~正在尝试重连中哦\\~♡"],
    ],
    [
      "Failed to connect to server. When you think there is chance to succeed in reconnecting, press enter at the input field to reconnect.",
      [
        "ja_jp",
        "サーバーへの接続に失敗しました。 再接続したい場合は、入力ボックスのエンターキーを押してください。",
      ],
      [
        "ru_ru",
        "Соединение с сервером не удалось. Если вы хотите восстановить соединение, нажмите Enter в поле ввода, чтобы сделать это.",
      ],
      [
        "fr_fr",
        "La connexion au serveur a échoué. Si vous voulez vous reconnecter, appuyez sur la touche Entrée de la boîte de saisie pour le faire.",
      ],
      [
        "sh_cxg",
        "哼哼~杂鱼哥哥\\~连接到服务器失败了呢。如果你想重连，就在输入框上按回车吧\\~♡",
      ],
    ],
    [
      /You may be kicked or moved to this channel by force to channel \?(.+) \. Unable to get full user list\. /,
      [
        "ja_jp",
        "キックされたか、強制的にチャンネルを移動させられた可能性があります。 $1 . 完全なユーザーリストを取得できません。",
      ],
      [
        "ru_ru",
        "Возможно, вас выгнали или принудительно переместили на канал ? $1 . Невозможно получить полный список пользователей.",
      ],
      [
        "fr_fr",
        "Vous avez peut-être été expulsé ou déplacé de force vers le canal ? $1 . Impossible d'obtenir la liste complète des utilisateurs.",
      ],
      ["sh_cxg", "唔~杂鱼被踢出了频道了呢\\~ 无法获取完整用户列表呢\\~♡"],
    ],
    [
      /Unexpected Channel \?(.+) \. You may be kicked or moved to this channel by force\. /,
      [
        "ja_jp",
        "例外: 現在チャンネル ? $1 . 追い出されたか、強制移動された可能性があります。",
      ],
      [
        "ru_ru",
        "Исключение: Вы сейчас находитесь на канале ? $1 . Возможно, вас выгнали или принудительно переместили.",
      ],
      [
        "fr_fr",
        "Exception : Vous êtes maintenant sur le canal ? $1 . Vous avez peut-être été expulsé ou déplacé de force.",
      ],
      [
        "sh_cxg",
        "唔~杂鱼哥哥怎么跑到 ?$1 来了\\~ 杂鱼哥哥是不是被踢出了~或者被强制移动了呢\\~♡",
      ],
    ],
    [
      /Unexpected Channel \?(.+) \. You may be locked out from \?(.+) \. You may also be kicked or moved to this channel by force\. /,
      [
        "ja_jp",
        "例外: 現在チャンネル ? $1 . にいる可能性がある。 $2 が部屋をロックし、あなたを ? $1 . また、あなたが追い出されたか、引っ越しを余儀なくされた可能性もある。",
      ],
      [
        "ru_ru",
        "Исключение: Вы сейчас на канале ? $1 . Возможно, что ? $2 заблокировал комнату и заблокировал вас на канале ? $1 . Также может быть, что вас выгнали или заставили переехать.",
      ],
      [
        "fr_fr",
        "Exception : Vous êtes maintenant dans le canal ? $1 . Il est possible que ? 2 $ ait verrouillé la pièce et vous ait bloqué sur ? $1 . Il se peut également que vous ayez été mis à la porte ou contraint de déménager.",
      ],
      [
        "sh_cxg",
        "唔~杂鱼哥哥怎么跑到 ?$1 来了\\~ ?$2 锁房了\\~ 杂鱼被屏蔽在了 ?$1 呢\\~ 或者说\\~ 杂鱼被踢出了呢\\~ 或者被强制移动了呢\\~ 嘻嘻\\~ 杂鱼进不去了呢\\~♡",
      ],
    ],
    [
      /You are now at \?(.+) \. A mod has moved you、. /,
      ["ja_jp", "あなたは今 $1. $1. 管理者があなたを移動させました。"],
      [
        "ru_ru",
        "Сейчас вы находитесь на $1. $1. Администратор переместил вас.",
      ],
      [
        "fr_fr",
        "Vous êtes maintenant à 1 $. $1. Un administrateur vous a déplacé.",
      ],
      ["sh_cxg", "嘻嘻~杂鱼哥哥在 ?$1 了呢\\~ 杂鱼被移动了呢\\~♡"],
    ],
    [
      "Please refresh to apply language. Multi language is in test and not perfect yet. ",
      [
        "ja_jp",
        "言語設定を適用するには更新してください。 多言語サポートは現在テスト中であり、完全ではありません。",
      ],
      [
        "ru_ru",
        "Пожалуйста, обновите страницу, чтобы применить языковые настройки. Поддержка нескольких языков находится в стадии тестирования и не является совершенной.",
      ],
      [
        "fr_fr",
        "Veuillez actualiser pour appliquer les paramètres linguistiques. La prise en charge multilingue est actuellement à l'essai et n'est pas parfaite.",
      ],
      ["sh_cxg", "耶~哥哥的语言设置好了，刷新后就可以更顽皮地聊天啦♡"],
    ],
    [
      /Ignored nick ([a-zA-Z0-9_]{1,24})\./,
      ["ja_jp", "メッセージ$1は無視されました。"],
      ["ru_ru", "Сообщение $1 было проигнорировано."],
      ["fr_fr", "Le message $1 a été ignoré."],
      ["sh_cxg", "唔~ 哥哥不喜欢 $1 吗? 人家帮你屏蔽了TA哦\\~♡"],
    ],
    [
      /Cancelled ignoring nick ([a-zA-Z0-9_]{1,24})\./,
      ["ja_jp", "メッセージ$1の無視はキャンセルされました。"],
      ["ru_ru", "Игнорирование сообщения $1 было отменено."],
      ["fr_fr", "Le message $1 ignoré a été annulé."],
      ["sh_cxg", "唔~ 哥哥解除了 $1 的屏蔽了呢\\~♡ "],
    ],
    [
      /^Kicked ([a-zA-Z0-9_]{1,24})$/,
      ["ja_jp", "キックされた $1"],
      ["ru_ru", "Кикнул $1"],
      ["fr_fr", "Botté 1$."],
      ["sh_cxg", "唔~ 一条叫 $1 的杂鱼在被踢了哦\\~♡"],
    ],
    [
      /^Banned ([a-zA-Z0-9_]{1,24})$/,
      ["ja_jp", "ブロックされた $1"],
      ["ru_ru", "Заблокирован $1"],
      ["fr_fr", "Bloqué 1 $."],
      ["sh_cxg", "唔~ 一条叫 $1 的杂鱼在做不好的事情被封禁了哦\\~♡"],
    ],
    [
      "Sucessfully added tunnel.",
      ["ja_jp", "トンネルの追加に成功しました。"],
      ["ru_ru", "Успешно добавлен туннель."],
      ["fr_fr", "Ajout d'un tunnel réussi."],
      ["sh_cxg", "杂鱼哥哥的隧道添加好了，杂鱼~♡"],
    ],
    [
      "Sucessfully removed tunnel.",
      ["ja_jp", "トンネルの削除に成功しました。"],
      ["ru_ru", "Успешно удален туннель."],
      ["fr_fr", "Suppression réussie d'un tunnel."],
      ["sh_cxg", "杂鱼哥哥不想要隧道啦？删除了呢~♡"],
    ],
    [
      "Sucessfully changed tunnel, refresh to apply the changes.",
      ["ja_jp", "トンネル設定の変更に成功しました。"],
      [
        "ru_ru",
        "Успешно изменены настройки туннеля, обновите, чтобы применить изменения.",
      ],
      [
        "fr_fr",
        "Modification réussie des paramètres du tunnel, actualiser pour appliquer les changements.",
      ],
      [
        "sh_cxg",
        "耶~ 哥哥成功更改了隧道设置哦\\~ 杂鱼\\~♡ 刷新来应用更改哦\\~♡",
      ],
    ],
  ],
  info: [
    [
      /^You whispered to @([a-zA-Z0-9_]{1,24}): /,
      ["ja_jp", "あなたは @$1 に個人的に話しかけます："],
      ["ru_ru", "Вы разговариваете с @$1 в приватном режиме:"],
      ["fr_fr", "Vous parlez en privé à @$1 :"],
      ["sh_cxg", "哎~ $1，你看看这样行吗："],
    ],
    [
      /^([a-zA-Z0-9_]{1,24}) whispered: /,
      ["ja_jp", "$1 があなたに個人的にチャットします："],
      ["ru_ru", "$1 общается с вами в приватном чате:"],
      ["fr_fr", "$1 discute en privé avec vous :"],
      ["sh_cxg", "$1 私聊你呢："],
    ],
    [
      /^You invited ([a-zA-Z0-9_]{1,24}) to /,
      ["ja_jp", "あなたは$1をあなたに招待します。"],
      ["ru_ru", "Вы приглашаете $1 на"],
      ["fr_fr", "Vous invitez $1 à"],
      ["sh_cxg", "哼哼，$1 竟然私信我："],
    ],
    [
      /^([a-zA-Z0-9_]{1,24}) invited you to /,
      ["ja_jp", "$1があなたを招待します。"],
      ["ru_ru", "$1 приглашает вас"],
      ["fr_fr", "$1 vous invite à"],
      ["sh_cxg", "$1 邀请你来了："],
    ],
    [
      "Nickname must consist of up to 24 letters, numbers, and underscores",
      [
        "ja_jp",
        "ユーザーネームは24文字以内で、アルファベット、数字、アンダースコアのみです。",
      ],
      [
        "ru_ru",
        "Имя пользователя может содержать не более 24 символов, только буквы, цифры и символы подчеркивания.",
      ],
      [
        "fr_fr",
        "Le nom d'utilisateur ne peut contenir plus de 24 caractères, uniquement des lettres, des chiffres et des traits de soulignement.",
      ],
      ["sh_cxg", "你邀请杂鱼$1 进来："],
    ],
    [
      "Nickname taken",
      ["ja_jp", "このユーザー名はすでに使われています。"],
      ["ru_ru", "Это имя пользователя уже занято"],
      ["fr_fr", "Ce nom d'utilisateur est déjà pris"],
      ["sh_cxg", "嘤嘤，只能用24个字母、数字和下划线哦~"],
    ],
    [
      "You have been denied access to that channel and have been moved somewhere else. Retry later or wait for a mod to move you.",
      [
        "ja_jp",
        "システムによりチャンネルに参加できず、他のチャンネルに移動されました。 後で再試行するか、管理者による移動をお待ちください。",
      ],
      [
        "ru_ru",
        "Система не позволила вам присоединиться к каналу и переместила вас в другое место. Пожалуйста, повторите попытку позже или дождитесь, пока администратор переместит вас.",
      ],
      [
        "fr_fr",
        "Le système vous a empêché de rejoindre le canal et vous a déplacé ailleurs. Veuillez réessayer plus tard ou attendre qu'un administrateur vous déplace.",
      ],
      ["sh_cxg", "杂鱼~ 这个名字已经被人抢先啦\\~"],
    ],
    [
      "Enter the following to join (case-sensitive):",
      [
        "ja_jp",
        "次の認証コードを入力してください: (大文字と小文字を区別します)",
      ],
      [
        "ru_ru",
        "Пожалуйста, введите следующий проверочный код: (с учетом регистра)",
      ],
      [
        "fr_fr",
        "Veuillez saisir le code de vérification suivant : (sensible à la casse)",
      ],
      [
        "sh_cxg",
        "系统不让你进这个频道，把你挪到别的地方去啦。等等再试试或者等管理员解救你。",
      ],
    ],
    [
      "You are joining channels too fast. Wait a moment and try again.",
      ["ja_jp", "チャンネルへの参加が早すぎました。"],
      [
        "ru_ru",
        "Вы присоединились слишком быстро, пожалуйста, повторите попытку позже.",
      ],
      [
        "fr_fr",
        "Vous avez rejoint le canal trop rapidement, veuillez réessayer plus tard.",
      ],
      ["sh_cxg", "快来输这个验证码：（大小写都要对哦）"],
    ],
    [
      "You are sending too much text. Wait a moment and try again.\nPress the up arrow key to restore your last message.",
      [
        "ja_jp",
        "メッセージを送りすぎました。 後でもう一度お試しください。 上矢印キーを押して、送信されなかったメッセージを復元してください。",
      ],
      [
        "ru_ru",
        "Вы отправили слишком много сообщений. Пожалуйста, повторите попытку позже. Нажмите клавишу со стрелкой вверх, чтобы восстановить не отправленные сообщения.",
      ],
      [
        "fr_fr",
        "Vous avez envoyé trop de messages. Veuillez réessayer plus tard. Appuyez sur la flèche du haut pour récupérer les messages qui n'ont pas été envoyés.",
      ],
      ["sh_cxg", "你加入得太快啦，稍事休息再试试吧。"],
    ],
    [
      "You are changing colors too fast. Wait a moment before trying again.",
      ["ja_jp", "色を変更するのが早すぎました。"],
      [
        "ru_ru",
        "Вы слишком быстро сменили цвет, пожалуйста, повторите попытку позже.",
      ],
      [
        "fr_fr",
        "Vous avez changé de couleur trop rapidement, veuillez réessayer plus tard.",
      ],
      [
        "sh_cxg",
        "你发消息也太勤快啦，稍事休息一下再试试。按上键找回未发出去的消息哦。",
      ],
    ],
    [
      "You are being rate-limited or blocked.",
      ["ja_jp", "あなたは一時的に制限されているか、禁止されています。"],
      ["ru_ru", "Вы временно ограничены или заблокированы."],
      ["fr_fr", "Vous êtes temporairement limité ou banni."],
      ["sh_cxg", "你换颜色也太频繁啦，稍事休息再试试吧。"],
    ],
    [
      "Wait a moment and try again.",
      ["ja_jp", "後で再試行してください。"],
      ["ru_ru", "Пожалуйста, повторите попытку позже."],
      ["fr_fr", "Veuillez réessayer plus tard."],
      ["sh_cxg", "你被临时限制了，或者被封号了哦。请稍后再试试。"],
    ],
    [
      /^([a-zA-Z0-9_]{1,24}) is now ([a-zA-Z0-9_]{1,24})$/,
      ["ja_jp", "$1が$2にリネームされました。"],
      ["ru_ru", "$1 переименован в $2"],
      ["fr_fr", "$1 renommé en $2"],
      ["sh_cxg", "请稍后再试试哦。"],
    ],
    [
      "All commands:",
      ["ja_jp", "すべてのコマンド"],
      ["ru_ru", "Все команды:"],
      ["fr_fr", "Toutes les commandes :"],
      ["sh_cxg", "杂鱼$1 改名成了 $2 啦"],
    ],
    [
      "Category:",
      ["ja_jp", "分類"],
      ["ru_ru", "Классификация:"],
      ["fr_fr", "Classification :"],
      ["sh_cxg", "全部杂鱼の命令："],
    ],
    [
      "Name:",
      ["ja_jp", "名前"],
      ["ru_ru", "Имя:"],
      ["fr_fr", "Nom :"],
      ["sh_cxg", "杂鱼の分类："],
    ],
    [
      "Admin:",
      ["ja_jp", "ウェブマスター"],
      ["ru_ru", "Вебмастер:"],
      ["fr_fr", "Webmaster :"],
      ["sh_cxg", "杂鱼の名字："],
    ],
    [
      "Core:",
      ["ja_jp", "コア"],
      ["ru_ru", "Ядро:"],
      ["fr_fr", "Core :"],
      ["sh_cxg", "杂鱼の站长："],
    ],
    [
      "Internal:",
      ["ja_jp", "内部的な"],
      ["ru_ru", "Внутренний:"],
      ["fr_fr", "Interne :"],
      ["sh_cxg", "杂鱼の核心："],
    ],
    [
      "Mod:",
      ["ja_jp", "管理者"],
      ["ru_ru", "Администратор:"],
      ["fr_fr", "Administrateur :"],
      ["sh_cxg", "杂鱼の内部："],
    ],
    [
      "For specific help on certain commands, use either:\nText: `/help <command name>`\nAPI: `{cmd: 'help', command: '<command name>'}`",
      [
        "ja_jp",
        "特定のコマンドに関するヘルプを得るには、以下のいずれかの方法を使うことができる：",
      ],
      [
        "ru_ru",
        "Чтобы получить справку по конкретной команде, вы можете воспользоваться одним из следующих способов:",
      ],
      [
        "fr_fr",
        "Pour obtenir de l'aide sur une commande spécifique, vous pouvez utiliser l'une des méthodes suivantes :",
      ],
      ["sh_cxg", "杂鱼の管理员："],
    ],
    [
      "Unknown command: ",
      ["ja_jp", "テキスト: `/help <コマンド名>`"],
      ["ru_ru", "Текст: `/help <имя команды>`"],
      ["fr_fr", "Texte : `/help <nom de la commande>`"],
      ["sh_cxg", "要得到关于杂鱼の命令的帮助，你可以使用以下任一方法："],
    ],
    [
      "Unknown command",
      ["ja_jp", "API: `{cmd: 'help'}, command: '<コマンド名>'`."],
      ["ru_ru", "API: `{cmd: 'help'}, command: '<имя команды>'`."],
      ["fr_fr", "API : `{cmd : 'help'}, command : '<nom de la commande>'`"],
      ["sh_cxg", "文字：`/help <杂鱼の命令名字>`"],
    ],
    [
      / command:$/m,
      ["ja_jp", "不明なコマンド"],
      ["ru_ru", "Неизвестная команда:"],
      ["fr_fr", "Commande inconnue :"],
      ["sh_cxg", "API：`{cmd: 'help'}, command: '<杂鱼の命令名字>'`"],
    ],
    [
      "**Name:**",
      ["ja_jp", "不明なコマンド"],
      ["ru_ru", "Неизвестная команда"],
      ["fr_fr", "Commande inconnue"],
      ["sh_cxg", "杂鱼の未知命令："],
    ],
    [
      "**Aliases:**",
      ["ja_jp", "コマンド"],
      ["ru_ru", "Команда:"],
      ["fr_fr", "Commande inconnue : Commande inconnue"],
      ["sh_cxg", "杂鱼の未知命令"],
    ],
    [
      "|None|",
      ["ja_jp", "名前: **別名: **"],
      ["ru_ru", "**Имя:**"],
      ["fr_fr", "**Nom:**"],
      ["sh_cxg", "命令："],
    ],
    [
      "|Admin|",
      ["ja_jp", "**エイリアス: **"],
      ["ru_ru", "**alias: **"],
      ["fr_fr", "**alias : **"],
      ["sh_cxg", "**杂鱼の名字：**"],
    ],
    [
      "|Core|",
      ["ja_jp", "|None|"],
      ["ru_ru", "|None|"],
      ["fr_fr", "|None|"],
      ["sh_cxg", "**杂鱼の别名：**"],
    ],
    [
      "|Internal|",
      ["ja_jp", "|ウェブマスター"],
      ["ru_ru", "|Webmaster|"],
      ["fr_fr", "|Webmaster|"],
      ["sh_cxg", "|无|"],
    ],
    [
      "|Mod|",
      ["ja_jp", "|コア"],
      ["ru_ru", "|core|"],
      ["fr_fr", "|core|"],
      ["sh_cxg", "|杂鱼の站长|"],
    ],
    [
      "**Description:**",
      ["ja_jp", "|内部|｜管理者"],
      ["ru_ru", "|Internal|"],
      ["fr_fr", "|Interne|"],
      ["sh_cxg", "|杂鱼の核心|"],
    ],
    [
      "**Usage:** ",
      ["ja_jp", "|管理者"],
      ["ru_ru", "|Administrator|"],
      ["fr_fr", "|Administrateur|"],
      ["sh_cxg", "|杂鱼の内部|"],
    ],
    [
      "API: ",
      ["ja_jp", "**説明:**"],
      ["ru_ru", "**Описание:**"],
      ["fr_fr", "**Description:**"],
      ["sh_cxg", "|杂鱼の管理员|"],
    ],
    [
      "Text: ",
      ["ja_jp", "**使用法:**"],
      ["ru_ru", "**Использование:**"],
      ["fr_fr", "**Utilisation:**"],
      ["sh_cxg", "**杂鱼の描述：**"],
    ],
    [
      "**Required Parameters:**",
      ["ja_jp", "API："],
      ["ru_ru", "API:"],
      ["fr_fr", "API :"],
      ["sh_cxg", "**杂鱼の用法：**"],
    ],
  ],
  home: [
    [
      "Welcome to hack.chat, a minimal, distraction-free chat application.",
      [
        "ja_jp",
        "hack.chatへようこそ！hack.chatは、ミニマリストの気晴らしのチャットルームです。",
      ],
      [
        "ru_ru",
        "Добро пожаловать в hack.chat, минималистичный, не отвлекающий чат.",
      ],
      [
        "fr_fr",
        "Bienvenue sur hack.chat, le salon de discussion minimaliste et sans distraction.",
      ],
      ["sh_cxg", "呐呐~欢迎光临hack.chat，这里是最可爱、最不打扰的聊天室哦♡"],
    ],
    [
      "You are now experiencing hack.chat with a tweaked client: hackchat\\+\\+. Official hack.chat client is at: https://hack.chat.",
      [
        "ja_jp",
        "hack.chatを体験するには、刷新されたクライアント、hackchat++を使用しています。公式クライアントはこちら：https://hack.chat。",
      ],
      [
        "ru_ru",
        "Вы используете обновленный клиент, hackchat++, для работы с hack.chat. Официальный клиент находится здесь: https://hack.chat.",
      ],
      [
        "fr_fr",
        "Vous utilisez un nouveau client, hackchat++, pour expérimenter hack.chat. Le client officiel est ici : https://hack.chat.",
      ],
      [
        "sh_cxg",
        "杂鱼哥哥，你现在使用的是一个改版客户端，hackchat++，来感受hack.chat的魅力吧~♡ 官方客户端在这里哦：https://hack.chat。",
      ],
    ],
    [
      "Channels are created, joined and shared with the url, create your own channel by changing the text after the question mark. Example: ",
      [
        "ja_jp",
        "チャンネルの作成、参加、共有はURLで行います。 クエスチョンマークの後を変更することで、独自のチャンネルを作成できます。 例",
      ],
      [
        "ru_ru",
        "Каналы создаются, к ним присоединяются и делятся ими через URL. Изменив то, что идет после вопросительного знака, вы можете создать свой собственный канал. Пример:",
      ],
      [
        "fr_fr",
        "Les canaux sont créés, rejoints et partagés via des URL. En changeant ce qui vient après le point d'interrogation, vous pouvez créer votre propre canal. Exemple :",
      ],
      [
        "sh_cxg",
        "频道是通过网址创建、加入和分享的呢~只需改变问号后面的内容，就能轻松创建属于自己的频道咯\\~♡ 比如说：",
      ],
    ],
    [
      "There are no channel lists *for normal users*, so a secret channel name can be used for private discussions.",
      [
        "ja_jp",
        "一般に公開*されているチャンネルのリストはないので、秘密のチャンネル名をプライベートなコミュニケーションに使うことができます。",
      ],
      [
        "ru_ru",
        "Не существует списка каналов, которые *общедоступны широкой публике*, поэтому для приватного общения можно использовать секретное имя канала.",
      ],
      [
        "fr_fr",
        "Il n'existe pas de liste de canaux *accessibles au grand public*, c'est pourquoi un nom de canal secret peut être utilisé pour les communications privées.",
      ],
      [
        "sh_cxg",
        "没有*普通人可见*的频道列表，所以一个神秘的频道名可以用于私密交流哦~♡",
      ],
    ],
    [
      "Here are some pre-made channels you can join: ",
      ["ja_jp", "以下はあなたが参加できる公開チャンネルです："],
      [
        "ru_ru",
        "Вот некоторые общедоступные каналы, к которым вы можете присоединиться:",
      ],
      ["fr_fr", "Voici quelques canaux publics que vous pouvez rejoindre :"],
      ["sh_cxg", "哎呀~这里有一些你可以加入的公开频道哦："],
    ],
    [
      "(Online counts disabled)",
      ["ja_jp", "(オンライン人数表示オフ）"],
      ["ru_ru", "(Отображение количества людей в сети отключено)"],
      ["fr_fr", "(L'affichage du nombre de personnes en ligne est désactivé)"],
      ["sh_cxg", "（在线人数显示已关闭）"],
    ],
    [
      "(Getting online counts...)",
      ["ja_jp", "(オンライン人数取得中)"],
      [
        "ru_ru",
        "(Получение информации о количестве людей в сети на сайте ......)",
      ],
      ["fr_fr", "(Obtenir le nombre de personnes en ligne à l'adresse ......)"],
      ["sh_cxg", "（正在获取在线人数……）"],
    ],
    [
      /\((\d+) users online, /,
      [
        "ja_jp",
        "(このホームページに入ると、オンラインユーザー数が1ドルになります。",
      ],
      [
        "ru_ru",
        "(Когда вы заходите на эту домашнюю страницу, количество пользователей в сети составляет $1.",
      ],
      [
        "fr_fr",
        "(Lorsque vous accédez à cette page d'accueil, le nombre d'utilisateurs en ligne est de 1 $.",
      ],
      ["sh_cxg", "（你进入首页时，全站在线用户数为$1，全站频道数为$1）"],
    ],
    [
      /(\d+) channels existing when you enter this page\)/,
      [
        "ja_jp",
        "(このホームページに入ると、オンライン・ユーザー数は1ドル、サイト全体のチャンネル数は1ドルです。）",
      ],
      [
        "ru_ru",
        "(Когда вы заходите на эту домашнюю страницу, количество пользователей онлайн составляет $1, а количество каналов на всем сайте - $1)",
      ],
      [
        "fr_fr",
        "(Lorsque vous accédez à cette page d'accueil, le nombre d'utilisateurs en ligne est de 1 $ et le nombre de chaînes sur l'ensemble du site est de 1 $).",
      ],
      ["sh_cxg", "让我帮你找一个随机频道吧："],
    ],
    [
      "And here's a random one generated just for you: ",
      ["ja_jp", "これはあなたのためのランダムなチャンネルです："],
      ["ru_ru", "Это случайный канал для вас:"],
      ["fr_fr", "Il s'agit d'une chaîne aléatoire pour vous :"],
      ["sh_cxg", "排版："],
    ],
    [
      "Formatting:",
      ["ja_jp", "タイポグラフィ："],
      ["ru_ru", "Типография:"],
      ["fr_fr", "Typographie :"],
      ["sh_cxg", "注意喔~不要直接发源代码而不用代码块哦！"],
    ],
    [
      "Notice: Dont send raw source code without using a code block!",
      [
        "ja_jp",
        "注意：コード・ブロックなしで直接ソース・コードを送らないでください！",
      ],
      [
        "ru_ru",
        "Примечание: Не отправляйте исходный код напрямую без блока кода!",
      ],
      [
        "fr_fr",
        "Note : N'envoyez pas le code source directement sans bloc de code !",
      ],
      [
        "sh_cxg",
        "用美元符号包围行内公式： $\\zeta(2) = \\pi^2/6$，用两个美元符号包裹块级公式。",
      ],
    ],
    [
      "Surround LaTeX with a dollar sign for inline style $\\zeta(2) = \\pi^2/6$, and two dollars for display. ",
      [
        "ja_jp",
        "Wrap in-line formula with dollar signs: $zeta(2) = \\pi^2/6$, wrap block-level formulas with two dollar signs.",
      ],
      [
        "ru_ru",
        "Оберните строчные формулы знаками доллара: $\\zeta(2) = \\pi^2/6$, оберните формулы на уровне блока двумя знаками доллара.",
      ],
      [
        "fr_fr",
        "Enveloppez les formules en ligne avec des signes de dollar : $\\zeta(2) = \\pi^2/6$, enveloppez les formules au niveau du bloc avec deux signes de dollar.",
      ],
      ["sh_cxg", "像这样包裹代码可以获得语法高亮效果哦~♡："],
    ],
    [
      "For syntax highlight, wrap the code like: \\`\\`\\`<language> <the code>\\`\\`\\` where <language> is any known programming language.",
      [
        "ja_jp",
        "シンタックスハイライトを表示するには、コードをこのようにラップする：\\`\\`\\`<プログラミング言語名> <コード>\\`\\`\\`",
      ],
      [
        "ru_ru",
        "Чтобы получить подсветку синтаксиса, оберните код следующим образом:\\`\\`\\` <Код языка программирования> <Код> \\`\\`\\`",
      ],
      [
        "fr_fr",
        "Enveloppez le code comme suit pour obtenir la coloration syntaxique : \\`\\`\\`<Code du langage de programmation> <Code>\\`\\`\\`",
      ],
      ["sh_cxg", "```<编程语言名称> <代码>```"],
    ],
    [
      "Current Github: ",
      ["ja_jp", "現在のGithubリポジトリ："],
      ["ru_ru", "Текущий репозиторий Github:"],
      ["fr_fr", "Dépôt Github actuel :"],
      ["sh_cxg", "当前Github仓库："],
    ],
    [
      "Legacy GitHub: ",
      ["ja_jp", "古いGithubリポジトリ"],
      ["ru_ru", "Старые репозитории Github:"],
      ["fr_fr", "Anciens dépôts Github :"],
      ["sh_cxg", "旧版Github仓库："],
    ],
    [
      "Bots, Android clients, desktop clients, browser extensions, docker images, programming libraries, server modules and more:",
      [
        "ja_jp",
        "ボット、Androidクライアント、デスクトップクライアント、ブラウザ拡張機能、Dockerイメージ、プログラミングライブラリ、サーバーサイドモジュールなど：",
      ],
      [
        "ru_ru",
        "Боты, Android-клиент, десктоп-клиент, браузерные расширения, образы Docker, библиотеки программирования, серверные модули и многое другое:",
      ],
      [
        "fr_fr",
        "Bots, client Android, client de bureau, extensions de navigateur, images Docker, bibliothèques de programmation, modules côté serveur et plus encore :",
      ],
      [
        "sh_cxg",
        "机器人、安卓客户端、桌面客户端、浏览器扩展、Docker映像、编程库、服务端模块等等，应有尽有哦~♡",
      ],
    ],
    [
      "Server and web client released under the WTFPL and MIT open source license.",
      [
        "ja_jp",
        "サーバーサイドとウェブクライアントは、それぞれWTFPLとMITプロトコルの下でオープンソースです。",
      ],
      [
        "ru_ru",
        "Серверная часть и веб-клиент имеют открытый исходный код под протоколами WTFPL и MIT соответственно.",
      ],
      [
        "fr_fr",
        "Le côté serveur et le client web sont open source sous les protocoles WTFPL et MIT respectivement.",
      ],
      ["sh_cxg", "服务端和网页客户端分别采用WTFPL和MIT协议开源。"],
    ],
    [
      "No message history is retained on the hack.chat server, but in certain channels there may be bots made by users which record messages.",
      [
        "ja_jp",
        "hack.chatサーバにはチャットは保存されませんが、チャンネルによってはユーザが作ったボットがチャットを保存することがあります。",
      ],
      [
        "ru_ru",
        "На серверах hack.chat чаты не сохраняются, но на некоторых каналах могут быть пользовательские боты, которые сохраняют чаты.",
      ],
      [
        "fr_fr",
        "Aucun chat n'est sauvegardé sur les serveurs hack.chat, mais sur certains canaux, il peut y avoir des bots créés par les utilisateurs qui sauvegardent les chats.",
      ],
      [
        "sh_cxg",
        "在hack.chat服务器上并没有保存聊天记录，但某些频道可能有用户制作的机器人保存聊天记录。",
      ],
    ],
    [
      "Github of hackchat++ (aka hackchat-client-plus): ",
      ["ja_jp", "hackchat++ (別名 hackchat client plus) の Github："],
      ["ru_ru", "Github для hackchat++ (он же hackchat client plus):"],
      ["fr_fr", "Github pour hackchat++ (aka hackchat client plus) :"],
      ["sh_cxg", "hackchat++（也称为hackchat客户端增强版）的Github地址："],
    ],
    [
      "Hosted at https://hcer.netlify.app/ and https://hc.thz.cool/ (thanks to Maggie, aka THZ, for hosting).",
      [
        "ja_jp",
        "https://hcer.netlify.app/、https://hc.thz.cool/（ホスティングしてくれたTHZことMaggieに感謝）。",
      ],
      [
        "ru_ru",
        "Размещен на https://hcer.netlify.app/ и https://hc.thz.cool/ (спасибо Maggie, aka THZ, за хостинг).",
      ],
      [
        "fr_fr",
        "Hébergé sur https://hcer.netlify.app/ et https://hc.thz.cool/ (merci à Maggie, alias THZ, pour l'hébergement).",
      ],
      [
        "sh_cxg",
        "托管在 https://hcer.netlify.app/ 和 https://hc.thz.cool/（感谢Maggie，即THZ，提供托管）。",
      ],
    ],
    [
      "Links: ",
      ["ja_jp", "リンク："],
      ["ru_ru", "Ссылки:"],
      ["fr_fr", "Liens :"],
      ["sh_cxg", "友情链接："],
    ],
    [
      " (Thanks for providing replying script!) ",
      ["ja_jp", "(返信機能を提供するコードに感謝)"],
      ["ru_ru", "(Спасибо за код, обеспечивающий функцию ответа)"],
      ["fr_fr", "(Merci au code qui fournit la fonction de réponse)"],
      ["sh_cxg", "（感谢提供回复功能的代码）♡"],
    ],
  ],
};
var _lang = localStorage["i18n_ex"] || localStorage["i18n"] || "en-US";

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}
function tr() {
  let __lang = (_lang = localStorageGet("i18n_ex") || localStorageGet("i18n"));
  if (__lang && __lang != "en-US") {
    if (i18n.has(__lang)) {
      document.querySelector("html").lang = __lang;
      document.querySelectorAll("[tr]").forEach((el) => {
        if (el.tagName == "button") debugger;
        el.innerHTML = _i18ntranslate(el.innerHTML, "ui");
      });
    } else {
      alert(
        `Sorry, we have not made language ${localStorageGet(
          "i18n"
        )}. You can try: ${ex_languages.map((e) => e[0]).join(", ")}`
      );
    }
  }
}
function _i18ntranslate(text, rules = ["all"]) {
  if (_lang == "en-US" || !i18n.has(_lang)) return text;
  if (rules == ["all"]) {
    for (let rule in i18n.get(_lang)) {
      for (let item of i18n.get(_lang)[rule]) {
        text = text.replace(item[0], item[1]);
      }
    }
  } else if (typeof rules == "string") {
    for (let item of i18n.get(_lang)[rules]) {
      text = text.replace(item[0], item[1]);
    }
  } else if (Array.isArray(rules)) {
    for (let rule of rules) {
      for (let item of i18n.get(_lang)[rule]) {
        text = text.replace(item[0], item[1]);
      }
    }
  }
  return text;
}
function init() {
  console.log("I18n Extension enable.");
  window.i18ntranslate = _i18ntranslate;
  i18n_ex.langs.forEach((e) => {
    let data = {};
    i18n_ex.list.forEach((j) => {
      // console.log(i18n_ex[j].map((p) => [p[0], p.find((k) => k[0] == e)]));
      data[j] = new Map(
        i18n_ex[j].map((p) => [p[0], p.find((k) => k[0] == e)[1]])
      );
    });
    i18n.set(e, data);
  });
  ex_languages.forEach(function (item) {
    let res = window.languages.find((e) => e[0] == item[0]);
    if (res) return;
    var option = document.createElement("option");
    option.textContent = item[0];
    option.value = item[1];
    $id("i18n-selector").appendChild(option);
  });
  $id("i18n-selector").onchange = function (e) {
    let v = e.target.value;
    localStorage["i18n"] = v == "en-US" || v == "zh-CN" ? v : "en-US";
    _lang = localStorage["i18n_ex"] = v;
    // console.log(_lang);
    pushMessage(
      {
        nick: "!",
        text: "Please refresh to apply language. Multi language is in test and not perfect yet. ",
      },
      { i18n: true }
    );
  };
  $id("i18n-selector").value =
    localStorage["i18n_ex"] || localStorage["i18n"] || "en-US";

  tr();
  console.log(i18n);
}
addEventListener('load', () => init());
