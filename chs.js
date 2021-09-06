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
    'Get a token': '获得 1 代币',
    'Infrared': '红外线',
    'Microwaves': '微波炉',
    'Milestones': '里程碑',
    'Radio Waves': '无线电波',
    'Tokens': '代币',
    'Get a life :(': '获得 1 生命',
    'Get Anti-Psi': '获得反Psi',
    'Complete Anti-Carbon': '完成抗碳',
    'Complete Anti-Hydrogen': '完成抗氢',
    'Complete Anti-Inflammatory': '完成抗炎症',
    'Complete Anti-Omega': '完成抗欧米茄',
    'Complete Anti-Minigame': '完成抗小游戏',
    'Complete Anti-Oxygen': '完成抗氧',
    'Complete Anti-Rho': '完成抗ρ',
    'Complete Anti-Tau': '完成抗Tau',
    'Complete Anti-Upsilon': '完成抗Upsilon',
    'Complete Anti-Sigma': '完成抗σ',
    'Complete Anti-Phi': '完成抗φ',
    'Complete Anti-Chi': '完成抗χ',
    'Complete Anti-Nitrogen': '完成抗氮',
    'Reset for': '重置获得',
    'Reward: Unlock Stem Cell challenges and square base Cell gain but you can only have 100% of your cells upon reset and you can no longer Cell reset.': '奖励：解锁干细胞挑战和方形基础细胞增益，但您在重置时只能拥有 100% 的细胞，并且您不能再进行细胞重置。',
    'Reward: Visible effects Stem Cell gain but its base is 1.11.': '奖励：干细胞增益可见，但其基数为 1.11。',
    'Reward: Unlock M': '奖励：解锁 M',
    'Reward: Unlock another anti- challenge.': '奖励：解锁另一个抗挑战。',
    'Reward: Totipotent\'s log6 becomes log4.': '奖励：全能的 log6 变为 log4。',
    'Reward: Totipotent\'s log4 becomes ln.': '奖励：全能的 log4 变为 ln。',
    'Reward: Totipotent\'s ln becomes log2.': '奖励：全能的 ln 变为 log2。',
    'Reward: Totipotent\'s log10 becomes log6 and Radio Wave levels multiply Stem Cell gain.': '奖励：全能的 log10 变为 log6，无线电波等级乘以干细胞增益。',
    'and Mu is always active.': '而Mu总是活跃的。',
    'Info': '信息',
    'Note that anti- challenges are never reset.': '请注意，反挑战永远不会重置。',
    'Cell resets (in order) DNA content, Amino Acid content, Life buyables and gems.': '细胞重置（按顺序）DNA 含量、氨基酸含量、生命可购买物和宝石。',
    'Reward: 𝛾 → ∂β\'s base is Near-ultraviolet and log10(µ) multiplies Stem Cell gain.': '奖励：𝛾 → ∂β 的基数是近紫外线，log10(µ) 乘以干细胞增益。',
    'Cells': '细胞',
    'Reward: 𝛾 → ∂α, 𝛾 → ∂β, and 𝛾 → ∂𝛾 cost bases are 2.': '奖励：基数 → ∂α、𝛾 ∂ ∂β 和 𝛾 → ∂𝛾 成本基数为 2。',
    'Reward: β → ∂α base is 2^tokens and tetrational token costs scale 2x slower.': '奖励：β → ∂α 基数为 2^ 代币，而四次代币成本则慢 2 倍。',
    'Reward: You can bulk 10x more N → Δµ and Anti-Upsilon\'s log7 becomes log5.': '奖励：您可以批量增加 10 倍的 N → Δμ，反Upsilon 的 log7 变为 log5。',
    'Reward: Totipotent cost base is 1e9 and bulk buy 20x Life buyables.': '奖励：全能成本基础是 1e9，批量购买 20 倍生命可购买。',
    'Reward: Total kappa multiplies DNA gain.': '奖励：总 kappa 乘以 DNA 增益。',
    'Reward: Tokens multiply Stem Cell gain and per milestone add .002 to Visible base.': '奖励：代币乘以干细胞增益，每个里程碑增加 0.002 到可见基数。',
    'Reward: The square root of the number of upgrades multiplies Stem Cell gain.': '奖励：升级次数的平方根乘以干细胞增益。',
    'Reward: The square root of the number of Omnipotent levels adds to rRNA base and DNA gain exponent.': '奖励：全能级数的平方根加上 rRNA 碱基和 DNA 增益指数。',
    'Reward: siRNA\'s base is Stem Cells and ncRNA\'s base is Cells.': '奖励：siRNA 的基础是干细胞，ncRNA 的基础是细胞。',
    'Reward: Sinusoidal effect is x^sqrt(milestones) but remove the first two rows of µ buyables.': '奖励：正弦效应是 x^sqrt(milestones) 但移除 µ 可购买的前两行。',
    'Reward: Remove Totipotent base cost and bulk buy 20x Life buyables.': '奖励：移除全能基础成本并批量购买 20 倍生命值的可购买物品。',
    'Reward: Remove Omnipotent base cost and Cells gain exponent is 1/500.': '奖励：移除全能基础成本，细胞获得指数为 1/500。',
    'Reward: Per reset permanently keep another gem and keep Life reset times.': '奖励：每次重置永久保留另一个宝石并保留生命重置次数。',
    'Reward: Per reset keep a DNA upgrade and Anti-Upsilon\'s log5 becomes ln.': '奖励：每次重置保持 DNA 升级，反Upsilon 的 log5 变为 ln。',
    'Reward: Per reset keep a DNA reset and Anti-Upsilon\'s log10 becomes log7.': '奖励：每次重置保持 DNA 重置，反Upsilon 的 log10 变为 log7。',
    'Reward: Per reset keep a DNA milestone, always start with 500 of each Life buyable, permanently keep C55 and easier gems, permanently keep Dilation completions, and get DNA milestone 15.': '奖励：每次重置保留一个 DNA 里程碑，始终以每个生命 500 的可购买开始，永久保留 C55 和更简单的宝石，永久保留扩张完成度，并获得 DNA 里程碑 15。',
    'Reward: Per milestone multiply Stem Cell and Cell gain by 1 + milestones/100.': '奖励：每个里程碑将干细胞和细胞增益乘以 1 + 里程碑/100。',
    'Reward: Per milestone (up to 10) add .0001 to tRNA\'s base.': '奖励：每个里程碑（最多 10 个）将 .0001 添加到 tRNA 的基础上。',
    'Reward: Omnipotent multiplies rRNA base instead of adding its square root and α → ∂β base is best Lambda.': '奖励：全能 将 rRNA 碱基相乘而不是添加其平方根，α → ∂β 碱基是最好的 Lambda。',
    'Reward: Omnipotent levels + 1 multiply Mu and Stem Cell gain.': '奖励：全能等级 + 1 倍 Mu 和干细胞增益。',
    'Reward: miRNA base is µ, Omnipotent is free, and once per tick buy Omnipotent.': '奖励：miRNA 基础 为 µ，万能 免费，每tick购买一次 万能。',
    'Reward: log10(log10(β → ∂𝛾)-7) adds to Omnipotent base.': '奖励：log10(log10(β → ∂𝛾)-7) 添加到 万能 基础。',
    'Reward: Logarithmic effects crRNA and DNA gain base is log10(Amino Acid).': '奖励：crRNA 和 DNA 增益基数的对数效应是 log10（氨基酸）。',
    'Reward: log10(Lambda) multiplies Stem Cell gain and Lambda is always active.': '奖励：log10(Lambda) 乘以干细胞增益并且 Lambda 始终处于活动状态。',
    'Reward: log10(Best Mu) multiplies Stem Cell gain.': '奖励：log10(最大Mu) 乘以干细胞增益。',
    'Reward: Life buyable exponents are 2.3 and bulk buy 1000x but Constant base is 2 and nullify prior boosts to it.': '奖励：生命可购买指数为 2.3，批量购买 1000 倍，但常数基数为 2，并取消之前对其的提升。',
    'Reward: Anti-Upsilon\'s ln becomes log2 and Anti-Minigame\'s log10 becomes log2.': '奖励：反Upsilon 的 ln 变为 log2，A反小游戏 的 log10 变为 log2。',
    'Reward: Automatically bulk buy Sinusoidal, Sinusoidal is free, and the number of milestones multiplies Stem Cell gain.': '奖励：自动批量购买正弦曲线，正弦曲线是免费的，里程碑数量乘以干细胞增益。',
    'Reward: Best cells^.02 multiplies Stem Cell gain and best Stem Cells^.01 multiplies Cell gain.': '奖励：最佳细胞^.02乘以干细胞增益，最佳干细胞^.01乘以细胞增益。',
    'Reward: Each upgrade adds 1 to Cell effect exponent.': '奖励：每次升级都会将细胞效果指数加 1。',
    'Reward: Gain 10% of your Cells on reset per second.': '奖励：每秒重置时获得 10% 的细胞。',
    'Reward: If you are not in a Cell challenge after 1 second you gain .01% of your best Stem Cells.': '奖励：如果您在 1 秒后没有参加细胞挑战，您将获得 0.01% 的最佳干细胞。',
    'Reward: Infrared effects shRNA\'s base and per milestone you have one less token for prestige purposes.': '奖励：红外效应 shRNA 的基础和每一个里程碑，你就少一个用于声望的代币。',
    'Reward: Iota is always active and instead based on total time played and log10(DNA) multiplies Stem Cell gain.': '奖励：Iota 始终处于活动状态，而是基于总播放时间和 log10(DNA) 乘以干细胞增益。',
    'Reward: Kappa is always active, tokens multiply 𝛾 → ∂𝛾\'s exponential divider, and you can bulk buy Omnipotent.': '奖励：Kappa一直活跃，代币倍增𝛾→∂𝛾的指数除法器，可以批量购买 全能。',
    'crRNA levels squared multiply protein gain': 'crRNA 等级平方乘以蛋白质增益',
    'You can reset for': '你可以重置得到 ',
    'Each upgrade boosts something different! You can sell upgrades at any time with no cost.': '每次升级都会提升不同的东西！ 您可以随时免费出售升级。',
    'Flat': '平',
    'Gamma Rays': '伽马射线',
    'Near-ultraviolet': '近紫外线',
    'Need Respec': '需要重洗',
    'Scaling': '缩放',
    'Sell all buyables': '出售所有可购买',
    'Sell-all': '全部出售',
    'The synchronized amount is currently 50 levels. You have 148 total tokens.': '同步数量目前为 50 级。 您总共有 148 个代币。',
    'UHF Gamma Rays': '超高频伽马射线',
    'Ultraviolet': '紫外线',
    'Visible': '可见',
    'X-Rays': 'X射线',
    'Get a Tissue upgrade': '获取1组织升级',
    'Corn': '玉米',
    'Cookie': '饼干',
    'Constant': '恒量',
    'Coffee': '咖啡',
    'Cod': '代码',
    'Coconut': '椰子',
    'Clam': '蛤',
    'Chocolate': '巧克力',
    'Chicken': '鸡肉',
    'Cherry': '樱桃',
    'Cheese': '奶酪',
    'cbrt(': '我长大了（',
    'Catfish': '鲶鱼',
    'Cast': '投射',
    'Carrot': '胡萝卜',
    'Change the log10 to ln in C Point gain 4 and reduce Corn interval to 5': '将C点增益4中的log10改为ln，将玉米间隔减少到5',
    'Crab': '螃蟹',
    'Cyborg': '半机械人',
    'Dinner': '晚餐',
    'C Points': 'C 点数',
    'E Points': 'E 点数',
    'D Points': 'D 点数',
    'Cupcake': '纸杯蛋糕',
    'Frontal cortex': '额叶皮层',
    'Gain formula is f': '增益公式为 f',
    'Iterations': '迭代',
    'Linear': '线性',
    'Quadratic': '二次方',
    'Odd Prime': '奇数素数',
    'and addition is associative base': '和加法是结合基',
    'Once per ten seconds gain fuel': '每十秒获得一次燃料',
    'Pre-frontal cortex': '前额叶皮层',
    'Once per 11 seconds gain fuel, unlock an autobuyer for Speed buyables, and double D Point gain': '每 11 秒获得一次燃料，解锁 速度 可购买的自动购买器，并获得双倍 D 点',
    'Toggle character display': '切换字符显示',
    'Both pages': '这两个页面',
    'Unlock tokens': '解锁代币',
    'The autobuyer can buy A buyables, all autobuyers trigger per tick and works 10x as fast. Remove the softcap for B buyables': '自动购买者可以购买 A 可购买物，所有自动购买者每刻触发一次，工作速度提高 10 倍。 移除 B 可购商品的软顶',
    'Square the ln(x) term in White and add a log10(x) term to Green': '将白色的 ln(x) 项平方，并将 log10(x) 项添加到绿色',
    'Square Oxygen IV but you lose 50 times more Carbon and Oxygen per second': '平方氧IV但是你每秒损失的碳和氧是它的50倍',
    'Square Oxygen I and remove the -9': '平方氧I，并移除-9',
    'sqrt(log10(Life Points)) multiplies Carbon and Oxygen gain': 'sqrt(log10(生命点)) 乘以碳和氧增益',
    'Raise token buyable costs ^.9 (ceilinged': '提高代币可购买成本^.9（上限',
    'Per upgrade multiply Life Points by Carbon': '每次升级将生命值乘以碳',
    'Per token per upgrade multiply Microwave base by 1.01': '每个代币每次升级乘以微波基数 1.01',
    'Oxygen IV affects Carbon gain and double autobuyer speed': '氧气 IV 影响碳增益和双倍自动购买速度',
    'ln(Carbon) multiplies Near-ultraviolet base': 'ln（碳）乘以近紫外线基数',
    'Gain 10x coins and max(5, log10(coins)) multiplies Oxygen per upgrade': '每次升级获得 10x 硬币和 max(5, log10(硬币)) 乘以氧气',
    'Coins': '硬币',
    'Change token buyable costs from ceiling to rounding': '将代币可购买成本从上限更改为四舍五入',
    'Both minigames always tick, autobuy a B buyable once per second, and gain 1e5x A Points': '两个小游戏总是打勾，每秒自动购买一次可购买的 B，并获得 1e5x A 点',
    'Add 1 to the Violet base and ln(White) multiplies White effect': '在紫罗兰色基础上加 1，ln(白色) 乘以白色效果',
    'Add .01 to Constant base and you can buy all 3 row 7 coin upgrades': '将 .01 添加到 恒定基数，您可以购买所有 3 排 7 硬币升级',
    '^.5 in the A production formula becomes ^.52': 'A生成式中的^.5变为^.52',
    '^.52 in the A production formula becomes ^.524 and unlock Carbon (C) and Oxygen (O': 'A 生成式中的 ^.52 变为 ^.524 并解锁碳 (C) 和氧 (O',
    'Phosphorus': '原子氢',
    'Per Iteration Phosphorus multiplies Nitrogen': '每次迭代磷乘以氮',
    'Per N challenge completion add .001 to Semi-exponential base': '每完成1个 N 挑战，半指数基数增加 0.001',
    'Per µ iterations multiply Phosphorus gain': '每 µ 迭代乘以磷增益',
    'Remove the ability to prestige but gain 100% of Phosphorus/s per second': '移除声望的能力，但每秒获得 100% 的磷',
    'Respecting addition log base is decreased to 3 and each upgrade in this row reduces it by .2': '尊重附加对数基数减少到 3，该行中的每次升级都会减少 0.2',
    'Square': '平方',
    'Square addition is associative level effect and unlock a D buyable': '平方加法是关联级效果并解锁 D 可购买',
    'Square base Nitrogen gain': '平方基础氮增益',
    'Square initial Phosphorus gain and': '平方初始磷增益和',
    'Square root Oxygen gain': '平方根氧增益',
    'Square the ln(x) component in Quadratic': '二次方的 ln(x) 组件的平方',
    'Tire affects E Point gain': '轮胎影响 E 点增益',
    'V multiplies and then exponentiates Carbon gain': 'V乘以碳收益，然后取指数',
    ',  multiplying Phosphorus gain by Phosphorus': ', 磷增益乘以磷',
    'Buyables': '可购买',
    'µ^10 multiplies': 'µ^10 乘以',
    'µ resets no longer do anything and you bulk 100x minigame buyables': 'µ 重置不再做任何事情，您可以批量购买 100 倍的迷你游戏',
    'µ III log5 becomes log4': 'µ III log5 变成 log4',
    'µ III log6 becomes log5': 'µ III log6 变成 log5',
    'Reward: E Points multiply D Points and each associativity of addition adds .01 to': '奖励：E 点乘 D 点，加法的每个结合性增加 0.01',
    'Reward: Per milestone multiply base Phosphorus gain by total tokens and you no longer lose Oxygen or Carbon.': '奖励：每个里程碑将基础磷增益乘以总代币，你不再失去氧气或碳。',
    'Reward: Unlock a new E buyable, and you no longer lose any Hydrogen resources.': '奖励：解锁一个新的 E 可购买物品，您将不再失去任何氢资源。',
    'Unlock µ buyables. Buying any µ buyable forces a µ reset': '解锁 µ 可购买商品。 购买任何可购买的 µ 都会强制 µ 重置',
    'You can buy max µ, you have one less effective token for prestige purposes and µ III becomes log6': '你可以购买最大 µ，你有一个用于声望目的的低效代币，µ III 变成 log6',
    'You have one less effective token for prestige purposes': '你有一个用于声望目的的不太有效的代币',
    'Iterations cost exponent is now x': '迭代成本指数现在是 x',
    'multiplies Phosphorus gain': '乘以磷增益',
    'Each constant multiplies E Point gain by log10(10+µ) and': '每个常数将 E 点增益乘以 log10(10+µ) 和',
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
    'Five': '5',
    'Forty': '40',
    'Ninety': '90',
    'One Hundred': '100',
    'Seventy': '70',
    'Sixty': '60',
    'Two Hundred': '200',
    'Three Hundred': '300',
    'Eighty': '80',
    'Four Hundred': '4',
    'One': '01',
    'Two': '02',
    'Three': '03',
    'Four': '04',
    'Five': '05',
    'Six': '06',
    'Seven': '07',
    'Eight': '08',
    'Nine': '09',
    'Five Hundred': '500',
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
    "Hydrogen ": "氢 ",
    "Atomic Hydrogen ": "原子氢 ",
    "Deuterium ": "氘 ",
    "Each upgrade raises Life Point gain ": "每次升级都会提高生命值 ",
    "Currently: ": "当前: ",
    "Estimated time: ": "预计时间：",
    "Three Hundred and ": "3",
    "One Hundred and ": "1",
    "Two Hundred and ": "2",
    "Four Hundred and ": "4",
    "Current Cells gain: ": "当前细胞增益：",
    "Initial Cells gain: ": "初始细胞增益：",
    ",  multiplying DNA, Life, and Protein gain and exponentiating Phosphorus gain by ": ", 乘以 DNA、生命和蛋白质增益，然后用磷增益取幂",
    "Five Hundred and ": "5",
    "Current speed formula: (": "当前速度公式：（",
    "Current gain is ": "当前增益为",
    "Change token buyable exponent to ": "将代币可购买指数更改为",
    "Phosphorus ": "原子氢 ",
    "You are gaining an estimated ": "您正在获得估计",
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
    "Thirty-": "3",
    "Twenty-": "2",
    "Forty-": "4",
    "Eighty-": "8",
    "Ninety-": "9",
    "Fifty-": "5",
    "Seventy-": "7",
    "Sixty-": "6",
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
    ") times multipliers": ") 次乘数",
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
    /^([\d\.]+)e(\d+) µ$/,
    /^([\d\.]+)e(\d+) OOMs$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)\^x$/,
    /^([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
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
    [/^([\d\.]+)e([\d\.,]+) Lives$/, '$1e$2 生命'],
    [/^([\d\.]+)e([\d\.,]+) A Points$/, '$1e$2 A点'],
    [/^([\d\.]+)e([\d\.,]+) Hydrogen$/, '$1e$2 氢'],
    [/^e([\d\.]+)e([\d\.,]+) Phosphorus$/, 'e$1e$2 磷'],
    [/^e([\d\.]+)e([\d\.,]+) Carbon$/, 'e$1e$2 碳'],
    [/^e([\d\.]+)e([\d\.,]+) E Points$/, 'e$1e$2 E点'],
    [/^e([\d\.]+)e([\d\.,]+) Hydrogen$/, 'e$1e$2 氢'],
    [/^e([\d\.]+)e([\d\.,]+) OOMs$/, 'e$1e$2 OOMs'],
    [/^e([\d\.]+)e([\d\.,]+) Oxygen$/, 'e$1e$2 氧'],
    [/^e([\d\.]+)e([\d\.,]+) Nitrogen$/, 'e$1e$2 氮'],
    [/^\+([\d\.]+)e([\d\.,]+) to Constant base per Constant$/, '\+$1e$2 到每个常量的常量基数'],
    [/^\+([\d\.]+)e([\d\.,]+) to Linear base per Quadratic$/, '\+$1e$2 到每个二次方的线性基数'],
    [/^\+([\d\.]+)e([\d\.,]+) to respecting scalar and Quadratic base$/, '\+$1e$2 到尊重标量和二次方基数'],
    [/^\+([\d\.]+) to prior exponent dividers$/, '\+$1 到先验指数除法器'],
    [/^\+([\d\.,]+) to prior exponent dividers$/, '\+$1 到先验指数除法器'],
    [/^\+([\d\.,]+) to µ → ΔP base$/, '\+$1 到 µ → ΔP 基数'],
    [/^([\d\.]+) Tokens$/, '$1 代币'],
    [/^([\d\.]+) OOMs$/, '$1 OOMs'],
    [/^e([\d\.,]+) Protein$/, 'e$1 蛋白质'],
    [/^\*e([\d\.,]+) to Life Point$/, '\*e$1 到生命点'],
    [/^\*e([\d\.,]+) to B Point$/, '\*e$1 到B点'],
    [/^\*([\d\.]+)e([\d\.,]+) to Phosphorus gain$/, '\*$1e$2 到 磷增益'],
    [/^\*([\d\.]+)e([\d\.,]+) to Protein gain$/, '\*$1e$2 到 蛋白质增益'],
    [/^\*([\d\.]+)e([\d\.,]+) to Color Production$/, '\*$1e$2 到 颜色生产'],
    [/^\*([\d\.]+)e([\d\.,]+) to Oxygen$/, '\*$1e$2 到 氧'],
    [/^\*([\d\.]+)e([\d\.,]+) to Phosphorus$/, '\*$1e$2 到 磷'],
    [/^\*([\d\.]+)e([\d\.,]+) to A Point$/, '\*$1e$2 到 A点'],
    [/^\*e([\d\.]+)e([\d\.,]+) to E Point gain$/, '\*$1e$2 到 E点增益'],
    [/^\*e([\d\.]+)e([\d\.,]+) to Carbon$/, '\*$1e$2 到 碳'],
    [/^\*e([\d\.]+)e([\d\.,]+) to Atomic Hydrogen$/, '\*$1e$2 到 原子氢'],
    [/^Get a (.+) Gem$/, '获得 1个 $1 宝石'],
    [/^Get (.+) Dilation completions$/, '获得 $1 扩张完成'],
    [/^Get (.+) Lambda$/, '获得 $1 λ噬菌体'],
    [/^Get (.+) Nitrogen$/, '获得 $1 氮'],
    [/^Get (.+) Tissue upgrades$/, '获得 $1 组织升级'],
    [/^Get (.+) Tokens$/, '获得 $1 代币'],
    [/^Get (.+) Token II$/, '获得 $1 代币 II'],
    [/^Get (.+) DNA$/, '获得 $1 DNA'],
    [/^Get (.+) Kappa$/, '获得 $1 Kappa'],
    [/^Get (.+) Cell$/, '获得 $1 细胞'],
    [/^Get (.+) Mu$/, '获得 $1 Mu'],
    [/^Get (.+) Iota$/, '获得 $1 Iota'],
    [/^Get (.+) µ$/, '获得 $1 µ'],
    [/^Get (.+) lives$/, '获得 $1 生命'],
    [/^Get (.+) Amino Acids$/, '获得 $1 氨基酸'],
    [/^Get (.+) Protein$/, '获得 $1 蛋白质'],
    [/^Get (.+) Phosphorus$/, '获得 $1 磷'],
    [/^Get (.+) tokens$/, '获得 $1 代币'],
    [/^Get (.+) Cells$/, '获得 $1 细胞'],
    [/^The next trigger is in ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/, '下一次触发是在 $1天 $2小时 $3分钟 $4秒'],
    [/^([\d\.,]+)\/([\d\.,]+) tokens$/, '$1\/$2 代币'],
    [/^Get ([\d\.,]+) Hydrogen$/, '获得 $1 氢'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Hydrogen$/, '获得 $1 氢'],
    [/^Get ([\d\.,]+) Carbon$/, '获得 $1 碳'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Carbon$/, '获得 $1 碳'],
    [/^Get ([\d\.,]+) Oxygen$/, '获得 $1 氧'],
    [/^Get ([\d\.,]+)\^([\d\.,]+) Oxygen$/, '获得 $1 氧'],
    [/^Cost: (.+) Deuterium\n\t\t\t$/, '成本: $1 氘\n\t\t\t'],
    [/^Cost: (.+) Atomic Hydrogen\n\t\t\t$/, '成本: $1 原子氢\n\t\t\t'],
    [/^Cost: (.+) Phosphorus\n\t\t\t$/, '成本: $1 磷\n\t\t\t'],
    [/^Cost: (.+) Lives\n\t\t\t$/, '成本: $1 生命\n\t\t\t'],
    [/^Cost: (.+) Protein\n\t\t\t$/, '成本: $1 蛋白质\n\t\t\t'],
    [/^Cost: (.+) Hydrogen\n\t\t\t$/, '成本: $1 氢\n\t\t\t'],
    [/^Cost: (.+) Amino Acids\n\t\t\t$/, '成本: $1 氨基酸\n\t\t\t'],
    [/^Cost: (.+) µ\n\t\t\t$/, '成本: $1 µ\n\t\t\t'],
    [/^You have spelled (.+) words correctly!$/, '您拼错了 $1 个单词！'],
    [/^([\d\.]+)e([\d\.,]+) Amino Acid and e([\d\.,]+) Protein$/, '$1e$2 氨基酸 和 e$3 蛋白质'],
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
    [/^α → ∂α log([\d\.]+)\'s become log([\d\.]+)$/, 'α → ∂α log$1\'s become log$2'],
    [/^µ cost exponent is ([\d\.]+)$/, 'µ 成本指数为 $1'],
    [/^µ cost exponent is ([\d\.]+) and unlock a buyable$/, 'µ 成本指数为 $1 并解锁一个可购买'],
    [/^You are gaining (.+) Carbon per second$/, '您每秒获得 $1 碳'],
    [/^Universe is (.+) and add .01 to Constant base$/, '宇宙是$1，在常量基础上加 .01'],
    [/^Next in: (.+)s$/, '下一个在: $1秒'],
    [/^You have done (.+) Cell resets$/, '您已完成 $1 次单元重置'],
    [/^Requires: (.+) Cell reset \((.+)$/, '需要: $1 细胞重置 \($2'],
    [/^Requires: (.+) µ \((.+)$/, '需要: $1 µ \($2'],
    [/^Requires: (.+) Phosphorus \((.+)$/, '需要: $1 磷 \($2'],
    [/^Requires: (.+) of any minigame amount \((.+)$/, '需要: $1 任何小游戏数量 \($2'],
    [/^Requires: (.+) Cell challenge completion \((.+)$/, '需要: $1 细胞挑战完成 \($2'],
    [/^Requires: (.+) Stem Cells \((.+)$/, '需要: $1 干细胞 \($2'],
    [/^Requires: (.+) Cell resets \((.+)$/, '需要: $1 细胞重置 \($2'],
    [/^Requires: (.+) Kappa \((.+)$/, '需要: $1 Kappa \($2'],
    [/^Requires: (.+) Mu \((.+)$/, '需要: $1 Mu \($2'],
    [/^Requires: (.+) Cells \((.+)$/, '需要: $1 细胞 \($2'],
    [/^Requires: (.+) Amino Acid resets \((.+)$/, '需要: $1 氨基酸重置 \($2'],
    [/^Requires: (.+) Amino Acid \((.+)$/, '需要: $1 氨基酸 \($2'],
    [/^Requires: (.+) Points \((.+)$/, '需要: $1 点数 \($2'],
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
    [/^Cost: (.+) C Points\n\t\t\t$/, '成本: $1 C 点\n\t\t\t'],
    [/^Cost: (.+) D Points\n\t\t\t$/, '成本: $1 D 点\n\t\t\t'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);