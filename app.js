const laptops = [
  {
    name: 'MacBook Air 13” (M5)', brand: 'APPLE', image: 'https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png?202610261111',
    imageAlt: 'Apple MacBook Air 13-inch laptop', majors: ['computer','creative','health','humanities'], budget: 'mid', operatingSystems: ['mac'],
    match: 'BEST ALL-ROUNDER', description: 'A light, quiet everyday laptop for lectures, writing, and creative work.',
    price: 'Midrange', pros: ['Light to carry between classes','Strong battery life for a full day'], cons: ['Some major-specific apps require Windows','Memory and storage upgrades cost more'],
    link: 'https://www.apple.com/macbook-air/'
  },
  {
    name: 'ThinkPad E14 Gen 7', brand: 'LENOVO', image: 'https://psrefstuff.lenovo.com/syspool/Sys/Image/ThinkPad/ThinkPad_E14_Gen_7_Intel/Compressedimage/ThinkPad_E14_Gen_7_Intel_CT1_05.png',
    imageAlt: 'Lenovo ThinkPad E14 Gen 7 laptop', majors: ['business','computer','engineering','humanities','health'], budget: 'student', operatingSystems: ['windows','linux'],
    match: 'BEST VALUE', description: 'A practical Windows workhorse with a comfortable keyboard and useful ports.',
    price: 'Lower-cost options', pros: ['Windows compatibility suits many programs','Work-friendly keyboard and build'], cons: ['Linux is available only on select configurations','Less suited to demanding 3D graphics'],
    link: 'https://www.lenovo.com/us/en/c/laptops/thinkpad/thinkpade/'
  },
  {
    name: 'ProArt P16', brand: 'ASUS', image: 'https://dlcdnwebimgs.asus.com/gain/b6f5b8f0-4746-4aca-a64f-18d4ad86b83b/',
    imageAlt: 'ASUS ProArt P16 laptop', majors: ['creative','engineering'], budget: 'premium', operatingSystems: ['windows'],
    match: 'CREATOR PICK', description: 'A powerful Windows option for visual projects, editing, and demanding creative tools.',
    price: 'Premium', pros: ['High-resolution display options','Dedicated graphics for heavier creative work'], cons: ['Costs more and weighs more than a basic laptop','Powerful components can mean shorter battery life'],
    link: 'https://www.asus.com/us/laptops/for-creators/proart/proart-p16-h7606/'
  },
  {
    name: 'ASUS Vivobook 16', brand: 'ASUS', image: 'https://dlcdnwebimgs.asus.com/gain/72549656-e4c9-4d7b-94a6-f391d3a9e9e6/',
    imageAlt: 'ASUS Vivobook laptop', majors: ['computer','business','humanities','health'], budget: 'student', operatingSystems: ['windows'],
    match: 'CAMPUS FAVORITE', description: 'A roomy Windows laptop for multitasking, spreadsheets, and everyday coursework.',
    price: 'Lower-cost options', pros: ['Large screen helps with split-screen work','Usually offers good everyday value'], cons: ['Less compact for a full backpack','Entry configurations may feel slow under heavy loads'],
    link: 'https://www.asus.com/laptops/for-home/vivobook/'
  },
  {
    name: 'MacBook Neo 13”', brand: 'APPLE', image: 'https://www.apple.com/v/macbook-neo/c/images/meta/macbook_neo__f2p1f7yafjyy_og.png?202609021130',
    imageAlt: 'Apple MacBook Neo 13-inch laptop', majors: ['business','humanities','health'], budget: 'student', operatingSystems: ['mac'],
    match: 'LOWER-COST MAC', description: 'A lighter-cost entry to macOS for notes, research, writing, and everyday classwork.',
    price: 'Lower-cost options', pros: ['Portable for daily campus use','Access to macOS and Apple apps'], cons: ['8 GB memory is fixed','Not a fit for every major-specific app or heavy workload'],
    link: 'https://www.apple.com/macbook-neo/'
  },
  {
    name: 'MacBook Air 15” (M5)', brand: 'APPLE', image: 'https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png?202610261111',
    imageAlt: 'Apple MacBook Air 15-inch laptop', majors: ['business','computer','creative','health','humanities'], budget: 'mid', operatingSystems: ['mac'],
    match: 'LARGER SCREEN', description: 'A bigger screen for split-view research, spreadsheets, creative apps, and long writing sessions.',
    price: 'Midrange', pros: ['More room for documents and side-by-side work','Thin, quiet design for class'], cons: ['Larger footprint in a backpack','Some course software may require Windows'],
    link: 'https://www.apple.com/macbook-air/'
  },
  {
    name: 'MacBook Pro 14”', brand: 'APPLE', image: 'https://www.apple.com/v/macbook-pro/a/images/meta/mbp_splitter__c9bpyxdvy6eu_og.png?202610271513',
    imageAlt: 'Apple MacBook Pro 14-inch laptop', majors: ['computer','engineering','creative'], budget: 'premium', operatingSystems: ['mac'],
    match: 'POWER USER', description: 'A high-performance Mac for video, audio, design, and demanding computing projects.',
    price: 'Premium', pros: ['Built for heavier creative workflows','Sharp display and generous port selection'], cons: ['Costs more than most students need','Some technical programs require Windows'],
    link: 'https://www.apple.com/macbook-pro/'
  },
  {
    name: 'Dell XPS 13', brand: 'DELL', image: 'https://pic.clubic.com/b4124ea32416453/1200x953/smart/dell-xps-13-2026.jpg',
    imageAlt: 'Dell XPS 13 2026 laptop', majors: ['business','computer','humanities','health'], budget: 'student', operatingSystems: ['windows'],
    match: 'COMPACT WINDOWS', description: 'A compact Windows laptop for lecture notes, browsing, and everyday multitasking.',
    price: 'Lower-cost options', pros: ['Small, light design for commuting','Windows compatibility for common campus apps'], cons: ['Base configuration may have only 8 GB RAM; compare upgrades','Fewer ports than larger laptops'],
    link: 'https://www.dell.com/en-us/shop/dell-laptops/new-xps-13-laptop/spd/xps13dx13260laptop'
  },
  {
    name: 'Yoga 7i 2-in-1 14”', brand: 'LENOVO', image: 'https://p1-ofp.static.pub/medias/26220743266_Yoga_7i_2-in-1_14_9_Tidal_Teal_NoFPR_202312140421121739726233834.png',
    imageAlt: 'Lenovo Yoga 7i 14-inch convertible laptop', majors: ['business','creative','humanities','health'], budget: 'mid', operatingSystems: ['windows'],
    match: 'NOTE-TAKING PICK', description: 'A touchscreen convertible for lectures, reading, and handwritten notes with a compatible pen.',
    price: 'Midrange', pros: ['Folds into tablet mode','Touchscreen suits annotation and sketching'], cons: ['Pen may be an extra purchase','Convertible hinge adds some weight'],
    link: 'https://www.lenovo.com/us/en/p/laptops/yoga/yoga-2-in-1-series/len101y0056'
  },
  {
    name: 'Swift Go 14 AI', brand: 'ACER', image: 'https://wi-mesh.com/uploads/images/products-images/laptop_acer_swift_go_14_sfg14_73_57fz.jpg',
    imageAlt: 'Acer Swift Go 14 AI laptop', majors: ['business','computer','creative','humanities'], budget: 'mid', operatingSystems: ['windows'],
    match: 'DISPLAY PICK', description: 'A portable Windows laptop with OLED display options for study and media work.',
    price: 'Midrange', pros: ['OLED configuration options look vivid','Thin-and-light design for carrying to class'], cons: ['Display and battery differ by configuration','Not intended for the heaviest 3D workloads'],
    link: 'https://www.acer.com/us-en/laptops/swift/swift-go-14-16-ai-intel'
  },
  {
    name: 'Framework Laptop 13', brand: 'FRAMEWORK', image: 'https://images.prismic.io/frameworkmarketplace/ae00b100-7bce-40b1-b649-af42665f64d9_Framework-Laptop-13_blog.jpg?auto=compress%2Cformat',
    imageAlt: 'Framework Laptop 13', majors: ['computer','engineering','business'], budget: 'mid', operatingSystems: ['windows','linux'],
    match: 'UPGRADEABLE PICK', description: 'A modular laptop for students who value repairability, upgrades, and OS choice.',
    price: 'Midrange', pros: ['Designed for repair and part upgrades','Official Linux guides are available'], cons: ['DIY editions take setup time','Check Linux distro and kernel support for your exact hardware'],
    link: 'https://frame.work/laptop13'
  },
  {
    name: 'Lemur Pro', brand: 'SYSTEM76', image: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/products/1625/images/2030/lemp14-14in-quarter-white__08793.1784727578.386.513.jpg?c=1',
    imageAlt: 'System76 Lemur Pro laptop', majors: ['computer','engineering','business','humanities'], budget: 'premium', operatingSystems: ['linux'],
    match: 'LINUX PORTABLE', description: 'A Linux-first lightweight laptop for coding, research, and campus commuting.',
    price: 'Premium', pros: ['Linux and Ubuntu options come preconfigured','Lightweight 14-inch and larger 16-inch choices'], cons: ['Costs more than entry-level student laptops','System76 does not support Windows installation'],
    link: 'https://system76.com/laptops/lemur-pro'
  },
  {
    name: 'Darter Pro', brand: 'SYSTEM76', image: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/products/979/images/1690/darp11-14-quarter-min__82183.1766073470.386.513.jpg?c=1',
    imageAlt: 'System76 Darter Pro laptop', majors: ['computer','engineering','creative'], budget: 'premium', operatingSystems: ['linux'],
    match: 'LINUX WORKHORSE', description: 'A larger Linux laptop for development, multitasking, and projects that need more screen space.',
    price: 'Premium', pros: ['Linux comes configured for the hardware','14-inch and 16-inch display choices'], cons: ['Heavier than a basic campus laptop','Up to 8-hour battery claim varies by use'],
    link: 'https://system76.com/laptops/darter-pro'
  },
  {
    name: 'Gazelle', brand: 'SYSTEM76', image: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/products/1225/images/1718/product-gaze20-qrtr-1280-white-popnobootc__74982.1784727633.386.513.jpg?c=1',
    imageAlt: 'System76 Gazelle laptop', majors: ['engineering','creative','computer'], budget: 'premium', operatingSystems: ['linux'],
    match: 'LINUX GRAPHICS', description: 'A larger Linux-first option with dedicated graphics for visual and compute-heavy work.',
    price: 'Premium', pros: ['Dedicated graphics options for demanding projects','Linux drivers are configured by the manufacturer'], cons: ['Heavier and less portable than ultrabooks','Costs more and uses more power'],
    link: 'https://system76.com/laptops/gazelle'
  },
  {
    name: 'Pangolin Pro 16”', brand: 'SYSTEM76', image: 'https://cdn11.bigcommerce.com/s-pywjnxrcr2/products/1572/images/1931/panp16-quarter-right-pop__46543.1776801743.386.513.jpg?c=1',
    imageAlt: 'System76 Pangolin Pro 16-inch laptop', majors: ['computer','engineering','creative'], budget: 'premium', operatingSystems: ['linux'],
    match: 'LINUX CREATOR', description: 'A large-screen Linux laptop for development, engineering projects, and visual work.',
    price: 'Premium', pros: ['Linux and Ubuntu choices','Large 16-inch color display and upgradeable memory'], cons: ['Less convenient to carry every day','Premium price and shorter battery than light laptops'],
    link: 'https://system76.com/laptops/pangolin-pro'
  }
];

