// PHOTOVIEW POS — Core App v2.2
// © ethrohan

const translations = {
  // Sidebar & Topbar
  nav_dashboard: { en: 'Dashboard', bn: 'হোম🏪 PHOTOVIEW' },
  nav_sales: { en: 'Sales', bn: 'বিক্রয়' },
  nav_purchase: { en: 'Purchase', bn: 'অ্যাড ক্রয়' },
  nav_purch_list: { en: 'Purchase List', bn: 'ক্রয় তালিকা' },
  nav_contacts: { en: 'Contacts', bn: 'কন্টাক্ট' },
  nav_staff: { en: 'Staff', bn: 'স্টাফ' },
  nav_inventory: { en: 'Inventory', bn: 'মালামাল' },
  nav_returns: { en: 'Returns', bn: 'রিটার্ন' },
  nav_expenses: { en: 'Expenses', bn: 'খরচ' },
  nav_reports: { en: 'Reports', bn: 'রিপোর্ট' },
  nav_settings: { en: 'Settings', bn: 'সেটিংস' },
  logout: { en: 'Logout', bn: 'লগআউট' },
  
  // Submenus
  nav_add_sale: { en: '+ Add Sale', bn: '+ অ্যাড সেল' },
  nav_sales_list: { en: 'Sales List', bn: 'সেলস তালিকা' },
  nav_quotation: { en: 'Quotation', bn: 'কোটেশন' },
  nav_customer_list: { en: 'Customer List', bn: 'কাস্টমার তালিকা' },
  nav_supplier_list: { en: 'Supplier List', bn: 'সাপ্লাইয়ার তালিকা' },
  nav_add_purchase: { en: '+ Add Purchase', bn: '+ অ্যাড ক্রয়' },
  nav_sales_return: { en: 'Sales Return', bn: 'বিক্রয় রিটার্ন' },
  nav_purch_return: { en: 'Purchase Return', bn: 'ক্রয় রিটার্ন' },
  nav_categories: { en: 'Categories', bn: 'ক্যাটাগরি' },
  nav_brands: { en: 'Brands', bn: 'ব্র্যান্ড' },
  nav_units: { en: 'Units', bn: 'ইউনিট' },
  nav_taxes: { en: 'Taxes', bn: 'ট্যাক্স' },
  msg_btn: { en: '💬 Message', bn: '💬 মেসেজ' },
  logout_btn: { en: '⏻ Logout', bn: '⏻ লগআউট' },
  coming_soon: { en: 'Coming Soon!', bn: 'শীঘ্রই আসছে!' },
  version_pro: { en: 'Version 2.0.1 — Pro', bn: 'ভার্সন ২.০.১ — প্রো' },
  data_loading: { en: 'Loading data...', bn: 'ডেটা লোড হচ্ছে...' },
  
  // Page Titles
  title_dashboard: { en: 'Dashboard', bn: 'ড্যাশবোর্ড' },
  title_purchase: { en: 'Add Purchase', bn: 'অ্যাড ক্রয়' },
  title_purchase_list: { en: 'Purchase List', bn: 'ক্রয় তালিকা' },
  title_sales: { en: 'Sales List', bn: 'বিক্রয় তালিকা' },
  title_add_sale: { en: 'New Sale', bn: 'নতুন বিক্রয়' },
  title_customers: { en: 'Customers', bn: 'কাস্টমার' },
  title_suppliers: { en: 'Suppliers', bn: 'সাপ্লাইয়ার' },
  title_expenses: { en: 'Expenses', bn: 'খরচ' },
  title_reports: { en: 'Reports', bn: 'রিপোর্ট' },
  title_returns: { en: 'Returns', bn: 'রিটার্ন' },
  title_staff: { en: 'Staff', bn: 'স্টাফ' },
  title_settings: { en: 'Settings', bn: 'সেটিংস' },
  
  // Common UI
  save: { en: 'Save', bn: 'সেভ' },
  reset: { en: 'Reset', bn: 'রিসেট' },
  close: { en: 'Close', bn: 'বন্ধ' },
  total: { en: 'Total', bn: 'মোট' },
  subtotal: { en: 'Subtotal', bn: 'সাবটোটাল' },
  paid: { en: 'Paid', bn: 'পরিশোধ' },
  due: { en: 'Due', bn: 'বাকি' },
  discount: { en: 'Discount', bn: 'ডিসকাউন্ট' },
  status: { en: 'Status', bn: 'স্ট্যাটাস' },
  action: { en: 'Action', bn: 'অ্যাকশন' },
  date: { en: 'Date', bn: 'তারিখ' },
  search: { en: 'Search...', bn: 'সার্চ করুন...' },
  invoice: { en: 'Invoice', bn: 'ইনভয়েস' },
  supplier: { en: 'Supplier', bn: 'সাপ্লাইয়ার' },
  customer: { en: 'Customer', bn: 'কাস্টমার' },
  qty: { en: 'Qty', bn: 'পরিমাণ' },
  
  // Dashboard
  dashboard_title: { en: '📊 Dashboard', bn: '📊 ড্যাশবোর্ড' },
  dashboard_sub: { en: 'View your business overview at a glance', bn: 'আপনার ব্যবসার সামগ্রিক অবস্থা এক নজরে দেখুন' },
  stat_total_items: { en: 'Total Items', bn: 'মোট আইটেম' },
  stat_in_inventory: { en: 'In Inventory', bn: 'ইনভেন্টরিতে' },
  stat_today_sales: { en: 'Today\'s Sales', bn: 'আজকের বিক্রয়' },
  stat_invoice: { en: 'Invoice:', bn: 'ইনভয়েস:' },
  stat_month_sales: { en: 'This Month\'s Sales', bn: 'এই মাসের বিক্রয়' },
  stat_total_due: { en: 'Total Due', bn: 'মোট বকেয়া' },
  stat_from_customers: { en: 'From Customers', bn: 'গ্রাহকদের থেকে' },
  stat_total_customers: { en: 'Total Customers', bn: 'মোট গ্রাহক' },
  stat_registered: { en: 'Registered', bn: 'নিবন্ধিত' },
  quick_actions: { en: 'Quick Actions', bn: 'দ্রুত অ্যাকশন' },
  shortcuts: { en: '⚡ Shortcuts', bn: '⚡ শর্টকাট' },
  new_sale: { en: '🛒 New Sale', bn: '🛒 নতুন বিক্রয়' },
  add_item: { en: '📦 Add Item', bn: '📦 আইটেম যোগ' },
  sales_list: { en: '📋 Sales List', bn: '📋 বিক্রয় তালিকা' },
  chart_title: { en: 'Last 7 Days Sales', bn: 'সর্বশেষ ৭ দিনের বিক্রয়' },
  recent_sales: { en: 'Recent Sales', bn: 'সাম্প্রতিক বিক্রয়' },
  no_sales: { en: 'No sales found.', bn: 'কোনো বিক্রয় নেই।' },
  stock_alert: { en: 'Stock Alert (Low)', bn: 'স্টক সতর্কতা (কম স্টক)' },
  all_good: { en: 'All good! No items are low on stock.', bn: 'সবকিছু ঠিক আছে! কোনো আইটেমের স্টক কম নেই।' },
  paid_status: { en: 'Paid', bn: 'পরিশোধিত' },
  item: { en: 'Item', bn: 'আইটেম' },
  code: { en: 'Code', bn: 'কোড' },
  stock: { en: 'Stock', bn: 'মজুদ' },
  alert: { en: 'Alert', bn: 'সতর্কতা' }
};

