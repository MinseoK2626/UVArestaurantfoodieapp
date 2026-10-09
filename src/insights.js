export const statusLabels={green:'Recommended',yellow:'Mixed reviews',red:'Think twice'};
export function analyzeRestaurant(restaurant){
 const dimensions={};
 for(const dimension of ['food','service','value']){
  const signals=restaurant.reviews.map(r=>r.signals[dimension]).filter(s=>[-1,0,1].includes(s));
  const negative=signals.filter(s=>s<0).length,positive=signals.filter(s=>s>0).length;
  dimensions[dimension]={status:signals.length===0?'yellow':negative/signals.length>=.5?'red':negative>0||positive/signals.length<.6?'yellow':'green',positive,negative,total:signals.length};
 }
 const concerns=Object.values(dimensions).filter(d=>d.status==='red').length;
 const status=concerns>=2?'red':Object.values(dimensions).every(d=>d.status==='green')?'green':'yellow';
 const praise=Object.entries(dimensions).filter(([,d])=>d.status==='green').map(([k])=>k);
 const issues=Object.entries(dimensions).filter(([,d])=>d.negative>0).map(([k])=>k);
 const explanation=status==='green'?'Customers consistently praise the food, friendly service, and value. Positive themes repeat across the demo reviews.':status==='red'?'Repeated concerns about food quality, slow or incorrect service, and value make this a less reliable choice in the demo reviews.':`Customers ${praise.length?'praise '+praise.join(' and '):'share mixed experiences'}, but recurring concerns about ${issues.join(' and ')||'consistency'} keep the recommendation mixed.`;
 return {status,dimensions,explanation};
}
