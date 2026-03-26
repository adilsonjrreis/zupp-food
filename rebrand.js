const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      if (!file.includes('node_modules') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) {
        results.push(file);
      }
    }
  });
  return results;
}

const colorMap = {
  'bg-rose-600': 'bg-sky-500',
  'text-rose-600': 'text-sky-500',
  'border-rose-600': 'border-sky-500',
  'border-rose-500': 'border-sky-500',
  'bg-rose-100': 'bg-sky-100',
  'text-rose-700': 'text-sky-700',
  'text-rose-100': 'text-sky-100',
  'border-rose-200': 'border-sky-200',
  '#e11d48': '#0ea5e9' // Rose-600 HEX to Sky-500 HEX
};

const mapRegex = new RegExp(Object.keys(colorMap).join('|'), 'g');

const files = walk('./src');
files.push('./package.json');
files.push('./app.json');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.match(mapRegex)) {
    content = content.replace(mapRegex, matched => colorMap[matched]);
    changed = true;
  }

  // Handle specific text replacements
  if (file.includes('SplashScreen.tsx') && content.includes('FoodApp')) {
    content = content.replace('FoodApp', 'Zupp');
    changed = true;
  }
  
  if (file.includes('package.json') && content.includes('"name": "fooddeliveryexpo"')) {
    content = content.replace('"name": "fooddeliveryexpo"', '"name": "zupp"');
    changed = true;
  }
  
  if (file.includes('app.json')) {
    if (content.includes('"name": "FoodDeliveryExpo"')) {
      content = content.replace('"name": "FoodDeliveryExpo"', '"name": "Zupp"');
      changed = true;
    }
    if (content.includes('"slug": "FoodDeliveryExpo"')) {
      content = content.replace('"slug": "FoodDeliveryExpo"', '"slug": "Zupp"');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Rebranded', file);
  }
});