const majorInput = document.querySelector('#major-input');
const budgetSelect = document.querySelector('#budget');
const operatingSystemSelect = document.querySelector('#operating-system');
const grid = document.querySelector('#cards-grid');
const count = document.querySelector('#result-count');
const title = document.querySelector('#results-title');
const empty = document.querySelector('#empty-state');
const majors = {
  all: 'Good laptops for college life', business: 'Laptops for business & economics', computer: 'Laptops for computing students',
  engineering: 'Laptops for engineering & architecture', creative: 'Laptops for creative work', health: 'Laptops for health & life sciences', humanities: 'Laptops for humanities & education'
};
const operatingSystemNames = { mac: 'macOS', windows: 'Windows', linux: 'Linux options' };
const majorSuggestions = {
  all: '', business: 'Business & economics', computer: 'Computer science', engineering: 'Engineering & architecture',
  creative: 'Design, film & media', health: 'Health & life sciences', humanities: 'Humanities & social sciences'
};
const majorPatterns = [
  ['business', /business|account|econom|finance|marketing|management|entrepreneur/],
  ['computer', /computer|software|information technology|\bit\b|data science|cyber|programming/],
  ['engineering', /engineer|architect|physics|mathemat/],
  ['creative', /design|film|media|art|animation|photograph|music|communication/],
  ['health', /health|biology|nurs|medical|life science|chemistry|biochem/],
  ['humanities', /humanit|education|history|english|social science|psycholog|sociolog|political|philosoph|language/]
];