let currentLang = localStorage.getItem('cb_lang') || 'bn';
let isDarkTheme = localStorage.getItem('cb_theme') === 'dark';

function t(key) {
  if (!translations[key]) return key;
  return translations[key][currentLang] || translations[key]['bn'];
}

function toggleLanguage() {
  currentLang = currentLang === 'bn' ? 'en' : 'bn';
  localStorage.setItem('cb_lang', currentLang);
  location.reload(); // Reload to apply everywhere simply
}

function toggleTheme() {
  isDarkTheme = !isDarkTheme;
  localStorage.setItem('cb_theme', isDarkTheme ? 'dark' : 'light');
  applyTheme();
}

function applyTheme() {
  if (isDarkTheme) document.documentElement.setAttribute('data-theme', 'dark');
  else document.documentElement.removeAttribute('data-theme');
}

// Initial Theme Apply
applyTheme();

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][currentLang]) {
      if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
        el.setAttribute('placeholder', translations[key][currentLang]);
      } else {
        el.textContent = translations[key][currentLang];
      }
    }
  });
}

const DB = {
  get(k,def=[]){ try{const v=localStorage.getItem('PHOTOVIEW_'+k);return v?JSON.parse(v):def;}catch(e){return def;} },
  set(k,v){ localStorage.setItem('PHOTOVIEW_'+k,JSON.stringify(v)); if(window.syncToFirestore) syncToFirestore(k,v); },
  getOne(k,def){ try{const v=localStorage.getItem('PHOTOVIEW_'+k);return v!==null?JSON.parse(v):def;}catch(e){return def;} },
  setOne(k,v){ localStorage.setItem('PHOTOVIEW_'+k,JSON.stringify(v)); if(window.syncToFirestore) syncToFirestore(k,v); },
};

