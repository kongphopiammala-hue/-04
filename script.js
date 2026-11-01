/**
 * FANG & FLINT — Official Prehistoric Survival Game Website
 * Interactive Logic, Equipment Database & Ambient Ember VFX
 */

// ==========================================
// 1. Comprehensive Equipment & Gear Database
// ==========================================
const equipmentDatabase = [
  // --- WEAPONS ---
  {
    id: 'wpn-1',
    category: 'weapons',
    name: 'หอกหินเหล็กไฟ (Flint Spear)',
    tier: 'tier-starter',
    tierName: 'ยุคหินเริ่มต้น (Tier 1)',
    icon: 'fa-solid fa-wand-magic-sparkles',
    summary: 'อาวุธระยะกลางชิ้นแรกสำหรับล่าสัตว์กินพืชขนาดกลางและรักษาระยะห่างจากเขี้ยวเล็บ',
    stats: { primary: 'พลังโจมตี 38', speed: 'ระยะหวังผล 3.5 ม.', durability: 'ความทนทาน 65/65' },
    recipe: [
      { name: 'หินเหล็กไฟกะเทาะคม', qty: '3 ชิ้น' },
      { name: 'กิ่งไม้เนื้อแข็ง', qty: '2 ชิ้น' },
      { name: 'เส้นใยเถาวัลย์เหนียว', qty: '5 เส้น' }
    ],
    details: 'หอกปลายแหลมที่กะเทาะจากหินเหล็กไฟคมกริบ ใช้ได้ทั้งแทงระยะประชิดและขว้างใส่เป้าหมายที่กำลังวิ่งหนี สามารถดึงกลับมาใช้ซ้ำได้หากไม่หัก',
    survivalTip: 'แนะนำให้พกติดตัวอย่างน้อย 2 เล่มเสมอ ในกรณีที่ขว้างพลาดแล้วถูกสัตว์ร้ายพุ่งชาร์จเข้าใส่'
  },
  {
    id: 'wpn-2',
    category: 'weapons',
    name: 'ธนูกระดูกสัตว์ดัดโค้ง (Bone Recurve Bow)',
    tier: 'tier-bone',
    tierName: 'ยุคกระดูก (Tier 2)',
    icon: 'fa-solid fa-bullseye',
    summary: 'อาวุธระยะไกลทรงพลัง ผลิตจากกระดูกสะบักดัดด้วยไอร้อนและร้อยเอ็นสัตว์',
    stats: { primary: 'พลังโจมตี 54', speed: 'ระยะยิง 45 ม.', durability: 'ความทนทาน 90/90' },
    recipe: [
      { name: 'กระดูกสะบักไดโนเสาร์', qty: '2 ชิ้น' },
      { name: 'เอ็นสัตว์แห้ง', qty: '3 เส้น' },
      { name: 'ยางไม้เคลือบเงา', qty: '2 หยด' }
    ],
    details: 'ยิงลูกธนูได้เงียบสนิท ไม่ทำให้ฝูงสัตว์ตื่นตระหนก สามารถเคลือบลูกธนูด้วยยางพิษของกบดึกดำบรรพ์เพื่อลดความเร็วของเหยื่อได้',
    survivalTip: 'เมื่อยิงสัตว์นักล่าขนาดใหญ่ ให้เล็งจุดตายบริเวณหลังใบหูหรือรอยต่อของแผ่นเกราะ'
  },
  {
    id: 'wpn-3',
    category: 'weapons',
    name: 'ค้อนหินทุบกะโหลก (Heavy Stone Maul)',
    tier: 'tier-starter',
    tierName: 'ยุคหินเริ่มต้น (Tier 1)',
    icon: 'fa-solid fa-gavel',
    summary: 'อาวุธทุบหนักที่สร้างแรงกระแทกมหาศาล มีโอกาสทำให้สัตว์ขนาดใหญ่ติดสถานะมึนงง',
    stats: { primary: 'พลังโจมตี 62', speed: 'ช้า (0.8s)', durability: 'ความทนทาน 120/120' },
    recipe: [
      { name: 'ก้อนหินแม่น้ำเนื้อแน่น', qty: '1 ก้อน' },
      { name: 'ท่อนไม้สนโบราณ', qty: '1 ท่อน' },
      { name: 'สายหนังดิบชุบน้ำมัน', qty: '4 เส้น' }
    ],
    details: 'แม้จะมีน้ำหนักมากและเหวี่ยงช้า แต่แรงกระแทกสามารถทำลายกระดูกและกระดองสัตว์จำพวกแองคิโลซอรัสได้อย่างมีประสิทธิภาพ',
    survivalTip: 'ใช้ขณะที่เพื่อนร่วมเผ่ากำลังล่อศัตรู เพื่อวิ่งเข้าชาร์จโจมตีจากด้านหลัง'
  },
  {
    id: 'wpn-4',
    category: 'weapons',
    name: 'กรงเล็บแรปเตอร์คู่ (Raptor Claw Blades)',
    tier: 'tier-refined',
    tierName: 'ยุคประณีต (Tier 3)',
    icon: 'fa-solid fa-hand-back-fist',
    summary: 'อาวุธสวมมือติดกรงเล็บโค้งเสี้ยวพระจันทร์ของแรปเตอร์ เน้นความเร็วและทำให้เลือดไหลไม่หยุด',
    stats: { primary: 'พลังโจมตี 45 x 2', speed: 'เร็วมาก (1.8x)', durability: 'ความทนทาน 85/85' },
    recipe: [
      { name: 'กรงเล็บแรปเตอร์สมบูรณ์', qty: '2 ชิ้น' },
      { name: 'แผ่นหนังเสริมความแกร่ง', qty: '2 ผืน' },
      { name: 'ขี้ผึ้งป่า', qty: '1 ตลับ' }
    ],
    details: 'อาวุธสำหรับสายลอบสังหาร ทุกการฟันมีโอกาส 40% ที่จะติดสถานะ "แผลฉีกขาดรุนแรง (Bleeding)" สร้างความเสียหายต่อเนื่องตามเวลา',
    survivalTip: 'ผสานคอมโบกับการกลิ้งหลบหลังศัตรูเพื่อสร้างดาเมจคริติคอลสูงสุด'
  },

  // --- TOOLS ---
  {
    id: 'tool-1',
    category: 'tools',
    name: 'หินเหล็กไฟจุดประกาย (Flint Striker)',
    tier: 'tier-starter',
    tierName: 'อุปกรณ์ยังชีพพื้นฐาน',
    icon: 'fa-solid fa-fire-burner',
    summary: 'อุปกรณ์สำคัญที่สุดในชีวิต ใช้ตีกระทบเพื่อสร้างประกายไฟก่อกองเพลิงและคบไฟ',
    stats: { primary: 'จุดไฟสำเร็จ 95%', speed: 'เวลาจุด 2.0 วินาที', durability: 'ใช้ได้ 50 ครั้ง' },
    recipe: [
      { name: 'หินเหล็กไฟ (Flint)', qty: '2 ชิ้น' },
      { name: 'เศษหญ้าแห้งติดเชื้อเพลิง', qty: '1 กำ' }
    ],
    details: 'หากไม่มีสิ่งนี้ คุณจะไม่สามารถก่อไฟในยามค่ำคืนได้เลย ซึ่งหมายถึงความตายจากอุณหภูมิร่างกายลดต่ำและถูกสัตว์ร้ายล้อมกรอบ',
    survivalTip: 'เก็บเศษหญ้าแห้งใส่ถุงหนังสัตว์เสมอ เพื่อป้องกันไม่ให้เชื้อไฟเปียกน้ำฝน'
  },
  {
    id: 'tool-2',
    category: 'tools',
    name: 'อีเต้อหินขัดเจาะแร่ (Primitive Pickaxe)',
    tier: 'tier-starter',
    tierName: 'เครื่องมือขุดเจาะ',
    icon: 'fa-solid fa-hammer',
    summary: 'ใช้ขุดแร่หิน ออบซิเดียน และกะเทาะกระดูกฟอสซิลตามหน้าผา',
    stats: { primary: 'พลังขุดหิน 100%', speed: 'น้ำหนัก 3.2 กก.', durability: 'ความทนทาน 100/100' },
    recipe: [
      { name: 'หินบะซอลต์ลับคม', qty: '2 ก้อน' },
      { name: 'ด้ามไม้โค้งรับแรง', qty: '1 ด้าม' },
      { name: 'เชือกถักเปลือกไม้', qty: '3 เส้น' }
    ],
    details: 'เครื่องมือหลักสำหรับการสะสมแร่ออบซิเดียนและหินควอตซ์ ซึ่งจำเป็นสำหรับการสร้างอาวุธยุคกลางและปลาย',
    survivalTip: 'การขุดเจาะจะส่งเสียงก้องกังวานในหุบเขา จงระวังสัตว์นักล่าที่เดินตามเสียงมา'
  },
  {
    id: 'tool-3',
    category: 'tools',
    name: 'คบเพลิงยางสนกันน้ำ (Resin Torch)',
    tier: 'tier-starter',
    tierName: 'อุปกรณ์ส่องสว่าง',
    icon: 'fa-solid fa-fire',
    summary: 'ให้แสงสว่าง รัศมีความอบอุ่น และใช้ขู่สัตว์กินเนื้อขนาดเล็กไม่ให้เข้าใกล้',
    stats: { primary: 'ระยะส่องสว่าง 15 ม.', speed: 'ติดไฟนาน 15 นาที', durability: 'ต้านฝนปรอย 70%' },
    recipe: [
      { name: 'ท่อนไม้แห้ง', qty: '1 ท่อน' },
      { name: 'ก้อนยางสนเหนียว', qty: '3 ก้อน' },
      { name: 'ผ้าหนังสัตว์พันปลาย', qty: '1 ผืน' }
    ],
    details: 'ใช้โบกไปมาเพื่อผลักดันฝูงหมาป่าโบราณให้ถอยร่น นอกจากนี้ยังสามารถจุดไฟใส่พุ่มไม้เพื่อเผารังแมลงพิษได้',
    survivalTip: 'ปักคบเพลิงลงพื้นได้ด้วยการกดคลิกขวา เพื่อให้มีมือว่างสำหรับถืออาวุธต่อสู้'
  },
  {
    id: 'tool-4',
    category: 'tools',
    name: 'มีดขูดหนังสัตว์ออบซิเดียน (Obsidian Skinner)',
    tier: 'tier-refined',
    tierName: 'ยุคหินขัดคม (Tier 3)',
    icon: 'fa-solid fa-scissors',
    summary: 'มีดใบมีดแก้วภูเขาไฟ คมระดับโมเลกุล ใช้ถลกหนังสัตว์และชำแหละเนื้อโดยไม่สูญเสียความสด',
    stats: { primary: 'เพิ่มไอเทมดรอป +35%', speed: 'ชำแหละไว 2.5x', durability: 'ความทนทาน 45/45' },
    recipe: [
      { name: 'เศษแก้วออบซิเดียนดำ', qty: '3 ชิ้น' },
      { name: 'ด้ามจับกระดูกกวาง', qty: '1 ด้าม' },
      { name: 'กาวจากยางกระดูกเคี่ยว', qty: '1 ช้อน' }
    ],
    details: 'ช่วยให้ได้ชิ้นส่วนหนังสมบูรณ์ระดับ Masterwork ซึ่งจำเป็นต่อการคราฟต์ชุดเกราะและกระเป๋าเป้ขนาดยักษ์',
    survivalTip: 'ใบมีดมีความคมสูงแต่เปราะบาง อย่าใช้ไปฟันก้อนหินหรือสิ่งกีดขวางเด็ดขาด'
  },

  // --- ARMOR ---
  {
    id: 'arm-1',
    category: 'armor',
    name: 'เกราะหน้าอกหนังสัตว์อบแห้ง (Hardened Beast Vest)',
    tier: 'tier-starter',
    tierName: 'เกราะระดับเริ่มต้น',
    icon: 'fa-solid fa-shirt',
    summary: 'เสื้อกั๊กทำจากหนังกวางและหมีโบราณ ป้องกันรอยข่วนและช่วยกักเก็บความอบอุ่น',
    stats: { primary: 'เกราะป้องกัน +28', speed: 'ต้านความเย็น +15°C', durability: 'ความทนทาน 140/140' },
    recipe: [
      { name: 'หนังสัตว์ใหญ่ตากแห้ง', qty: '4 ผืน' },
      { name: 'เข็มเย็บกระดูกปลา', qty: '1 เล่ม' },
      { name: 'เส้นใยเหนียว', qty: '6 เส้น' }
    ],
    details: 'ชุดเกราะพื้นฐานที่ผู้รอดชีวิตทุกคนต้องมี ช่วยลดความเสียหายจากการตบของสัตว์ร้ายและช่วยให้เดินทางในเขตทุ่งหิมะได้นานขึ้น',
    survivalTip: 'นำไปหมักกับไขมันสัตว์เพื่อเพิ่มคุณสมบัติกันซึมน้ำฝน'
  },
  {
    id: 'arm-2',
    category: 'armor',
    name: 'หมวกกะโหลกไทรเซอราทอปส์ (Ceratopsian Helm)',
    tier: 'tier-bone',
    tierName: 'เกราะระดับกระดูกหนา',
    icon: 'fa-solid fa-hat-cowboy',
    summary: 'หมวกทรงเกราะแผงคอไดโนเสาร์ ป้องกันการถูกโจมตีที่ศีรษะแบบคริติคอลได้ 100%',
    stats: { primary: 'เกราะป้องกัน +52', speed: 'ลดดาเมจลอบกัด 50%', durability: 'ความทนทาน 220/220' },
    recipe: [
      { name: 'แผ่นกระดูกแผงคอสมบูรณ์', qty: '1 แผ่น' },
      { name: 'สายรัดคางหนังเสือเขี้ยวดาบ', qty: '2 เส้น' },
      { name: 'ลิ่มยึดกระดูกสัตว์', qty: '4 ชิ้น' }
    ],
    details: 'กะโหลกหนาที่สามารถรับแรงกระแทกของหินถล่มหรือการกระโดดตบของไดโนเสาร์กินเนื้อได้อย่างยอดเยี่ยม',
    survivalTip: 'ช่วยลดระยะการมองเห็นของศัตรูบางชนิด เพราะพวกมันคิดว่าคุณเป็นสัตว์กินพืชตัวใหญ่'
  },
  {
    id: 'arm-3',
    category: 'armor',
    name: 'เสื้อคลุมขนหมาป่าโลกันต์ (Dire Wolf Mantle)',
    tier: 'tier-refined',
    tierName: 'ยุคประณีต (Tier 3)',
    icon: 'fa-solid fa-vest',
    summary: 'ผ้าคลุมขนสัตว์หนาฟูระดับพรีเมียม ช่วยให้อยู่รอดในพายุหิมะขั้วโลกได้อย่างสบาย',
    stats: { primary: 'เกราะป้องกัน +35', speed: 'ต้านพายุหิมะ +30°C', durability: 'ความทนทาน 180/180' },
    recipe: [
      { name: 'ขนหมาป่าโลกันต์จ่าฝูง', qty: '3 ผืน' },
      { name: 'ด้ายเอ็นสัตว์ควั่นคู่', qty: '5 เส้น' },
      { name: 'กระดุมเขี้ยวหมาป่า', qty: '2 เม็ด' }
    ],
    details: 'กลิ่นอายจ่าฝูงที่ติดอยู่ในผืนขน จะช่วยลดโอกาสที่หมาป่าทั่วไปจะเข้าจู่โจมก่อน',
    survivalTip: 'เหมาะสำหรับการเดินทางขึ้นไปสำรวจยอดเขาหิมะเพื่อค้นหาแร่อุกกาบาตโบราณ'
  },

  // --- SURVIVAL & CAMP ---
  {
    id: 'srv-1',
    category: 'survival',
    name: 'กระบอกเก็บน้ำลำไผ่ (Bamboo Canteen)',
    tier: 'tier-starter',
    tierName: 'อุปกรณ์ยังชีพ',
    icon: 'fa-solid fa-bottle-water',
    summary: 'ภาชนะใส่น้ำดื่มพกพา ป้องกันการกระหายน้ำระหว่างเดินทางไกลในทะเลทรายหรือป่าทึบ',
    stats: { primary: 'ความจุ 1.5 ลิตร', speed: 'น้ำหนักเบา 0.4 กก.', durability: 'ใช้ได้ไม่จำกัด' },
    recipe: [
      { name: 'ปล้องไม้ไผ่ยักษ์แก่จัด', qty: '1 ปล้อง' },
      { name: 'จุกไม้ก๊อกธรรมชาติ', qty: '1 อัน' },
      { name: 'สายสะพายไหล่เถาวัลย์', qty: '1 เส้น' }
    ],
    details: 'ควรนำน้ำไปต้มบนกองไฟให้เดือดก่อนกรอกใส่กระบอก เพื่อฆ่าเชื้อแบคทีเรียและไข่พยาธิในน้ำ',
    survivalTip: 'สามารถผสมน้ำผึ้งป่าลงไปในน้ำเพื่อเพิ่มค่า Stamina ฟื้นฟูเร็วขึ้น 20%'
  },
  {
    id: 'srv-2',
    category: 'survival',
    name: 'กับดักหลุมขวากกระดูก (Spike Pit Trap)',
    tier: 'tier-bone',
    tierName: 'อุปกรณ์ป้องกันค่าย',
    icon: 'fa-solid fa-skull',
    summary: 'หลุมพรางขุดลึก ปักด้วยขวากกระดูกเหลาแหลม ใช้ล่อสัตว์นักล่าให้ตกลงไปตาย',
    stats: { primary: 'ดาเมจทะลวง 180', speed: 'หยุดการเคลื่อนไหว 100%', durability: 'ใช้ได้ 3 ครั้ง' },
    recipe: [
      { name: 'ขวากกระดูกไดโนเสาร์เหลาคม', qty: '8 ท่อน' },
      { name: 'ไม้พาดปากหลุม', qty: '6 ท่อน' },
      { name: 'ใบไม้และหญ้าพรางตา', qty: '1 กอง' }
    ],
    details: 'วางไว้ตามเส้นทางเดินสัตว์หรือรอบแคมป์ของคุณ วางเหยื่อเนื้อสดไว้ตรงกลางเพื่อล่อไดโนเสาร์กินเนื้อ',
    survivalTip: 'ระวังอย่าเดินเหยียบหลุมตัวเอง! สมาชิกในเผ่าควรทำสัญลักษณ์หินสลักเตือนไว้ใกล้ๆ'
  },
  {
    id: 'srv-3',
    category: 'survival',
    name: 'ยาสมุนไพรพอกถอนพิษ (Herbal Poultice)',
    tier: 'tier-starter',
    tierName: 'ยารักษาโบราณ',
    icon: 'fa-solid fa-mortar-pestle',
    summary: 'ยาพอกบดจากพืชสมุนไพรป่าและดินเหนียว ช่วยหยุดเลือดและถอนพิษตะขาบและงูยักษ์',
    stats: { primary: 'ฟื้นฟูเลือด +50 HP', speed: 'ล้างพิษทันที', durability: 'ไอเทมกดใช้ (1 ครั้ง)' },
    recipe: [
      { name: 'ใบเฟิร์นถอนพิษสีเงิน', qty: '2 ใบ' },
      { name: 'ดินเหนียวริมตลิ่ง', qty: '1 ก้อน' },
      { name: 'น้ำผึ้งป่าฆ่าเชื้อ', qty: '1 ช้อน' }
    ],
    details: 'ไอเทมช่วยชีวิตยามฉุกเฉินเมื่อถูกสัตว์มีพิษกัด หากไม่รีบรักษา พิษจะทำให้พร่ามัวและเสียพลังชีวิตจนถึงแก่ชีวิต',
    survivalTip: 'พกติดช่องลัด (Quick Slot) ไว้เสมอ เพราะสัตว์มีพิษมักซุ่มอยู่ในพงหญ้าระดับสายตา'
  }
];