function categoryForMajor(majorText) {
  const value = majorText.trim().toLowerCase();
  if (!value) return 'all';
  if (majors[value]) return value;
  return majorPatterns.find(([, pattern]) => pattern.test(value))?.[0] ?? 'custom';
}

function render() {
  const majorText = majorInput.value;
  const major = categoryForMajor(majorText);
  const budget = budgetSelect.value;
  const operatingSystem = operatingSystemSelect.value;
  const filtered = laptops.filter((laptop) => (major === 'all' || major === 'custom' || laptop.majors.includes(major)) && (budget === 'any' || laptop.budget === budget) && (operatingSystem === 'any' || laptop.operatingSystems.includes(operatingSystem)));
  title.textContent = major === 'custom' ? `General laptop picks for ${majorText}` : majors[major];
  count.innerHTML = `${filtered.length} ${filtered.length === 1 ? 'PICK' : 'PICKS'} <span>·</span> STARTING POINTS`;
  empty.hidden = filtered.length > 0;
  grid.innerHTML = filtered.map((laptop) => `
    <article class="laptop-card">
      <div class="card-image-wrap"><img class="card-image" src="${laptop.image}" alt="${laptop.imageAlt}" loading="lazy"><span class="match-tag">✦ ${laptop.match}</span></div>
      <div class="card-body"><div class="card-meta">${laptop.brand} · ${laptop.majors.map((majorKey) => majorKey === 'computer' ? 'COMPUTING' : majorKey.toUpperCase()).slice(0,2).join(' / ')}</div><div class="system-label">${laptop.operatingSystems.map((system) => operatingSystemNames[system]).join(' · ')}</div>
        <h3>${laptop.name}</h3><p class="card-desc">${laptop.description}</p><div class="price-hint"><b>${laptop.price}</b> · Compare configurations</div>
        <div class="pros-cons"><div class="pro"><span>＋</span>${laptop.pros[0]}</div><div class="pro"><span>＋</span>${laptop.pros[1]}</div><div class="con"><span>−</span>${laptop.cons[0]}</div></div>
        <a class="card-link" href="${laptop.link}" target="_blank" rel="noopener noreferrer">Explore at ${laptop.brand} <span>↗</span></a></div>
    </article>`).join('');
}

document.querySelector('#find-button').addEventListener('click', () => {
  render();
  document.querySelector('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach((item) => item.classList.remove('active'));
  chip.classList.add('active');
  majorInput.value = majorSuggestions[chip.dataset.filter] ?? '';
  render();
}));
majorInput.addEventListener('input', () => {
  const category = categoryForMajor(majorInput.value);
  document.querySelectorAll('.chip').forEach((chip) => chip.classList.toggle('active', chip.dataset.filter === category || (category === 'custom' && chip.dataset.filter === 'all')));
});
render();

const themeToggle = document.querySelector('#theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
  try { localStorage.setItem('major-match-theme', theme); } catch { /* Storage may be disabled by the browser. */ }
}
setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
themeToggle.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});
