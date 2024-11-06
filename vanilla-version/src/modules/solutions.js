const solutions = [
  {
    icon: 'network',
    title: 'OTOPON',
    description: 'Huawei marka OLT cihazlarını yönetmek için geliştirilmiş kapsamlı bir yazılımdır.'
  },
  {
    icon: 'users',
    title: 'RATINGS',
    description: 'Müşterilere anket SMS göndererek geri bildirim toplar ve istatistikler oluşturur.'
  },
  {
    icon: 'chart',
    title: 'ONLINE TAKİP',
    description: 'İnternet servis sağlayıcıları için anlık olarak abone takibi yapma imkanı sunar.'
  },
  {
    icon: 'car',
    title: 'OTO SERVİS',
    description: 'Servise gelen araçların takibini kolaylaştırır.'
  },
  {
    icon: 'truck',
    title: 'LOJİSTİK TAKİP',
    description: 'Lojistik süreçlerinizi etkili bir şekilde izlemek ve yönetmek için tasarlanmış yazılım.'
  },
  {
    icon: 'clipboard',
    title: 'DENEBUNU PANEL',
    description: 'Müşteri geri bildirimlerini panelde görüntülemenize ve analiz etmenize olanak tanır.'
  }
];

export function initSolutions() {
  const solutionsGrid = document.querySelector('.solutions-grid');
  
  solutions.forEach(solution => {
    const solutionElement = document.createElement('div');
    solutionElement.className = 'solution-card';
    solutionElement.innerHTML = `
      <div class="solution-icon ${solution.icon}"></div>
      <h3>${solution.title}</h3>
      <p>${solution.description}</p>
    `;
    solutionsGrid.appendChild(solutionElement);
  });
}