// ==========================================
// 2. DOM Rendering & Filtering
// ==========================================
const equipmentGrid = document.getElementById('equipmentGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('itemModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Update item counts in filter tabs
function updateFilterCounts() {
  document.getElementById('count-all').textContent = equipmentDatabase.length;
  document.getElementById('count-weapons').textContent = equipmentDatabase.filter(i => i.category === 'weapons').length;
  document.getElementById('count-tools').textContent = equipmentDatabase.filter(i => i.category === 'tools').length;
  document.getElementById('count-armor').textContent = equipmentDatabase.filter(i => i.category === 'armor').length;
  document.getElementById('count-survival').textContent = equipmentDatabase.filter(i => i.category === 'survival').length;
}

// Render cards
function renderEquipment(category = 'all') {
  const filtered = category === 'all' 
    ? equipmentDatabase 
    : equipmentDatabase.filter(item => item.category === category);

  equipmentGrid.innerHTML = '';

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.setAttribute('data-category', item.category);

    card.innerHTML = `
      <div class="item-header">
        <span class="item-tier ${item.tier}">${item.tierName}</span>
      </div>
      <div class="item-icon-wrap">
        <i class="${item.icon}"></i>
      </div>
      <h3 class="item-title">${item.name}</h3>
      <div class="item-category-tag"><i class="fa-solid fa-tag"></i> ${getCategoryName(item.category)}</div>
      <p class="item-desc">${item.summary}</p>
      
      <div class="item-stats-preview">
        <div class="stat-chip">
          <span>คุณสมบัติ</span>
          <strong>${item.stats.primary}</strong>
        </div>
        <div class="stat-chip">
          <span>ความทนทาน</span>
          <strong>${item.stats.durability}</strong>
        </div>
      </div>

      <button class="btn-item-detail" onclick="openItemModal('${item.id}')">
        <i class="fa-solid fa-scroll"></i> ดูสูตรคราฟต์ & สเตตัส
      </button>
    `;

    equipmentGrid.appendChild(card);
  });
}

