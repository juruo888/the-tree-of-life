/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    'Hide the top row': '隐藏顶行',
    'Life Points': '生命点',
    'Show a row': '显示一行',
    'Get One Deuterium': '获取 1 氘',
    'Get One Hundred Deuterium': '获取 100 氘',
    'Get Ten Thousand Deuterium': '获取 10000 氘',
    'Get One Million Deuterium': '获取 100万 氘',
    'Shift: Hides top layers until an unfinished layer': 'Shift：隐藏顶层直到未完成的层',
    'Shift: Show all rows': 'Shift：显示所有行',
    'Click': '点击',
    'Get Twenty Hydrogen': '获取 20 氢',
    'Get Ten Million Hydrogen': '获取 1000万 氢',
    'Get One Hundred Billion Hydrogen': '获取 1000亿 氢',
    'Get Four Hundred Hydrogen': '获取 400 氢',
    'Get Eight Thousand Hydrogen': '获取 8000 氢',
    'Get Fifty Thousand Atomic Hydrogen': '获取 50000 原子氢',
    'Get Five Atomic Hydrogen': '获取 5 原子氢',
    'Get Five Hundred Atomic Hydrogen': '获取 500 原子氢',
    'Get Five Million Atomic Hydrogen': '获取 500万 原子氢',
    '1+Achievements multiplies Hydrogen gain': '1+成就乘以氢增益',
    'Currently': '当前',
    'Each upgrade adds 1 to the Hydrogen gain formula': '每次升级氢增益公式都会增加 1',
    'Hydrogen': '氢',
    'ln([best Hydrogen]) multiplies Life Point gain': 'ln([最大氢]) 乘以生命点增益',
    'Raise Hydrogen I to ln([Hydrogen upgrades]': '将氢 I 升至 ln（[氢升级]',
    'Upgrades': '升级',
    ') upgrades, but buying one vastly increases the price of and hides the other': ') 升级，但购买一个会大大增加另一个的价格并隐藏另一个',
    'Deuterium': '氘',
    'H) and Atomic Hydrogen (H': 'H) 和原子氢 (H',
    'ln(ln(10+[best Deuterium])) multiplies Life Point and Hydrogen gain': 'ln(ln(10+[最大氘])) 乘以生命点和氢增益',
    'Search through your Hydrogen to find the special .02% -- Deuterium': '搜索您的氢气以找到特殊的 0.02% -- 氘',
    'Unlock Deuterium (': '解锁 氘 (',
    'Wait for your Hydrogen to cool and bond at a brisk .1% rate': '等待您的氢以 0.1% 的速度冷却并结合',
    'ln([best Deuterium]) multiplies Deuterium gain': 'ln([最大氘]) 乘以氘增益',
    'Raise Deuterium II to the number of upgrades in this row': '将 氘 II 提升至该行的升级数量',
    'Achievement Gotten!': '成就获得！',
    'Atomic Hydrogen': '原子氢',
    'Upgrades in this row ^ .8 raise Hydrogen III effect': '本行升级 ^ .8 提升 氢 III 效果',
    'Make the ln in Hydrogen I a log2': '使氢 I 中的 ln 为 log2',
    'ln(3+[Atomic Hydrogen])^': 'ln(3+[原子氢])^',
    'multiplies Deuterium gain': '乘以氘增益',
    'ln(3+[Deuterium])^': 'ln(3+[氘])^',
    'multiplies Atomic Hydrogen gain': '乘以原子氢增益',
    'Double Hydrogen II and make the ln in Hydrogen IV a log2': '双倍 氢 II 并使氢 IV 中的 ln 为 log2',
    'Unlock a minigame to increase': '解锁一个小游戏以增加',
    ', but square Hydrogen IX cost': ', 但平方氢 IX 成本',
    ', but square Hydrogen X cost': ', 但平方氢 X 成本',
    'A Point production is the product of': 'A 点生产是 乘积',
    'A Points': 'A点',
    'Amount': '数量',
    'Blue': '蓝',
    'Cost': '成本',
    'Yellow': '黄',
    'White': '白',
    'Violet': '紫',
    'Spelling': '拼写',
    'Orange': '橙',
    'Indigo': '靛蓝',
    'Red': '红',
    'Green': '绿',
    'Effect': '效果',
    'Levels': '等级',
    'Each color produces the next color clockwise!': '每种颜色顺时针产生下一种颜色！',
    'Formula: min(40,ln(points))*[multipliers]': '公式：min(40,ln(点数))*[乘数]',
    'ln(3+[Atomic Hydrogen])^1.00': 'ln(3+[原子氢])^1.00',
    'ln(3+[Deuterium])^2.00': 'ln(3+[氘])^2.00',
    'ln(best Deuterium]': 'ln(最大氘]',
    'ln(ln(10+[best Deuterium])))^[this row upgrades]': 'ln(ln(10+[最大氘])))^[本行升级]',
    'log2([best Hydrogen]))^[Hydrogen IV effect]': 'log2([最大氢]))^[氢 IV 效果]',
    'log2([Hydrogen upgrades]': 'log2([氢升级]',
    'over all colors minus 1': '所有颜色减 1',
    'Press space to get a new word. This is just a minigame :': '按空格键获取新单词。 这只是一个小游戏：',
    'Shift to see details': 'Shift 查看详情',
    'You need to be on this tab to keep this minigame ticking!': '您需要在此选项卡下，才能保持此迷你游戏的运行！',
    '1+[amounts]': '1+[数量]',
    'Cost formula': '成本公式',
    'Effect formula': '效果公式',
    'Formula: amt': '公式: 数量',
    'ln(10+[A Points])^x': 'ln(10+[A点])^x',
    '*multipliers': '*乘数',
    'Right Arrow: Move one tab to the right': '右箭头：向右移动一个标签',
    'Shift to see details!': 'Shift键，查看详细信息！',
    'Shift+,: Move all the way to the left': 'Shift+,：一直向左移动',
    'Shift+.: Move all the way to the right': 'Shift+.：一直向右移动',
    'Shift+1: Go to achievements': 'Shift+1：转到成就',
    'Shift+2: Go to minigames': 'Shift+2：转到小游戏',
    'Shift+A: Go to A': 'Shift+A：转到A',
    'Shift+B: Go to B': 'Shift+B：转到B',
    'Shift+D: Go to D': 'Shift+D：转到D',
    'Shift+C: Go to Carbon': 'Shift+C：转到碳',
    'Shift+Control+S: Save': 'Shift+Control+S：保存',
    'Shift+H: Go to Hydrogen': 'Shift+H：转到氢',
    'Show built in saves': '显示内置保存',
    'Space: Toggle Pause': '空格：切换暂停',
    'The Tree of Life': '生命树',
    'Toggle Arrow Hotkeys': '切换箭头快捷键',
    'Toggle pause': '切换暂停',
    'Toggle space bar pausing': '切换空格键暂停',
    'Toggle Undulating Colors': '切换起伏的颜色',
    'v1.058: Advil\'s Auspicious Acension': 'v1.058：Advil 的吉祥升天',
    'Generally applicable': '一般适用',
    'Force toggle shift': '强制切换shift',
    'Force toggle control': '强制切换control',
    'Enter Hard Mode': '进入困难模式',
    'Control+S: Save': 'Control+S: 保存',
    'Control+C: Go to changelog': 'Control+C：转到更新日志',
    'The Prestige Tree made by Jacorb and Aarex\n\t\t': 'Jacorb 和 Aarex 制作的声望树\n\t\t',
    'Left Arrow: Move one tab to the left': '向左箭头：向左移动一个标签',
    ',: Move one tab to the left': ',: 向左移动一个标签',
    '.: Move one tab to the right': '.: 向右移动一个标签',
    'Jump to locations': '跳转到位置',
    'Other': '其它',
    'Prestige': '声望',
    'Made by pg132\t': '作者是 pg132\t',
    '1.01^[upgrades]': '1.01^[升级]',
    '1+[Achievements])^3.62': '1+[成就])^3.62',
    'Formula: .0002 * Hydrogen * [multipliers]': '公式：.0002 * 氢 * [乘数]',
    'Formula: .001 * Hydrogen * [multipliers]': '公式：.001 * 氢 * [乘数]',
    'Formula: min(42,ln(points))*[multipliers]': '公式：min(42,ln(点数))*[乘数]',
    'Infinite Time': '无限时间',
    'levels': '等级',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Nine': '9',
    'Nineteen': '19',
    'One': '1',
    'Seven': '7',
    'Seventeen': '17',
    'Thirteen': '13',
    'Sixteen': '16',
    'Ten': '10',
    'Thirty': '30',
    'eight': '8',
    'five': '5',
    'four': '4',
    'nine': '9',
    'one': '1',
    'seven': '7',
    'six': '6',
    'three': '3',
    'two': '2',
    'Three': '3',
    'Twelve': '12',
    'Twenty': '20',
    'Two': '2',
    'Fourteen': '14',
    'Four': '4',
    'Six': '6',
    'Fifty': '50',
    'Fifteen': '15',
    'Eighteen': '18',
    'Eleven': '11',
    'Eight': '8',
    'Five': '5',
    'Forty': '40',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Thirty-": "3",
    "Twenty-": "2",
    "Forty-": "4",
    "Fifty-": "5",
    "Hydrogen ": "氢 ",
    "Atomic Hydrogen ": "原子氢 ",
    "Deuterium ": "氘 ",
    "Each upgrade raises Life Point gain ": "每次升级都会提高生命值 ",
    "Currently: ": "当前: ",
    "Estimated time: ": "预计时间：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "/sec": "/秒",
    " nice": " 不错",
    " affects Life Points": "影响生命点",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)\^x$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+)e([\d\.,]+) A Points$/, '$1e$2 A点'],
    [/^([\d\.]+)e([\d\.,]+) Hydrogen$/, '$1e$2 氢'],
    [/^Get ([\d\.,]+) Hydrogen$/, '获得 $1 氢'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Hydrogen$/, '获得 $1 氢'],
    [/^Get ([\d\.,]+) Carbon$/, '获得 $1 碳'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Carbon$/, '获得 $1 碳'],
    [/^Get ([\d\.,]+) Oxygen$/, '获得 $1 氧'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Oxygen$/, '获得 $1 氧'],
    [/^Cost: ([\d\.,]+) Deuterium\n\t\t\t$/, '成本: $1 氘\n\t\t\t'],
    [/^Cost: ([\d\.,]+) Atomic Hydrogen\n\t\t\t$/, '成本: $1 原子氢\n\t\t\t'],
    [/^Cost: ([\d\.,]+) Hydrogen\n\t\t\t$/, '成本: $1 氢\n\t\t\t'],
    [/^Cost: ([\d\.]+)e([\d\.,]+) Hydrogen\n\t\t\t$/, '成本: $1e$2 氢\n\t\t\t'],
    [/^You have spelled (.+) words correctly!$/, '您拼错了 $1 个单词！'],
    [/^([\d\.]+)e([\d\.,]+) Amino Acid and e([\d\.,]+) Protein$/, '$1e$2 和'],
    [/^([\d\.]+) A Points$/, '$1 A点'],
    [/^([\d\.,]+) A Points$/, '$1 A点'],
    [/^([\d\.,]+) Hydrogen$/, '$1 氢'],
    [/^([\d\.,]+) Achievements$/, '$1 成就'],
    [/^\*(.+) to A Point gain$/, '\+$1 至 A点增益'],
    [/^\*(.+) to Atomic Hydrogen gain$/, '\+$1 至 原子氢增益'],
    [/^\*(.+) to Life Points$/, '\+$1 至 生命点'],
    [/^\*(.+) to Hydrogen$/, '\+$1 至 氢'],
    [/^\*(.+) to Deuterium$/, '\+$1 至 氘'],
    [/^\+(.+) to$/, '\+$1 至'],
    [/^([\d\.,]+)h ([\d\.,]+)m ([\d\.]+)s$/, '$1小时 $2分钟 $3秒'],
    [/^\+(.+) to Red, Orange, and Yellow base$/, '\+$1 至红色、橙色和黄色基础'],
    [/^You lose (.+)\% less Hydrogen per second$/, '你每秒少损失 $1\% 的氢'],
    [/^You are losing (.+)\% of your Hydrogen per second$/, '你每秒损失 $1\% 的氢'],
    [/^You are losing (.+)\% of your Atomic Hydrogen per second$/, '你每秒损失 $1\% 的原子氢'],
    [/^You are losing (.+)\% of your Deuterium per second$/, '你每秒损失 $1\% 的氘'],
    [/^You are losing (.+)\% of your Deuterium per second$/, '你每秒损失 $1\% 的氘'],
    [/^You are gaining (.+) Hydrogen per second$/, '你每秒获得 $1 氢'],
    [/^You are gaining (.+) Deuterium per second$/, '你每秒获得 $1 氘'],
    [/^Your best Hydrogen is (.+) and you are netting (.+) Hydrogen per second$/, '你最大的 氢 是 $1，你每秒净赚 $2 氢'],
    [/^Your best Atomic Hydrogen is (.+) and you are netting (.+) Atomic Hydrogen per second$/, '你最大的 原子氢 是 $1，你每秒净赚 $2 原子氢'],
    [/^Your best Deuterium is (.+) and you are netting (.+) Deuterium per second$/, '你最大的 氘 是 $1，你每秒净赚 $2 氘'],
    [/^You have completed the first (.+) rows$/, '您已完成前 $1 行'],
    [/^Last save was: (.+) ago.(.+)$/, '上次保存于： $1 前。$2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);