const Store = {
  items()        { return DB.get('items'); },
  saveItems(d)   { DB.set('items',d); },
  sales()        { return DB.get('sales'); },
  saveSales(d)   { DB.set('sales',d); },
  purchases()    { return DB.get('purchases'); },
  savePurch(d)   { DB.set('purchases',d); },
  returns()      { return DB.get('returns'); },
  saveReturns(d) { DB.set('returns',d); },
  customers()    { return DB.get('customers'); },
  saveCustomers(d){ DB.set('customers',d); },
  suppliers()    { return DB.get('suppliers'); },
  saveSuppliers(d){ DB.set('suppliers',d); },
  saveSupp(d)     { DB.set('suppliers',d); },
  saveCust(d)     { DB.set('customers',d); },
  staff()        { return DB.get('staff'); },
  saveStaff(d)   { DB.set('staff',d); },
  expenses()     { return DB.get('expenses'); },
  saveExpenses(d){ DB.set('expenses',d); },
  expCats()      { return DB.get('exp_cats',['দোকান ভাড়া','বিদ্যুৎ বিল','পরিবহন','খাবার','অন্যান্য']); },
  saveExpCats(d) { DB.set('exp_cats',d); },
  categories()   { return DB.get('categories',['ইলেকট্রনিক্স','পোশাক','খাদ্যপণ্য','গৃহস্থালি','অন্যান্য']); },
  saveCategories(d){ DB.set('categories',d); },
  brands()       { return DB.get('brands',['Samsung','Nokia','Walton','RFL','অন্যান্য']); },
  saveBrands(d)  { DB.set('brands',d); },
  units()        { return DB.get('units',['পিস','কেজি','লিটার','বক্স','ডজন','গজ']); },
  saveUnits(d)   { DB.set('units',d); },
  taxes()        { return DB.get('taxes',[]); },
  saveTaxes(d)   { DB.set('taxes',d); },
  quotations()   { return DB.get('quotations'); },
  saveQuotations(d){ DB.set('quotations',d); },
  saleDelLog()   { return DB.get('sale_del_log'); },
  saveDelLog(d)  { DB.set('sale_del_log',d); },
  nextInvoice()  { const n=DB.getOne('next_invoice',10001); DB.setOne('next_invoice',n+1); return n; },
  peekInvoice()  { return DB.getOne('next_invoice',10001); },
  nextPurchInv() { const n=DB.getOne('next_purch_inv',50001); DB.setOne('next_purch_inv',n+1); return n; },
  peekPurchInv() { return DB.getOne('next_purch_inv',50001); },
  nextBarcode()  { const n=DB.getOne('next_barcode',1777900342446); DB.setOne('next_barcode',n+1); return n.toString(); },
  peekBarcode()  { return DB.getOne('next_barcode',1777900342446).toString(); },
  shopName()     { return DB.getOne('shop_name','PHOTOVIEW'); },
  shopAddr()     { return DB.getOne('shop_addr','Address - Abdur Sabur Market, College Road, Sitakunda, Chittagong.'); },
  shopPhone()    { return DB.getOne('shop_phone','01829351313'); },
};

function fmt(n)    { return '৳'+Math.round(n).toLocaleString('en-IN'); }
function fmtNum(n) { return Math.round(n).toLocaleString('en-IN'); }
function fmtDate(d){ if(!d) return '-'; const p=d.split('-'); return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:d; }
function todayStr(){ return new Date().toISOString().split('T')[0]; }
function uid()     { return Date.now().toString(36)+Math.random().toString(36).substr(2,5); }

function showToast(msg, type='success') {
  let c=document.querySelector('.toast-container');
  if(!c){ c=document.createElement('div'); c.className='toast-container'; document.body.appendChild(c); }
  const icons={success:'✅',error:'❌',warning:'⚠️'};
  const t=document.createElement('div'); t.className='toast '+type;
  t.innerHTML='<span>'+(icons[type]||'📌')+'</span><span>'+msg+'</span>';
  c.appendChild(t);
  setTimeout(function(){ t.style.opacity='0'; setTimeout(function(){ t.remove(); },300); },3000);
}