function getCategoryName(category) {
  switch (category) {
    case 'weapons': return 'อาวุธล่าสัตว์';
    case 'tools': return 'เครื่องมือยังชีพ';
    case 'armor': return 'ชุดเกราะ & ป้องกัน';
    case 'survival': return 'แคมป์ & ยารักษา';
    default: return 'อุปกรณ์';
  }
}

// Filter button clicks
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    renderEquipment(filter);
  });
});

// ==========================================
// 3. Modal Popup Logic
// ==========================================
window.openItemModal = function(itemId) {
  const item = equipmentDatabase.find(i => i.id === itemId);
  if (!item) return;

  const recipeHtml = item.recipe.map(r => `
    <div class="recipe-item">
      <span><i class="fa-solid fa-leaf"></i> ${r.name}</span>
      <span class="qty">${r.qty}</span>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-header-info">
      <div class="modal-item-icon">
        <i class="${item.icon}"></i>
      </div>
      <div class="modal-item-titles">
        <span class="item-tier ${item.tier}">${item.tierName}</span>
        <h3>${item.name}</h3>
        <span class="item-category-tag">${getCategoryName(item.category)}</span>
      </div>
    </div>

    <div class="stats-grid-modal">
      <div class="modal-stat-card">
        <span>ประสิทธิภาพหลัก</span>
        <strong>${item.stats.primary}</strong>
      </div>
      <div class="modal-stat-card">
        <span>ความเร็ว / ระยะ</span>
        <strong>${item.stats.speed}</strong>
      </div>
      <div class="modal-stat-card">
        <span>ความทนทาน</span>
        <strong>${item.stats.durability}</strong>
      </div>
    </div>

    <div class="modal-section-title">
      <i class="fa-solid fa-circle-info"></i> รายละเอียดอุปกรณ์
    </div>
    <p style="color: #cfd8dc; font-size: 0.95rem; line-height: 1.6;">${item.details}</p>

    <div class="modal-section-title">
      <i class="fa-solid fa-hammer"></i> วัตถุดิบที่ต้องใช้คราฟต์ (Recipe)
    </div>
    <div class="recipe-list">
      ${recipeHtml}
    </div>

    <div class="survival-tip-box">
      <strong><i class="fa-solid fa-lightbulb"></i> คำแนะนำการเอาชีวิตรอด:</strong> ${item.survivalTip}
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// ==========================================
// 4. Ambient Ember Canvas VFX
// ==========================================
const canvas = document.getElementById('emberCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let embers = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Ember {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = height + Math.random() * 50;
    this.size = Math.random() * 2.5 + 1.0;
    this.speedY = Math.random() * 1.2 + 0.6;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.7 + 0.3;
    this.decay = Math.random() * 0.003 + 0.001;
    this.color = Math.random() > 0.4 ? '255, 87, 34' : '255, 179, 0';
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX + Math.sin(this.y * 0.02) * 0.3;
    this.opacity -= this.decay;

    if (this.y < -10 || this.opacity <= 0) {
      this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(${this.color}, 0.8)`;
    ctx.fill();
    ctx.restore();
  }
}

// Spawn particles
const emberCount = Math.min(window.innerWidth < 768 ? 35 : 70, 90);
for (let i = 0; i < emberCount; i++) {
  const ember = new Ember();
  ember.y = Math.random() * height;
  embers.push(ember);
}

function animateEmbers() {
  ctx.clearRect(0, 0, width, height);
  embers.forEach(ember => {
    ember.update();
    ember.draw();
  });
  requestAnimationFrame(animateEmbers);
}
animateEmbers();

// ==========================================
// 5. Navbar Sticky & Mobile Menu Toggle
// ==========================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu on click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// ==========================================
// 6. Subscription Form Action
// ==========================================
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');

if (subscribeBtn && emailInput) {
  subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (!email || !email.includes('@')) {
      alert('กรุณากรอกอีเมลที่ถูกต้องเพื่อลงทะเบียนเข้าร่วมชนเผ่า FANG & FLINT');
      return;
    }
    alert(`ยินดีต้อนรับสู่การทดสอบ Alpha Test ของ FANG & FLINT!\nเราได้บันทึกอีเมล: ${email} เรียบร้อยแล้ว`);
    emailInput.value = '';
  });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  updateFilterCounts();
  renderEquipment('all');
});