function openModal(id)  { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function sidebarHTML(activePage) {
  var menu = [
    { icon:'🏠', label: t('nav_dashboard'), page:'dashboard', href:'dashboard.html' },
    { icon:'💰', label: t('nav_sales'), children:[
      { label: t('nav_add_sale'), page:'add-sale', href:'add-sale.html' },
      { label: t('nav_sales_list'), page:'sales', href:'sales.html' },
      { label: t('nav_quotation'), page:'quotation', href:'quotation.html' },
    ]},
    { icon:'📞', label: t('nav_contacts'), children:[
      { label: t('nav_customer_list'), page:'customers', href:'customers.html' },
      { label: t('nav_supplier_list'), page:'suppliers', href:'suppliers.html' },
    ]},
    { icon:'👨‍💼', label: t('nav_staff'), page:'staff', href:'staff.html' },
    { icon:'🛍️', label: t('nav_inventory'), children:[
      { label: t('nav_add_purchase'), page:'purchase', href:'purchase.html' },
      { label: t('nav_purchase_list'), page:'purchase-list', href:'purchase-list.html' },
      { label: '📦 ' + t('add_item'), page:'items', href:'items.html' },
    ]},
    { icon:'↩️', label: t('nav_returns'), children:[
      { label: t('nav_sales_return'), page:'add-return', href:'returns.html' },
      { label: t('nav_purch_return'), page:'purch-return', href:'returns.html' },
    ]},
    { icon:'⚙️', label: t('nav_settings'), children:[
      { label: t('nav_categories'), page:'categories', href:'categories.html' },
      { label: t('nav_brands'), page:'brands', href:'categories.html' },
      { label: t('nav_units'), page:'units', href:'categories.html' },
      { label: t('nav_taxes'), page:'taxes', href:'categories.html' },
    ]},
    { icon:'💸', label: t('nav_expenses'), page:'expenses', href:'expenses.html' },
    { icon:'📊', label: t('nav_reports'), children:[
      { label: '📊 ' + t('nav_reports'), page:'reports', href:'reports.html' },
      { label: '📑 বিস্তারিত রিপোর্ট', page:'detailed-reports', href:'detailed-reports.html' },
    ]},
  ];

  var navHTML = '';
  for (var i=0; i<menu.length; i++) {
    var m = menu[i];
    if (m.children) {
      var isOpen = false;
      for (var j=0; j<m.children.length; j++) {
        if (m.children[j].page === activePage) { isOpen = true; break; }
      }
      var subLinks = '';
      for (var k=0; k<m.children.length; k++) {
        var c = m.children[k];
        subLinks += '<a href="'+c.href+'" class="nav-item'+(c.page===activePage?' active':'')+'">'+c.label+'</a>';
      }
      navHTML += '<div class="nav-item has-children'+(isOpen?' open':'')+'" onclick="var s=this.nextElementSibling;s.classList.toggle(\'open\');this.classList.toggle(\'open\');">';
      navHTML += '<span class="icon">'+m.icon+'</span><span>'+m.label+'</span><span class="arrow">›</span></div>';
      navHTML += '<div class="nav-sub'+(isOpen?' open':'')+'">'+subLinks+'</div>';
    } else {
      navHTML += '<a href="'+m.href+'" class="nav-item'+(m.page===activePage?' active':'')+'"><span class="icon">'+m.icon+'</span><span>'+m.label+'</span></a>';
    }
  }

  return '<div id="sidebar-backdrop" class="sidebar-backdrop"></div>'
    + '<aside class="sidebar" id="sidebar">'
    + '<div class="sidebar-brand"><h2>🏪 PHOTOVIEW</h2></div>'
    + '<nav class="sidebar-nav">'+navHTML+'</nav>'
    + '<div class="sidebar-version">'+t('version_pro')+'<br><span class="dev-credit">DEVELOPED BY ethrohan</span><br><span class="dev-phone"><a href="tel:01301693237">📞 01301693237</a></span></div>'
    + '<div class="sidebar-footer">'
    + '<button class="btn-msg" onclick="alert(\''+t('coming_soon')+'\')">'+t('msg_btn')+'</button>'
    + '<button class="btn-pwr" onclick="localStorage.removeItem(\'cb_unlocked\');location.href=\'index.html\'">'+t('logout_btn')+'</button>'
    + '</div></aside>';
}

function topbarHTML(title, pageName) {
  const themeIcon = isDarkTheme ? '☀️' : '🌙';
  const langLabel = currentLang === 'bn' ? 'EN' : 'BN';
  const displayTitle = translations['title_' + pageName] ? t('title_' + pageName) : title;
  
  return '<div class="topbar">'
    + '<div style="display:flex;align-items:center;gap:12px;">'
    + '<button class="menu-toggle" onclick="document.getElementById(\'sidebar\').classList.toggle(\'open\');">☰</button>'
    + '<span class="topbar-title">'+displayTitle+'</span>'
    + '</div>'
    + '<div style="display:flex;align-items:center;gap:10px;">'
    + '<button class="btn btn-outline btn-sm" onclick="toggleLanguage()" title="Change Language" style="padding:4px 8px;font-size:12px;">🌐 '+langLabel+'</button>'
    + '<button class="icon-btn" onclick="toggleTheme()" title="Toggle Theme" style="cursor:pointer;background:none;border:none;font-size:18px;">'+themeIcon+'</button>'
    + '<button class="icon-btn" title="নোটিফিকেশন" style="cursor:pointer;background:none;border:none;font-size:18px;">🔔</button>'
    + '<button class="icon-btn" title="সেটিংস" onclick="location.href=\'categories.html\'" style="cursor:pointer;background:none;border:none;font-size:18px;">⚙️</button>'
    + '</div></div>';
}

function bottomBarHTML() {
  return '<div class="bottom-bar">'
    + '<a href="add-sale.html" class="bb-item"><span>🛒</span><span>'+t('nav_sales')+'</span></a>'
    + '<a href="purchase.html" class="bb-item"><span>📦</span><span>'+t('nav_purchase')+'</span></a>'
    + '<a href="expenses.html" class="bb-item"><span>💸</span><span>'+t('nav_expenses')+'</span></a>'
    + '<a href="returns.html" class="bb-item"><span>↩️</span><span>'+t('nav_returns')+'</span></a>'
    + '<a href="reports.html" class="bb-item"><span>📊</span><span>'+t('nav_reports')+'</span></a>'
    + '</div>';
}

function initPage(pageName, pageTitle) {
  var body = document.body;

  // Session guard
  if (!localStorage.getItem('cb_unlocked')) {
    location.replace('index.html');
    return;
  }

  let layoutBuilt = false;
  function buildLayout() {
    if (layoutBuilt) return;
    layoutBuilt = true;
    
    var loader = document.getElementById('cb-fs-loader');
    if (loader) loader.remove();

    body.insertAdjacentHTML('afterbegin', sidebarHTML(pageName));

    var mainDiv = body.querySelector('.main');
    if (mainDiv) {
      mainDiv.insertAdjacentHTML('afterbegin', topbarHTML(pageTitle, pageName));
      mainDiv.insertAdjacentHTML('beforeend', bottomBarHTML());
    }

    var bd = document.getElementById('sidebar-backdrop');
    if (bd) bd.addEventListener('click', function(){ document.getElementById('sidebar').classList.remove('open'); });

    // document.querySelectorAll('.modal-overlay').forEach(function(m){
    //   m.addEventListener('click', function(e){ if(e.target===m) closeModal(m.id); });
    // });

    if (typeof window._pageInit === 'function') window._pageInit();
    applyTranslations();
  }

  // Loading overlay
  var loader = document.createElement('div');
  loader.id = 'cb-fs-loader';
  loader.style.cssText = 'position:fixed;inset:0;background:var(--bg);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font-family:Inter,sans-serif;';
  loader.innerHTML = '<style>@keyframes cb-spin{to{transform:rotate(360deg)}}</style>'
    + '<div style="width:42px;height:42px;border:4px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:cb-spin .7s linear infinite;"></div>'
    + '<div style="font-size:15px;font-weight:700;color:var(--text);">PHOTOVIEW</div>'
    + '<div style="font-size:12px;color:var(--muted);">'+t('data_loading')+'</div>';
  body.appendChild(loader);

  if (window.syncFromFirestore) {
    window.syncFromFirestore().then(buildLayout).catch(function(){ buildLayout(); });
  } else {
    setTimeout(buildLayout, 0);
  }
}
